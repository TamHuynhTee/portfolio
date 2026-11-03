import type { StackGroup } from './types'

export const stack: StackGroup[] = [
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'SolidJS', 'Astro', 'Tailwind CSS', 'Storybook'],
  },
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'AdonisJS', 'Prisma'],
  },
  {
    label: 'Data',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Supabase', 'Tinybird'],
  },
  { label: 'Cloud and tools', items: ['AWS', 'Google Cloud', 'Docker', 'Cursor'] },
]
