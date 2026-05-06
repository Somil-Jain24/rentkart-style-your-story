import { createLazyFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SlidersHorizontal, ChevronDown, MapPin, X } from "lucide-react";
import { useState, useMemo } from "react";
import { BuyerHeader } from "@/components/rentkart/BuyerHeader";
import { BuyerBottomNav } from "@/components/rentkart/BottomNav";
import { ListingCard } from "@/components/rentkart/ListingCard";
import { listings, cities } from "@/data/mock";
import { CATEGORIES, findCategory } from "@/data/categories";

export const Route = createLazyFileRoute("/buyer/browse")({
  component: Browse,
});

function Browse() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/buyer/browse" });
  const [minPrice, setMinPrice] = useState(search.minPrice ?? 0);
  const [maxPrice, setMaxPrice] = useState(search.maxPrice ?? 5000);
  const [maxDistance, setMaxDistance] = useState(search.maxDistance ?? 25);

  const activeCat = search.category ? findCategory(search.category) : undefined;

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (search.category && l.category !== search.category) return false;
      if (search.sub && l.subcategory !== search.sub) return false;
      if (search.city && l.city !== search.city) return false;
      if (l.dailyRate < minPrice || l.dailyRate > maxPrice) return false;
      if (l.distanceKm > maxDistance) return false;
      return true;
    });
  }, [search.category, search.sub, search.city, minPrice, maxPrice, maxDistance]);

  const setCategory = (slug?: string) => navigate({ search: (p) => ({ ...p, category: slug, sub: undefined }) });

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-0">
      <BuyerHeader />

      <div className="mx-auto max-w-7xl px-4 pt-4 lg:px-8">
        <nav className="text-xs text-muted-foreground">
          <Link to="/buyer" className="hover:text-foreground">Home</Link> · <span className="text-foreground">Browse</span>
          {activeCat && <> · <span className="text-foreground">{activeCat.name}</span></>}
        </nav>
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="font-display text-2xl font-bold sm:text-3xl">{activeCat ? activeCat.name : "All rentals"} {search.city ? `in ${search.city}` : ""}</h1>
            <p className="text-sm text-muted-foreground">{filtered.length} listings · within {maxDistance} km · ₹{minPrice}–₹{maxPrice}/day</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-surface-alt lg:hidden">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <button className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-surface-alt">
              Relevance <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Active chips */}
        <div className="mt-3 flex flex-wrap gap-2">
          {activeCat && (
            <button onClick={() => setCategory(undefined)} className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-saffron-soft px-3 py-1 text-xs font-medium text-primary-deep">
              {activeCat.name} <X className="h-3 w-3" />
            </button>
          )}
          {search.sub && (
            <button onClick={() => navigate({ search: (p) => ({ ...p, sub: undefined }) })} className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-saffron-soft px-3 py-1 text-xs font-medium text-primary-deep">
              {search.sub} <X className="h-3 w-3" />
            </button>
          )}
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs">Within {maxDistance} km</span>
          <span className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs">₹{minPrice}–₹{maxPrice}/day</span>
        </div>
      </div>

      <div className="mx-auto mt-6 grid max-w-7xl gap-6 px-4 lg:grid-cols-[280px,1fr] lg:px-8">
        {/* Filter sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-20 space-y-5 rounded-2xl border border-border bg-card p-5">
            <FilterGroup title="Category">
              <div className="space-y-1">
                <button onClick={() => setCategory(undefined)} className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left text-sm ${!activeCat ? "bg-saffron-soft font-semibold text-primary-deep" : "hover:bg-surface-alt"}`}>
                  All categories
                </button>
                {CATEGORIES.filter((c) => c.slug !== "other").map((c) => (
                  <button key={c.slug} onClick={() => setCategory(c.slug)} className={`flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-sm ${activeCat?.slug === c.slug ? "bg-saffron-soft font-semibold text-primary-deep" : "hover:bg-surface-alt"}`}>
                    <c.icon className="h-3.5 w-3.5 text-primary" />
                    <span className="flex-1 truncate">{c.name}</span>
                  </button>
                ))}
              </div>
            </FilterGroup>

            {activeCat && activeCat.subcategories.length > 0 && (
              <FilterGroup title="Subcategory">
                <div className="space-y-1">
                  {activeCat.subcategories.map((sc) => (
                    <label key={sc.slug} className="flex cursor-pointer items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="sub"
                        checked={search.sub === sc.name}
                        onChange={() => navigate({ search: (p) => ({ ...p, sub: sc.name }) })}
                        className="h-3.5 w-3.5 text-primary"
                      />
                      {sc.name}
                    </label>
                  ))}
                </div>
              </FilterGroup>
            )}

            <FilterGroup title="City">
              <select
                value={search.city ?? ""}
                onChange={(e) => navigate({ search: (p) => ({ ...p, city: e.target.value || undefined }) })}
                className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm"
              >
                <option value="">All cities</option>
                {cities.map((c) => <option key={c}>{c}</option>)}
              </select>
            </FilterGroup>

            <FilterGroup title="Distance from you">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-primary" /> Within</span>
                <span className="font-mono font-semibold text-foreground">{maxDistance} km</span>
              </div>
              <input
                type="range" min={1} max={50} value={maxDistance}
                onChange={(e) => setMaxDistance(Number(e.target.value))}
                className="mt-2 w-full accent-primary"
              />
              <div className="mt-1 flex justify-between font-mono text-[10px] text-muted-foreground"><span>1km</span><span>50km</span></div>
            </FilterGroup>

            <FilterGroup title="Price per day">
              <div className="flex items-center gap-2">
                <input type="number" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="h-9 w-full rounded-md border border-border bg-background px-2 font-mono text-sm" placeholder="Min" />
                <span className="text-muted-foreground">–</span>
                <input type="number" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="h-9 w-full rounded-md border border-border bg-background px-2 font-mono text-sm" placeholder="Max" />
              </div>
              <input type="range" min={0} max={5000} step={50} value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="mt-2 w-full accent-primary" />
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
        <div>
          {filtered.length === 0 ? (
            <div className="grid place-items-center rounded-2xl border border-dashed border-border bg-card p-12 text-center">
              <p className="font-display text-lg font-semibold">No listings match your filters</p>
              <p className="mt-1 text-sm text-muted-foreground">Try widening your distance or price range.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((l) => <ListingCard key={l.id} listing={l} />)}
            </div>
          )}
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
