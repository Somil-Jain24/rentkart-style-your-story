import { createFileRoute, Link } from "@tanstack/react-router";
import { SlidersHorizontal, ChevronDown, MapPin, X } from "lucide-react";
import { BuyerHeader } from "@/components/rentkart/BuyerHeader";
import { BuyerBottomNav } from "@/components/rentkart/BottomNav";
import { ListingCard } from "@/components/rentkart/ListingCard";
import { listings, cities, categories } from "@/data/mock";

export const Route = createFileRoute("/buyer/browse")({
  head: () => ({ meta: [{ title: "Browse rentals — RentKart" }] }),
  component: Browse,
});

function Browse() {
  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-0">
      <BuyerHeader />

      <div className="mx-auto max-w-7xl px-4 pt-4 lg:px-8">
        <nav className="text-xs text-muted-foreground">
          <Link to="/buyer" className="hover:text-foreground">Home</Link> · <span className="text-foreground">Browse</span>
        </nav>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold sm:text-3xl">All rentals in Mumbai</h1>
            <p className="text-sm text-muted-foreground">{listings.length * 184} listings · Available 12–15 Nov 2025</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-surface-alt lg:hidden">
              <SlidersHorizontal className="h-4 w-4" /> Filters
              <span className="ml-1 rounded-full bg-primary px-1.5 text-[10px] text-primary-foreground">3</span>
            </button>
            <button className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-surface-alt">
              Relevance <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {[
            "Mumbai · 400050",
            "Size: M, L",
            "₹500 – ₹2,000",
            "Available this week",
          ].map((c) => (
            <span key={c} className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-saffron-soft px-3 py-1 text-xs font-medium text-primary-deep">
              {c} <X className="h-3 w-3" />
            </span>
          ))}
          <button className="text-xs font-medium text-muted-foreground hover:text-foreground">Clear all</button>
        </div>
      </div>

      <div className="mx-auto mt-6 grid max-w-7xl gap-6 px-4 lg:grid-cols-[260px,1fr] lg:px-8">
        {/* Filter sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 space-y-5 rounded-2xl border border-border bg-card p-5">
            <FilterGroup title="City">
              <select className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm">
                {cities.map((c) => <option key={c}>{c}</option>)}
              </select>
              <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> Pincode <span className="font-mono text-foreground">400050</span></p>
            </FilterGroup>

            <FilterGroup title="Category">
              <div className="space-y-1.5">
                {categories.slice(0, 6).map((c) => (
                  <label key={c.name} className="flex items-center gap-2 text-sm">
                    <input type="checkbox" className="h-4 w-4 rounded border-border text-primary" />
                    {c.name} <span className="ml-auto font-mono text-xs text-muted-foreground">{c.count}</span>
                  </label>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Size">
              <div className="flex flex-wrap gap-1.5">
                {["XS", "S", "M", "L", "XL", "XXL"].map((s) => (
                  <button key={s} className={`h-8 min-w-9 rounded-md border px-2 text-xs font-medium ${s === "M" || s === "L" ? "border-primary bg-saffron-soft text-primary-deep" : "border-border bg-background hover:bg-surface-alt"}`}>{s}</button>
                ))}
              </div>
            </FilterGroup>

            <FilterGroup title="Price per day">
              <div className="flex items-center gap-2">
                <input className="h-9 w-full rounded-md border border-border bg-background px-2 font-mono text-sm" placeholder="Min" defaultValue="500" />
                <span className="text-muted-foreground">–</span>
                <input className="h-9 w-full rounded-md border border-border bg-background px-2 font-mono text-sm" placeholder="Max" defaultValue="2000" />
              </div>
              <input type="range" className="mt-2 w-full accent-primary" />
            </FilterGroup>

            <FilterGroup title="Condition">
              {["Like New", "Excellent", "Very Good"].map((c) => (
                <label key={c} className="flex items-center gap-2 py-1 text-sm">
                  <input type="checkbox" className="h-4 w-4 rounded border-border text-primary" /> {c}
                </label>
              ))}
            </FilterGroup>

            <FilterGroup title="Seller rating">
              {["4.5★ & above", "4.0★ & above", "Verified only"].map((c) => (
                <label key={c} className="flex items-center gap-2 py-1 text-sm">
                  <input type="checkbox" className="h-4 w-4 rounded border-border text-primary" defaultChecked={c === "Verified only"} /> {c}
                </label>
              ))}
            </FilterGroup>
          </div>
        </aside>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {listings.map((l) => <ListingCard key={l.id} listing={l} />)}
        </div>
      </div>

      <BuyerBottomNav />
    </div>
  );
}

function FilterGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
      {children}
    </div>
  );
}
