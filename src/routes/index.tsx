import { createFileRoute } from "@tanstack/react-router";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Asterisk, AudioLines, Mic2 } from "lucide-react";
import type { MouseEvent } from "react";
import portrait from "../assets/nathalia-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nathalia Chavez Nieme — Tech Founder · Builder · Creator" },
      { name: "description", content: "Nathalia Chavez Nieme brings technology, product, AI, strategy, business, design and execution together to build what matters." },
      { property: "og:title", content: "Nathalia Chavez Nieme — Tech Founder · Builder · Creator" },
      { property: "og:description", content: "Technology, product and entrepreneurial thinking brought together with the discipline to execute." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const capabilities = ["Technology", "Product", "AI", "Strategy", "Business", "Design", "Execution"];
const experience = ["Personal Pay", "Farmacity", "British Airways", "Banco de Chile", "M720", "Globant"];
const community = [
  { type: "Community", title: "Women in Tech", icon: Asterisk },
  { type: "Talk", title: "Laboratoria", icon: Mic2 },
  { type: "Podcast", title: "Conversations on building", icon: AudioLines },
  { type: "Community", title: "Women Techmakers", icon: Asterisk },
];

function Portfolio() {
  const pointerX = useMotionValue(50);
  const pointerY = useMotionValue(50);
  const smoothX = useSpring(pointerX, { stiffness: 70, damping: 20 });
  const smoothY = useSpring(pointerY, { stiffness: 70, damping: 20 });
  const light = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, var(--hero-glow), transparent 34%)`;

  const updateLight = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set(((event.clientX - rect.left) / rect.width) * 100);
    pointerY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <section onMouseMove={updateLight} className="relative min-h-[92svh] border-b border-border">
        <motion.div aria-hidden style={{ backgroundImage: light }} className="pointer-events-none absolute inset-0 opacity-80" />
        <div aria-hidden className="hero-grid absolute inset-0 opacity-45" />
        <header className="relative z-20 mx-auto flex max-w-[1520px] items-center justify-between px-5 py-6 md:px-10 lg:px-14">
          <a href="#top" className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground">NCN<span className="text-accent">.</span></a>
          <nav className="hidden items-center gap-8 text-xs font-medium text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#work">Work</a>
            <a className="transition-colors hover:text-foreground" href="#story">Story</a>
            <a className="transition-colors hover:text-foreground" href="#ideas">Thinking</a>
          </nav>
          <a href="#connect" className="inline-flex items-center gap-2 border-b border-accent pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Let’s talk <ArrowUpRight className="size-3.5" /></a>
        </header>

        <div id="top" className="relative z-10 mx-auto grid min-h-[calc(92svh-88px)] max-w-[1520px] items-end px-5 pb-9 md:px-10 lg:grid-cols-[1.15fr_.85fr] lg:px-14 lg:pb-12">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="relative z-10 pb-8 lg:pb-12">
            <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"><span className="h-px w-10 bg-accent" /> Tech Founder · Builder · Creator</p>
            <h1 className="font-display max-w-5xl text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[0.84] tracking-normal">
              Nathalia<br />Chavez <span className="text-gradient">Nieme.</span>
            </h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-7 border-l border-accent pl-5 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">I connect technology, product and business to turn ambitious ideas into meaningful ventures.</p>
              <a href="#work" aria-label="Explore the work" className="group flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-glass text-foreground backdrop-blur-md transition-colors hover:border-accent"><ArrowDownRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }} className="portrait-wrap relative mx-auto h-[47vh] w-full max-w-xl lg:absolute lg:bottom-0 lg:right-10 lg:h-[82vh] lg:w-[44vw] lg:max-w-2xl">
            <div aria-hidden className="absolute inset-6 rounded-full border border-border/60" />
            <img src={portrait} alt="Editorial portrait representing Nathalia Chavez Nieme" width={1280} height={1600} className="h-full w-full object-cover object-top grayscale-[12%] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]" />
            <div aria-hidden className="portrait-sheen absolute inset-0" />
          </motion.div>
        </div>
        <div className="relative z-20 mx-auto flex max-w-[1520px] justify-between px-5 pb-5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:px-10 lg:px-14">
          <span>Santiago · Global</span><span>Scroll to explore</span>
        </div>
      </section>

      <section className="bg-paper text-ink px-5 py-24 md:px-10 md:py-36 lg:px-14">
        <div className="mx-auto max-w-[1520px]">
          <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr]">
            <div><p className="section-label">01 / What I bring</p><p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">A connected operating system for moving from possibility to reality.</p></div>
            <div className="capability-list">
              {capabilities.map((item, i) => (
                <motion.div key={item} initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ delay: i * 0.04 }} className="group flex items-center justify-between border-t border-ink-border py-4 md:py-5">
                  <span className="font-display text-3xl md:text-5xl">{item}</span><span className="text-xs text-ink-muted">0{i + 1}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="border-y border-border bg-background px-5 py-24 md:px-10 md:py-36 lg:px-14">
        <div className="mx-auto max-w-[1520px]">
          <div className="mb-14 flex items-end justify-between"><div><p className="section-label text-muted-foreground">02 / Selected experience</p><h2 className="mt-5 font-display text-4xl md:text-6xl">Across industries.<br /><span className="text-muted-foreground">Always building.</span></h2></div><p className="hidden max-w-xs text-right text-sm text-muted-foreground md:block">Work shaped across fintech, retail, aviation, banking and technology.</p></div>
          <div className="grid border-l border-t border-border sm:grid-cols-2 lg:grid-cols-3">
            {experience.map((name, i) => <div key={name} className="experience-cell group relative flex min-h-44 flex-col justify-between border-b border-r border-border p-6 md:min-h-52"><span className="text-xs text-muted-foreground">0{i + 1}</span><h3 className="font-display text-2xl transition-transform duration-500 group-hover:-translate-y-1 md:text-3xl">{name}</h3><span className="absolute right-5 top-5 size-1.5 rounded-full bg-accent opacity-0 transition-opacity group-hover:opacity-100" /></div>)}
          </div>
        </div>
      </section>

      <section id="story" className="relative bg-paper px-5 py-24 text-ink md:px-10 md:py-36 lg:px-14">
        <div className="mx-auto grid max-w-[1520px] gap-16 lg:grid-cols-2 lg:gap-24">
          <div className="relative min-h-[420px] border border-ink-border bg-ink p-8 text-paper md:min-h-[560px] md:p-12">
            <div className="track-lines absolute inset-8 opacity-40" />
            <div className="relative flex h-full flex-col justify-between"><p className="section-label text-paper-muted">03 / The story</p><p className="font-display text-4xl leading-tight md:text-6xl">Performance<br />is a practice.</p><p className="max-w-xs text-sm leading-relaxed text-paper-muted">Focus. Repetition. Recovery. The courage to compete again.</p></div>
          </div>
          <div className="flex flex-col justify-center"><p className="mb-8 text-sm uppercase tracking-[0.16em] text-ink-muted">From high-performance sport to entrepreneurship</p><h2 className="font-display text-4xl leading-[1.08] md:text-6xl">The arena changed.<br />The mindset didn’t.</h2><div className="mt-10 grid gap-8 border-t border-ink-border pt-8 sm:grid-cols-2"><p className="text-base leading-relaxed text-ink-muted">A background in high-performance athletics shaped how Nathalia approaches technology and product: with discipline, adaptability and a bias toward action.</p><p className="text-base leading-relaxed text-ink-muted">Today, that same energy drives her work at the intersection of invention, strategy and entrepreneurship.</p></div></div>
        </div>
      </section>

      <section className="bg-background px-5 py-24 md:px-10 md:py-36 lg:px-14">
        <div className="mx-auto max-w-[1520px]"><p className="section-label text-muted-foreground">04 / Community & media</p><div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {community.map(({ type, title, icon: Icon }) => <article key={title} className="group flex min-h-64 flex-col justify-between bg-background p-7 md:p-9"><div className="flex items-center justify-between"><Icon className="size-5 text-accent" /><span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{type}</span></div><div><h3 className="font-display text-3xl md:text-4xl">{title}</h3><div className="mt-5 h-px w-10 bg-accent transition-all duration-500 group-hover:w-full" /></div></article>)}
        </div></div>
      </section>

      <section id="ideas" className="border-t border-border bg-background px-5 py-24 md:px-10 md:py-36 lg:px-14">
        <div className="mx-auto max-w-[1520px]"><div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr]"><p className="section-label text-muted-foreground">05 / Thinking</p><div><h2 className="font-display text-5xl md:text-7xl">Ideas worth<br /><span className="text-gradient">building on.</span></h2><div className="mt-14 divide-y divide-border border-y border-border">{["Technology is a means. Transformation is the goal.", "The best products align human need with business truth.", "Execution turns conviction into momentum."].map((idea, i) => <div key={idea} className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr]"><span className="text-xs text-muted-foreground">0{i + 1}</span><p className="text-xl leading-snug md:text-2xl">{idea}</p></div>)}</div></div></div></div>
      </section>

      <section id="connect" className="relative overflow-hidden bg-paper px-5 py-24 text-ink md:px-10 md:py-36 lg:px-14">
        <div aria-hidden className="cta-glow absolute inset-0" />
        <div className="relative mx-auto max-w-[1520px]"><p className="section-label text-ink-muted">06 / Build together</p><div className="mt-14 grid gap-12 lg:grid-cols-[1.5fr_.5fr] lg:items-end"><h2 className="font-display text-[clamp(3.5rem,8vw,8rem)] leading-[.9]">Have something<br />ambitious in mind?</h2><div><p className="mb-8 text-base leading-relaxed text-ink-muted">For founders, investors, partners and clients ready to turn complexity into momentum.</p><a href="mailto:?subject=Partnership%20inquiry" className="group inline-flex items-center gap-3 border-b border-ink pb-2 text-sm font-semibold uppercase tracking-[0.14em]">Start a conversation <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a></div></div><footer className="mt-28 flex flex-col gap-4 border-t border-ink-border pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between"><span>© 2026 Nathalia Chavez Nieme</span><span>Tech Founder · Builder · Creator</span></footer></div>
      </section>
    </main>
  );
}
