import Image from 'next/image'
import { ArrowRight, Sparkles, Send } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { GithubIcon, LinkedinIcon } from '@/components/website/brand-icons'
import { Reveal } from '@/components/website/reveal'
import { site } from '@/lib/portfolio'
import image from '@/assets/fayzur.png'
export function Hero() {
  const socials = [
    { label: 'GitHub', href: site.links.github || '#contact' },
    { label: 'LinkedIn', href: site.links.linkedin || '#contact' },
  ]
  const unconfigured = !site.links.github || !site.links.linkedin

  return (
    <section
      id='hero'
      className='relative z-10 flex min-h-svh items-center px-4 pb-16 pt-28 sm:px-6 md:pt-32'
    >
      <div className='mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10'>
        {/* Left: introduction (text on the LEFT on desktop) */}
        <Reveal className='order-2 lg:order-1'>
          <div className='flex flex-wrap items-center gap-3'>
            {site.availableForWork ? (
              <span className='inline-flex items-center gap-2 rounded-full border border-ring/25 bg-primary/5 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-widest text-primary'>
                <span className='relative flex size-1.5'>
                  <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60' />
                  <span className='relative inline-flex size-1.5 rounded-full bg-primary' />
                </span>
                Open to opportunities
              </span>
            ) : (
              <span className='inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/40 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-widest text-muted-foreground'>
                <Sparkles className='size-3 text-primary' aria-hidden='true' />
                Portfolio — {new Date().getFullYear()}
              </span>
            )}
          </div>

          <p className='mt-7 font-mono text-sm text-muted-foreground'>
            Hi, I&apos;m{' '}
            <span className='font-semibold text-foreground'>
              {site.nameParts.first}
            </span>
          </p>
          <h1 className='mt-2 font-heading text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl'>
            <span className='block'>
              {site.nameParts.first} {site.nameParts.accent}
            </span>
            <span className='mt-2 block text-primary drop-shadow-[0_0_28px_rgb(194_248_0/0.25)]'>
              {site.role}
            </span>
          </h1>

          <p className='mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
            {site.heroDescription}
          </p>

          {/* CTAs — aqua sea-glass buttons */}
          <div className='mt-9 flex flex-wrap items-center gap-4'>
            <a
              href='#projects'
              className={cn(
                buttonVariants({ variant: 'aqua', size: 'lg' }),
                'h-11 px-6 text-[0.95rem]'
              )}
            >
              View Projects
              <ArrowRight
                className='size-4 transition-transform duration-300 group-hover/button:translate-x-0.5'
                aria-hidden='true'
              />
            </a>
            <a
              href='#contact'
              className={cn(
                buttonVariants({ variant: 'aqua-outline', size: 'lg' }),
                'h-11 px-6 text-[0.95rem]'
              )}
            >
              <Send className='size-4' aria-hidden='true' />
              Contact Me
            </a>
          </div>

          {/* Social links — route to #contact until real URLs are configured */}
          <div className='mt-8 flex items-center gap-3'>
            <span className='font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground/70'>
              find me
            </span>
            <span className='h-px w-8 bg-border' aria-hidden='true' />
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                title={
                  unconfigured
                    ? 'Add your real link in src/lib/portfolio.ts'
                    : social.label
                }
                className='inline-flex size-9 items-center justify-center rounded-lg border border-border/70 text-muted-foreground transition-all duration-300 hover:border-ring/40 hover:text-foreground'
              >
                <span className='sr-only'>{social.label}</span>
                {social.label === 'GitHub' ? (
                  <GithubIcon className='size-4' />
                ) : (
                  <LinkedinIcon className='size-4' />
                )}
              </a>
            ))}
          </div>
        </Reveal>

        {/* Right: portrait (image on the RIGHT on desktop) */}
        <Reveal delay={140} className='order-1 lg:order-2'>
          <div className='relative mx-auto w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none'>
            {/* Restrained lime halo behind the frame */}
            <div
              aria-hidden='true'
              className='absolute -inset-5 -z-10 rounded-[2.4rem] bg-[radial-gradient(closest-side,rgb(194_248_0/0.10),transparent_78%)]'
            />

            <figure className='relative overflow-hidden rounded-[1.6rem] border border-primary/20 shadow-[0_0_0_1px_rgb(194_248_0/0.05),0_24px_80px_-24px_rgb(0_0_0/0.6),0_0_36px_rgb(194_248_0/0.07)]'>
              <Image
                src={image}
                alt={`Monogram placeholder portrait for ${site.name} — replace with a real photo at public/profile.*`}
                width={720}
                height={840}
                priority
                sizes='(max-width: 1024px) 380px, 420px'
                className='h-auto w-full'
              />
              {/* subtle glass sheen */}
              <div
                aria-hidden='true'
                className='pointer-events-none absolute inset-0 bg-[linear-gradient(160deg,rgb(255_255_255/0.05)_0%,transparent_35%)]'
              />
              <figcaption className='absolute inset-x-4 bottom-3 hidden items-center justify-between rounded-lg border border-white/10 bg-black/35 px-3 py-2 font-mono text-[0.62rem] text-white/75 backdrop-blur-sm md:flex'>
                <span>fayzur@portfolio</span>
                <span className='text-primary/80'>~/welcome</span>
              </figcaption>
            </figure>

            {/* Small mono tag, restrained */}
            <div
              aria-hidden='true'
              className='absolute -right-2 -top-3 hidden rounded-lg border border-primary/25 bg-background px-2.5 py-1 font-mono text-[0.62rem] text-primary/90 shadow-lg sm:block'
            >
              ./portfolio
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
