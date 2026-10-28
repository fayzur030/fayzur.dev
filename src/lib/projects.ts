import banglaSanbad from '@/assets/bangla_sonbad.png'
import bazarDor from '@/assets/bazar_dor.png'
import fit_log from '@/assets/fit_log.png'
import { StaticImageData } from 'next/image'

export type ProjectDetails = {
  slug: string
  title: string
  tagline: string
  description: string
  overview: {
    problem: string
    features: string[]
  }
  techStack: {
    frontend?: string[]
    backend?: string[]
    database?: string[]
    authentication?: string[]
    tools?: string[]
  }
  image: string | StaticImageData
  liveUrl: string
  githubUrl: string
  challenges: string[]
  futureImprovements: string[]
}

export type Project = {
  slug: string
  title: string
  description: string
  tech: string[]
  image: string | StaticImageData
  initials?: string
}

export const projects: Project[] = [
  {
    slug: 'bangla-sangbad',
    title: 'Bangla Sangbad',
    description:
      'A Bengali news platform for exploring news articles, browsing categories, discovering trending stories, and enjoying a responsive reading experience.',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Express.js',
      'MongoDB',
      'Better Auth',
    ],
    image: banglaSanbad,
    initials: 'BS',
  },

  {
    slug: 'bazar-dor',
    title: 'BazarDor',
    description:
      'A Bengali marketplace platform designed to help users explore products, discover market prices, and make informed purchasing decisions through a clean, accessible, and responsive interface.',
    tech: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'HeroUI',
      'Better Auth',
      'MongoDB',
    ],
    image: bazarDor,
    initials: 'BD',
  },
  {
    slug: 'fit-log',
    title: 'Fit Log',
    description:
      'A fitness tracking application designed to help users monitor their workouts, track fitness progress, and manage their fitness journey through a clean, responsive, and user-friendly interface.',
    tech: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],
    image: fit_log,
    initials: 'FL',
  },

  // {
  //   slug: 'bazar-inventory',
  //   title: 'Bazar & Inventory Management',
  //   description:
  //     'A full-stack inventory management application for managing products, tracking stock levels, monitoring prices, and organizing inventory operations.',
  //   tech: [
  //     'Next.js',
  //     'TypeScript',
  //     'Tailwind CSS',
  //     'Better Auth',
  //     'MongoDB',
  //     'Express.js',
  //   ],
  //   image: '/images/projects/bazar-inventory.jpg',
  //   initials: 'BI',
  // },
  // {
  //   slug: 'wanderly-travel',
  //   title: 'Wanderly Travel',
  //   description:
  //     'A full-stack travel platform where users can explore destinations, discover travel experiences, and manage their bookings.',
  //   tech: [
  //     'Next.js',
  //     'TypeScript',
  //     'Tailwind CSS',
  //     'Express.js',
  //     'MongoDB',
  //     'Better Auth',
  //   ],
  //   image: '/images/projects/wanderly-travel.jpg',
  //   initials: 'WT',
  // },
]

