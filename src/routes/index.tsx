import { createFileRoute } from "@tanstack/react-router";
import { CapabilitiesSection } from "../components/portfolio/CapabilitiesSection";
import { CommunitySection } from "../components/portfolio/CommunitySection";
import { ContactSection } from "../components/portfolio/ContactSection";
import { ExperienceSection } from "../components/portfolio/ExperienceSection";
import { HeroSection } from "../components/portfolio/HeroSection";
import { StorySection } from "../components/portfolio/StorySection";
import { ThinkingSection } from "../components/portfolio/ThinkingSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nathalia Chavez Nieme — Tech Founder · Builder · Creator" },
      {
        name: "description",
        content:
          "Nathalia Chavez Nieme brings technology, product, AI, strategy, business, design and execution together to build what matters.",
      },
      { property: "og:title", content: "Nathalia Chavez Nieme — Tech Founder · Builder · Creator" },
      {
        property: "og:description",
        content:
          "Technology, product and entrepreneurial thinking brought together with the discipline to execute.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <main className="overflow-hidden bg-background text-foreground">
      <HeroSection />
      <CapabilitiesSection />
      <ExperienceSection />
      <StorySection />
      <CommunitySection />
      <ThinkingSection />
      <ContactSection />
    </main>
  );
}
