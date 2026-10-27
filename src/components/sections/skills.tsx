'use client'

import { useState } from 'react'
import type { CSSProperties } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiGithub,
  // SiHtml5,
  // SiCss,
  // SiFirebase,
  // SiFigma,
  // SiFramer,
  // SiRedux,
  SiPostman,
  SiVercel,
} from 'react-icons/si'
import type { IconType } from 'react-icons'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '../website/section-heading'

interface Skill {
  name: string
  icon: IconType
  color: string
  category: string
  level: number
}

const skills: Skill[] = [
  {
    name: 'React',
    icon: SiReact,
    color: '#61DAFB',
    category: 'Frontend',
    level: 90,
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    color: '#FFFFFF',
    category: 'Frontend',
    level: 85,
  },

  {
    name: 'JavaScript',
    icon: SiJavascript,
    color: '#F7DF1E',
    category: 'Language',
    level: 88,
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#3178C6',
    category: 'Language',
    level: 85,
  },

  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06B6D4',
    category: 'Styling',
    level: 95,
  },

  {
    name: 'Node.js',
    icon: SiNodedotjs,
    color: '#5FA04E',
    category: 'Backend',
    level: 70,
  },
  {
    name: 'Express.js',
    icon: SiExpress,
    color: '#FFFFFF',
    category: 'Backend',
    level: 65,
  },

  {
    name: 'MongoDB',
    icon: SiMongodb,
    color: '#47A248',
    category: 'Database',
    level: 70,
  },

  // {
  //   name: 'Redux',
  //   icon: SiRedux,
  //   color: '#764ABC',
  //   category: 'State Management',
  //   level: 75,
  // },

  // {
  //   name: 'Firebase',
  //   icon: SiFirebase,
  //   color: '#FFCA28',
  //   category: 'Backend Services',
  //   level: 70,
  // },

  { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools', level: 75 },
  {
    name: 'GitHub',
    icon: SiGithub,
    color: '#FFFFFF',
    category: 'Tools',
    level: 80,
  },
  {
    name: 'Postman',
    icon: SiPostman,
    color: '#FF6C37',
    category: 'Tools',
    level: 75,
  },

  // {
  //   name: 'Figma',
  //   icon: SiFigma,
  //   color: '#F24E1E',
  //   category: 'Design',
  //   level: 70,
  // },

  // {
  //   name: 'Framer Motion',
  //   icon: SiFramer,
  //   color: '#8B5CF6',
  //   category: 'Animation',
  //   level: 80,
  // },

  {
    name: 'Vercel',
    icon: SiVercel,
    color: '#FFFFFF',
    category: 'Deployment',
    level: 75,
  },
]

const categories = [
  'All',
  'Frontend',
  'Language',
  'Styling',
  'Backend',
  'Database',
  // 'State Management',
  // 'Backend Services',
  'Tools',
  // 'Design',
  // 'Animation',
  'Deployment',
]

