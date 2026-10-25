"use client";

import { useEffect, useRef } from "react";

/**
 * Full-viewport canvas particle field.
 * - Single <canvas>, fixed, behind all content, pointer-events: none.
 * - ~500–600 particles on capable desktops, scaled down for tablets/mobile.
 * - DPR capped at 2, rAF-driven, zero per-frame allocations (color strings are
 *   pre-cached), paused while the tab is hidden, single static frame under
 *   prefers-reduced-motion. Cleans up listeners on unmount.
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Palette mostly electric lime / muted green, with a small neutral
    // allowance. Multiply base color alpha by the particle's own alpha level.
    const PALETTE: Array<[number, number, number, number]> = [
      [194, 230, 40, 0.9], // electric lime
      [140, 200, 90, 0.72], // muted green
      [80, 130, 80, 0.6], // deep green
      [160, 170, 160, 0.4], // soft neutral (sparser)
    ];
    // 60% lime, 25% greens, 15% neutral
    const COLOR_WEIGHTS = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 3, 3];
    const ALPHA_LEVELS = 8;

    // Pre-cache every (palette, alpha-level) fillStyle — never built per frame.
    const colorCache: string[] = [];
    for (let ci = 0; ci < PALETTE.length; ci++) {
      const [r, g, b, baseA] = PALETTE[ci];
      for (let lvl = 0; lvl < ALPHA_LEVELS; lvl++) {
        const a = baseA * ((lvl + 0.5) / ALPHA_LEVELS) * 0.6; // cap overall opacity
        colorCache[ci * ALPHA_LEVELS + lvl] = `rgb(${r} ${g} ${b} / ${a.toFixed(3)})`;
      }
    }

    const FLOATS_PER = 7; // x, y, vx, vy, radius, alphaLevel, colorIndex
    let buf: Float64Array | null = null;
    // Draw order permutation grouped by (color, alpha) key, plus the key for
    // each slot in that order — lets `draw()` be a single O(count) pass that
    // only touches fillStyle when the color actually changes.
    let drawOrder: Uint16Array | null = null;
    let drawKeys: Uint8Array | null = null;
    let count = 0;
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = false;
    let resizeTimer = 0;

    function desiredCount(area: number, viewportWidth: number): number {
      // Target the 500–600 range only on capable desktops; scale down elsewhere.
      if (viewportWidth <= 640) return Math.round(Math.min(90, area / 6000)); // phones
      if (viewportWidth <= 1024) return Math.round(Math.min(180, area / 9000)); // tablets
      return Math.round(Math.max(280, Math.min(600, area / 2800)));
    }

    // Hoisted helpers below are only callable after the null guard above.
    const cv = canvas as HTMLCanvasElement;
    const g2 = ctx as CanvasRenderingContext2D;

    function seed() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      cv.width = Math.round(width * dpr);
      cv.height = Math.round(height * dpr);
      cv.style.width = `${width}px`;
      cv.style.height = `${height}px`;
      g2.setTransform(dpr, 0, 0, dpr, 0, 0);

      count = desiredCount(width * height, width);
      buf = new Float64Array(count * FLOATS_PER);
      for (let i = 0; i < count; i++) {
        const o = i * FLOATS_PER;
        buf[o] = Math.random() * width; // x
        buf[o + 1] = Math.random() * height; // y
        buf[o + 2] = (Math.random() - 0.5) * 0.12; // vx — very slow drift
        buf[o + 3] = (Math.random() - 0.5) * 0.1; // vy
        buf[o + 4] = 0.6 + Math.random() * 1.15; // radius
        buf[o + 5] = (Math.random() * ALPHA_LEVELS) | 0; // alpha level
        buf[o + 6] = COLOR_WEIGHTS[(Math.random() * COLOR_WEIGHTS.length) | 0];
      }

      // Build a draw-order permutation sorted by (colorIndex, alphaLevel).
      drawOrder = new Uint16Array(count);
      drawKeys = new Uint8Array(count);
      for (let i = 0; i < count; i++) drawOrder[i] = i;
      const keyOf = (i: number) => buf![i * FLOATS_PER + 6] * ALPHA_LEVELS + buf![i * FLOATS_PER + 5];
      const orderSlots = Array.from(drawOrder);
      orderSlots.sort((a, b) => keyOf(a) - keyOf(b));
      for (let s = 0; s < count; s++) {
        drawOrder[s] = orderSlots[s];
        drawKeys[s] = keyOf(orderSlots[s]);
      }
    }

    function draw() {
      g2.clearRect(0, 0, width, height);
      const data = buf!;
      const order = drawOrder!;
      const keys = drawKeys!;
      let ci = -1;
      let lvl = -1;
      for (let s = 0; s < count; s++) {
        const k = keys[s];
        const nextCi = (k / ALPHA_LEVELS) | 0;
        const nextLvl = k % ALPHA_LEVELS;
        if (nextCi !== ci || nextLvl !== lvl) {
          ci = nextCi;
          lvl = nextLvl;
          g2.fillStyle = colorCache[ci * ALPHA_LEVELS + lvl];
        }
        const o = order[s] * FLOATS_PER;
        g2.beginPath();
        g2.arc(data[o], data[o + 1], data[o + 4], 0, Math.PI * 2);
        g2.fill();
      }
    }

    function loop() {
      if (!running) return;
      const data = buf!;
      for (let i = 0; i < count; i++) {
        const o = i * FLOATS_PER;
        data[o] += data[o + 2];
        data[o + 1] += data[o + 3];
        if (data[o] < -4) data[o] = width + 4;
        else if (data[o] > width + 4) data[o] = -4;
        if (data[o + 1] < -4) data[o + 1] = height + 4;
        else if (data[o + 1] > height + 4) data[o + 1] = -4;
      }
      draw();
      raf = requestAnimationFrame(loop);
    }

    function start() {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    function onResize() {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        seed();
        draw();
      }, 150);
    }

    function onVisibility() {
      if (document.hidden) stop();
      else start();
    }

    seed();
    if (reduced) {
      draw(); // one static frame, no animation
    } else {
      start();
      window.addEventListener("resize", onResize);
      document.addEventListener("visibilitychange", onVisibility);
    }

    return () => {
      stop();
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[1]" />;
}
