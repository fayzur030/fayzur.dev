'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  GraduationCap,
  CalendarDays,
  BookOpen,
  ArrowUpRight,
} from 'lucide-react'

const education = {
  degree: "Bachelor's Degree (Honours)",
  subject: 'Political Science',
  institution: 'Your College Name',
  duration: 'Your Admission Year – Present',
  status: 'Currently Studying',
  description:
    'Currently pursuing my Honours degree in Political Science while developing practical skills in full-stack web development.',
}

export default function EducationSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section
      id='education'
      className='relative overflow-hidden bg-[#0B1020] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28'
    >
      {/* Background Effects */}{' '}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#C2F800]/[0.06] blur-[120px]'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-400/[0.05] blur-[120px]'
      />
      <div className='relative mx-auto max-w-6xl'>
        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className='mb-14 text-center sm:mb-16'
        >
          <div className='mb-5 inline-flex items-center gap-2 rounded-full border border-[#C2F800]/20 bg-[#C2F800]/[0.07] px-4 py-2'>
            <GraduationCap size={16} className='text-[#C2F800]' />
            <span className='text-xs font-medium tracking-[0.18em] text-[#C2F800]'>
              MY ACADEMIC JOURNEY
            </span>
          </div>

          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl'>
            Educational <span className='text-[#C2F800]'>Qualification</span>
          </h2>

          <p className='mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base'>
            My academic background and the foundation behind my continuous
            learning journey.
          </p>
        </motion.div>

        {/* Education Card */}
        <motion.article
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className='group relative mx-auto max-w-4xl'
        >
          {/* Lime Accent */}
          <div className='absolute -inset-px rounded-3xl bg-gradient-to-br from-[#C2F800]/30 via-transparent to-cyan-400/20 opacity-70 transition-opacity duration-500 group-hover:opacity-100' />

          <div className='relative overflow-hidden rounded-3xl border border-white/[0.08] bg-[#111827]/95 p-6 shadow-2xl shadow-black/20 sm:p-9 md:p-10'>
            {/* Decorative Circle */}
            <div
              aria-hidden='true'
              className='pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-[#C2F800]/10 transition-transform duration-700 group-hover:scale-125'
            />

            <div
              aria-hidden='true'
              className='pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full border border-[#C2F800]/10'
            />

            <div className='relative flex flex-col gap-7 sm:flex-row sm:items-start sm:gap-8'>
              {/* Icon */}
              <div className='flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[#C2F800]/20 bg-[#C2F800]/[0.08] transition-transform duration-300 group-hover:scale-105'>
                <GraduationCap
                  size={32}
                  strokeWidth={1.6}
                  className='text-[#C2F800]'
                />
              </div>

              {/* Details */}
              <div className='min-w-0 flex-1'>
                <div className='mb-4 flex flex-wrap items-center gap-3'>
                  <span className='rounded-full border border-[#C2F800]/20 bg-[#C2F800]/[0.08] px-3 py-1 text-xs font-medium text-[#C2F800]'>
                    {education.status}
                  </span>

                  <span className='flex items-center gap-1.5 text-xs text-slate-500'>
                    <CalendarDays size={14} />
                    {education.duration}
                  </span>
                </div>

                <h3 className='text-xl font-bold leading-snug text-white sm:text-2xl md:text-3xl'>
                  {education.degree}
                </h3>

                <p className='mt-3 flex items-center gap-2 text-base font-medium text-[#C2F800] sm:text-lg'>
                  <BookOpen size={18} />
                  {education.subject}
                </p>

                <p className='mt-5 text-sm leading-7 text-slate-400 sm:text-base'>
                  {education.description}
                </p>

                {/* Institution */}
                <div className='mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.08] pt-6'>
                  <div>
                    <p className='mb-1 text-xs uppercase tracking-[0.15em] text-slate-500'>
                      Institution
                    </p>
                    <p className='break-words text-sm font-medium text-slate-200 sm:text-base'>
                      {education.institution}
                    </p>
                  </div>

                  <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-all duration-300 group-hover:border-[#C2F800]/30 group-hover:bg-[#C2F800]/10 group-hover:text-[#C2F800]'>
                    <ArrowUpRight size={19} />
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className='mt-8 h-px w-full bg-gradient-to-r from-[#C2F800]/40 via-white/[0.06] to-transparent' />

            <p className='mt-5 text-xs leading-6 text-slate-500'>
              Alongside my academic studies, I am continuously learning and
              building practical skills in full-stack web development.
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
