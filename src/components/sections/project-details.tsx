'use client'

import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react'
import { GithubIcon } from '@/components/website/brand-icons'
import { buttonVariants } from '@/components/ui/button'
import { ProjectDetails } from '@/lib/projects'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import type { IconType } from 'react-icons'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiFirebase,
  SiRedux,
  SiPrisma,
  SiSupabase,
  SiDocker,
  SiFigma,
  SiVite,
  SiSass,
  SiPython,
  SiGraphql,
} from 'react-icons/si'

interface ProjectDetailsPageProps {
  project: ProjectDetails
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.25, 0.46, 0.45, 0.94],
  },
}

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

// Technology icon mapping
const technologyIcons: Record<string, IconType> = {
  react: SiReact,
  'react.js': SiReact,
  next: SiNextdotjs,
  'next.js': SiNextdotjs,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  ts: SiTypescript,
  javascript: SiJavascript,
  js: SiJavascript,
  node: SiNodedotjs,
  'node.js': SiNodedotjs,
  nodejs: SiNodedotjs,
  express: SiExpress,
  'express.js': SiExpress,
  tailwind: SiTailwindcss,
  'tailwind css': SiTailwindcss,
  tailwindcss: SiTailwindcss,
  html: SiHtml5,
  html5: SiHtml5,
  css: SiCss,
  css3: SiCss,
  mongodb: SiMongodb,
  mongo: SiMongodb,
  postgresql: SiPostgresql,
  postgres: SiPostgresql,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  vercel: SiVercel,
  firebase: SiFirebase,
  redux: SiRedux,
  prisma: SiPrisma,
  supabase: SiSupabase,
  docker: SiDocker,
  figma: SiFigma,
  vite: SiVite,
  sass: SiSass,
  scss: SiSass,
  python: SiPython,
  graphql: SiGraphql,
}

function getTechnologyIcon(tech: string) {
  const normalizedTech = tech.trim().toLowerCase()
  return technologyIcons[normalizedTech] ?? Code2
}

import type { IconType } from 'react-icons'

// Keep your existing getTechnologyIcon() and icon mappings.

function TechnologyBadge({ tech }: { tech: string }) {
  const TechIcon: IconType = getTechnologyIcon(tech)

  return (
    <span className='inline-flex items-center gap-2 rounded-md border border-border/50 bg-background/40 px-3 py-1.5 font-mono text-xs text-foreground/80 transition-colors duration-200 hover:border-cyan-400/40 hover:text-cyan-300'>
      <TechIcon className='size-4 shrink-0 text-cyan-400' aria-hidden='true' />
      <span>{tech}</span>
    </span>
  )
}

