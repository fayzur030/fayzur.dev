'use client'

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
  FaArrowUp,
} from 'react-icons/fa'

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/your-username',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/your-username',
    icon: FaLinkedin,
  },
  {
    label: 'Email',
    href: 'mailto:your.email@example.com',
    icon: FaEnvelope,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='relative overflow-hidden border-t border-border/60 bg-background px-5 pb-6 pt-14 sm:px-8 lg:px-12'>
      {/* Background decoration */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -bottom-32 left-1/2 size-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]'
      />

      <div className='relative mx-auto max-w-7xl'>
        {/* Main footer content */}
        <div className='grid gap-10 border-b border-border/60 pb-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]'>
          {/* Brand */}
          <div>
            <a
              href='#home'
              className='inline-flex items-center gap-3'
              aria-label='Fayzur Rahman - Home'
            >
              <span className='flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-lg font-bold text-white shadow-lg shadow-cyan-500/20'>
                F
              </span>

              <span className='text-xl font-bold tracking-tight text-foreground'>
                Fayzur
                <span className='text-cyan-400'>.</span>
              </span>
            </a>

            <p className='mt-5 max-w-sm text-sm leading-7 text-muted-foreground'>
              A passionate web developer focused on building modern, responsive,
              and user-friendly digital experiences.
            </p>

            <div className='mt-6 flex items-center gap-3'>
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.label === 'Email' ? undefined : '_blank'}
                    rel={
                      social.label === 'Email'
                        ? undefined
                        : 'noopener noreferrer'
                    }
                    aria-label={social.label}
                    className='flex size-10 items-center justify-center rounded-xl border border-border/60 bg-card/50 text-muted-foreground transition-all duration-200 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400'
                  >
                    <Icon className='size-4' />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-foreground'>
              Quick Links
            </h3>

            <ul className='mt-5 space-y-3'>
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className='group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-cyan-400'
                  >
                    <span className='size-1.5 rounded-full bg-border transition-colors group-hover:bg-cyan-400' />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='text-sm font-semibold uppercase tracking-[0.2em] text-foreground'>
              Let&apos;s Connect
            </h3>

            <p className='mt-5 text-sm leading-7 text-muted-foreground'>
              Have an idea or a project in mind? Let&apos;s create something
              meaningful together.
            </p>

            <a
              href='#contact'
              className='mt-5 inline-flex items-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-4 py-3 text-sm font-medium text-cyan-400 transition-all hover:border-cyan-400/60 hover:bg-cyan-400/10'
            >
              Get in Touch
              <FaEnvelope className='size-3.5' />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='flex flex-col items-center justify-between gap-4 pt-6 sm:flex-row'>
          <p className='text-center text-xs leading-6 text-muted-foreground sm:text-left'>
            © {currentYear} Fayzur Rahman. All rights reserved.
          </p>

          <p className='flex items-center gap-1.5 text-xs text-muted-foreground'>
            Made with
            <FaHeart className='size-3 text-cyan-400' />
            and lots of coffee
          </p>

          <a
            href='#home'
            aria-label='Back to top'
            className='group flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-cyan-400'
          >
            Back to Top
            <span className='flex size-8 items-center justify-center rounded-lg border border-border/60 transition-all group-hover:border-cyan-400/40 group-hover:bg-cyan-400/10'>
              <FaArrowUp className='size-3.5' />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
