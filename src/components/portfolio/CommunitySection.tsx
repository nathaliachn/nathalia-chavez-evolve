import { Asterisk, AudioLines, Mic2 } from "lucide-react";
import { community } from "../../data/portfolio";
const icons = { asterisk: Asterisk, microphone: Mic2, audio: AudioLines };
export function CommunitySection() {
  return (
    <section className="bg-background px-5 py-24 md:px-10 md:py-36 lg:px-14">
      <div className="mx-auto max-w-[1520px]">
        <p className="section-label text-muted-foreground">04 / Community & media</p>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
          {community.map(({ type, title, icon }) => {
            const Icon = icons[icon];
            return (
              <article
                key={title}
                className="group flex min-h-64 flex-col justify-between bg-background p-7 md:p-9"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-5 text-accent" />
                  <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {type}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-3xl md:text-4xl">{title}</h3>
                  <div className="mt-5 h-px w-10 bg-accent transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
