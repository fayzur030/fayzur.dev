'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { Code2, Heart, Lightbulb, Puzzle, Sparkles } from 'lucide-react'

import image from '@/assets/about_image.png'
import { SectionHeading } from '../website/section-heading'

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
  'hover:border-violet-400/50 dark:hover:border-violet-400/40',
  'hover:border-emerald-400/50 dark:hover:border-emerald-400/40',
  'hover:border-amber-400/50 dark:hover:border-amber-400/40',
  'hover:border-rose-400/50 dark:hover:border-rose-400/40',
  'hover:border-blue-400/50 dark:hover:border-blue-400/40',
]

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
      {/* Background glow */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/[0.07] blur-[110px]'
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full bg-lime-400/[0.07] blur-[110px]'
      />

      <div className='mx-auto max-w-7xl px-5 sm:px-8'>
        {/* Section heading */}
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

        {/* Main layout */}
        <div className='mt-16 grid items-start gap-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-20'>
          {/* LEFT: Sticky profile and introduction */}
          <motion.aside
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            className='mx-auto w-full max-w-[360px] self-start lg:sticky lg:top-28'
          >
            {/* Profile image */}
            <div className='group relative'>
              <div
                aria-hidden='true'
                className='absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-400/60 via-transparent to-lime-400/60 opacity-60 blur-md transition-opacity duration-500 group-hover:opacity-100'
              />

              <div className='relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 dark:border-white/10 dark:bg-[#11151d]'>
                <Image
                  src={image}
                  alt='Fayzur Rahman'
                  className='h-auto w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]'
                  priority={false}
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

              <div className='mt-5 inline-flex items-center gap-2 rounded-full border border-lime-500/20 bg-lime-500/5 px-3 py-2 text-xs font-medium text-zinc-700 dark:text-zinc-300'>
                <span className='relative flex h-2 w-2'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-500 opacity-60' />
                  <span className='relative inline-flex h-2 w-2 rounded-full bg-lime-500' />
                </span>
                Always learning. Always building.
              </div>
            </div>
          </motion.aside>

          {/* RIGHT: Scrollable timeline */}
          <div className='relative min-w-0'>
            {/* Timeline background line */}
            <div
              aria-hidden='true'
              className='absolute bottom-8 left-[15px] top-8 w-px bg-zinc-200 dark:bg-white/10 sm:left-[19px]'
            />

            {/* Animated timeline line */}
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
              className='absolute bottom-8 left-[15px] top-8 w-px bg-gradient-to-b from-cyan-400 via-lime-400 to-cyan-400 sm:left-[19px]'
            />

            {/* Timeline cards */}
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
                    {/* Timeline dot */}
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
                      <span className='h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan-400 to-lime-400 shadow-[0_0_12px_rgba(34,211,238,0.6)]' />
                    </motion.div>

                    {/* Timeline card */}
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
                      {/* Hover gradient */}
                      <div
                        aria-hidden='true'
                        className='pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-emerald-400/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                      />

                      {/* Card content */}
                      <div className='relative z-10'>
                        {/* Card label */}
                        <div className='flex items-center justify-between gap-3'>
                          <span className='text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400'>
                            {item.label}
                          </span>

                          <span className='font-mono text-xs text-zinc-400 dark:text-zinc-500'>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Card title */}
                        <div className='mt-4 flex items-center gap-3'>
                          <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 transition-all duration-300 group-hover:scale-110 group-hover:border-lime-500/30 group-hover:bg-lime-500/10 group-hover:text-lime-600 dark:text-cyan-400 dark:group-hover:text-lime-400'>
                            <Icon size={20} strokeWidth={1.8} />
                          </div>

                          <h4 className='text-lg font-semibold text-zinc-900 dark:text-white sm:text-xl'>
                            {item.title}
                          </h4>
                        </div>

                        {/* Card description */}
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
