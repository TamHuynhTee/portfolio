import { experience } from '#/content/experience'
import { TagChip } from './Section'

const fmt = new Intl.DateTimeFormat('en', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
})

function formatMonth(value: string) {
  return fmt.format(new Date(`${value}-01T00:00:00Z`))
}

export function Timeline() {
  return (
    <ol className="flex flex-col gap-10">
      {experience.map((job) => (
        <li
          key={`${job.company}-${job.start}`}
          className="grid gap-3 md:grid-cols-[9rem_1fr] md:gap-8"
        >
          <p className="font-mono text-xs uppercase tracking-wider text-muted md:pt-1">
            {formatMonth(job.start)} -{' '}
            {job.end ? formatMonth(job.end) : 'Present'}
          </p>
          <div>
            <h3 className="font-medium text-fg">
              {job.title} <span className="text-muted">·</span> {job.company}
              {job.track === 'fullstack' && (
                <span className="ml-2 rounded-full border border-accent/50 px-2 py-0.5 align-middle font-mono text-[0.65rem] text-accent">
                  full-stack
                </span>
              )}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {job.project} · team of {job.teamSize}
            </p>
            <ul className="mt-4 flex list-disc flex-col gap-2 pl-5 text-sm leading-relaxed text-muted marker:text-line">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
              {job.stack.map((s) => (
                <TagChip key={s}>{s}</TagChip>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  )
}
