import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Sparkles, Truck, Wallet, ArrowRight, Star } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { ThemeToggle } from "@/components/rentkart/ThemeToggle";
import { Footer } from "@/components/rentkart/Footer";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import { listings } from "@/data/mock";
import React from "react";
import Lenis from "@studio-freight/lenis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The RentVerse — Rent anything across India" },
      { name: "description", content: "India's premier rental marketplace — fashion, electronics, tools, cameras, vehicles, furniture and more. Verified sellers, escrow-protected refundable hold, doorstep delivery." },
    ],
  }),
  component: Landing,
});

function Landing() {
  const [featured, setFeatured] = React.useState(listings.slice(0, 4));
  const cardGridRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const lenis = new Lenis();
    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Card shuffle animation every 6 seconds
  React.useEffect(() => {
    const shuffleInterval = setInterval(() => {
      const randomCards = [...listings].sort(() => Math.random() - 0.5).slice(0, 4);
      setFeatured(randomCards);
    }, 6000);

    return () => clearInterval(shuffleInterval);
  }, []);

  // Mouse parallax effect for card grid — uses direct DOM manipulation to avoid React re-renders
  React.useEffect(() => {
    const el = cardGridRef.current;
    if (!el || window.innerWidth < 1024) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const distX = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const distY = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      el.style.transform = `translate(${distX * 12}px, ${distY * 12}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const parallaxImages = [
    {
      src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Luxury watch collection',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2F2d547a2e2a57493ba4a269465a99e81e%2F8164aa30dda44b488ab412aa6c25a057?format=webp&width=800&height=1200',
      alt: 'Professional drone equipment',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets%2F2d547a2e2a57493ba4a269465a99e81e%2Fb39de5e4fb1d4e3a9d92d046d2a0316e?format=webp&width=800&height=1200',
      alt: 'Premium bridal lehenga',
    },
    {
      src: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Professional drones',
    },
    {
      src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Premium electronics',
    },
    {
      src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Outdoor adventure gear',
    },
    {
      src: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80',
      alt: 'Professional video camera equipment',
    },
  ];

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
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/role"
              className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-warm-gradient">
        {/* Animated background blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" style={{ animation: 'float 8s ease-in-out infinite' }}></div>
          <div className="absolute -bottom-1/2 -left-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" style={{ animation: 'floatAlt 10s ease-in-out infinite' }}></div>
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-3 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-6">
          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft animate-fade-in-up" style={{ animationDelay: '0s' }}>
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Trusted by 1.2 lakh+ Indians for events, work, travel & more
            </span>

            <h1 className="mt-2 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Rent anything.
              </span>
              <br />
              <span className="inline-block text-primary animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Buy nothing.
              </span>
            </h1>

            <p className="mt-3 max-w-lg text-lg text-muted-foreground text-pretty animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              Lehengas, MacBooks, drones, drills, scooters, sofas — rent premium items from verified sellers across 24 Indian cities. Your hold is fully refundable, escrow-protected and back in 48 hours.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                to="/role"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:bg-primary-hover hover:scale-105 active:scale-95"
              >
                Start renting
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/role"
                className="group relative inline-flex h-12 items-center justify-center rounded-lg border border-border bg-card px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-surface-alt hover:border-primary"
              >
                List your inventory
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-6 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
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

          {/* Right Product Cards */}
          <div
            ref={cardGridRef}
            className="relative"
            style={{
              transition: 'transform 0.1s ease-out',
              willChange: 'transform',
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              {featured.map((l, i) => (
                <div
                  key={l.id}
                  className="group relative animate-slide-in-up hover:z-10"
                  style={{
                    animationDelay: `${0.6 + i * 0.1}s`,
                  }}
                >
                  <div className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-pop">
                    <ProductImage hue={l.imageHue} src={l.imageSrc} variant="hero" label={l.title} />
                    <div className="absolute inset-0 rounded-2xl transition-all duration-300 group-hover:bg-black/10"></div>
                  </div>

                </div>
              ))}
            </div>

            {/* Protected badge - slides in from bottom */}
            <div className="absolute -bottom-4 left-4 hidden rounded-xl border border-border bg-card p-4 shadow-card sm:flex items-center gap-3 animate-slide-in-up" style={{ animationDelay: '1s' }}>
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

      {/* Featured gallery with zoom parallax */}
      <section className="bg-background py-12 lg:py-20">
        <div className="mx-auto mb-10 max-w-7xl px-4 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Featured items</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Explore our premium collections</h2>
        </div>
        <ZoomParallax images={parallaxImages} />
      </section>

      <Footer />
    </div>
  );
}
