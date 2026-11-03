export type Track = 'frontend' | 'fullstack'

export type Profile = {
  name: string
  headline: string
  pitch: string
  location: string
  availability: { open: boolean; label: string; detail: string }
  email: string
  github: string
  linkedin: string
  resume: string
  about: string[]
  education: { school: string; degree: string; years: string }
  languages: { name: string; level: string }[]
  certificate: { name: string; url: string }
}

export type Experience = {
  company: string
  title: string
  track: Track
  /** YYYY-MM */
  start: string
  /** YYYY-MM, null means present */
  end: string | null
  project: string
  teamSize: number
  stack: string[]
  bullets: string[]
}

export type Project = {
  slug: string
  title: string
  oneLiner: string
  role: string
  company: string
  years: string
  teamSize: number
  featured: boolean
  stack: string[]
  built: string[]
  links: { label: string; href: string }[]
}

export type StackGroup = {
  label: string
  items: string[]
}
