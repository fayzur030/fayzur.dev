import {
  CodeXml,
  Rocket,
  Lightbulb,
  Heart,
  Gamepad2,
  Sparkles,
} from 'lucide-react'
import { Reveal } from '@/components/website/reveal'
import { SectionHeading } from '@/components/website/section-heading'
import { site } from '@/lib/portfolio'

const highlights = [
  {
    icon: CodeXml,
    number: '01',
    title: 'My Programming Journey',
    text: 'My journey started with curiosity about how websites work. I began with HTML and CSS, then explored JavaScript, React, Next.js, and backend development. Every project helps me learn something new and grow as a developer.',
    tags: ['JavaScript', 'React', 'Next.js'],
  },
  {
    icon: Heart,
    number: '02',
    title: 'The Work I Enjoy',
    text: 'I enjoy building modern, responsive user interfaces and turning creative ideas into real-world applications. I love solving problems, creating reusable components, and developing full-stack web applications.',
    tags: ['UI/UX', 'Frontend', 'Full Stack'],
  },
  {
    icon: Gamepad2,
    number: '03',
    title: 'Beyond Coding',
    text: 'Outside programming, I enjoy listening to music, exploring new technologies, discovering creative ideas, and spending time on activities that help me relax and stay inspired.',
    tags: ['Music', 'Technology', 'Creativity'],
  },
  {
    icon: Sparkles,
    number: '04',
    title: 'My Personality',
    text: 'I am curious, dedicated, and always eager to learn. I enjoy exploring new ideas, breaking down challenging problems, and improving my skills through consistent practice. I believe every challenge is an opportunity to grow.',
    tags: ['Curiosity', 'Problem Solving', 'Growth'],
  },

  {
    icon: Rocket,
    title: 'Real-World Projects',
    text: 'Turning ideas into useful applications while improving my development workflow.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    text: 'Breaking complex challenges into smaller steps and finding practical solutions.',
  },
]

export function About() {
  return (
    <section id='about' className='relative z-10 px-4 py-24 sm:px-6'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
          {/* Left: Sticky introduction */}
          <div className='lg:sticky lg:top-28 lg:self-start'>
            <Reveal>
              <div className='space-y-6'>
                {/* <p className='text-sm font-medium uppercase tracking-[0.25em] text-primary'>
                  A little about me
                </p> */}
                <SectionHeading index='01 / about' title='About me' />

                <div className='space-y-5 text-[0.98rem] leading-8 text-muted-foreground'>
                  <p>
                    I&apos;m {site.name}, a full-stack web developer focused on
                    building practical, user-friendly web applications. My
                    journey started with curiosity about how the web works and
                    grew into learning how to build complete applications.
                  </p>

                  <p>
                    I enjoy creating polished interfaces, writing maintainable
                    code, and connecting frontend experiences with backend
                    functionality. For me, every project is an opportunity to
                    solve problems and learn something new.
                  </p>

                  <p>
                    My goal is to keep growing as a developer and build digital
                    products that are useful, intuitive, and enjoyable to use.
                  </p>
                </div>

                <div className='flex flex-wrap gap-2 pt-2'>
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'].map(
                    (skill) => (
                      <span
                        key={skill}
                        className='rounded-full border border-border/70 bg-card/40 px-3 py-1.5 text-xs text-muted-foreground transition-colors duration-300 hover:border-cyan-400/50 hover:text-cyan-400'
                      >
                        {skill}
                      </span>
                    )
                  )}
                </div>

                <div className='flex items-center gap-3 pt-2'>
                  <span className='h-px w-10 bg-linear-to-r from-blue-500 to-cyan-400' />
                  <span className='text-sm text-muted-foreground'>
                    Curious mind. Clean code. Continuous growth.
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Vertically stacked glow cards */}
          <div className='relative grid grid-cols-1 gap-5 md:grid-cols-2'>
            {highlights.map((item, i) => (
              <Reveal
                key={item.title}
                delay={i * 70}
                className='group relative h-full'
              >
                {/* Outer glow */}
                <div
                  aria-hidden='true'
                  className='pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/0 via-cyan-400/0 to-blue-500/0 opacity-0 blur-xl transition-all duration-500 group-hover:from-blue-500/25 group-hover:via-cyan-400/20 group-hover:to-blue-500/25 group-hover:opacity-100'
                />

                <div className='relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/30 p-6 transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-cyan-400/40 group-hover:bg-card/70 group-hover:shadow-[0_0_35px_rgba(34,211,238,0.10),0_0_70px_rgba(59,130,246,0.08)] sm:p-7'>
                  {/* Icon + Index */}
                  <div className='mb-6 flex items-center justify-between'>
                    <div className='flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-400/15'>
                      <item.icon size={24} />
                    </div>

                    <span className='text-sm font-medium tracking-widest text-muted-foreground/50'>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Title + Description */}
                  <div className=''>
                    <h3 className='mb-3 text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-cyan-400 sm:text-xl'>
                      {item.title}
                    </h3>

                    <p className='text-sm leading-7 text-muted-foreground sm:text-sm'>
                      {item.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
