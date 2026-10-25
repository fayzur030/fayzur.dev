'use client'

import image from '@/assets/fay.dev.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='relative flex w-full items-center justify-center'>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className='relative flex h-[280px] w-[280px] items-center justify-center sm:h-[350px] sm:w-[350px] lg:h-[380px] lg:w-[380px] xl:h-[450px] xl:w-[450px]'
      >
        {/* Background glow */}
        <div
          aria-hidden='true'
          className='absolute inset-[8%] rounded-full bg-blue-500/15 blur-[55px] dark:bg-blue-500/20'
        />

        <div
          aria-hidden='true'
          className='absolute inset-[18%] rounded-full bg-cyan-400/20 blur-[65px] dark:bg-cyan-400/15'
        />

        {/* Subtle gradient circle */}
        <div className='absolute inset-[4%] rounded-full border border-blue-500/15 bg-gradient-to-br from-blue-500/[0.08] via-transparent to-cyan-400/[0.12] dark:border-cyan-400/15' />

        {/* Profile Image */}
        <div className='absolute  inset-[4%] overflow-hidden rounded-full'>
          <Image
            src={image}
            alt='Fayzur Rahman'
            fill
            priority
            sizes='(max-width: 640px) 280px, (max-width: 1024px) 380px, 450px'
            className='object-contain'
          />
        </div>

        {/* Animated Gradient Ring */}
        <motion.svg
          className='absolute inset-0 h-full w-full'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <defs>
            <linearGradient
              id='profile-gradient'
              x1='0%'
              y1='0%'
              x2='100%'
              y2='100%'
            >
              <stop offset='0%' stopColor='#2563EB' />
              <stop offset='50%' stopColor='#06B6D4' />
              <stop offset='100%' stopColor='#818CF8' />
            </linearGradient>
          </defs>

          <motion.circle
            cx='253'
            cy='253'
            r='232'
            stroke='url(#profile-gradient)'
            strokeWidth='2.5'
            strokeLinecap='round'
            initial={{ rotate: 0, strokeDasharray: '15 120 25 25' }}
            animate={{
              rotate: 360,
              strokeDasharray: [
                '15 120 25 25',
                '16 25 92 72',
                '4 250 22 22',
                '15 120 25 25',
              ],
            }}
            transition={{
              rotate: {
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              },
              strokeDasharray: {
                duration: 8,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          />
        </motion.svg>

        {/* Small decorative accent */}
        <motion.div
          aria-hidden='true'
          className='absolute right-[9%] top-[19%] h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]'
          animate={{ y: [0, -8, 0], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  )
}

export default Photo
