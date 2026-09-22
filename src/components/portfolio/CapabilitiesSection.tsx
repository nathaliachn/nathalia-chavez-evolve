import { motion } from "motion/react";
import { capabilities } from "../../data/portfolio";
export function CapabilitiesSection() {
  return (
    <section className="bg-paper text-ink px-5 py-24 md:px-10 md:py-36 lg:px-14">
      <div className="mx-auto max-w-[1520px]">
        <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr]">
          <div>
            <p className="section-label">01 / What I bring</p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-muted">
              A connected operating system for moving from possibility to reality.
            </p>
          </div>
          <div className="capability-list">
            {capabilities.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: i * 0.04 }}
                className="group flex items-center justify-between border-t border-ink-border py-4 md:py-5"
              >
                <span className="font-display text-3xl md:text-5xl">{item}</span>
                <span className="text-xs text-ink-muted">0{i + 1}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
