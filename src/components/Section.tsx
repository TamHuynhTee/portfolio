import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
};

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-10 py-12 lg:py-16"
    >
      <h2
        id={`${id}-title`}
        className="mb-10 flex items-baseline gap-3 text-2xl font-semibold tracking-tight text-fg sm:text-3xl"
      >
        <span className="font-mono text-large font-medium text-accent sm:text-2xl">
          {index}.
        </span>
        {title}
        <span
          aria-hidden
          className="h-px flex-1 translate-y-[-0.25em] bg-line"
        />
      </h2>
      {children}
    </section>
  );
}

export function TagChip({ children }: { children: ReactNode }) {
  return (
    <li className="rounded-full border border-line px-2.5 py-1 font-mono text-[0.7rem] text-muted">
      {children}
    </li>
  );
}
