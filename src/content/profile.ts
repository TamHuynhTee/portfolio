import type { Profile } from './types'

export const profile = {
  name: 'Huynh Thanh Tam',
  headline: 'Frontend engineer',
  pitch:
    'I build fast, user-focused web interfaces with React and Next.js, and I am growing into full-stack work, from component libraries to analytics pipelines.',
  location: 'Ho Chi Minh City, Vietnam',
  availability: {
    open: true,
    label: 'Open to work',
    detail: 'Frontend or software engineering roles',
  },
  email: 'huynhthanhtam2605@gmail.com',
  github: 'https://github.com/TamHuynhTee',
  linkedin: 'https://www.linkedin.com/in/thanh-tam-huynh-bbbb6a179/',
  about: [
    'I am a frontend engineer who enjoys solving problems, polishing details and exploring ideas that make products easier to use. Most of my work is in React and Next.js, in teams of four to six.',
    'Over the last two years I have also worked on the backend side: Node.js services, Prisma and Postgres, AWS Lambda and API Gateway, and an analytics data pipeline. I am looking for a team where I can keep growing and move gradually toward full-stack work.',
  ],
  education: {
    school: 'HCMC University of Technology and Education',
    degree: 'B.Eng. Information Technology',
    years: '2018 - 2022',
  },
  languages: [
    { name: 'Vietnamese', level: 'Native' },
    { name: 'English', level: 'Fluent' },
  ],
  certificate: {
    name: 'Claude Code in Action',
    url: 'https://verify.skilljar.com/c/6trxbvp5uf3t',
  },
} satisfies Profile
