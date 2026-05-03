import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Sparkles, Truck, Wallet, ArrowRight, Star } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { Footer } from "@/components/rentkart/Footer";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { listings } from "@/data/mock";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The RentVerse — Rent designer fashion across India" },
      { name: "description", content: "Rent lehengas, sherwanis, sarees and accessories from verified Indian sellers. Refundable hold, doorstep delivery, transparent pricing." },
    ],
  }),
  component: Landing,
});

function Landing() {
  const featured = listings.slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Logo />
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#how" className="hover:text-foreground">How it works</a>
            <a href="#trust" className="hover:text-foreground">Trust & safety</a>
            <Link to="/help" className="hover:text-foreground">Help</Link>
            <Link to="/login" className="hover:text-foreground">Sign in</Link>
          </nav>
          <Link
            to="/role"
            className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
          >
            Get started <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-warm-gradient">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Trusted by 1.2 lakh+ Indians for weddings & events
            </span>

            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              Wear designer.<br />
              <span className="text-primary">Pay rental.</span>
            </h1>

            <p className="mt-5 max-w-lg text-lg text-muted-foreground text-pretty">
              Rent premium lehengas, sherwanis, sarees and accessories from verified sellers across 24 Indian cities. Your hold is fully refundable when you return on time.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/role"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition-colors hover:bg-primary-hover"
              >
                Start renting
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/role"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-semibold text-foreground hover:bg-surface-alt"
              >
                List your wardrobe
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6">
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Listings</dt>
                <dd className="mt-1 font-display text-2xl font-bold">8,400+</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Cities</dt>
                <dd className="mt-1 font-display text-2xl font-bold">24</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-muted-foreground">Avg. rating</dt>
                <dd className="mt-1 flex items-center gap-1 font-display text-2xl font-bold">
                  4.8 <Star className="h-4 w-4 fill-warning text-warning" />
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {featured.map((l, i) => (
                <div key={l.id} className={i % 2 === 0 ? "translate-y-6" : ""}>
                  <ProductImage hue={l.imageHue} variant="hero" />
                  <p className="mt-2 px-1 text-xs font-medium text-foreground line-clamp-1">{l.title}</p>
                  <p className="px-1 font-mono text-xs text-muted-foreground">₹{l.dailyRate.toLocaleString("en-IN")}/day</p>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-4 left-4 hidden rounded-xl border border-border bg-card p-4 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-success-soft">
                  <ShieldCheck className="h-5 w-5 text-success" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Refundable hold protected</p>
                  <p className="text-xs text-muted-foreground">Refunded in 48h after return</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust pillars */}
      <section id="trust" className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-px bg-border md:grid-cols-4">
          {[
            { icon: ShieldCheck, title: "Refundable hold", body: "Your item-value hold is auto-refunded within 48 hours of safe return." },
            { icon: Truck, title: "Doorstep delivery", body: "Quality-checked, dry-cleaned and shipped to your home in 24–72 hours." },
            { icon: Wallet, title: "Transparent pricing", body: "See rental fee, hold and delivery upfront. Zero hidden charges." },
            { icon: Sparkles, title: "Verified sellers", body: "Every seller is KYC-verified with rating-based listing approvals." },
          ].map((p) => (
            <div key={p.title} className="bg-card p-6">
              <p.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">How The RentVerse works</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Designer wear in three simple steps</h2>
        </div>
        <ol className="grid gap-6 lg:grid-cols-3">
          {[
            { n: "01", t: "Discover & book", b: "Browse 8,400+ pieces by city, size and date. Lock in your event dates with a calendar check." },
            { n: "02", t: "Pay rental + refundable hold", b: "Rental fee covers your wear. Item value sits as a refundable hold — never charged unless damaged." },
            { n: "03", t: "Wear, return, get refunded", b: "Schedule pickup before Day 25. Hold is refunded to your source account within 48 hours." },
          ].map((s) => (
            <li key={s.n} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <span className="font-mono text-sm font-semibold text-primary">{s.n}</span>
              <h3 className="mt-3 font-display text-xl font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.b}</p>
            </li>
          ))}
        </ol>
      </section>

      <Footer />
    </div>
  );
}
