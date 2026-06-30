import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Star, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCoffee from "@/assets/hero-coffee.jpg";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import pourOver from "@/assets/pour-over.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cup & Compass — Curated Coffee Recommendations" },
      { name: "description", content: "Discover exceptional coffee beans, brewing guides, and tasting notes from around the world." },
      { property: "og:title", content: "Cup & Compass — Curated Coffee Recommendations" },
      { property: "og:description", content: "Discover exceptional coffee beans, brewing guides, and tasting notes from around the world." },
      { property: "og:image", content: heroCoffee },
      { name: "twitter:image", content: heroCoffee },
    ],
  }),
  component: Index,
});

const featuredCoffee = {
  name: "Guatemala Huehuetenango",
  roaster: "Heart Coffee Roasters",
  origin: "Guatemala",
  roastLevel: "Medium",
  rating: 4.9,
  flavorNotes: ["Dark Chocolate", "Caramel", "Orange Zest"],
  description:
    "A beautifully balanced single-origin with a silky body, rich cocoa sweetness, and a bright citrus finish. From the highlands of western Guatemala, this is our current pick for pour-over mornings.",
};

const recentPicks = [
  {
    name: "Ethiopia Yirgacheffe",
    roaster: "Counter Culture",
    origin: "Ethiopia",
    roastLevel: "Light",
    rating: 4.8,
    flavorNotes: ["Jasmine", "Bergamot", "Lemon"],
    image: coffeeBeans,
  },
  {
    name: "Colombia Nariño",
    roaster: "Intelligentsia",
    origin: "Colombia",
    roastLevel: "Medium",
    rating: 4.7,
    flavorNotes: ["Brown Sugar", "Red Apple", "Walnut"],
    image: pourOver,
  },
  {
    name: "Sumatra Mandheling",
    roaster: "Blue Bottle",
    origin: "Indonesia",
    roastLevel: "Dark",
    rating: 4.6,
    flavorNotes: ["Earth", "Dark Chocolate", "Clove"],
    image: coffeeBeans,
  },
  {
    name: "Kenya AA",
    roaster: "Stumptown",
    origin: "Kenya",
    roastLevel: "Light",
    rating: 4.9,
    flavorNotes: ["Blackcurrant", "Tomato", "Grapefruit"],
    image: pourOver,
  },
];

function Index() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col items-start gap-6">
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              Curated for the curious
            </span>
            <h1
              className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Discover your perfect cup.
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Exceptional coffee beans, honest tasting notes, and simple brewing guides for everyone who believes the morning ritual deserves better.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/recommendations">
                  Browse recommendations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <Link to="/brewing">Explore brewing</Link>
              </Button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-secondary">
            <img
              src={heroCoffee}
              alt="Artisan coffee beans on a warm cream linen surface"
              className="h-full w-full object-cover"
              width={1280}
              height={800}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Featured Recommendation */}
      <section className="border-y border-border/40 bg-secondary/50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-10 flex items-center justify-between">
            <h2
              className="text-3xl font-semibold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Featured pick
            </h2>
            <Button asChild variant="ghost">
              <Link to="/recommendations">
                View all
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-10 rounded-2xl border border-border/40 bg-card p-6 sm:p-10 lg:grid-cols-2 lg:items-center">
            <div className="order-2 flex flex-col gap-6 lg:order-1">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {featuredCoffee.origin}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Flame className="h-4 w-4" />
                  {featuredCoffee.roastLevel} roast
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  {featuredCoffee.rating}
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">{featuredCoffee.roaster}</p>
                <h3
                  className="mt-1 text-3xl font-semibold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {featuredCoffee.name}
                </h3>
              </div>
              <p className="text-lg text-muted-foreground">{featuredCoffee.description}</p>
              <div className="flex flex-wrap gap-2">
                {featuredCoffee.flavorNotes.map((note) => (
                  <span
                    key={note}
                    className="rounded-full border border-border/60 bg-background px-3 py-1 text-sm text-foreground"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
            <div className="order-1 overflow-hidden rounded-xl lg:order-2">
              <img
                src={heroCoffee}
                alt={featuredCoffee.name}
                className="aspect-[4/3] w-full object-cover"
                width={1280}
                height={800}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recent Picks */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <h2
          className="mb-10 text-3xl font-semibold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Recent picks
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {recentPicks.map((coffee) => (
            <CoffeeCard key={coffee.name} coffee={coffee} />
          ))}
        </div>
      </section>

      {/* Brewing Spotlight */}
      <section className="border-t border-border/40 bg-secondary/30">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <img
                src={pourOver}
                alt="Pour-over coffee brewing setup"
                className="aspect-[4/3] w-full object-cover"
                width={800}
                height={600}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
                Brewing spotlight
              </span>
              <h2
                className="text-3xl font-semibold tracking-tight text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The art of pour-over.
              </h2>
              <p className="text-lg text-muted-foreground">
                A clean, rewarding method that highlights a coffee's brightest notes. With a gooseneck kettle, a steady hand, and a little patience, you can brew a cup that rivals your favorite café.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Grind medium-fine, like sea salt.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Use a 1:16 coffee-to-water ratio.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                  <span>Pour in slow, concentric circles.</span>
                </li>
              </ul>
              <div className="pt-2">
                <Button asChild className="rounded-full px-6">
                  <Link to="/brewing">
                    Read the full guide
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function CoffeeCard({
  coffee,
}: {
  coffee: {
    name: string;
    roaster: string;
    origin: string;
    roastLevel: string;
    rating: number;
    flavorNotes: string[];
    image: string;
  };
}) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-border/40 bg-card transition-shadow hover:shadow-md">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={coffee.image}
          alt={coffee.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          width={800}
          height={600}
          loading="lazy"
        />
        <div className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 text-xs font-medium text-foreground backdrop-blur-sm">
          <Star className="h-3 w-3 fill-primary text-primary" />
          {coffee.rating}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {coffee.origin}
          </span>
          <span className="inline-flex items-center gap-1">
            <Flame className="h-3 w-3" />
            {coffee.roastLevel}
          </span>
        </div>
        <div>
          <p className="text-xs font-medium text-muted-foreground">{coffee.roaster}</p>
          <h3
            className="mt-0.5 text-lg font-semibold leading-snug text-foreground"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {coffee.name}
          </h3>
        </div>
        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {coffee.flavorNotes.slice(0, 2).map((note) => (
            <span
              key={note}
              className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
            >
              {note}
            </span>
          ))}
          {coffee.flavorNotes.length > 2 && (
            <span className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
              +{coffee.flavorNotes.length - 2}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
