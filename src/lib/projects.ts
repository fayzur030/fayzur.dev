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
    tools?: string[]
  }
  image: string
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
  image: string
  initials?: string
}

export const projects: Project[] = [
  {
    slug: 'bazar-inventory',
    title: 'Bazar & Inventory Management',
    description: 'A full-stack inventory management application for managing products, stock levels, and pricing.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    image: '/images/projects/bazar-inventory.jpg',
    initials: 'BI',
  },
  {
    slug: 'wanderly-travel',
    title: 'Wanderly Travel',
    description: 'A travel booking platform for exploring destinations and managing travel bookings.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Express.js', 'MongoDB'],
    image: '/images/projects/wanderly-travel.jpg',
    initials: 'WT',
  },
  {
    slug: 'bangla-sangbad',
    title: 'Bangla Sangbad',
    description: 'A modern Bengali news platform for browsing news articles and discovering trending stories.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    image: '/images/projects/bangla-sangbad.jpg',
    initials: 'BS',
  },
]

export const projectDetails: Record<string, ProjectDetails> = {
  'bazar-inventory': {
    slug: 'bazar-inventory',
    title: 'Bazar & Inventory Management',
    tagline: 'Streamlined inventory control for retail businesses',
    description: 'A comprehensive full-stack solution designed to help businesses efficiently manage their inventory, track product stock levels, monitor pricing, and streamline purchasing operations. Built with scalability and ease of use in mind.',
    overview: {
      problem: 'Small to medium-sized retailers often struggle with manual inventory tracking, leading to stockouts, overstocking, and pricing inconsistencies. Traditional methods are time-consuming and prone to errors.',
      features: [
        'Product catalog management with categories and variants',
        'Real-time stock level tracking and low-stock alerts',
        'Dynamic pricing management with discount support',
        'Purchase order and supplier management',
        'Sales tracking and transaction history',
        'Comprehensive reporting and analytics dashboard',
        'User role management with access controls',
      ],
    },
    techStack: {
      frontend: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'shadcn/ui'],
      backend: ['Node.js', 'Express.js', 'REST API'],
      database: ['MongoDB', 'Mongoose ODM'],
      tools: ['JWT Authentication', 'Vercel', 'Cloudinary'],
    },
    image: '/images/projects/bazar-inventory.jpg',
    liveUrl: 'https://bazar-inventory-demo.vercel.app',
    githubUrl: 'https://github.com/fayzur/bazar-inventory-client',
    challenges: [
      'Implementing real-time inventory synchronization across multiple transactions',
      'Designing a flexible schema for products with varying attributes',
      'Building efficient reporting queries for large datasets',
      'Ensuring data consistency during concurrent stock updates',
    ],
    futureImprovements: [
      'Integration with barcode scanning for faster operations',
      'Multi-store/location support for franchise businesses',
      'Advanced analytics with predictive stock forecasting',
      'Mobile app companion for on-the-go management',
      'Integration with accounting software like QuickBooks',
    ],
  },
  'wanderly-travel': {
    slug: 'wanderly-travel',
    title: 'Wanderly Travel',
    tagline: 'Discover and book your perfect adventure',
    description: 'A modern travel booking platform that connects travelers with amazing destinations. Users can explore curated travel packages, make bookings, manage itineraries, and share their experiences all in one seamless platform.',
    overview: {
      problem: 'Travel planning is fragmented across multiple platforms - finding destinations, comparing prices, and managing bookings can be overwhelming and time-consuming.',
      features: [
        'Destination discovery with rich media galleries',
        'Interactive travel package browsing and filtering',
        'Secure booking and payment integration',
        'Personalized user dashboard and booking history',
        'Review and rating system for destinations',
        'Wishlist functionality for future trips',
        'Responsive design for mobile travelers',
      ],
    },
    techStack: {
      frontend: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      backend: ['Node.js', 'Express.js', 'RESTful API'],
      database: ['MongoDB', 'Mongoose'],
      tools: ['Stripe Payment', 'Cloudinary', 'NextAuth.js'],
    },
    image: '/images/projects/wanderly-travel.jpg',
    liveUrl: 'https://wanderly-travel-demo.vercel.app',
    githubUrl: 'https://github.com/fayzur/wanderly-travel-client',
    challenges: [
      'Building a complex filtering system for destinations and packages',
      'Implementing secure payment processing with multiple scenarios',
      'Optimizing image loading for travel galleries',
      'Managing booking availability and preventing double bookings',
    ],
    futureImprovements: [
      'AI-powered trip recommendations based on preferences',
      'Integration with flight and hotel APIs for complete packages',
      'Social features for sharing travel experiences',
      'Multi-language support for international users',
      'Offline itinerary access for travelers',
    ],
  },
  'bangla-sangbad': {
    slug: 'bangla-sangbad',
    title: 'Bangla Sangbad',
    tagline: 'Your trusted source for Bengali news',
    description: 'A modern Bengali news platform delivering up-to-date news articles across various categories. Features include category-based browsing, trending stories, search functionality, and a clean, reader-friendly interface optimized for the Bengali language.',
    overview: {
      problem: 'Many Bengali news platforms have cluttered interfaces and poor mobile experiences. Readers need a clean, fast, and accessible way to consume news in their native language.',
      features: [
        'Category-wise news browsing (Politics, Sports, Entertainment, etc.)',
        'Trending and featured articles section',
        'Full-text search across news articles',
        'Responsive reading experience with optimized typography',
        'Article sharing functionality',
        'Admin panel for content management',
        'SEO-optimized for better discoverability',
      ],
    },
    techStack: {
      frontend: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'React Markdown'],
      backend: ['Next.js API Routes'],
      database: ['MongoDB', 'Mongoose'],
      tools: ['Tinymce Editor', 'Vercel'],
    },
    image: '/images/projects/bangla-sangbad.jpg',
    liveUrl: 'https://bangla-sangbad-demo.vercel.app',
    githubUrl: 'https://github.com/fayzur/bangla-sangbad-client',
    challenges: [
      'Optimizing Bengali font rendering and typography',
      'Building an efficient content management system',
      'Implementing proper SEO for news articles',
      'Handling large volumes of content with fast loading times',
    ],
    futureImprovements: [
      'Push notifications for breaking news',
      'Commenting system for reader engagement',
      'Newsletter subscription functionality',
      'Dark mode optimization for late-night reading',
      'Integration with social media for wider reach',
    ],
  },
}
