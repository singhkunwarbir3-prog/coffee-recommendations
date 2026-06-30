import { createFileRoute } from "@tanstack/react-router";
import { Clock, Droplets, Scale, Thermometer } from "lucide-react";
import pourOver from "@/assets/pour-over.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";

export const Route = createFileRoute("/brewing")({
  head: () => ({
    meta: [
      { title: "Brewing Guides — Cup & Compass" },
      { name: "description", content: "Step-by-step brewing guides for pour-over, French press, AeroPress, and espresso." },
      { property: "og:title", content: "Brewing Guides — Cup & Compass" },
      { property: "og:description", content: "Step-by-step brewing guides for pour-over, French press, AeroPress, and espresso." },
    ],
  }),
  component: Brewing,
});

const methods = [
  {
    name: "Pour-Over",
    subtitle: "Clean, bright, and expressive",
    image: pourOver,
    description:
      "Pour-over is the best way to taste a coffee's full character. The slow, controlled extraction highlights delicate floral, fruity, and tea-like notes.",
    specs: [
      { icon: Scale, label: "Ratio", value: "1:16" },
      { icon: Droplets, label: "Water", value: "320 ml" },
      { icon: Scale, label: "Coffee", value: "20 g" },
      { icon: Thermometer, label: "Temp", value: "93°C" },
      { icon: Clock, label: "Time", value: "3:00" },
    ],
    steps: [
      "Rinse the filter with hot water to remove paper taste and preheat the brewer.",
      "Add medium-fine grounds and pour twice the coffee weight in water to bloom for 45 seconds.",
      "Pour in slow concentric circles until you reach the target weight.",
      "Let the water draw down fully, then swirl and serve.",
    ],
  },
  {
    name: "French Press",
    subtitle: "Rich, full-bodied, and forgiving",
    image: coffeeBeans,
    description:
      "Immersion brewing gives a heavier mouthfeel and more robust flavor. It's the ideal method when you want a cozy, low-effort cup.",
    specs: [
      { icon: Scale, label: "Ratio", value: "1:15" },
      { icon: Droplets, label: "Water", value: "450 ml" },
      { icon: Scale, label: "Coffee", value: "30 g" },
      { icon: Thermometer, label: "Temp", value: "94°C" },
      { icon: Clock, label: "Time", value: "4:00" },
    ],
    steps: [
      "Preheat the press with hot water, then discard the water.",
      "Add coarse grounds and pour all the hot water in one gentle pour.",
      "Stir once, place the lid, and steep for four minutes.",
      "Press the plunger down slowly and pour immediately to stop extraction.",
    ],
  },
  {
    name: "AeroPress",
    subtitle: "Versatile, smooth, and quick",
    image: pourOver,
    description:
      "The AeroPress can mimic everything from an espresso-style concentrate to a clean filtered cup. It's compact, fast, and endlessly tweakable.",
    specs: [
      { icon: Scale, label: "Ratio", value: "1:13" },
      { icon: Droplets, label: "Water", value: "200 ml" },
      { icon: Scale, label: "Coffee", value: "15 g" },
      { icon: Thermometer, label: "Temp", value: "88°C" },
      { icon: Clock, label: "Time", value: "2:00" },
    ],
    steps: [
      "Insert the plunger slightly into the chamber and place it upright.",
      "Add fine-to-medium grounds and pour hot water to the desired weight.",
      "Stir for 10 seconds, then attach the cap with a wet filter.",
      "After one minute, flip onto your cup and press gently for 30 seconds.",
    ],
  },
  {
    name: "Espresso",
    subtitle: "Concentrated, intense, and complex",
    image: coffeeBeans,
    description:
      "Espresso extracts under pressure to create a syrupy, aromatic shot with a layer of crema. It's the foundation of every great coffee bar drink.",
    specs: [
      { icon: Scale, label: "Ratio", value: "1:2" },
      { icon: Droplets, label: "Yield", value: "36 g" },
      { icon: Scale, label: "Dose", value: "18 g" },
      { icon: Thermometer, label: "Temp", value: "93°C" },
      { icon: Clock, label: "Time", value: "25-30 s" },
    ],
    steps: [
      "Grind fine and distribute the grounds evenly in the portafilter.",
      "Tamp with firm, level pressure.",
      "Lock in the portafilter and start the shot immediately.",
      "Aim for a steady, mouse-tail stream and stop at the target yield.",
    ],
  },
];

function Brewing() {
  return (
    <div className="bg-background">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-16 max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Brew better
          </span>
          <h1
            className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Brewing guides
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Four trusted methods, each with clear ratios, temperatures, and step-by-step instructions to help you brew with confidence.
          </p>
        </div>

        <div className="space-y-20">
          {methods.map((method, index) => (
            <MethodCard key={method.name} method={method} reversed={index % 2 === 1} />
          ))}
        </div>

        <div className="mt-24 rounded-2xl border border-border/40 bg-secondary/40 p-8 sm:p-12">
          <h2
            className="text-2xl font-semibold tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Quick tips for any method
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Tip title="Use fresh water" description="Filtered water heated just off the boil helps avoid bitterness and off-flavors." />
            <Tip title="Grind just before brewing" description="Whole beans stay fresh longer. Grind right before you brew for maximum aroma." />
            <Tip title="Weigh your dose" description="A simple scale removes guesswork and makes your recipe repeatable." />
            <Tip title="Preheat everything" description="Rinse your filter, cup, and brewer so temperature stays stable." />
            <Tip title="Bloom your grounds" description="A short pre-wetting releases CO₂ and sets up even extraction." />
            <Tip title="Taste and adjust" description="Too sour? Grind finer. Too bitter? Grind coarser or shorten the brew time." />
          </div>
        </div>
      </section>
    </div>
  );
}

function MethodCard({
  method,
  reversed,
}: {
  method: {
    name: string;
    subtitle: string;
    image: string;
    description: string;
    specs: { icon: typeof Scale; label: string; value: string }[];
    steps: string[];
  };
  reversed: boolean;
}) {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-2">
      <div className={reversed ? "lg:order-2" : ""}>
        <div className="overflow-hidden rounded-2xl">
          <img
            src={method.image}
            alt={method.name}
            className="aspect-[4/3] w-full object-cover"
            width={800}
            height={600}
            loading="lazy"
          />
        </div>
      </div>
      <div className={reversed ? "lg:order-1" : ""}>
        <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {method.subtitle}
        </span>
        <h2
          className="mt-2 text-3xl font-semibold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {method.name}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">{method.description}</p>

        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5">
          {method.specs.map((spec) => (
            <div
              key={spec.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-border/40 bg-card p-3 text-center"
            >
              <spec.icon className="h-4 w-4 text-primary" />
              <span className="text-xs text-muted-foreground">{spec.label}</span>
              <span className="text-sm font-semibold text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>

        <ol className="mt-8 space-y-4">
          {method.steps.map((step, index) => (
            <li key={index} className="flex gap-4">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <span className="text-muted-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function Tip({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h3
        className="text-lg font-semibold text-foreground"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
