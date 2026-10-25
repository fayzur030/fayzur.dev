"use client";

import { useEffect, useRef } from "react";

/**
 * Desktop-only custom cursor (lime dot + smooth-following ring with hover
 * feedback) plus the mouse-responsive background glow. One rAF loop, no React
 * state, followers use lerp interpolation, everything cleaned up on unmount.
 * Disabled for touch/pointer:coarse devices and prefers-reduced-motion.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!dot || !ring || !glow) return;

    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    // Opt in: hide the native cursor only while the custom one is active.
    document.documentElement.classList.add("custom-cursor-on");

    const mouse = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    const glowPos = { x: -100, y: -100 };
    let hoverActive = false;
    let raf = 0;
    let visible = false;

    const onPointerMove = (event: PointerEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (!visible) {
        visible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        glow.style.opacity = "1";
      }
    };

    // Delegated hover detection — no listeners on individual elements.
    const isHoverable = (target: EventTarget | null) =>
      target instanceof Element &&
      target.closest("a, button, [role='button'], label, input, textarea, select, [data-cursor-hover]") !== null;

    const onOver = (event: MouseEvent) => {
      hoverActive = isHoverable(event.target);
      ring.dataset.active = hoverActive ? "true" : "false";
      dot.dataset.active = hoverActive ? "true" : "false";
    };
    const onDown = () => {
      dot.dataset.pressed = "true";
      ring.dataset.pressed = "true";
    };
    const onUp = () => {
      dot.dataset.pressed = "false";
      ring.dataset.pressed = "false";
    };
    const onLeave = () => {
      visible = false;
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      glow.style.opacity = "0";
    };

    const GLOW_LERP = 0.05; // background glow: slowest, most "weighty"
    const RING_LERP = 0.22;
    const tick = () => {
      ringPos.x += (mouse.x - ringPos.x) * RING_LERP;
      ringPos.y += (mouse.y - ringPos.y) * RING_LERP;
      glowPos.x += (mouse.x - glowPos.x) * GLOW_LERP;
      glowPos.y += (mouse.y - glowPos.y) * GLOW_LERP;

      dot.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0) translate(-50%, -50%)`;
      glow.style.transform = `translate3d(${glowPos.x}px, ${glowPos.y}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("custom-cursor-on");
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <>
      {/* Mouse-responsive background glow — sits with the other orbs, behind content */}
      <div
        ref={glowRef}
        id="mouse-glow"
        aria-hidden="true"
        className="glow-orb pointer-events-none fixed z-0 opacity-0"
        style={{ width: "38rem", height: "38rem", top: 0, left: 0 }}
      />
      {/* Cursor parts — never intercept pointer events */}
      <div ref={ringRef} aria-hidden="true" className="cursor-ring pointer-events-none fixed z-[60] opacity-0" />
      <div ref={dotRef} aria-hidden="true" className="cursor-dot pointer-events-none fixed z-[61] opacity-0" />
    </>
  );
}
