'use client'

import { useEffect, useState } from 'react'
import { ArrowDownToLine, ArrowRight, Menu, X } from 'lucide-react'
import { cn } from 'cn'
import { navLinks, site } from '@/lib/portfolio'
import { ThemeToggle } from '@/components/website/theme-toggle'
import Link from 'next/link'
import { Button } from '../ui/button'

const SECTIONS = navLinks.map((link) => link.href.slice(1))

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Active section detection
  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(
      (element): element is HTMLElement => element !== null
    )

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visibleSections[0]) {
          setActive(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0, 0.15, 0.3, 0.5, 0.75],
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (!open) return

    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = 'hidden'

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  const getLinkClass = (href: string) => {
    const isActive = active === href.slice(1)

    return cn(
      'group relative inline-flex items-center rounded-lg',
      'px-2.5 py-2 xl:px-3',
      'text-[13px] font-medium tracking-wide',
      'transition-colors duration-300',
      isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
    )
  }

  return (
    <>
      {/* Navbar */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50',
          'border-b transition-all duration-300',
          scrolled
            ? [
                'border-border/70',
                'bg-background/90 backdrop-blur-2xl',
                'shadow-[0_8px_30px_rgba(0,0,0,0.08)]',
              ]
            : 'border-transparent bg-background/60 backdrop-blur-lg'
        )}
      >
        {/* Skip to content */}
        <a
          href='#main'
          className={cn(
            'sr-only focus:not-sr-only',
            'focus:absolute focus:left-4 focus:top-4 focus:z-100',
            'focus:rounded-lg focus:bg-background',
            'focus:px-4 focus:py-2 focus:text-sm',
            'focus:text-foreground focus:ring-2 focus:ring-primary'
          )}
        >
          Skip to content
        </a>

        <nav
          className={cn(
            'mx-auto flex w-full max-w-7xl items-center justify-between',
            'gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8',
            'h-16 sm:h-18'
          )}
          aria-label='Primary navigation'
        >
          {/* Logo */}
          <Link
            href='#hero'
            onClick={closeMenu}
            className='group flex min-w-0 shrink items-center gap-2 sm:gap-3'
            aria-label={`${site.name} home`}
          >
            <span
              className={cn(
                'relative flex size-9 shrink-0 items-center justify-center',
                'overflow-hidden rounded-xl',
                'border border-primary/30 bg-primary/10',
                'font-mono text-sm font-bold tracking-tight text-primary',
                'transition-all duration-300',
                'group-hover:border-primary/60',
                'group-hover:bg-primary/15',
                'group-hover:shadow-[0_0_24px_rgba(194,248,0,0.15)]',
                'sm:size-10'
              )}
            >
              <span className='relative z-10'>FR</span>

              <span
                aria-hidden='true'
                className={cn(
                  'absolute inset-0 -translate-x-full',
                  'bg-linear-to-r from-transparent via-primary/15 to-transparent',
                  'transition-transform duration-700',
                  'group-hover:translate-x-full'
                )}
              />
            </span>

            <span className='hidden min-w-0 sm:flex sm:flex-col'>
              <span className='truncate font-heading text-sm font-bold tracking-tight text-foreground sm:text-base'>
                {site.name}
              </span>

              <span className='mt-0.5 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.15em] text-muted-foreground sm:text-[10px]'>
                Full-Stack Developer
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className='hidden items-center gap-0.5 lg:flex xl:gap-1'>
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1)

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={getLinkClass(link.href)}
                  >
                    <span>{link.label}</span>

                    <span
                      aria-hidden='true'
                      className={cn(
                        'absolute inset-x-3 -bottom-0.5 h-0.5',
                        'origin-center rounded-full bg-primary',
                        'transition-transform duration-300',
                        isActive
                          ? 'scale-x-100'
                          : 'scale-x-0 group-hover:scale-x-100'
                      )}
                    />

                    {isActive && (
                      <span
                        aria-hidden='true'
                        className='absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary blur-[5px]'
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Right Actions */}
          <div className='flex shrink-0 items-center gap-1.5 sm:gap-3'>
            {/* Desktop Let's Talk Button: hidden on mobile */}
            <a href='#contact'>
              <Button
                variant={'outline'}
                size={'lg'}
                className={`text-muted-foreground  cursor-pointer hidden md:block`}
              >
                <span className='relative z-10'>Let&apos;s Talk</span>
              </Button>
            </a>

            {/* Theme Toggle */}
            <div
              className={cn(
                'flex size-9 shrink-0 items-center justify-center',
                'rounded-lg border border-border/70 bg-background/60',
                'transition-colors hover:border-primary/30',
                'sm:size-10 sm:rounded-xl'
              )}
            >
              <ThemeToggle />
            </div>

            {/* Hamburger Button */}
            <button
              type='button'
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls='mobile-nav'
              aria-label='Open navigation menu'
              className={cn(
                'inline-flex size-9 shrink-0 items-center justify-center',
                'rounded-lg border border-border/70 bg-background/60',
                'text-foreground transition-colors',
                'hover:border-primary/40 hover:bg-primary/5',
                'focus-visible:outline-none focus-visible:ring-2',
                'focus-visible:ring-primary/60',
                'sm:size-10 sm:rounded-xl',
                'lg:hidden'
              )}
            >
              <Menu className='size-4 sm:size-5' aria-hidden='true' />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        id='mobile-nav'
        className={cn(
          'fixed inset-0 z-60 lg:hidden',
          open ? 'pointer-events-auto visible' : 'pointer-events-none invisible'
        )}
        aria-hidden={!open}
      >
        {/* Backdrop */}
        <button
          type='button'
          tabIndex={open ? 0 : -1}
          aria-label='Close navigation menu'
          onClick={closeMenu}
          className={cn(
            'absolute inset-0 cursor-default bg-black/60',
            'backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0'
          )}
        />

        {/* Drawer */}
        <aside
          className={cn(
            'absolute inset-y-0 right-0 flex',
            'w-[min(320px,88vw)] flex-col',
            'border-l border-border/70 bg-background/95',
            'p-4 pt-5 shadow-2xl backdrop-blur-2xl',
            'transition-transform duration-300 ease-out',
            'sm:p-6 sm:pt-6',
            open ? 'translate-x-0' : 'translate-x-full'
          )}
          role='dialog'
          aria-modal={open}
          aria-label='Mobile navigation'
        >
          {/* Drawer Header */}
          <div className='mb-7 flex items-center justify-between sm:mb-8'>
            <div className='flex min-w-0 items-center gap-3'>
              <span className='flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 font-mono text-xs font-bold text-primary'>
                FR
              </span>

              <div className='min-w-0'>
                <p className='font-heading text-sm font-bold text-foreground'>
                  Fayzur Rahman
                </p>

                <p className='mt-0.5 text-[10px] text-muted-foreground'>
                  Full-Stack Developer
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Links */}
          <ul className='flex flex-col gap-1.5'>
            {navLinks.map((link, index) => {
              const isActive = active === link.href.slice(1)

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    aria-current={isActive ? 'location' : undefined}
                    className={cn(
                      'group flex items-center gap-3 rounded-xl',
                      'border px-3 py-3',
                      'transition-all duration-200 sm:gap-4 sm:px-4 sm:py-3.5',
                      isActive
                        ? 'border-primary/25 bg-primary/10 text-primary'
                        : 'border-transparent text-muted-foreground hover:border-border/70 hover:bg-accent/50 hover:text-foreground'
                    )}
                  >
                    <span
                      className={cn(
                        'font-mono text-[11px]',
                        isActive ? 'text-primary' : 'text-muted-foreground/60'
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className='min-w-0 flex-1 truncate font-heading text-base font-semibold'>
                      {link.label}
                    </span>

                    <span
                      aria-hidden='true'
                      className={cn(
                        'size-1.5 shrink-0 rounded-full bg-primary',
                        'transition-all duration-300',
                        isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                      )}
                    />
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Mobile Let's Talk Button */}
          <a href='#contact' onClick={closeMenu} className='mt-4 block'>
            <Button
              variant={'outline'}
              size={'lg'}
              className={`text-muted-foreground  cursor-pointer w-full `}
            >
              <span className='relative z-10'>Let&apos;s Talk</span>
            </Button>
          </a>

          {/* Drawer Footer */}
          <div className='mt-auto border-t border-border/70 pt-5'>
            <p className='font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground'>
              Building for the web
            </p>

            <p className='mt-2 truncate font-heading text-sm font-semibold text-foreground'>
              {site.name}
              <span className='text-primary'>.dev</span>
            </p>

            <div className='mt-3 flex items-center gap-2'>
              <span className='relative flex size-2 shrink-0'>
                <span className='absolute inline-flex size-full animate-ping rounded-full bg-primary/60' />
                <span className='relative inline-flex size-2 rounded-full bg-primary' />
              </span>

              <span className='text-xs text-muted-foreground'>
                Always learning, always building
              </span>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
