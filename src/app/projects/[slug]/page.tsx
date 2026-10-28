import { notFound } from 'next/navigation'
import { projectDetails, projects } from '@/lib/projects'
import { Navbar } from '@/components/website/navbar'

import { ProjectDetailsPage } from '@/components/sections/project-details'
import { Metadata } from 'next'
import Footer from '@/components/sections/footer'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectDetails[slug]

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.title} | Fayzur Rahman`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectDetails[slug]

  if (!project) {
    notFound()
  }

  return (
    <>
      <Navbar />
      <main className='relative min-h-screen pt-20'>
        <ProjectDetailsPage project={project} />
      </main>
      <Footer />
    </>
  )
}
