import { experience } from "../../data/portfolio";
export function ExperienceSection() {
  return (
    <section
      id="work"
      className="border-y border-border bg-background px-5 py-24 md:px-10 md:py-36 lg:px-14"
    >
      <div className="mx-auto max-w-[1520px]">
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="section-label text-muted-foreground">02 / Selected experience</p>
            <h2 className="mt-5 font-display text-4xl md:text-6xl">
              Across industries.
              <br />
              <span className="text-muted-foreground">Always building.</span>
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-muted-foreground md:block">
            Work shaped across fintech, retail, aviation, banking and technology.
          </p>
        </div>
        <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
          {experience.map((name, i) => (
            <div
              key={name}
              className="experience-cell group relative flex min-h-44 flex-col justify-between border-b border-r border-border p-6 md:min-h-52"
            >
              <span className="text-xs text-muted-foreground">0{i + 1}</span>
              <h3 className="font-display text-2xl transition-transform duration-500 group-hover:-translate-y-1 md:text-3xl">
                {name}
              </h3>
              <span className="absolute right-5 top-5 size-1.5 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
