import { Coffee } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-foreground">
            <Coffee className="h-4 w-4 text-primary" />
            <span
              className="text-sm font-semibold tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Cup & Compass
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Curated coffee recommendations for every palate.
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cup & Compass
          </p>
        </div>
      </div>
    </footer>
  );
}
