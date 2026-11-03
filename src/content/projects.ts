import type { Project } from './types'

// Projects without an image fall back to a placeholder; links stay empty until URLs exist.
export const projects: Project[] = [
  {
    slug: 'formo',
    title: 'Formo',
    oneLiner:
      'Web3 analytics platform with token-gated forms, wallet data and product analytics for product and marketing teams.',
    role: 'Software Engineer',
    company: 'GYLD',
    years: '2024 - 2025',
    teamSize: 6,
    featured: true,
    stack: ['Next.js', 'Tinybird', 'AWS Lambda', 'Supabase', 'Storybook'],
    built: [
      'Analytics pages and project setup',
      'Tinybird data sources, pipelines and endpoints',
      'SDK that collects web2 and web3 events',
      'AWS API Gateway and Lambda integrations',
    ],
    image: { src: '/projects/formo.webp', alt: 'Formo analytics dashboard with a wallet profile card' },
    links: [{ label: 'formo.so', href: 'https://formo.so' }],
  },
  {
    slug: 'tous-les-jours',
    title: 'Tous les Jours membership app',
    oneLiner:
      'Membership application for the bakery brand Tous les Jours, with a user app and a back-office.',
    role: 'Full-stack Developer',
    company: 'Vani heroes',
    years: '2024',
    teamSize: 6,
    featured: true,
    stack: ['SolidJS', 'Astro', 'AdonisJS', 'Prisma', 'PostgreSQL'],
    built: [
      'User app and back-office UI',
      'Backend services and database integration',
      'Refresh-token authentication and third-party integrations',
    ],
    image: { src: '/projects/tous-les-jours.webp', alt: 'Tous les Jours app home screen shown on a phone' },
    links: [
      { label: 'tljvh.com/app/download', href: 'https://tljvh.com/app/download' },
    ],
  },
  {
    slug: 'winemart',
    title: 'Winemart e-commerce and CRM',
    oneLiner:
      'E-commerce site for wine and beverages plus a CRM system for statistics management.',
    role: 'Frontend Developer',
    company: 'UCC Corporation',
    years: '2021 - 2024',
    teamSize: 6,
    featured: true,
    stack: ['Next.js', 'Redux', 'Ant Design', 'Vite', 'TypeScript'],
    built: [
      'Responsive storefront components from Figma designs',
      'CRM system built from scratch',
      'SEO fixes, optimization and refactoring',
    ],
    image: { src: '/projects/winemart.webp', alt: 'Winemart homepage hero with wine categories and store pickup' },
    links: [{ label: 'winemart.vn', href: 'https://winemart.vn' }],
  },
  {
    slug: 'snowturns',
    title: 'Snowturns',
    oneLiner:
      'A digital space for new and advanced skiers and snowboarders to learn and teach.',
    role: 'Frontend Developer',
    company: 'Elinext',
    years: '2025 - now',
    teamSize: 4,
    featured: false,
    stack: ['Next.js', 'Radix UI', 'Tailwind CSS'],
    built: [
      'Learning pages',
      'Responsive layout fixes across screen sizes',
      'Pre-release testing of new features',
    ],
    links: [],
  },
  {
    slug: 'askany',
    title: 'Askany',
    oneLiner:
      'Advisor platform on mobile and web with scheduling and video calls.',
    role: 'Frontend Developer',
    company: 'NDN Company',
    years: '2021',
    teamSize: 6,
    featured: false,
    stack: ['Next.js', 'CKEditor 5', 'Socket.IO', 'WebRTC'],
    built: [
      'UI performance work and site maintenance',
      'CKEditor 5 integration',
      'Socket.IO messaging',
    ],
    links: [],
  },
]
