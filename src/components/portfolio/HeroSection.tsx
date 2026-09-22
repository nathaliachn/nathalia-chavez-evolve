import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";
import portrait from "../../assets/nathalia-portrait.jpg";

export function HeroSection() {
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
    <section onMouseMove={updateLight} className="relative min-h-[92svh] border-b border-border">
      <motion.div
        aria-hidden
        style={{ backgroundImage: light }}
        className="pointer-events-none absolute inset-0 opacity-80"
      />
      <div aria-hidden className="hero-grid absolute inset-0 opacity-45" />
      <header className="relative z-20 mx-auto flex max-w-[1520px] items-center justify-between px-5 py-6 md:px-10 lg:px-14">
        <a
          href="#top"
          className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground"
        >
          NCN<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-xs font-medium text-muted-foreground md:flex">
          <a className="transition-colors hover:text-foreground" href="#work">
            Work
          </a>
          <a className="transition-colors hover:text-foreground" href="#story">
            Story
          </a>
          <a className="transition-colors hover:text-foreground" href="#ideas">
            Thinking
          </a>
        </nav>
        <a
          href="#connect"
          className="inline-flex items-center gap-2 border-b border-accent pb-1 text-xs font-semibold uppercase tracking-[0.14em] text-foreground"
        >
          Let’s talk <ArrowUpRight className="size-3.5" />
        </a>
      </header>
      <div
        id="top"
        className="relative z-10 mx-auto grid min-h-[calc(92svh-88px)] max-w-[1520px] items-end px-5 pb-9 md:px-10 lg:grid-cols-[1.15fr_.85fr] lg:px-14 lg:pb-12"
      >
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 pb-8 lg:pb-12"
        >
          <p className="mb-5 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-10 bg-accent" /> Tech Founder · Builder · Creator
          </p>
          <h1 className="font-display max-w-5xl text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[0.84] tracking-normal">
            Nathalia
            <br />
            Chavez <span className="text-gradient">Nieme.</span>
          </h1>
          <div className="mt-8 flex max-w-2xl flex-col gap-7 border-l border-accent pl-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              I connect technology, product and business to turn ambitious ideas into meaningful
              ventures.
            </p>
            <a
              href="#work"
              aria-label="Explore the work"
              className="group flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface-glass text-foreground backdrop-blur-md transition-colors hover:border-accent"
            >
              <ArrowDownRight className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="portrait-wrap relative mx-auto h-[47vh] w-full max-w-xl lg:absolute lg:bottom-0 lg:right-10 lg:h-[82vh] lg:w-[44vw] lg:max-w-2xl"
        >
          <div aria-hidden className="absolute inset-6 rounded-full border border-border/60" />
          <img
            src={portrait}
            alt="Editorial portrait representing Nathalia Chavez Nieme"
            width={1280}
            height={1600}
            className="h-full w-full object-cover object-top grayscale-[12%] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
          />
          <div aria-hidden className="portrait-sheen absolute inset-0" />
        </motion.div>
      </div>
      <div className="relative z-20 mx-auto flex max-w-[1520px] justify-between px-5 pb-5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground md:px-10 lg:px-14">
        <span>Santiago · Global</span>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
