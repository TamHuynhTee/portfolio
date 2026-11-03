import { createFileRoute } from '@tanstack/react-router'
import { profile } from '#/content/profile'
import { stack } from '#/content/stack'
import { ArrowUpRight } from '#/components/Icons'
import { Projects } from '#/components/Projects'
import { Section, TagChip } from '#/components/Section'
import { SidePanel } from '#/components/SidePanel'
import { Timeline } from '#/components/Timeline'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:grid lg:grid-cols-[22rem_1fr] lg:gap-20 lg:px-10">
      <SidePanel />
      <main id="content" className="pb-16 lg:py-12">
        <Section id="experience" index="01" title="Experience">
          <Timeline />
        </Section>

        <Section id="projects" index="02" title="Projects">
          <Projects />
        </Section>

        <Section id="stack" index="03" title="Stack">
          <dl className="grid gap-6 sm:grid-cols-2">
            {stack.map((group) => (
              <div key={group.label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                  {group.label}
                </dt>
                <dd className="mt-3">
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TagChip key={item}>{item}</TagChip>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section id="about" index="04" title="About">
          <div className="grid gap-8 md:grid-cols-[1fr_12rem]">
            <div className="flex flex-col gap-4 leading-relaxed text-muted">
              {profile.about.map((p) => (
                <p key={p}>{p}</p>
              ))}
              <ul className="mt-2 flex flex-col gap-2 text-sm">
                <li>
                  <span className="text-fg">{profile.education.degree}</span>,{' '}
                  {profile.education.school}, {profile.education.years}
                </li>
                <li>
                  {profile.languages
                    .map((l) => `${l.name} (${l.level})`)
                    .join(' · ')}
                </li>
                <li>
                  <a
                    href={profile.certificate.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-fg hover:text-accent"
                  >
                    {profile.certificate.name} certificate
                    <ArrowUpRight />
                  </a>
                </li>
              </ul>
            </div>
            <div
              role="img"
              aria-label="Photo placeholder"
              className="grid aspect-square place-items-center rounded-lg border border-line bg-surface font-mono text-sm text-muted md:aspect-[3/4]"
            >
              Photo
            </div>
          </div>
        </Section>

        <Section id="contact" index="05" title="Contact">
          <p className="max-w-xl text-2xl font-medium leading-snug tracking-tight text-fg">
            I am open to frontend and software engineering roles. If you are
            hiring, I would be glad to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-md bg-accent px-5 py-3 text-sm font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              {profile.email}
            </a>
          </div>
        </Section>

        <footer className="mt-8 border-t border-line pt-6 font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}. Built with TanStack Start.
        </footer>
      </main>
    </div>
  )
}
