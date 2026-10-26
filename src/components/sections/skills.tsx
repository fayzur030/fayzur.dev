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
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'border-cyan-400/70 bg-cyan-400/10 text-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.12)]'
                    : 'border-slate-700/70 bg-slate-900/50 text-slate-400 hover:border-cyan-400/40 hover:text-cyan-300'
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
                className='skill-card group relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/60 p-5 transition-colors duration-300 hover:border-[var(--skill-color)] hover:bg-slate-800/70'
                style={
                  {
                    '--skill-color': skill.color,
                    '--skill-level': `${skill.level}%`,
                  } as CSSProperties
                }
              >
                {/* Hover Glow */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20'
                  style={{ backgroundColor: skill.color }}
                />

                {/* Icon and Category */}
                <div className='relative z-10 mb-5 flex items-center justify-between gap-3'>
                  <div
                    className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 transition-transform duration-300 group-hover:scale-110'
                    style={{ color: skill.color }}
                  >
                    <Icon size={25} aria-hidden='true' />
                  </div>

                  <span className='rounded-full border border-slate-700/70 bg-slate-950/50 px-3 py-1 text-xs text-slate-400'>
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className='relative z-10 mb-5 text-base font-semibold text-slate-100'>
                  {skill.name}
                </h3>

                {/* Proficiency */}
                <div className='relative z-10 mb-2 flex items-center justify-between text-xs'>
                  <span className='text-slate-400'>Proficiency</span>

                  <span
                    className='font-semibold'
                    style={{ color: skill.color }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className='relative z-10 h-1.5 overflow-hidden rounded-full bg-slate-700/70'
                  role='progressbar'
                  aria-label={`${skill.name} proficiency`}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className='h-full rounded-full'
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: skill.color,
                    }}
                  />
                </div>

                {/* Bottom Shine */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-70'
                  style={{
                    background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
                  }}
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
