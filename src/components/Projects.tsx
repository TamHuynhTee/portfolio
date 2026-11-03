import { projects } from '#/content/projects'
import type { Project } from '#/content/types'
import { ArrowUpRight } from './Icons'
import { TagChip } from './Section'

function ProjectVisual({ title }: { title: string }) {
  return (
    <div
      role="img"
      aria-label={`Screenshot placeholder for ${title}`}
      className="relative grid aspect-[16/10] place-items-center overflow-hidden rounded-lg border border-line bg-surface"
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(60% 80% at 20% 20%, var(--c-accent), transparent 70%)',
        }}
      />
      <span className="relative font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Screenshot coming soon
      </span>
    </div>
  )
}

function ProjectLinks({ links }: { links: Project['links'] }) {
  if (links.length === 0) return null
  return (
    <ul className="mt-4 flex gap-5 font-mono text-xs">
      {links.map((l) => (
        <li key={l.href}>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-fg transition-colors hover:text-accent"
          >
            {l.label}
            <ArrowUpRight />
          </a>
        </li>
      ))}
    </ul>
  )
}

function FeaturedProject({ project, flip }: { project: Project; flip: boolean }) {
  return (
    <article className="grid items-center gap-5 md:grid-cols-12">
      <div
        className={
          flip
            ? 'md:col-span-7 md:col-start-6 md:row-start-1'
            : 'md:col-span-7 md:col-start-1 md:row-start-1'
        }
      >
        <ProjectVisual title={project.title} />
      </div>
      <div
        className={`relative z-10 rounded-lg border border-line bg-surface p-6 md:row-start-1 md:col-span-6 md:shadow-xl md:shadow-black/10 ${
          flip ? 'md:col-start-1' : 'md:col-start-7'
        }`}
      >
        <p className="font-mono text-xs text-accent">Featured project</p>
        <h3 className="mt-2 text-lg font-medium text-fg">{project.title}</h3>
        <p className="mt-1 font-mono text-xs text-muted">
          {project.role} · {project.company} · {project.years}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.oneLiner}
        </p>
        <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-wider text-muted">
          What I built
        </p>
        <ul className="mt-2 flex list-disc flex-col gap-1 pl-5 text-sm text-muted marker:text-line">
          {project.built.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.stack.map((s) => (
            <TagChip key={s}>{s}</TagChip>
          ))}
        </ul>
        <ProjectLinks links={project.links} />
      </div>
    </article>
  )
}

function ProjectRow({ project }: { project: Project }) {
  return (
    <details className="group border-t border-line py-4 last:border-b">
      <summary className="flex cursor-pointer items-baseline justify-between gap-4">
        <span>
          <span className="font-medium text-fg transition-colors group-hover:text-accent">
            {project.title}
          </span>
          <span className="mt-1 block text-sm text-muted">
            {project.oneLiner}
          </span>
        </span>
        <span className="shrink-0 font-mono text-xs text-muted">
          {project.years}
        </span>
      </summary>
      <div className="mt-4 pl-0 md:pl-4">
        <p className="font-mono text-xs text-muted">
          {project.role} · {project.company} · team of {project.teamSize}
        </p>
        <ul className="mt-3 flex list-disc flex-col gap-1 pl-5 text-sm text-muted marker:text-line">
          {project.built.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.stack.map((s) => (
            <TagChip key={s}>{s}</TagChip>
          ))}
        </ul>
        <ProjectLinks links={project.links} />
      </div>
    </details>
  )
}

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-14">
        {featured.map((p, i) => (
          <FeaturedProject key={p.slug} project={p} flip={i % 2 === 1} />
        ))}
      </div>
      {rest.length > 0 && (
        <div>
          <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
            More projects
          </h3>
          {rest.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
      )}
    </div>
  )
}