export const projectDetails: Record<string, ProjectDetails> = {
  // =========================================================
  // BAZAR & INVENTORY MANAGEMENT
  // =========================================================
  // 'bazar-inventory': {
  //   slug: 'bazar-inventory',
  //   title: 'Bazar & Inventory Management',
  //   tagline: 'Smarter Inventory. Better Business Decisions.',
  //   description:
  //     'A full-stack inventory management application designed to help businesses organize products, monitor stock levels, manage pricing, and track inventory operations through a centralized dashboard.',

  //   overview: {
  //     problem:
  //       'Managing inventory manually can lead to inaccurate stock records, unexpected shortages, pricing inconsistencies, and inefficient product management. This application provides a centralized solution for organizing inventory and monitoring stock information.',

  //     features: [
  //       'Create, update, and manage product information',
  //       'Organize products by category',
  //       'Track available stock quantities and product units',
  //       'Monitor product prices and cost prices',
  //       'Identify low-stock products using configurable thresholds',
  //       'Manage product status and SKU information',
  //       'Search, filter, and paginate product records',
  //       'Access inventory information through a centralized dashboard',
  //     ],
  //   },

  //   techStack: {
  //     frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],

  //     backend: ['Node.js', 'Express.js', 'REST API'],

  //     database: ['MongoDB'],

  //     authentication: ['Better Auth'],

  //     tools: ['Lucide React', 'Sonner', 'Vercel', 'Render', 'Git', 'GitHub'],
  //   },

  //   image: '/images/projects/bazar-inventory.jpg',

  //   liveUrl: 'https://bazar-inventory.onrender.com',
  //   githubUrl: 'https://github.com/fayzur030/bazar-inventory',

  //   challenges: [
  //     'Designing a flexible product data structure for inventory management',
  //     'Keeping product information consistent between the frontend and backend',
  //     'Implementing product search, filtering, and pagination',
  //     'Managing stock quantities and low-stock thresholds',
  //     'Building a responsive dashboard for efficient inventory management',
  //   ],

  //   futureImprovements: [
  //     'Purchase order and supplier management',
  //     'Sales tracking and transaction history',
  //     'Inventory reports and analytics dashboards',
  //     'Barcode scanning for faster product management',
  //     'Role-based access control for multiple staff members',
  //     'Stock movement history and inventory audit logs',
  //   ],
  // },

  //Bazar-dor

  'bazar-dor': {
    slug: 'bazar-dor',
    title: 'BazarDor',
    tagline: 'Know Your Market, Make Smarter Choices.',
    description:
      'A Bengali marketplace information platform designed to help people explore market prices and make informed purchasing decisions. Built with a responsive interface and Bengali-first user experience, BazarDor makes market information easier to access.',

    overview: {
      problem:
        'Consumers often struggle to find accessible and organized market price information before shopping. BazarDor aims to make market information easier to explore through a user-friendly platform designed for Bengali-speaking users.',

      features: [
        'Explore market price information through an organized interface',
        'Browse products and their available market information',
        'Navigate Bengali content with a localized user experience',
        'Access market information through a responsive interface',
        'Use authentication features powered by Better Auth',
        'Receive contextual feedback through toast notifications',
        'Explore market information on desktop, tablet, and mobile devices',
      ],
    },

    techStack: {
      frontend: ['Next.js', 'TypeScript', 'Tailwind CSS', 'HeroUI'],

      backend: ['Next.js API Routes'],

      database: ['MongoDB'],

      authentication: ['Better Auth'],

      tools: ['Lucide React', 'Vercel', 'Git', 'GitHub'],
    },

    image: bazarDor,

    liveUrl: 'https://bazar-dor-sigma.vercel.app',
    githubUrl: 'https://github.com/fayzur030/bazar-dor',

    challenges: [
      'Designing a Bengali-first interface with readable typography',
      'Creating a consistent visual experience for market information',
      'Building a responsive layout for different screen sizes',
      'Organizing product and market information for easy discovery',
    ],

    futureImprovements: [
      'Historical market price tracking and comparison',
      'Price trend visualization through interactive charts',
      'Location-based market price discovery',
      'Price change notifications for selected products',
      'Advanced product search and category filtering',
      'Community-driven market price submissions',
    ],
  },

  // =========================================================
  // WANDERLY TRAVEL
  // =========================================================
  // 'wanderly-travel': {
  //   slug: 'wanderly-travel',
  //   title: 'Wanderly Travel',
  //   tagline: 'Discover Destinations. Plan Your Next Adventure.',
  //   description:
  //     'A full-stack travel booking platform that allows users to explore travel destinations, discover experiences, and manage their bookings through a responsive interface.',

  //   overview: {
  //     problem:
  //       'Travelers need a convenient way to discover destinations, review travel options, and keep track of their reservations. Managing destination information and bookings across disconnected platforms can make the planning process unnecessarily complicated.',

  //     features: [
  //       'Explore available travel destinations',
  //       'View destination details and travel information',
  //       'Browse travel experiences by destination category',
  //       'Register and log in to access user features',
  //       'Create travel bookings for selected destinations',
  //       'View personal booking history',
  //       'Manage destination and booking data through API integration',
  //       'Use a responsive interface across desktop, tablet, and mobile devices',
  //     ],
  //   },

  //   techStack: {
  //     frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],

  //     backend: ['Node.js', 'Express.js', 'REST API'],

  //     database: ['MongoDB'],

  //     authentication: ['Better Auth'],

  //     tools: ['Vercel', 'Render', 'Git', 'GitHub'],
  //   },

  //   image: '/images/projects/wanderly-travel.jpg',

  //   liveUrl: 'https://wanderly-travel.vercel.app',
  //   githubUrl: 'https://github.com/fayzur030/wanderly-travel',

  //   challenges: [
  //     'Connecting the Next.js frontend to a separate Express.js API',
  //     'Managing destination and booking data with MongoDB',
  //     'Associating bookings with the correct authenticated user',
  //     'Handling authentication states across protected user features',
  //     'Creating a consistent and responsive travel browsing experience',
  //   ],

  //   futureImprovements: [
  //     'Advanced destination search and filtering',
  //     'Wishlist functionality for saving favorite destinations',
  //     'Destination reviews and rating system',
  //     'Booking status management and cancellation support',
  //     'Integration with external flight and hotel APIs',
  //     'Interactive maps and personalized travel recommendations',
  //   ],
  // },

  // =========================================================
  // BANGLA SANGBAD
  // =========================================================
  'bangla-sangbad': {
    slug: 'bangla-sangbad',
    title: 'Bangla Sangbad',
    tagline: 'বাংলা সংবাদ — আপনার বিশ্বস্ত সংবাদমাধ্যম',
    description:
      'A modern Bengali news platform built to make discovering and reading news easier. It provides an organized news browsing experience with category-based navigation, article discovery, and a responsive interface designed for Bengali readers.',

    overview: {
      problem:
        'Readers need a convenient way to discover news across different categories in their native language. A cluttered layout or inconsistent reading experience can make finding relevant information difficult, particularly on mobile devices.',

      features: [
        'Browse news articles across different categories',
        'Discover the latest and featured news stories',
        'Search for relevant news articles',
        'Read detailed news articles through dedicated pages',
        'Enjoy a responsive interface optimized for Bengali content',
        'Authenticate users with Better Auth',
        'Retrieve news data through a separate REST API',
        'Receive contextual toast notifications through Sonner',
      ],
    },

    techStack: {
      frontend: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],

      backend: ['Node.js', 'Express.js', 'REST API'],

      database: ['MongoDB'],

      authentication: ['Better Auth'],

      tools: ['Sonner', 'Vercel', 'Git', 'GitHub'],
    },

    image: banglaSanbad,

    liveUrl: 'https://bangla-sangbad.vercel.app',
    githubUrl: 'https://github.com/fayzur030/bangla-sangbad',

    challenges: [
      'Designing a readable and responsive interface for Bengali news content',
      'Integrating the frontend with a separate Express.js REST API',
      'Managing news data retrieved from MongoDB',
      'Handling authentication within the news platform',
      'Maintaining a consistent reading experience across screen sizes',
    ],

    futureImprovements: [
      'Advanced search with category and date filters',
      'Bookmarking functionality for saving articles',
      'Breaking news notifications',
      'Reader comments and engagement features',
      'Personalized news recommendations',
      'Improved article metadata and SEO',
    ],
  },
  'fit-log': {
    slug: 'fit-log',
    title: 'Fit Log',
    tagline: 'Track Your Fitness. Build Better Habits.',
    description:
      'A fitness tracking application designed to help users manage their fitness journey, monitor workout activities, and maintain a consistent exercise routine. Built with a responsive interface to provide a smooth and user-friendly fitness tracking experience.',

    overview: {
      problem:
        'Maintaining a consistent fitness routine can be challenging without a convenient way to organize workout activities and monitor progress. Fit Log aims to simplify fitness management by providing an organized platform for tracking workouts and building healthier habits.',

      features: [
        'Track and manage workout activities',
        'Organize fitness information through a structured interface',
        'Monitor workout progress and maintain exercise consistency',
        'Explore fitness information through a clean dashboard',
        'Navigate a responsive interface across desktop and mobile devices',
        'Manage fitness activities through an intuitive user experience',
      ],
    },

    techStack: {
      frontend: ['React', 'TypeScript', 'Tailwind CSS'],

      backend: ['Node.js', 'Express.js', 'REST API'],

      database: ['MongoDB'],

      authentication: [],

      tools: ['Vercel', 'Git', 'GitHub'],
    },

    image: fit_log,

    liveUrl: 'https://fit-log-mu.vercel.app',
    githubUrl: 'https://github.com/fayzur030/fit-log',

    challenges: [
      'Designing a clean and user-friendly fitness tracking interface',
      'Organizing workout information for easy management',
      'Building a responsive layout for different screen sizes',
      'Connecting the frontend with backend API endpoints',
      'Managing fitness data through MongoDB',
    ],

    futureImprovements: [
      'Personalized workout plans based on fitness goals',
      'Visual workout progress tracking with interactive charts',
      'Daily and weekly fitness activity summaries',
      'Workout history with advanced filtering options',
      'Goal setting and progress notifications',
      'Personalized fitness statistics and analytics',
    ],
  },
}
