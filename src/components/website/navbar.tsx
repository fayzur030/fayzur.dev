'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from 'cn'
import { navLinks, site } from '@/lib/portfolio'
import { ThemeToggle } from '@/components/website/theme-toggle'

const SECTIONS = navLinks.map((l) => l.href.slice(1))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>('')

  // Compact state once content scrolls under the bar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active-section indication (highest ratio wins; no re-render storms)
  useEffect(() => {
    const headings = SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    )
    if (headings.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        let best: string | null = null
        let bestRatio = 0
        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio
            best = entry.target.id
          }
        }
        if (best) setActive(best)
      },
      { rootMargin: '-20% 0px -35% 0px', threshold: [0, 0.25, 0.5] }
    )
    headings.forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [])

  // Lock scroll while the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const onNavClick = () => setOpen(false)

  const linkClass = (href: string, extra?: boolean) =>
    cn(
      'relative rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground',
      extra &&
        "text-foreground after:absolute after:inset-x-3 after:-bottom-0.5 after:h-px after:bg-primary/70 after:content-['']"
    )

  return (
    <header
      className={cn(
        'navbar-glass fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled
          ? 'border-border/70 shadow-[0_1px_24px_rgb(0_0_0/0.18)]'
          : 'border-transparent'
      )}
    >
      {/* Screen-reader friendly: skip to content */}
      <a
        href='#main'
        className='sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-background focus:px-3 focus:py-2 focus:text-sm'
      >
        Skip to content
      </a>

      <nav
        className='mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6'
        aria-label='Primary'
      >
        {/* Logo */}
        <a href='#hero' className='group flex items-center gap-2.5'>
          <span className='flex size-8 items-center justify-center rounded-lg border border-ring/30 bg-primary/10 font-mono text-[0.7rem] font-bold text-primary transition-shadow duration-300 group-hover:shadow-[0_0_14px_rgb(194_248_0/0.25)]'>
            FR
          </span>
          <span className='hidden font-heading text-sm font-semibold tracking-wide sm:block'>
            {site.name}
          </span>
        </a>

        {/* Desktop links */}
        <ul className='hidden items-center gap-1 md:flex'>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={linkClass(link.href, active === link.href.slice(1))}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className='flex items-center gap-2'>
          <ThemeToggle />
          {/* Mobile trigger */}
          <button
            type='button'
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-controls='mobile-nav'
            aria-label='Open navigation menu'
            className='inline-flex size-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:border-ring/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 md:hidden'
          >
            <Menu className='size-4' aria-hidden='true' />
          </button>
        </div>
      </nav>

      {/* Mobile slide-over panel (sheet-style) */}
      <div
        id='mobile-nav'
        className={cn(
          'fixed inset-0 z-[55] md:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none invisible'
        )}
        aria-hidden={!open}
      >
        <div
          className={cn(
            'absolute inset-0 bg-black/55 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0'
          )}
          onClick={onNavClick}
        />
        <div
          className={cn(
            'sheet-panel absolute inset-y-0 right-0 flex w-72 max-w-[85vw] flex-col border-l border-border p-6 pt-5 shadow-2xl transition-transform duration-300 ease-out',
            open ? 'translate-x-0' : 'translate-x-full'
          )}
          role='dialog'
          aria-modal={open}
          aria-label='Site navigation'
        >
          <div className='mb-6 flex items-center justify-between'>
            <span className='font-mono text-xs uppercase tracking-widest text-muted-foreground'>
              menu
            </span>
            <button
              type='button'
              onClick={onNavClick}
              aria-label='Close navigation menu'
              className='inline-flex size-9 items-center justify-center rounded-lg border border-border/60 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60'
            >
              <X className='size-4' aria-hidden='true' />
            </button>
          </div>
          <ul className='flex flex-col gap-1'>
            {navLinks.map((link, i) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onNavClick}
                  className={cn(
                    'flex items-baseline gap-3 rounded-lg px-3 py-3 font-heading text-lg font-semibold transition-colors hover:bg-accent/60 hover:text-foreground',
                    active === link.href.slice(1) && 'text-primary'
                  )}
                >
                  <span className='font-mono text-[0.65rem] text-muted-foreground/70'>
                    0{i + 1}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className='mt-auto border-t border-border pt-4 font-mono text-[0.65rem] text-muted-foreground/70'>
            {site.name.toLowerCase().replace(/[^a-z]/g, '')}
            <span className='text-primary'>.dev</span>
          </div>
        </div>
      </div>
    </header>
  )
}
