import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Star, Flame, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import coffeeBeans from "@/assets/coffee-beans.jpg";
import pourOver from "@/assets/pour-over.jpg";
import heroCoffee from "@/assets/hero-coffee.jpg";

export const Route = createFileRoute("/recommendations")({
  head: () => ({
    meta: [
      { title: "Coffee Recommendations — Cup & Compass" },
      { name: "description", content: "Browse our curated coffee bean recommendations by roast level, origin, and flavor profile." },
      { property: "og:title", content: "Coffee Recommendations — Cup & Compass" },
      { property: "og:description", content: "Browse our curated coffee bean recommendations by roast level, origin, and flavor profile." },
    ],
  }),
  component: Recommendations,
});

const coffees = [
  {
    id: 1,
    name: "Guatemala Huehuetenango",
    roaster: "Heart Coffee Roasters",
    origin: "Guatemala",
    roastLevel: "Medium",
    rating: 4.9,
    flavorNotes: ["Dark Chocolate", "Caramel", "Orange Zest"],
    description: "Silky body with rich cocoa sweetness and a bright citrus finish.",
    image: heroCoffee,
    price: "$22",
  },
  {
    id: 2,
    name: "Ethiopia Yirgacheffe",
    roaster: "Counter Culture",
    origin: "Ethiopia",
    roastLevel: "Light",
    rating: 4.8,
    flavorNotes: ["Jasmine", "Bergamot", "Lemon"],
    description: "Floral and tea-like with dazzling clarity and a clean finish.",
    image: coffeeBeans,
    price: "$24",
  },
  {
    id: 3,
    name: "Colombia Nariño",
    roaster: "Intelligentsia",
    origin: "Colombia",
    roastLevel: "Medium",
    rating: 4.7,
    flavorNotes: ["Brown Sugar", "Red Apple", "Walnut"],
    description: "Classic balance of sweetness and acidity with a nutty backbone.",
    image: pourOver,
    price: "$20",
  },
  {
    id: 4,
    name: "Sumatra Mandheling",
    roaster: "Blue Bottle",
    origin: "Indonesia",
    roastLevel: "Dark",
    rating: 4.6,
    flavorNotes: ["Earth", "Dark Chocolate", "Clove"],
    description: "Full-bodied and low-acid with deep, savory complexity.",
    image: coffeeBeans,
    price: "$21",
  },
  {
    id: 5,
    name: "Kenya AA",
    roaster: "Stumptown",
    origin: "Kenya",
    roastLevel: "Light",
    rating: 4.9,
    flavorNotes: ["Blackcurrant", "Tomato", "Grapefruit"],
    description: "Vivid, juicy, and unmistakably bold with a wine-like acidity.",
    image: pourOver,
    price: "$26",
  },
  {
    id: 6,
    name: "Brazil Cerrado",
    roaster: "Verve Coffee",
    origin: "Brazil",
    roastLevel: "Medium-Dark",
    rating: 4.5,
    flavorNotes: ["Peanut", "Milk Chocolate", "Toast"],
    description: " approachable and comforting with a creamy, nutty profile.",
    image: coffeeBeans,
    price: "$19",
  },
  {
    id: 7,
    name: "Costa Rica Tarrazú",
    roaster: "Joe Coffee",
    origin: "Costa Rica",
    roastLevel: "Medium",
    rating: 4.7,
    flavorNotes: ["Honey", "Apricot", "Almond"],
    description: "Clean and sweet with a honeyed body and stone-fruit brightness.",
    image: pourOver,
    price: "$23",
  },
  {
    id: 8,
    name: "Rwanda Musasa",
    roaster: "La Colombe",
    origin: "Rwanda",
    roastLevel: "Light",
    rating: 4.8,
    flavorNotes: ["Plum", "Caramel", "Black Tea"],
    description: "Elegant and layered with a lingering tea-like finish.",
    image: coffeeBeans,
    price: "$25",
  },
];

const roastFilters = ["All", "Light", "Medium", "Medium-Dark", "Dark"];

function Recommendations() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredCoffees =
    activeFilter === "All" ? coffees : coffees.filter((c) => c.roastLevel === activeFilter);

  return (
    <div className="bg-background">
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-6 max-w-2xl">
          <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
            The collection
          </span>
          <h1
            className="mt-3 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Coffee recommendations
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Every bean here has been tasted, brewed, and scored. Filter by roast level to find the right match for your morning ritual.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {roastFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeFilter === filter
                  ? "bg-primary text-primary-foreground"
                  : "border border-border/60 bg-background text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredCoffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </div>

        {filteredCoffees.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-muted-foreground">No recommendations match this roast level yet.</p>
            <Button variant="outline" className="mt-4 rounded-full" onClick={() => setActiveFilter("All")}>
              Show all coffees
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}

function CoffeeCard({
  coffee,
}: {
  coffee: {
    id: number;
    name: string;
    roaster: string;
    origin: string;
    roastLevel: string;
    rating: number;
    flavorNotes: string[];
    description: string;
    image: string;
    price: string;
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
        <p className="text-sm text-muted-foreground">{coffee.description}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
          <div className="flex flex-wrap gap-2">
            {coffee.flavorNotes.slice(0, 2).map((note) => (
              <span
                key={note}
                className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground"
              >
                {note}
              </span>
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">{coffee.price}</span>
        </div>
      </div>
    </div>
  );
}
