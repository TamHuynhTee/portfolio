import { useEffect, useState } from 'react'
import { profile } from '#/content/profile'
import { ArrowUpRight } from './Icons'
import { ThemeToggle } from './ThemeToggle'

const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'stack', label: 'Stack' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export function SidePanel() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    )
    for (const { id } of sections) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  return (
    <header className="flex flex-col gap-8 pt-12 lg:sticky lg:top-0 lg:h-screen lg:justify-between lg:py-20">
      <div className="flex flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <p className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-muted">
            <span
              aria-hidden
              className="size-2 rounded-full bg-accent motion-safe:animate-pulse"
            />
            <span className="text-fg">{profile.availability.label}</span>
          </p>
          <ThemeToggle />
        </div>

        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-fg lg:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-sm text-accent">
            {profile.headline}
          </p>
        </div>

        <p className="max-w-md leading-relaxed text-muted">{profile.pitch}</p>
        <p className="font-mono text-xs text-muted">
          {profile.location} · {profile.availability.detail}
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
          >
            Email me
          </a>
        </div>

        <nav aria-label="Sections" className="mt-4 hidden lg:block">
          <ul className="flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.2em]">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? 'true' : undefined}
                  className={`group flex items-center gap-3 transition-colors ${
                    active === id ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  <span
                    aria-hidden
                    className={`h-px transition-all ${
                      active === id
                        ? 'w-14 bg-accent'
                        : 'w-7 bg-line group-hover:w-14 group-hover:bg-muted'
                    }`}
                  />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs">
        {[
          ['GitHub', profile.github],
          ['LinkedIn', profile.linkedin],
        ].map(([label, href]) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-muted transition-colors hover:text-accent"
            >
              {label}
              <ArrowUpRight />
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
