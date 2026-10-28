'use client'

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
} from 'react-icons/si'

import {
  PanelsTopLeft,
  Server,
  Database,
  Cloud,
  Code2,
  ArrowUpRight,
} from 'lucide-react'

import type { IconType } from 'react-icons'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '../website/section-heading'

interface Technology {
  name: string
  icon?: IconType
  color: string
}

interface SkillCategory {
  title: string
  subtitle: string
  icon: typeof Code2
  technologies: Technology[]
  className?: string
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Front-end',
    subtitle: 'Building modern and interactive user interfaces',
    icon: PanelsTopLeft,
    className: 'lg:col-span-2',
    technologies: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    title: 'Back-end',
    subtitle: 'Server-side logic and API development',
    icon: Server,
    technologies: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF' },
    ],
  },
  {
    title: 'Database',
    subtitle: 'Data storage and management',
    icon: Database,
    technologies: [{ name: 'MongoDB', icon: SiMongodb, color: '#47A248' }],
  },
  {
    title: 'Tools & Deployment',
    subtitle: 'Version control and deployment workflows',
    icon: Cloud,
    className: 'lg:col-span-2',
    technologies: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#FFFFFF' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF' },
    ],
  },
  {
    title: 'Programming Languages',
    subtitle: 'Writing clean and maintainable code',
    icon: Code2,
    className: 'lg:col-span-2',
    technologies: [
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ],
  },
]

function TechnologyBadge({ technology }: { technology: Technology }) {
  const Icon = technology.icon
  const isWhite = technology.color.toUpperCase() === '#FFFFFF'

  return (
    <div className='group/badge inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-100/80 px-3 py-2 transition-all duration-300 hover:border-[#C2F800]/60 hover:bg-[#C2F800]/10 dark:border-white/[0.07] dark:bg-white/[0.035] dark:hover:border-[#C2F800]/30 dark:hover:bg-[#C2F800]/5'>
      {Icon ? (
        <Icon
          className={`h-3.5 w-3.5 shrink-0 ${
            isWhite ? 'text-zinc-800 dark:text-zinc-200' : ''  
          }`}
          style={isWhite ? undefined : { color: technology.color }}
          aria-hidden='true'
        />
      ) : (
        <span
          className='h-1.5 w-1.5 shrink-0 rounded-full'
          style={{ backgroundColor: technology.color }}
        />
      )}

      <span className='whitespace-nowrap text-xs font-medium text-zinc-700 transition-colors duration-300 group-hover/badge:text-zinc-950 dark:text-zinc-400 dark:group-hover/badge:text-[#C2F800]'>
        {technology.name}
      </span>
    </div>
  )
}

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion()
  const reduceMotion = shouldReduceMotion ?? false

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduceMotion ? 0 : 0.55,
        ease: 'easeOut' as const,
      },
    },
  }

  return (
    <section
      id='skills'
      className=' px-4 py-20 text-zinc-900 max-w-7xl mx-auto transition-colors duration-300  dark:text-white sm:px-16 sm:py-24 lg:px-8 lg:py-28'
    >
      {/* Background Accent */}{' '}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#C2F800]/8 blur-[120px] dark:bg-[#C2F800]/[0.035]'
      />
      <div className='relative mx-auto max-w-7xl'>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: 'easeOut',
          }}
          className='mb-10 sm:mb-12'
        >
          <SectionHeading
            index='02 / skill'
            title='Skills & Technologies'
            description='Technologies and tools I use to build modern, responsive, and scalable web applications.'
          />
        </motion.div>

        {/* Section Label */}

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.05 }}
          className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon

            return (
              <motion.article
                key={category.title}
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:bg-linear-to-br hover:from-cyan-50 hover:via-blue-50 hover:to-purple-50 hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] dark:border-white/10 dark:bg-white/2.5 dark:shadow-none dark:hover:border-cyan-400/30 dark:hover:from-cyan-400/8 dark:hover:via-blue-500/8 dark:hover:to-purple-500/8 dark:hover:shadow-[0_8px_35px_rgba(59,130,246,0.12)] sm:p-6 ${category.className ?? ''}`}
              >
                {/* Card Glow */}{' '}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/6 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100'
                />
                {/* Top Accent */}
                <div className='absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-linear-to-r from-cyan-400/60 via-emerald-400/30 to-transparent transition-transform duration-500 group-hover:scale-x-100' />
                {/* Category Heading */}
                <div className='relative mb-6 flex items-start justify-between gap-3'>
                  <div className='flex min-w-0 items-start gap-3'>
                    <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-200/80 bg-cyan-50 text-cyan-600 transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-300 group-hover:bg-cyan-100 dark:border-white/10 dark:bg-white/4 dark:text-cyan-400 dark:group-hover:border-cyan-400/30 dark:group-hover:bg-cyan-400/8'>
                      <CategoryIcon size={18} strokeWidth={1.8} />
                    </div>

                    <div className='min-w-0'>
                      <h3 className='text-lg font-semibold text-zinc-900 transition-colors duration-300 group-hover:text-cyan-700 dark:text-white dark:group-hover:text-cyan-400 sm:text-xl'>
                        {category.title}
                      </h3>

                      <p className='mt-1 text-xs leading-5 text-zinc-600 dark:text-zinc-400'>
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={17}
                    className='shrink-0 text-zinc-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-600 dark:text-zinc-500 dark:group-hover:text-cyan-400'
                    aria-hidden='true'
                  />
                </div>
                {/* Technology Badges */}
                <div className='relative flex flex-wrap gap-2'>
                  {category.technologies.map((technology) => (
                    <TechnologyBadge
                      key={technology.name}
                      technology={technology}
                    />
                  ))}
                </div>
                {/* Bottom Accent */}
                <div className='absolute inset-x-5 bottom-0 h-px origin-left scale-x-0 bg-linear-to-r from-cyan-400/60 to-emerald-400/40 transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-6' />
              </motion.article>
            )
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: reduceMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.5,
            ease: 'easeOut',
          }}
          className='mt-10 flex flex-wrap items-center justify-center gap-3 text-center text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 sm:mt-12 sm:text-[10px] sm:tracking-[0.22em]'
        >
          <span className='h-px w-6 bg-lime-600/60 dark:bg-[#C2F800]/60 sm:w-12' />
          <span>Built with passion</span>
          <span className='text-lime-700 dark:text-[#C2F800]'>•</span>
          <span>Powered by technology</span>
          <span className='h-px w-6 bg-lime-600/60 dark:bg-[#C2F800]/60 sm:w-12' />
        </motion.div>
      </div>
    </section>
  )
}
