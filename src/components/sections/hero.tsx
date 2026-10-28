'use client'
import { ArrowDownToLine, ArrowRight } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'

import { GithubIcon, LinkedinIcon } from '@/components/website/brand-icons'
import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'
import { Reveal } from '@/components/website/reveal'
import { site } from '@/lib/portfolio'
import Photo from '../website/photo'
import { cn } from 'cn'

export function Hero() {
  const socials = [
    {
      label: 'GitHub',
      href: 'https://github.com/fayzur030',
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/md-fayzur-rahman/',
    },
  ]

  const unconfined = !site.links.github || !site.links.linkedin

  return (
    <section
      id='hero'
      className='relative max-w-7xl mx-auto z-10 flex min-h-svh items-center px-4 pb-16 pt-28 sm:px-6 md:pt-32'
    >
      <div className='mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10'>
        {/* Left: Introduction */}
        <Reveal className='order-2 lg:order-1'>
          <h1 className='mt-2 font-heading text-4xl font-semibold  text-slate-900 dark:text-white sm:text-5xl lg:text-6xl'>
            <span className='block text-xl leading-[1.12]  dark:text-gray-400'>
              {site.nameParts.first} {site.nameParts.accent}
            </span>

            <span className='mt-1.5 block text-primary drop-shadow-[0_0_16px_rgb(194_248_0/0.12)]'>
              {site.name}
            </span>
          </h1>
          <motion.h2
            className='mt-4 min-h-8 bg-linear-to-r from-emerald-700 via-lime-700 to-green-600 bg-clip-text text-base font-medium tracking-wide text-transparent dark:from-gray-300 dark:via-lime-300 dark:to-lime-400 sm:text-lg md:text-xl'
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
          >
            <Typewriter
              words={[...site.roles]}
              loop={0}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </motion.h2>
          <p className='mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-muted-foreground sm:text-[15px]'>
            {site.heroDescription}
          </p>
          {/* CTA Buttons */}

          {/* CTA Buttons & Social Links */}
          <div className='mt-8 flex items-center gap-4'>
            {/* Download CV */}

            <a href='/Fayzur-Rahman-CV.pdf' download>
              <Button
                variant={'default'}
                size={'lg'}
                className={`dark:text-[#0B1020] text-[#ffffff]`}
              >
                <span className='relative z-10'>Download CV</span>
                <ArrowDownToLine
                  className='relative z-10 size-4 transition-transform duration-300 group-hover:translate-y-1'
                  aria-hidden='true'
                />
              </Button>
            </a>
            <a
              href='#projects'
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'group cursor-pointer text-[#0B1020] dark:text-white'
              )}
            >
              <span>View Projects</span>

              <ArrowRight
                aria-hidden='true'
                className='size-4 transition-transform duration-300 group-hover:translate-x-1'
              />
            </a>
          </div>
          {/* Social Links */}
          <div className='flex items-center gap-3 mt-5'>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                title={
                  unconfined
                    ? 'Add your real link in src/lib/portfolio.ts'
                    : social.label
                }
                aria-label={social.label}
                // className='inline-flex size-11 items-center justify-center rounded-xl border border-slate-300 text-slate-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-slate-950 dark:border-border/70 dark:text-muted-foreground dark:hover:border-ring/40 dark:hover:text-foreground'
                className='flex size-9 items-center justify-center rounded-full border border-slate-300 bg-white/70 text-slate-600 transition-all duration-300 hover:border-primary hover:bg-primary hover:text-slate-950 dark:border-white/15 dark:bg-white/[0.03] dark:text-muted-foreground dark:hover:border-primary dark:hover:bg-primary dark:hover:text-slate-950'
              >
                {social.label === 'GitHub' ? (
                  <GithubIcon className='size-4' />
                ) : (
                  <LinkedinIcon className='size-4' />
                )}
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right: Portrait */}
        <div className='order-1 flex w-full justify-center lg:order-2 lg:justify-end'>
          <Photo />
        </div>
      </div>
    </section>
  )
}
