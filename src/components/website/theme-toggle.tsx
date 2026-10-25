"use client";

import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Theme toggle with zero React state, so it never causes hydration mismatch:
 * an inline script in <head> resolves and applies the class before first paint
 * (system preference on first visit, localStorage afterwards), and this button
 * just flips the class + persists it. Icon visibility is pure CSS off `html.dark`.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement;
    const dark = !root.classList.contains("dark");
    root.classList.toggle("dark", dark);
    try {
      localStorage.setItem("folio-theme", dark ? "dark" : "light");
    } catch {
      // storage unavailable — theme just won't persist
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark and light mode"
      title="Toggle theme"
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors duration-300 hover:border-ring/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60",
        className
      )}
    >
      {/* Sun shows in light mode, Moon in dark mode — CSS-driven, hydration-safe */}
      <Sun className="theme-icon-sun size-4" aria-hidden="true" />
      <Moon className="theme-icon-moon hidden size-4" aria-hidden="true" />
    </button>
  );
}
