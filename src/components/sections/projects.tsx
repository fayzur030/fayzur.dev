'use client'

import { ArrowRight } from 'lucide-react'
import { SectionHeading } from '@/components/website/section-heading'
import { buttonVariants } from '@/components/ui/button'
import { projects } from '@/lib/projects'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
}

export function Projects() {
  return (
    <section id="projects" className="relative z-10 px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          index="03 / projects"
          title="Featured projects"
          description="Selected projects I've built. Click 'View Details' to learn more about each one."
        />

        <motion.div
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: '-40px' }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/40 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#C2F800]/40 hover:shadow-[0_20px_60px_-20px_rgba(194,248,0,0.15)]"
            >
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden border-b border-border/60">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(135deg,rgba(194,248,0,0.08),transparent_55%)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.3] [background-image:linear-gradient(rgba(194,248,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(194,248,0,0.06)_1px,transparent_1px)] [background-size:20px_20px]"
                />
                {project.image && project.image !== '/images/projects/placeholder.jpg' ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-heading text-5xl font-bold tracking-widest text-[#C2F800]/60 transition-colors duration-300 group-hover:text-[#C2F800]">
                      {project.initials || project.title.substring(0, 2).toUpperCase()}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3">
                  <h3 className="font-heading text-xl font-semibold text-foreground group-hover:text-[#C2F800]/90 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>

                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {project.tech.length > 0 && (
                  <div className="mb-5">
                    <ul className="flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 4).map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md border border-border/50 bg-background/40 px-2 py-1 font-mono text-[0.65rem] text-foreground/80 transition-colors duration-200 hover:border-[#C2F800]/30 hover:text-foreground"
                        >
                          {tech}
                        </li>
                      ))}
                      {project.tech.length > 4 && (
                        <li className="rounded-md border border-border/50 bg-background/40 px-2 py-1 font-mono text-[0.65rem] text-muted-foreground">
                          +{project.tech.length - 4}
                        </li>
                      )}
                    </ul>
                  </div>
                )}

                <div className="mt-auto">
                  <Link
                    href={`/projects/${project.slug}`}
                    className={cn(
                      buttonVariants({ variant: 'aqua-outline', size: 'sm' }),
                      'group/btn w-full justify-between'
                    )}
                  >
                    <span>View Details</span>
                    <ArrowRight className="size-3.5 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
