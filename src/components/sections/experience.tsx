'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  Code2,
  Layers3,
  Rocket,
  Sparkles,
} from 'lucide-react'
import { SectionHeading } from '../website/section-heading'

const experience = {
  company: 'Sparrow Forge Ltd.',
  position: 'Web Development Intern',
  type: 'Internship',
  duration: 'September 2025',
  status: 'Internship Experience',
  description:
    'Gained practical experience in web development by working on development tasks, implementing user interfaces, and improving frontend development skills.',
  responsibilities: [
    'Worked on practical web development tasks and frontend implementation.',
    'Implemented user interface components using JavaScript and React.',
    'Practiced building reusable components and maintaining organized code.',
    'Improved code quality through feedback and iterative development.',
  ],
  technologies: ['JavaScript', 'React', 'HTML', 'CSS'],
}

export default function ExperienceSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id='experience'
      className='relative isolate overflow-hidden max-w-7xl mx-auto px-5 py-20 text-foreground transition-colors duration-300 sm:px-8  lg:py-28'
    >
      {/* Background Effects */}{' '}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-40 top-32 -z-10 h-80 w-80 rounded-full '
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-40 bottom-10 -z-10 h-80 w-80 rounded-full '
      />
      <div className='relative '>
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='mb-14 text-start sm:mb-16'
        >
          <SectionHeading
            index='04 / experience '
            eyebrow='GET TO KNOW ME'
            title='PROFESSIONAL JOURNEY'
            description='My practical experience, development work, and continuous journey
            toward becoming a better software developer.'
          />
          {/* <div className='mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-4 py-2'>
            <BriefcaseBusiness size={16} className='text-primary' />

            <span className='text-xs font-medium tracking-[0.18em] text-accent-foreground'>
              PROFESSIONAL JOURNEY
            </span>
          </div> */}

          {/* <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl'>
            Work <span className='text-primary'>Experience</span>
          </h2>

          <p className='mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base'>
            My practical experience, development work, and continuous journey
            toward becoming a better software developer.
          </p> */}
        </motion.div>

        {/* Experience Timeline */}
        <div className='relative '>
          {/* Timeline Line */}
          <div
            aria-hidden='true'
            className='absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-primary/70 via-primary/20 to-transparent sm:left-7'
          />

          <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            className='relative pl-12 sm:pl-16'
          >
            {/* Timeline Marker */}
            <div className='absolute left-0 top-7 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-background shadow-[0_0_25px_rgba(56,189,248,0.12)] sm:left-2'>
              <div className='h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_rgba(56,189,248,0.7)]' />
            </div>

            {/* Experience Card */}
            <div className='group relative'>
              {/* Gradient Border */}
              <div className='absolute -inset-px rounded-3xl bg-gradient-to-br from-primary/30 via-transparent to-accent opacity-60 transition-opacity duration-500 group-hover:opacity-100' />

              <div className='relative overflow-hidden rounded-3xl border border-border bg-card p-5 text-card-foreground shadow-xl shadow-black/[0.04] transition-colors duration-300 sm:p-8 md:p-10'>
                {/* Decorative Circles */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-primary/10 transition-transform duration-700 group-hover:scale-125'
                />

                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border border-primary/10'
                />

                <div className='relative'>
                  {/* Position and Company */}
                  <div className='flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between'>
                    <div className='flex min-w-0 items-start gap-4'>
                      <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-transform duration-300 group-hover:scale-105'>
                        <BriefcaseBusiness
                          size={27}
                          strokeWidth={1.6}
                          className='text-primary'
                        />
                      </div>

                      <div className='min-w-0'>
                        <h3 className='break-words text-xl font-bold leading-snug text-card-foreground sm:text-2xl'>
                          {experience.position}
                        </h3>

                        <p className='mt-2 break-words text-sm font-medium text-primary sm:text-base'>
                          {experience.company}
                        </p>
                      </div>
                    </div>

                    <span className='w-fit shrink-0 rounded-full border border-primary/20 bg-accent px-3 py-1.5 text-xs font-medium text-accent-foreground'>
                      {experience.type}
                    </span>
                  </div>

                  {/* Duration and Status */}
                  <div className='mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground sm:text-sm'>
                    <span className='flex items-center gap-2'>
                      <CalendarDays
                        size={16}
                        className='shrink-0 text-primary'
                      />
                      {experience.duration}
                    </span>

                    <span className='flex items-center gap-2'>
                      <Sparkles size={16} className='shrink-0 text-primary' />
                      {experience.status}
                    </span>
                  </div>

                  {/* Description */}
                  <p className='mt-6 text-sm leading-7 text-muted-foreground sm:text-base'>
                    {experience.description}
                  </p>

                  {/* Responsibilities */}
                  <div className='mt-8'>
                    <h4 className='mb-4 flex items-center gap-2 text-sm font-semibold text-card-foreground sm:text-base'>
                      <Layers3 size={18} className='shrink-0 text-primary' />
                      Key Responsibilities
                    </h4>

                    <ul className='space-y-3'>
                      {experience.responsibilities.map((item, index) => (
                        <motion.li
                          key={item}
                          initial={
                            shouldReduceMotion ? false : { opacity: 0, x: -10 }
                          }
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.35,
                            delay: index * 0.08,
                          }}
                          className='flex items-start gap-3 text-sm leading-6 text-muted-foreground sm:text-base'
                        >
                          <CheckCircle2
                            size={17}
                            className='mt-1 shrink-0 text-primary'
                          />

                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className='mt-8 border-t border-border pt-6'>
                    <h4 className='mb-4 flex items-center gap-2 text-sm font-semibold text-card-foreground'>
                      <Code2 size={18} className='shrink-0 text-primary' />
                      Technologies
                    </h4>

                    <div className='flex flex-wrap gap-2'>
                      {experience.technologies.map((technology) => (
                        <span
                          key={technology}
                          className='rounded-lg border border-border bg-secondary px-3 py-2 text-xs font-medium text-secondary-foreground transition-colors duration-200 hover:border-primary/40 hover:bg-accent hover:text-primary sm:text-sm'
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Note */}
                  <div className='mt-7 flex items-start gap-3 rounded-xl border border-border bg-muted p-4'>
                    <Rocket
                      size={19}
                      className='mt-0.5 shrink-0 text-primary'
                    />

                    <p className='text-xs leading-6 text-muted-foreground sm:text-sm'>
                      This experience helped me strengthen my practical
                      development skills and build a foundation for continuous
                      learning.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