export default function SkillsSection() {
  const shouldReduceMotion = useReducedMotion()
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((skill) => skill.category === activeCategory)

  return (
    <section id='skills' className='isolate overflow-hidden px-4 py-20'>
      <div className='skills-container mx-auto w-full max-w-7xl'>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className='skills-heading mb-10 text-left'
        >
          <SectionHeading
            index='03 / skills'
            eyebrow='MY TECH STACK'
            title='Technical Skills'
            description='Technologies and tools I use to build modern, responsive, and scalable web applications.'
          />
        </motion.div>

        {/* Category Filters */}
        <div
          className='mb-8 flex flex-wrap gap-3'
          role='group'
          aria-label='Filter skills by category'
        >
          {categories.map((category) => {
            const isActive = activeCategory === category

            const count =
              category === 'All'
                ? skills.length
                : skills.filter((skill) => skill.category === category).length

            return (
              <button
                key={category}
                type='button'
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'border-cyan-500 bg-cyan-50 text-cyan-700 shadow-[0_0_18px_rgba(34,211,238,0.10)] dark:border-cyan-400/70 dark:bg-cyan-400/10 dark:text-cyan-300 dark:shadow-[0_0_18px_rgba(34,211,238,0.12)]'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.025] dark:text-zinc-400 dark:hover:border-cyan-400/40 dark:hover:bg-cyan-400/[0.05] dark:hover:text-cyan-300'
                }`}
              >
                {category}
                <span className='ml-2 text-xs opacity-70'>{count}</span>
              </button>
            )
          })}
        </div>

        {/* Skill Cards */}

        <div className='skills-cards grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filteredSkills.map((skill) => {
            const Icon = skill.icon

            return (
              <article
                key={skill.name}
                className='group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition-all duration-500 hover:border-cyan-300 hover:shadow-[0_8px_30px_rgba(34,211,238,0.10)] dark:border-white/10 dark:bg-white/[0.025] dark:shadow-none sm:p-6'
                style={
                  {
                    '--skill-color': skill.color,
                    '--skill-level': `${skill.level}%`,
                  } as CSSProperties
                }
              >
                {/* Hover Gradient */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/[0.05] via-transparent to-emerald-400/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100'
                />

                {/* Hover Glow */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20'
                  style={{ backgroundColor: skill.color }}
                />

                {/* Card Content */}
                <div className='relative z-10'>
                  {/* Icon and Category */}
                  <div className='mb-5 flex items-center justify-between gap-3'>
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 transition-all duration-300 group-hover:scale-110 group-hover:border-cyan-300 group-hover:bg-cyan-50 dark:border-white/10 dark:bg-white/[0.04] dark:group-hover:border-cyan-400/30 dark:group-hover:bg-cyan-400/10 ${
                        skill.color === '#FFFFFF'
                          ? 'text-zinc-900 dark:text-white'
                          : ''
                      }`}
                      style={
                        skill.color === '#FFFFFF'
                          ? undefined
                          : { color: skill.color }
                      }
                    >
                      <Icon size={25} aria-hidden='true' />
                    </div>

                    <span className='rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 transition-colors duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-50 group-hover:text-cyan-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:group-hover:border-cyan-400/30 dark:group-hover:bg-cyan-400/10 dark:group-hover:text-cyan-400'>
                      {skill.category}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <h3 className='mb-5 text-base font-semibold text-zinc-900 dark:text-white'>
                    {skill.name}
                  </h3>

                  {/* Proficiency */}

                  <div className='mb-2 flex items-center justify-between text-xs'>
                    <span className='font-medium text-zinc-600 dark:text-zinc-400'>
                      Proficiency
                    </span>

                    <span
                      className={`font-semibold ${
                        skill.color === '#FFFFFF'
                          ? 'text-zinc-900 dark:text-white'
                          : ''
                      }`}
                      style={
                        skill.color === '#FFFFFF'
                          ? undefined
                          : { color: skill.color }
                      }
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}

                  <div
                    className='h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700/70'
                    role='progressbar'
                    aria-label={`${skill.name} proficiency`}
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        skill.color === '#FFFFFF'
                          ? 'bg-zinc-900 dark:bg-white'
                          : ''
                      }`}
                      style={{
                        width: `${skill.level}%`,
                        ...(skill.color !== '#FFFFFF' && {
                          backgroundColor: skill.color,
                        }),
                      }}
                    />
                  </div>
                </div>

                {/* Bottom Shine */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-70'
                />
              </article>
            )
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
          className='skills-footer mt-12 flex items-center justify-center gap-4 text-center text-[10px] font-medium tracking-[0.2em] text-slate-500 sm:text-xs'
        >
          <span className='h-px max-w-20 flex-1 bg-slate-700' />
          <span>ALWAYS LEARNING · ALWAYS BUILDING</span>
          <span className='h-px max-w-20 flex-1 bg-slate-700' />
        </motion.div>
      </div>
    </section>
  )
}
