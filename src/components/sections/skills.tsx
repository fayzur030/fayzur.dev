'use client'

import {
  Code2,
  Database,
  Globe,
  Server,
  GitBranch,
  Palette,
  Terminal,
} from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { SectionHeading } from '../website/section-heading'

const skills = [
  {
    name: 'React.js',
    category: 'Frontend',
    level: 90,
    icon: Code2,
    color: '#61DAFB',
  },
  {
    name: 'Next.js',
    category: 'Framework',
    level: 85,
    icon: Globe,
    color: '#A5B4FC',
  },
  {
    name: 'TypeScript',
    category: 'Language',
    level: 85,
    icon: Terminal,
    color: '#60A5FA',
  },
  {
    name: 'JavaScript',
    category: 'Language',
    level: 88,
    icon: Code2,
    color: '#FACC15',
  },
  {
    name: 'Tailwind CSS',
    category: 'Styling',
    level: 95,
    icon: Palette,
    color: '#22D3EE',
  },
  {
    name: 'Node.js',
    category: 'Backend',
    level: 75,
    icon: Server,
    color: '#86EFAC',
  },
  {
    name: 'MongoDB',
    category: 'Database',
    level: 75,
    icon: Database,
    color: '#4ADE80',
  },
  {
    name: 'Git & GitHub',
    category: 'Tools',
    level: 80,
    icon: GitBranch,
    color: '#FB923C',
  },
]

export default function SkillsSection() {
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
    <section id='skills' className='isolate overflow-hidden px-4 mt-10'>
      <motion.div
        className='skills-container'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section Heading */}
        <motion.div className='skills-heading text-left' variants={fadeUp}>
          <SectionHeading
            index='03 / skills'
            eyebrow='MY TECH STACK'
            title='Technical Skills'
            description='Technologies and tools I use to build modern, responsive, and scalable web applications.'
          />
        </motion.div>

        {/* Skill Cards */}
        <div className='skills-cards'>
          {skills.map((skill) => {
            const Icon = skill.icon

            return (
              <motion.article
                key={skill.name}
                variants={fadeUp}
                className='skill-card'
                style={
                  {
                    '--skill-color': skill.color,
                    '--skill-level': `${skill.level}%`,
                  } as React.CSSProperties
                }
              >
                <div className='skill-card-top'>
                  <div className='skill-icon'>
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <span className='skill-category'>{skill.category}</span>
                </div>

                <h3 className='skill-name'>{skill.name}</h3>

                <div className='skill-progress-info'>
                  <span>Proficiency</span>
                  <span className='skill-percentage'>{skill.level}%</span>
                </div>

                <div
                  className='skill-progress-track'
                  role='progressbar'
                  aria-label={`${skill.name} proficiency`}
                  aria-valuenow={skill.level}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className='skill-progress-fill' />
                </div>

                <div className='skill-card-shine' aria-hidden='true' />
              </motion.article>
            )
          })}
        </div>

        {/* Footer */}
        <motion.div className='skills-footer' variants={fadeUp}>
          <span className='skills-footer-line' />
          <span>ALWAYS LEARNING · ALWAYS BUILDING</span>
          <span className='skills-footer-line' />
        </motion.div>
      </motion.div>
    </section>
  )
}
