'use client'

import image from '@/assets/fay.dev.png'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='relative flex w-full items-center justify-center'>
      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className='relative flex h-[300px] w-[300px] items-center justify-center xl:h-[506px] xl:w-[506px]'
      >
        {/* Profile Image */}
        <div className='absolute inset-[2%] overflow-hidden rounded-full mix-blend-lighten'>
          <Image
            src={image}
            alt='Fayzur Rahman'
            fill
            priority
            sizes='(max-width: 640px) 280px, (max-width: 1280px) 380px, 498px'
            className='object-contain '
          />
        </div>

        {/* Animated Circle */}
        <motion.svg
          className='absolute inset-0 h-full w-full'
          fill='transparent'
          viewBox='0 0 506 506'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <motion.circle
            cx='253'
            cy='253'
            r='250'
            stroke='#C0F700'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo
