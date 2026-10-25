'use client'

import { useEffect, useRef } from 'react'

/**
 * Full-viewport animated particle field.
 * - 500–600 particles on capable desktops.
 * - Larger particles with faster, smooth movement.
 * - Reduced particle count on tablets and mobile.
 * - DPR capped at 2 for performance.
 * - Pauses when the tab is hidden.
 * - Respects prefers-reduced-motion.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    const PALETTE: Array<[number, number, number, number]> = [
      [194, 230, 40, 0.9],
      [140, 200, 90, 0.72],
      [80, 130, 80, 0.6],
      [160, 170, 160, 0.4],
    ]

    const COLOR_WEIGHTS = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 3]
    const ALPHA_LEVELS = 8

    const colorCache: string[] = []

    for (let ci = 0; ci < PALETTE.length; ci++) {
      const [r, g, b, baseA] = PALETTE[ci]

      for (let lvl = 0; lvl < ALPHA_LEVELS; lvl++) {
        const a = baseA * ((lvl + 0.5) / ALPHA_LEVELS) * 0.6

        colorCache[ci * ALPHA_LEVELS + lvl] =
          `rgb(${r} ${g} ${b} / ${a.toFixed(3)})`
      }
    }

    const FLOATS_PER = 7

    let buf: Float64Array | null = null
    let drawOrder: Uint16Array | null = null
    let drawKeys: Uint8Array | null = null

    let count = 0
    let width = 0
    let height = 0
    let raf = 0
    let running = false
    let resizeTimer = 0

    // function desiredCount(area: number, viewportWidth: number): number {
    //   if (viewportWidth <= 640) {
    //     return Math.round(Math.min(90, area / 6000))
    //   }

    //   if (viewportWidth <= 1024) {
    //     return Math.round(Math.min(180, area / 9000))
    //   }

    //   return Math.round(Math.max(280, Math.min(600, area / 2800)))
    // }
    function desiredCount(area: number, viewportWidth: number): number {
      if (viewportWidth <= 640) {
        return Math.round(Math.min(25, area / 18000))
      }

      if (viewportWidth <= 1024) {
        return Math.round(Math.min(50, area / 25000))
      }

      return Math.round(Math.max(70, Math.min(120, area / 12000)))
    }

    const cv = canvas
    const g2 = ctx

    function seed() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      width = window.innerWidth
      height = window.innerHeight

      cv.width = Math.round(width * dpr)
      cv.height = Math.round(height * dpr)

      cv.style.width = `${width}px`
      cv.style.height = `${height}px`

      g2.setTransform(dpr, 0, 0, dpr, 0, 0)

      count = desiredCount(width * height, width)
      buf = new Float64Array(count * FLOATS_PER)

      for (let i = 0; i < count; i++) {
        const o = i * FLOATS_PER

        buf[o] = Math.random() * width
        buf[o + 1] = Math.random() * height

        // Faster horizontal and vertical movement.
        buf[o + 2] = (Math.random() - 0.5) * 0.7
        buf[o + 3] = (Math.random() - 0.5) * 0.6

        // Larger particle sizes.
        buf[o + 4] = 1.5 + Math.random() * 1.5
        // buf[o + 4] = 0.8 + Math.random() * 0.8

        buf[o + 5] = (Math.random() * ALPHA_LEVELS) | 0
        buf[o + 6] = COLOR_WEIGHTS[(Math.random() * COLOR_WEIGHTS.length) | 0]
      }

      drawOrder = new Uint16Array(count)
      drawKeys = new Uint8Array(count)

      for (let i = 0; i < count; i++) {
        drawOrder[i] = i
      }

      const keyOf = (i: number) =>
        buf![i * FLOATS_PER + 6] * ALPHA_LEVELS + buf![i * FLOATS_PER + 5]

      const orderSlots = Array.from(drawOrder)

      orderSlots.sort((a, b) => keyOf(a) - keyOf(b))

      for (let s = 0; s < count; s++) {
        drawOrder[s] = orderSlots[s]
        drawKeys[s] = keyOf(orderSlots[s])
      }
    }

    function draw() {
      g2.clearRect(0, 0, width, height)

      const data = buf!
      const order = drawOrder!
      const keys = drawKeys!

      let ci = -1
      let lvl = -1

      for (let s = 0; s < count; s++) {
        const k = keys[s]
        const nextCi = (k / ALPHA_LEVELS) | 0
        const nextLvl = k % ALPHA_LEVELS

        if (nextCi !== ci || nextLvl !== lvl) {
          ci = nextCi
          lvl = nextLvl
          g2.fillStyle = colorCache[ci * ALPHA_LEVELS + lvl]
        }

        const o = order[s] * FLOATS_PER

        // g2.beginPath()
        // g2.arc(data[o], data[o + 1], data[o + 4], 0, Math.PI * 2)
        // g2.fill()
        const x = data[o]
        const y = data[o + 1]
        const r = data[o + 4]

        g2.beginPath()
        g2.moveTo(x, y - r * 1.5)
        g2.lineTo(x + r, y)
        g2.lineTo(x, y + r * 1.5)
        g2.lineTo(x - r, y)
        g2.closePath()
        g2.fill()
      }
    }

    function loop() {
      if (!running) return

      const data = buf!

      for (let i = 0; i < count; i++) {
        const o = i * FLOATS_PER

        data[o] += data[o + 2]
        data[o + 1] += data[o + 3]

        if (data[o] < -5) data[o] = width + 5
        else if (data[o] > width + 5) data[o] = -5

        if (data[o + 1] < -5) data[o + 1] = height + 5
        else if (data[o + 1] > height + 5) data[o + 1] = -5
      }

      draw()
      raf = requestAnimationFrame(loop)
    }

    function start() {
      if (running || reduced || document.hidden) return

      running = true
      raf = requestAnimationFrame(loop)
    }

    function stop() {
      running = false
      cancelAnimationFrame(raf)
    }

    function onResize() {
      window.clearTimeout(resizeTimer)

      resizeTimer = window.setTimeout(() => {
        seed()
        draw()
      }, 150)
    }

    function onVisibility() {
      if (document.hidden) stop()
      else start()
    }

    seed()

    if (reduced) {
      draw()
    } else {
      start()

      window.addEventListener('resize', onResize)
      document.addEventListener('visibilitychange', onVisibility)
    }

    return () => {
      stop()

      window.clearTimeout(resizeTimer)

      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden='true'
      className='pointer-events-none fixed inset-0 z-[1]'
    />
  )
}
