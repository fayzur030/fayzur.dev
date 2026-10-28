'use client'

import { useState, type FormEvent } from 'react'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from 'react-icons/fa'
import { HiArrowUpRight, HiCheckCircle } from 'react-icons/hi2'
import { SectionHeading } from '../website/section-heading'

const contactInfo = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'mdfayzurrahman030@gmail.com',
    href: 'mailto:mdfayzurrahman030@gmail.com',
  },
  {
    icon: FaPhoneAlt,
    label: `WhatsApp Number`,
    value: '+880 1985540299',
    href: 'tel:+8801XXXXXXXXX',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Bangladesh',
    href: undefined,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const subject = encodeURIComponent(formData.subject)

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )

    const mailtoLink = `mailto:your.email@example.com?subject=${subject}&body=${body}`

    window.location.href = mailtoLink
    setSubmitted(true)
  }

  return (
    <section
      id='contact'
      className='mx-auto max-w-7xl relative overflow-hidden  px-5 py-24 sm:px-8 lg:px-12'
    >
      {/* Background decoration */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -left-40 top-20 size-80 rounded-full '
      />
      <SectionHeading
        index='05 / contact'
        title="Let's Work Get In Touch"
        description="Have a project idea or want to collaborate? Feel free to send me a
            message. I'd love to hear from you."
      />

      <div
        aria-hidden='true'
        className='pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full '
      />

      <div className='relative '>
        {/* Section heading */}
        <div className='mx-auto mb-16 max-w-2xl text-start'>
          {/* <span className='mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20  px-4 py-2 text-sm font-medium text-cyan-400'>
            <span className='size-2 animate-pulse rounded-full bg-cyan-400' />
            Get In Touch
          </span>

          <h2 className='text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl'>
            Let&apos;s Work{' '}
            <span className='bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent'>
              Together
            </span>
          </h2>

          <p className='mt-5 text-base leading-7 text-muted-foreground sm:text-lg'>
            Have a project idea or want to collaborate? Feel free to send me a
            message. I&apos;d love to hear from you.
          </p> */}
        </div>

        {/* Main content */}
        <div className='grid gap-8 lg:grid-cols-[0.8fr_1.2fr]'>
          {/* Contact information */}
          <div className='flex flex-col rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm sm:p-8'>
            <div>
              <h3 className='text-2xl font-semibold text-foreground'>
                Contact Information
              </h3>

              <p className='mt-3 leading-7 text-muted-foreground'>
                Let&apos;s discuss your next project, ideas, or opportunities.
              </p>
            </div>

            <div className='mt-7 space-y-4'>
              {contactInfo.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.label}
                    className='flex items-center gap-4 rounded-xl border border-border/50 bg-background/40 p-4 transition-colors hover:border-cyan-400/30'
                  >
                    <div className='flex size-12 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10'>
                      <Icon
                        className='size-5 text-cyan-400'
                        aria-hidden='true'
                      />
                    </div>

                    <div className='min-w-0'>
                      <p className='text-sm text-muted-foreground'>
                        {item.label}
                      </p>

                      {item.href ? (
                        <a
                          href={item.href}
                          className='break-all text-sm font-medium text-foreground transition-colors hover:text-cyan-400'
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className='text-sm font-medium text-foreground'>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Social links */}
            <div className='mt-8 border-t border-border/60 pt-6'>
              <p className='mb-4 text-sm font-medium text-foreground'>
                Connect with me
              </p>

              <div className='flex gap-3'>
                {/* GitHub */}
                <a
                  href='https://github.com/fayzur030'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='GitHub'
                  title='Visit my GitHub'
                  className='flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background/50 text-muted-foreground transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400'
                >
                  <FaGithub className='size-5' aria-hidden='true' />
                </a>

                {/* LinkedIn */}
                <a
                  href='https://www.linkedin.com/in/md-fayzur-rahman/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='LinkedIn'
                  title='Visit my LinkedIn'
                  className='flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background/50 text-muted-foreground transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400'
                >
                  <FaLinkedin className='size-5' aria-hidden='true' />
                </a>

                {/* Email */}
                <a
                  href='https://mail.google.com/mail/?view=cm&fs=1&to=mdfayzurrahman030@gmail.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Send email'
                  title='Send me an email'
                  className='flex size-11 items-center justify-center rounded-xl border border-border/60 bg-background/50 text-muted-foreground transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-400'
                >
                  <FaEnvelope className='size-5' aria-hidden='true' />
                </a>
              </div>

              <div className='mt-6 flex items-center gap-3 rounded-xl bg-cyan-400/5 p-4'>
                <span className='size-2 shrink-0 rounded-full bg-cyan-400' />

                <p className='text-sm text-muted-foreground'>
                  Open to new projects and opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className='rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm sm:p-8'>
            <h3 className='text-2xl font-semibold text-foreground'>
              Send Me a Message
            </h3>

            <p className='mt-3 text-sm leading-6 text-muted-foreground'>
              Fill out the form below to get in touch.
            </p>

            <form onSubmit={handleSubmit} className='mt-8 space-y-5'>
              {/* Name and email */}
              <div className='grid gap-5 sm:grid-cols-2'>
                <div>
                  <label
                    htmlFor='contact-name'
                    className='mb-2 block text-sm font-medium text-foreground'
                  >
                    Your Name
                  </label>

                  <input
                    id='contact-name'
                    name='name'
                    type='text'
                    required
                    autoComplete='name'
                    placeholder='Enter your name'
                    value={formData.name}
                    onChange={(event) => {
                      setSubmitted(false)
                      setFormData({
                        ...formData,
                        name: event.target.value,
                      })
                    }}
                    className='w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10'
                  />
                </div>

                <div>
                  <label
                    htmlFor='contact-email'
                    className='mb-2 block text-sm font-medium text-foreground'
                  >
                    Email Address
                  </label>

                  <input
                    id='contact-email'
                    name='email'
                    type='email'
                    required
                    autoComplete='email'
                    placeholder='enter your email address'
                    value={formData.email}
                    onChange={(event) => {
                      setSubmitted(false)
                      setFormData({
                        ...formData,
                        email: event.target.value,
                      })
                    }}
                    className='w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10'
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor='contact-subject'
                  className='mb-2 block text-sm font-medium text-foreground'
                >
                  Subject
                </label>

                <input
                  id='contact-subject'
                  name='subject'
                  type='text'
                  required
                  placeholder='Project discussion'
                  value={formData.subject}
                  onChange={(event) => {
                    setSubmitted(false)
                    setFormData({
                      ...formData,
                      subject: event.target.value,
                    })
                  }}
                  className='w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10'
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor='contact-message'
                  className='mb-2 block text-sm font-medium text-foreground'
                >
                  Message
                </label>

                <textarea
                  id='contact-message'
                  name='message'
                  required
                  rows={5}
                  placeholder='Tell me about your project...'
                  value={formData.message}
                  onChange={(event) => {
                    setSubmitted(false)
                    setFormData({
                      ...formData,
                      message: event.target.value,
                    })
                  }}
                  className='w-full resize-y rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/10'
                />
              </div>

              {/* Submit button */}
              <button
                type='submit'
                className='group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/10 transition-all hover:-translate-y-0.5 hover:shadow-cyan-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:w-auto'
              >
                Send Message
                <FaPaperPlane className='size-4 transition-transform group-hover:translate-x-1' />
                <HiArrowUpRight className='size-4' />
              </button>

              {submitted && (
                <p
                  role='status'
                  className='flex items-center gap-2 text-sm text-cyan-400'
                >
                  <HiCheckCircle className='size-5' />
                  Your email app should open with your message.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
