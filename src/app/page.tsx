import { Navbar } from '@/components/website/navbar'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'


import About from '@/components/sections/about'
import SkillsSection from '@/components/sections/skills'
import ExperienceSection from '@/components/sections/experience'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
// import EducationSection from '@/components/sections/EducationSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id='main' className='relative'>
        <Hero />
        <About />
        <SkillsSection />
        {/* <EducationSection /> */}
        <Projects />
        <ExperienceSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
