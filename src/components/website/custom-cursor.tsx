'use client'

import { useEffect, useRef } from 'react'

const SEGMENTS = 18

const CustomCursor = () => {
  const segmentsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const positions = Array.from({ length: SEGMENTS }, () => ({
      x: -100,
      y: -100,
    }))

    let mouseX = -100
    let mouseY = -100
    let frameId = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      positions[0].x += (mouseX - positions[0].x) * 0.45
      positions[0].y += (mouseY - positions[0].y) * 0.45

      for (let i = 1; i < SEGMENTS; i++) {
        positions[i].x += (positions[i - 1].x - positions[i].x) * 0.35
        positions[i].y += (positions[i - 1].y - positions[i].y) * 0.35
      }

      segmentsRef.current.forEach((segment, i) => {
        if (!segment) return

        const scale = 1 - (i / SEGMENTS) * 0.85

        segment.style.transform = `translate3d(
          ${positions[i].x - 4 * scale}px,
          ${positions[i].y - 4 * scale}px,
          0
        ) scale(${scale})`

        segment.style.opacity = String(1 - (i / SEGMENTS) * 0.9)
      })

      frameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    frameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <div className='pointer-events-none fixed inset-0 z-[9999] hidden md:block'>
      {Array.from({ length: SEGMENTS }, (_, i) => (
        <div
          key={i}
          ref={(el) => {
            segmentsRef.current[i] = el
          }}
          className='absolute left-0 top-0 h-2 w-2 rounded-full bg-cyan-400'
          style={{
            opacity: 0,
            boxShadow: `0 0 ${14 - i * 0.5}px rgba(6,182,212,${0.7 - i * 0.025})`,
            willChange: 'transform',
          }}
        />
      ))}
    </div>
  )
}

export default CustomCursor
// /
// 'use client'

// import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: -100, y: -100 })

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setPosition({ x: e.clientX, y: e.clientY })
//     }

//     window.addEventListener('mousemove', handleMouseMove)

//     return () => window.removeEventListener('mousemove', handleMouseMove)
//   }, [])

//   return (
//     <div className="pointer-events-none fixed inset-0 z-[9999] hidden md:block">
//       {/* Soft ambient glow */}
//       <motion.div
//         className="absolute h-20 w-20 rounded-full bg-blue-500/[0.08] blur-2xl"
//         animate={{ x: position.x - 40, y: position.y - 40 }}
//         transition={{ type: 'spring', stiffness: 100, damping: 25 }}
//       />

//       {/* Elegant outer ring */}
//       <motion.div
//         className="absolute h-9 w-9 rounded-full border border-blue-400/50"
//         animate={{ x: position.x - 18, y: position.y - 18 }}
//         transition={{ type: 'spring', stiffness: 180, damping: 24 }}
//       />

//       {/* Inner accent ring */}
//       <motion.div
//         className="absolute h-3 w-3 rounded-full border border-cyan-300/70"
//         animate={{ x: position.x - 6, y: position.y - 6 }}
//         transition={{ type: 'spring', stiffness: 400, damping: 28 }}
//       />

//       {/* Crisp center dot */}
//       <motion.div
//         className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(96,165,250,0.9)]"
//         animate={{ x: position.x - 3, y: position.y - 3 }}
//         transition={{ type: 'spring', stiffness: 700, damping: 35 }}
//       />
//     </div>
//   )
// }

// export default CustomCursor