export function ProjectDetailsPage({ project }: ProjectDetailsPageProps) {
  return (
    <div className='mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8'>
      {/* Back Navigation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className='mb-8'
      >
        <Link
          href='/#projects'
          className={cn(buttonVariants({ variant: 'ghost' }), 'group')}
        >
          <ArrowLeft className='mr-2 size-4 transition-transform group-hover:-translate-x-1' />
          Back to Projects
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.header
        variants={staggerContainer}
        initial='initial'
        animate='animate'
        className='mb-12'
      >
        <motion.div variants={fadeInUp} className='mb-4'>
          <h1 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl'>
            {project.title}
          </h1>

          <p className='mt-2 font-mono text-sm uppercase tracking-widest text-cyan-400/80'>
            {project.tagline}
          </p>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className='relative mb-6 aspect-video w-full overflow-hidden rounded-2xl border border-border/70 bg-card/30'
        >
          {project.image &&
          project.image !== '/images/projects/placeholder.jpg' ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className='object-cover'
              priority
            />
          ) : (
            <div className='absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,rgba(34,211,238,0.1),transparent_55%)]'>
              <span className='font-heading text-6xl font-bold tracking-widest text-cyan-400/50'>
                {project.title.substring(0, 2).toUpperCase()}
              </span>
            </div>
          )}
        </motion.div>

        {/* Technology badges with icons */}
        <motion.div variants={fadeInUp} className='flex flex-wrap gap-2'>
          {project.techStack.frontend?.map((tech) => (
            <TechnologyBadge key={tech} tech={tech} />
          ))}

          {project.techStack.backend?.map((tech) => (
            <TechnologyBadge key={tech} tech={tech} />
          ))}

          {project.techStack.database?.map((tech) => (
            <TechnologyBadge key={tech} tech={tech} />
          ))}

          {project.techStack.tools?.map((tech) => (
            <TechnologyBadge key={tech} tech={tech} />
          ))}
        </motion.div>
      </motion.header>

      {/* Project Overview */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className='mb-12'
      >
        <h2 className='mb-6 font-heading text-2xl font-semibold'>
          Project Overview
        </h2>

        <div className='space-y-6'>
          <div>
            <p className='leading-relaxed text-foreground/90'>
              {project.description}
            </p>
          </div>

          <div>
            <h3 className='mb-3 font-heading text-lg font-semibold'>
              The Problem
            </h3>
            <p className='leading-relaxed text-foreground/90'>
              {project.overview.problem}
            </p>
          </div>

          <div>
            <h3 className='mb-3 font-heading text-lg font-semibold'>
              Key Features
            </h3>

            <ul className='space-y-2'>
              {project.overview.features.map((feature, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <span className='mt-2 size-1.5 shrink-0 rounded-full bg-cyan-400' />
                  <span className='leading-relaxed text-foreground/90'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Technology Stack */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='mb-12'
      >
        <h2 className='mb-6 font-heading text-2xl font-semibold'>
          Technology Stack
        </h2>

        <div className='grid gap-6 sm:grid-cols-2'>
          {project.techStack.frontend &&
            project.techStack.frontend.length > 0 && (
              <div className='rounded-xl border border-border/70 bg-card/30 p-5'>
                <h3 className='mb-4 font-heading font-semibold text-cyan-300'>
                  Frontend
                </h3>

                <div className='flex flex-wrap gap-2'>
                  {project.techStack.frontend.map((tech) => (
                    <TechnologyBadge key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            )}

          {project.techStack.backend &&
            project.techStack.backend.length > 0 && (
              <div className='rounded-xl border border-border/70 bg-card/30 p-5'>
                <h3 className='mb-4 font-heading font-semibold text-cyan-300'>
                  Backend
                </h3>

                <div className='flex flex-wrap gap-2'>
                  {project.techStack.backend.map((tech) => (
                    <TechnologyBadge key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            )}

          {project.techStack.database &&
            project.techStack.database.length > 0 && (
              <div className='rounded-xl border border-border/70 bg-card/30 p-5'>
                <h3 className='mb-4 font-heading font-semibold text-cyan-300'>
                  Database
                </h3>

                <div className='flex flex-wrap gap-2'>
                  {project.techStack.database.map((tech) => (
                    <TechnologyBadge key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            )}

          {project.techStack.tools && project.techStack.tools.length > 0 && (
            <div className='rounded-xl border border-border/70 bg-card/30 p-5'>
              <h3 className='mb-4 font-heading font-semibold text-cyan-300'>
                Tools &amp; Others
              </h3>

              <div className='flex flex-wrap gap-2'>
                {project.techStack.tools.map((tech) => (
                  <TechnologyBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.section>

      {/* Live Project & GitHub */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className='mb-12'
      >
        <h2 className='mb-6 font-heading text-2xl font-semibold'>Links</h2>

        <div className='flex flex-wrap gap-4'>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target='_blank'
              rel='noreferrer'
              className={cn(buttonVariants({ variant: 'aqua', size: 'lg' }))}
            >
              <ExternalLink className='mr-2 size-4' />
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target='_blank'
              rel='noreferrer'
              className={cn(
                buttonVariants({
                  variant: 'aqua-outline',
                  size: 'lg',
                })
              )}
            >
              <GithubIcon className='mr-2 size-4' />
              Client Repository
            </a>
          )}
        </div>
      </motion.section>

      {/* Challenges Faced */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className='mb-12'
      >
        <h2 className='mb-6 font-heading text-2xl font-semibold'>
          Challenges Faced
        </h2>

        <div className='rounded-xl border border-border/70 bg-card/30 p-6'>
          <ul className='space-y-3'>
            {project.challenges.map((challenge, index) => (
              <li key={index} className='flex items-start gap-3'>
                <span className='mt-1.5 size-1.5 shrink-0 rounded-full bg-amber-400' />
                <span className='leading-relaxed text-foreground/90'>
                  {challenge}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Future Improvements */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className='mb-12'
      >
        <h2 className='mb-6 font-heading text-2xl font-semibold'>
          Future Improvements
        </h2>

        <div className='rounded-xl border border-border/70 bg-card/30 p-6'>
          <ul className='space-y-3'>
            {project.futureImprovements.map((improvement, index) => (
              <li key={index} className='flex items-start gap-3'>
                <span className='mt-1.5 size-1.5 shrink-0 rounded-full bg-cyan-400' />
                <span className='leading-relaxed text-foreground/90'>
                  {improvement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Bottom Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className='flex justify-center border-t border-border/50 pt-8'
      >
        <Link
          href='/#projects'
          className={cn(
            buttonVariants({
              variant: 'aqua-outline',
              size: 'lg',
            })
          )}
        >
          <ArrowLeft className='mr-2 size-4' />
          Back to Projects
        </Link>
      </motion.div>
    </div>
  )
}
