import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Mail, MapPin, Star } from "lucide-react";
import heroCoffee from "@/assets/hero-coffee.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Cup & Compass" },
      { name: "description", content: "Learn how Cup & Compass curates coffee recommendations and brewing guides." },
      { property: "og:title", content: "About — Cup & Compass" },
      { property: "og:description", content: "Learn how Cup & Compass curates coffee recommendations and brewing guides." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              About us
            </span>
            <h1
              className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Honest notes for better mornings.
            </h1>
            <p className="text-lg text-muted-foreground">
              Cup & Compass is a small, independent guide to exceptional coffee. We taste beans from roasters around the world, write down what we notice, and share the brewing methods that make them shine.
            </p>
            <p className="text-lg text-muted-foreground">
              No sponsored placements, no inflated scores. Just clear tasting notes, reliable ratios, and a passion for the ritual of a well-made cup.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="mailto:hello@cupandcompass.com"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/90"
              >
                <Mail className="h-4 w-4" />
                hello@cupandcompass.com
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={heroCoffee}
              alt="Coffee beans and brewing equipment on a warm surface"
              className="aspect-[4/3] w-full object-cover"
              width={1280}
              height={800}
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-24 grid gap-8 sm:grid-cols-3">
          <ValueCard
            icon={Coffee}
            title="Taste first"
            description="Every recommendation is based on a fresh cup, not marketing copy. We brew each bean the way it's meant to be brewed."
          />
          <ValueCard
            icon={MapPin}
            title="Traceable origins"
            description="We favor single-origin coffees with clear sourcing, so you know where your beans come from and who grew them."
          />
          <ValueCard
            icon={Star}
            title="Simple scores"
            description="Our ratings reflect flavor, balance, and repeatability. We explain the score, not hide behind a number."
          />
        </div>
      </section>
    </div>
  );
}

function ValueCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Coffee;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border/40 bg-card p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <h3
        className="text-xl font-semibold text-foreground"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
