import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, ArrowRight, Sparkles, TrendingUp, IndianRupee, Award } from "lucide-react";
import { BuyerHeader } from "@/components/rentkart/BuyerHeader";
import { BuyerBottomNav } from "@/components/rentkart/BottomNav";
import { Footer } from "@/components/rentkart/Footer";
import { ListingCard } from "@/components/rentkart/ListingCard";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { listings, categories } from "@/data/mock";

export const Route = createFileRoute("/buyer/")({
  head: () => ({
    meta: [
      { title: "Discover rentals — RentKart" },
      { name: "description", content: "Wedding-season picks, trending lehengas and budget rentals from verified Indian sellers." },
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
        <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-12">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Wedding season is here</p>
          <h1 className="mt-1.5 font-display text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">
            Show up unforgettable —<br className="hidden sm:block" />
            <span className="text-primary">without buying it.</span>
          </h1>

          <div className="mt-6 flex h-14 max-w-2xl items-center rounded-xl border border-border bg-card shadow-card">
            <Search className="ml-4 h-5 w-5 text-muted-foreground" />
            <input
              className="h-full flex-1 bg-transparent px-3 text-base outline-none"
              placeholder="Search lehengas, sherwanis, sarees, jewellery…"
            />
            <Link to="/buyer/browse" className="mr-1.5 inline-flex h-11 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
              Search <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="text-muted-foreground">Popular:</span>
            {["Maroon lehenga", "Pastel sherwani", "Sangeet gown", "Kundan set"].map((t) => (
              <button key={t} className="rounded-full border border-border bg-card px-3 py-1 hover:bg-surface-alt">{t}</button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <SectionHead icon={Sparkles} title="Shop by category" subtitle="Curated for Indian occasions" />
        <div className="mt-5 grid grid-cols-4 gap-3 sm:grid-cols-4 md:grid-cols-8">
          {categories.map((c) => (
            <Link
              key={c.name}
              to="/buyer/browse"
              className="group rounded-xl border border-border bg-card p-3 text-center transition-all hover:-translate-y-0.5 hover:shadow-card"
            >
              <div
                className="mx-auto h-14 w-14 rounded-full"
                style={{ background: `radial-gradient(circle at 30% 30%, oklch(0.85 0.12 ${c.hue}), oklch(0.5 0.16 ${c.hue}))` }}
              />
              <p className="mt-2 text-xs font-semibold">{c.name}</p>
              <p className="font-mono text-[10px] text-muted-foreground">{c.count}</p>
            </Link>
          ))}
        </div>
      </section>

      <ListingRow title="Wedding Season Picks" icon={Sparkles} subtitle="Hand-curated for sangeet, mehendi & reception" items={listings.slice(0, 6)} />

      <ListingRow title="Trending This Week" icon={TrendingUp} subtitle="What India is renting right now" items={listings.slice(2, 8)} />

      {/* Budget */}
      <section className="mx-auto max-w-7xl px-4 py-6 lg:px-8">
        <div className="rounded-2xl bg-saffron-soft p-6 lg:p-8">
          <SectionHead icon={IndianRupee} title="Under ₹1,500 / day" subtitle="Stunning pieces that won't break the bank" tone="dark" />
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {listings.filter((l) => l.dailyRate < 1500).slice(0, 4).map((l) => <ListingCard key={l.id} listing={l} />)}
          </div>
        </div>
      </section>

      {/* Top sellers */}
      <section className="mx-auto max-w-7xl px-4 py-10 lg:px-8">
        <SectionHead icon={Award} title="Top Rated Sellers" subtitle="Verified stores with 4.8+ ratings" />
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Aarohi Couture", city: "Mumbai", rating: 4.9, rentals: 412, hue: 350 },
            { name: "Karan Menswear", city: "Delhi", rating: 4.8, rentals: 286, hue: 25 },
            { name: "Meera Drapes", city: "Bengaluru", rating: 4.9, rentals: 521, hue: 320 },
            { name: "Rajwada Ornaments", city: "Jaipur", rating: 4.8, rentals: 198, hue: 45 },
          ].map((s) => (
            <Link key={s.name} to="/buyer/browse" className="rounded-xl border border-border bg-card p-4 hover:shadow-card">
              <div className="flex items-center gap-3">
                <ProductImage hue={s.hue} variant="thumb" className="h-12 w-12 rounded-full" />
                <div>
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.city} · {s.rentals} rentals</p>
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
