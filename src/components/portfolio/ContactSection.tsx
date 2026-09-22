import { ArrowUpRight } from "lucide-react";
export function ContactSection() {
  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-paper px-5 py-24 text-ink md:px-10 md:py-36 lg:px-14"
    >
      <div aria-hidden className="cta-glow absolute inset-0" />
      <div className="relative mx-auto max-w-[1520px]">
        <p className="section-label text-ink-muted">06 / Build together</p>
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.5fr_.5fr] lg:items-end">
          <h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[.9]">
            Have something
            <br />
            ambitious in mind?
          </h2>
          <div>
            <p className="mb-8 text-base leading-relaxed text-ink-muted">
              For founders, investors, partners and clients ready to turn complexity into momentum.
            </p>
            <a
              href="mailto:?subject=Partnership%20inquiry"
              className="group inline-flex items-center gap-3 border-b border-ink pb-2 text-sm font-semibold uppercase tracking-[0.14em]"
            >
              Start a conversation{" "}
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
        <footer className="mt-28 flex flex-col gap-4 border-t border-ink-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Nathalia Chavez Nieme</span>
          <span>Tech Founder · Builder · Creator</span>
        </footer>
      </div>
    </section>
  );
}
