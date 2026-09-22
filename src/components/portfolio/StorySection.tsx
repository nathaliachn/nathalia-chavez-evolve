export function StorySection() {
  return (
    <section
      id="story"
      className="relative bg-paper px-5 py-24 text-ink md:px-10 md:py-36 lg:px-14"
    >
      <div className="mx-auto grid max-w-[1520px] gap-16 lg:grid-cols-2 lg:gap-24">
        <div className="relative min-h-[420px] border border-ink-border bg-ink p-8 text-paper md:min-h-[560px] md:p-12">
          <div className="track-lines absolute inset-8 opacity-40" />
          <div className="relative flex h-full flex-col justify-between">
            <p className="section-label text-paper-muted">03 / The story</p>
            <p className="font-display text-4xl leading-tight md:text-6xl">
              Performance
              <br />
              is a practice.
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-paper-muted">
              Focus. Repetition. Recovery. The courage to compete again.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-8 text-sm uppercase tracking-[0.16em] text-ink-muted">
            From high-performance sport to entrepreneurship
          </p>
          <h2 className="font-display text-4xl leading-[1.08] md:text-6xl">
            The arena changed.
            <br />
            The mindset didn’t.
          </h2>
          <div className="mt-10 grid gap-8 border-t border-ink-border pt-8 sm:grid-cols-2">
            <p className="text-base leading-relaxed text-ink-muted">
              A background in high-performance athletics shaped how Nathalia approaches technology
              and product: with discipline, adaptability and a bias toward action.
            </p>
            <p className="text-base leading-relaxed text-ink-muted">
              Today, that same energy drives her work at the intersection of invention, strategy and
              entrepreneurship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
