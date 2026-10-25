import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, Space_Mono } from 'next/font/google'
import './globals.css'
import { ParticleField } from '@/components/website/particle-field'
import { CustomCursor } from '@/components/website/custom-cursor'
import { site } from '@/lib/portfolio'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description:
    'Single-page portfolio of Fayzur Rahman, a full-stack web developer building modern, responsive, user-friendly web applications.',
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.heroDescription,
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#080B0A' },
    { media: '(prefers-color-scheme: light)', color: '#F5F7F2' },
  ],
}

/**
 * Runs before first paint: resolves the stored/system theme, applies the
 * `.dark` class to <html> (suppressing any flash of the wrong theme).
 */
const themeInitScript = `(function(){try{var s=localStorage.getItem("folio-theme");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var c=document.documentElement.classList;d?c.add("dark"):c.remove("dark");document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}document.documentElement.classList.add("js");})();`

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className='min-h-full flex flex-col overflow-x-clip'>
        {/* Decorative background layers — fixed, behind all content */}
        <div
          aria-hidden='true'
          className='pointer-events-none fixed inset-0 z-0'
        >
          <div className='glow-orb glow-orb--a' />
          <div className='glow-orb glow-orb--b' />
        </div>
        <ParticleField />
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
