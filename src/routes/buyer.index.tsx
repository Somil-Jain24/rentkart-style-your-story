import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ArrowRight, Sparkles, TrendingUp, IndianRupee, Award } from "lucide-react";
import { BuyerHeader } from "@/components/rentkart/BuyerHeader";
import { BuyerBottomNav } from "@/components/rentkart/BottomNav";
import { Footer } from "@/components/rentkart/Footer";
import { ListingCard } from "@/components/rentkart/ListingCard";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { listings } from "@/data/mock";
import { CATEGORIES } from "@/data/categories";

export const Route = createFileRoute("/buyer/")({
  head: () => ({
    meta: [
      { title: "Discover rentals — The RentVerse" },
      { name: "description", content: "Rent fashion, electronics, tools, cameras, vehicles, furniture & more from verified sellers across India." },
    ],
  }),
  component: BuyerHome,
});

function BuyerHome() {
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <BuyerHeader />

      {/* Hero / search */}
      <section className="bg-warm-gradient">
        <div className="mx-auto max-w-7xl px-4 py-6 lg:px-8 lg:py-8">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Rent anything, anywhere in India</p>
          <h1 className="mt-1.5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
            Why buy when you can <span className="text-primary">rent it for the day?</span>
          </h1>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            From designer lehengas to MacBooks, drills, drones and Royal Enfields — hand-picked from verified Indian sellers.
          </p>

          <div className="mt-6 flex h-14 max-w-2xl items-center rounded-xl border border-border bg-card shadow-card">
            <Search className="ml-4 h-5 w-5 text-muted-foreground" />
            <input
              className="h-full flex-1 bg-transparent px-3 text-base outline-none"
              placeholder="Search MacBook, drill, lehenga, projector, scooter…"
            />
            <Link to="/buyer/browse" className="mr-1.5 inline-flex h-11 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
              Search <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="text-muted-foreground">Popular:</span>
            {["MacBook Pro", "PS5", "Sony A7 IV", "Maroon lehenga", "Drill machine", "Camping tent"].map((t) => (
              <button key={t} className="rounded-full border border-border bg-card px-3 py-1 hover:bg-surface-alt">{t}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <SectionHead icon={Sparkles} title="Shop by category" subtitle="13 verticals — fashion to power tools" />
        <div className="mt-5 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
          {CATEGORIES.filter((c) => c.slug !== "other").map((c) => (
            <Link
              key={c.slug}
              to="/buyer/browse"
              search={{ category: c.slug }}
              className="group rounded-xl border border-border bg-card p-3 text-center transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <div
                className="mx-auto grid h-14 w-14 place-items-center rounded-full"
                style={{ background: `radial-gradient(circle at 30% 30%, oklch(0.85 0.12 ${c.hue}), oklch(0.5 0.16 ${c.hue}))` }}
              >
                <c.icon className="h-6 w-6 text-white" />
              </div>
              <p className="mt-2 line-clamp-1 text-xs font-semibold">{c.name}</p>
              <p className="font-mono text-[10px] text-muted-foreground">{c.subcategories.length} types</p>
            </Link>
          ))}
        </div>
      </section>

      <ListingRow title="Trending This Week" icon={TrendingUp} subtitle="What India is renting right now" items={listings.slice(0, 6)} />

      <ListingRow title="Pro Picks — Cameras & Electronics" icon={Sparkles} subtitle="For creators, gamers and remote workers" items={listings.filter((l) => l.category === "electronics" || l.category === "cameras")} />

      {/* Budget */}
      <section className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="rounded-2xl bg-saffron-soft p-6 lg:p-8">
          <SectionHead icon={IndianRupee} title="Under ₹500 / day" subtitle="Tools, accessories & weekend gear" tone="dark" />
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {listings.filter((l) => l.dailyRate < 500).slice(0, 4).map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </div>
      </section>

      <ListingRow title="Wedding Season Picks" icon={Sparkles} subtitle="Outfits, jewellery & event decor" items={listings.filter((l) => ["fashion", "jewellery", "events"].includes(l.category))} />

      {/* Top sellers */}
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <SectionHead icon={Award} title="Top Rated Sellers" subtitle="Verified stores with 4.8+ ratings across categories" />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "GearLoop Rentals", city: "Bengaluru", rating: 4.9, rentals: 612, hue: 220, vertical: "Electronics" },
            { name: "FrameRent", city: "Mumbai", rating: 4.9, rentals: 421, hue: 30, vertical: "Cameras" },
            { name: "Aarohi Couture", city: "Mumbai", rating: 4.9, rentals: 412, hue: 350, vertical: "Fashion" },
            { name: "ToolBay", city: "Pune", rating: 4.8, rentals: 768, hue: 45, vertical: "Tools" },
          ].map((s) => (
            <Link key={s.name} to="/buyer/browse" className="rounded-xl border border-border bg-card p-4 hover:shadow-card">
              <div className="flex items-center gap-3">
                <ProductImage hue={s.hue} variant="thumb" className="h-12 w-12 rounded-full" />
                <div>
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.vertical} · {s.city} · {s.rentals} rentals</p>
                </div>
              </div>
              <div className="mt-3 flex items-center justify-between border-t border-dashed border-border pt-3 text-xs">
                <span>★ <span className="font-semibold text-foreground">{s.rating}</span></span>
                <span className="text-primary">View store →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
      <BuyerBottomNav />
    </div>
  );
}

function SectionHead({ icon: Icon, title, subtitle, tone = "light" }: { icon: React.ComponentType<{ className?: string }>; title: string; subtitle: string; tone?: "light" | "dark" }) {
  return (
    <div className="flex items-end justify-between gap-4">
      <div>
        <div className="flex items-center gap-2">
          <Icon className={`h-4 w-4 ${tone === "dark" ? "text-primary-deep" : "text-primary"}`} />
          <p className={`font-mono text-xs uppercase tracking-widest ${tone === "dark" ? "text-primary-deep" : "text-primary"}`}>Curated</p>
        </div>
        <h2 className="mt-1 font-display text-2xl font-bold sm:text-3xl">{title}</h2>
        <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <Link to="/buyer/browse" className="hidden text-sm font-medium text-primary hover:underline sm:inline">View all →</Link>
    </div>
  );
}

function ListingRow({ title, icon, subtitle, items }: { title: string; icon: React.ComponentType<{ className?: string }>; subtitle: string; items: typeof listings }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
      <SectionHead icon={icon} title={title} subtitle={subtitle} />
      <div className="mt-5 flex gap-4 overflow-x-auto pb-2 scrollbar-hide lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible xl:grid-cols-6">
        {items.map((l) => (
          <div key={l.id} className="w-[180px] shrink-0 lg:w-auto">
            <ListingCard listing={l} />
          </div>
        ))}
      </div>
    </section>
  );
}
