import { ideas } from "../../data/portfolio";
export function ThinkingSection() {
  return (
    <section
      id="ideas"
      className="border-t border-border bg-background px-5 py-24 md:px-10 md:py-36 lg:px-14"
    >
      <div className="mx-auto max-w-[1520px]">
        <div className="grid gap-12 lg:grid-cols-[.55fr_1.45fr]">
          <p className="section-label text-muted-foreground">05 / Thinking</p>
          <div>
            <h2 className="font-display text-5xl md:text-7xl">
              Ideas worth
              <br />
              <span className="text-gradient">building on.</span>
            </h2>
            <div className="mt-14 divide-y divide-border border-y border-border">
              {ideas.map((idea, i) => (
                <div key={idea} className="grid gap-4 py-7 sm:grid-cols-[3rem_1fr]">
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  <p className="text-xl leading-snug md:text-2xl">{idea}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
