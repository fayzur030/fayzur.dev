'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import {
  Code2,
  Heart,
  Lightbulb,
  Puzzle,
  Sparkles,
  Mail,
  ArrowUpRight,
} from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

import image from '@/assets/about_image.png'
import { SectionHeading } from '../website/section-heading'
import { GithubIcon, LinkedinIcon } from '../website/brand-icons'
import { site } from '@/lib/portfolio'

const journey = [
  {
    title: 'My Programming Journey',
    label: 'THE JOURNEY',
    description:
      'My journey into web development started with curiosity. Since then, I have been learning modern technologies and building projects to improve my skills.',
    icon: Code2,
  },
  {
    title: 'The Work I Enjoy',
    label: 'MY PASSION',
    description:
      'I enjoy building responsive user interfaces, developing REST APIs, and connecting frontend experiences with backend functionality.',
    icon: Heart,
  },
  {
    title: 'Beyond Coding',
    label: 'LIFE OUTSIDE CODE',
    description:
      'Outside programming, I enjoy exploring new ideas, discovering interesting things, and making time for activities that keep me curious and motivated.',
    icon: Sparkles,
  },
  {
    title: 'My Personality',
    label: 'MY MINDSET',
    description:
      'I believe in consistency, curiosity, and continuous learning. I approach challenges with patience and enjoy improving through hands-on experience.',
    icon: Lightbulb,
  },
  {
    title: 'Problem Solving',
    label: 'MY APPROACH',
    description:
      'I break complex problems into smaller, manageable steps and focus on creating practical solutions through logical thinking and experimentation.',
    icon: Puzzle,
  },
]

const borderColors = [
  'hover:border-cyan-400/50 dark:hover:border-cyan-400/40',
  'hover:border-blue-400/50 dark:hover:border-blue-400/40',
  'hover:border-sky-400/50 dark:hover:border-sky-400/40',
]

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
export default function About() {
  const shouldReduceMotion = useReducedMotion()

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section
      id='about'
      className='relative isolate w-full max-w-full overflow-x-clip py-16 sm:py-20 lg:py-32'
    >
      {/* Background Glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/[0.07] blur-[110px]'
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-[110px]'
      />

      <div className='mx-auto max-w-7xl px-5 sm:px-8'>
        {/* Section Heading */}
        <motion.div
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          <SectionHeading
            index='01 / about '
            eyebrow='GET TO KNOW ME'
            title='About Me'
            description='A little about my journey, mindset, and passion for building things.'
          />
        </motion.div>

        {/* Main Layout */}
        <div className='mt-16 grid items-start gap-14 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-16'>
          {/* LEFT: Profile and Introduction */}
          <motion.aside
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            className='mx-auto w-full max-w-[380px] self-start lg:sticky lg:top-28'
          >
            {/* Profile Image */}
            <div className='group relative'>
              {/* Cyan and Blue Glow */}
              <div
                aria-hidden='true'
                className='absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/60 via-transparent to-blue-500/60 opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-100'
              />

              <div className='relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-[#080d19]'>
                <Image
                  src={image}
                  alt='Fayzur Rahman'
                  width={600}
                  height={700}
                  priority={false}
                  className='h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]'
                />
              </div>
            </div>

            {/* Introduction */}
            <div className='mt-7'>
              <p className='text-xs font-semibold uppercase tracking-[0.22em] text-cyan-600 dark:text-cyan-400'>
                Hello, I&apos;m
              </p>

              <h3 className='mt-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-white'>
                Fayzur Rahman
              </h3>

              <p className='mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400'>
                A Full-Stack Web Developer passionate about building modern,
                responsive, and user-friendly web applications.
              </p>

              {/* Status Badge */}
              {/* <div className='mt-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-3 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300'>
                <span className='relative flex h-2 w-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60' />
                  <span className='relative inline-flex h-2 w-2 rounded-full bg-cyan-400' />
                </span>
                Always learning. Always building.
              </div> */}

              {/* Social Links */}
              <div className='mt-7'>
                <p className='mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400'>
                  Connect with me
                </p>

                <div className='flex items-center gap-3'>
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
              </div>
            </div>
          </motion.aside>

          {/* RIGHT: Timeline */}
          <div className='relative min-w-0'>
            {/* Timeline Background Line */}
            <div
              aria-hidden='true'
              className='absolute bottom-8 left-[15px] top-8 w-px bg-zinc-200 dark:bg-white/10 sm:left-[19px]'
            />

            {/* Animated Timeline Line */}
            <motion.div
              aria-hidden='true'
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 1.8,
                ease: 'easeInOut',
              }}
              style={{ transformOrigin: 'top' }}
              className='absolute bottom-8 left-[15px] top-8 w-px bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 sm:left-[19px]'
            />

            {/* Timeline Cards */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.05 }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: shouldReduceMotion ? 0 : 0.16,
                  },
                },
              }}
              className='space-y-8'
            >
              {journey.map((item, index) => {
                const Icon = item.icon

                return (
                  <motion.article
                    key={item.title}
                    variants={fadeUp}
                    className='group relative pl-12 sm:pl-14'
                  >
                    {/* Timeline Dot */}
                    <motion.div
                      initial={{
                        scale: shouldReduceMotion ? 1 : 0.5,
                        opacity: 0,
                      }}
                      whileInView={{
                        scale: 1,
                        opacity: 1,
                      }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.4,
                        delay: shouldReduceMotion ? 0 : index * 0.08,
                      }}
                      className='absolute left-0 top-6 z-10 flex h-[31px] w-[31px] items-center justify-center rounded-full border border-cyan-400/40 bg-white shadow-[0_0_18px_rgba(34,211,238,0.12)] dark:bg-[#0b1020] sm:left-[4px] sm:h-[39px] sm:w-[39px]'
                    >
                      <span className='h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.6)]' />
                    </motion.div>

                    {/* Timeline Card */}
                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              x: 4,
                              transition: { duration: 0.2 },
                            }
                      }
                      className={`group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/70 p-5 transition-all duration-500 hover:shadow-[0_0_25px_rgba(34,211,238,0.06)] dark:border-white/10 dark:bg-white/[0.025] sm:p-6 ${
                        borderColors[index % borderColors.length]
                      }`}
                    >
                      {/* Hover Gradient */}
                      <div
                        aria-hidden='true'
                        className='pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-blue-500/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                      />

                      {/* Card Content */}
                      <div className='relative z-10'>
                        {/* Card Label */}
                        <div className='flex items-center justify-between gap-3'>
                          <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400'>
                            {item.label}
                          </span>

                          <span className='font-mono text-xs text-zinc-400 dark:text-zinc-500'>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Card Title and Icon */}
                        <div className='mt-4 flex items-center gap-3'>
                          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 group-hover:text-blue-600 dark:text-cyan-400 dark:group-hover:text-blue-400'>
                            <Icon size={20} strokeWidth={1.8} />
                          </div>

                          <h4 className='text-lg font-semibold text-zinc-900 dark:text-white sm:text-xl'>
                            {item.title}
                          </h4>
                        </div>

                        {/* Card Description */}
                        <p className='mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400'>
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.article>
                )
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
