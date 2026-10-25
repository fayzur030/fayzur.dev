import { Navbar } from '@/components/website/navbar'
import { Hero } from '@/components/sections/hero'

import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'
import About from '@/components/sections/about'

export default function Home() {
  return (
    <>
      <Navbar />
      <main id='main' className='relative'>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
