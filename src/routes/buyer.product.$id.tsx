import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Star, BadgeCheck, Heart, Share2, Calendar, ShieldCheck, Truck, RotateCcw, MessageCircle, ChevronLeft, ChevronRight, Info, MapPin, CheckCircle2, Clock, IndianRupee, PackageCheck } from "lucide-react";
import { BuyerHeader } from "@/components/rentkart/BuyerHeader";
import { BuyerBottomNav } from "@/components/rentkart/BottomNav";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { listings, reviews } from "@/data/mock";

export const Route = createFileRoute("/buyer/product/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Rent — The RentVerse · ${params.id}` },
      { name: "description", content: "Rental from a verified The RentVerse seller — escrow-protected refundable hold." },
    ],
  }),
  component: PDP,
});

function PDP() {
  const { id } = Route.useParams();
  const listing = listings.find((l) => l.id === id) ?? listings[0];
  const days = 3;
  const rentalFee = listing.dailyRate * days;
  const delivery = 180;
  const total = rentalFee + delivery + listing.itemValue;

  // Build a small gallery from imageSrc + procedural variants
  const galleryImages: { src?: string; hue: number }[] = [
    { src: listing.imageSrc, hue: listing.imageHue },
    { hue: listing.imageHue + 12 },
    { hue: listing.imageHue + 24 },
    { hue: listing.imageHue - 8 },
    { hue: listing.imageHue + 36 },
  ];
  const [active, setActive] = useState(0);
  const next = () => setActive((i) => (i + 1) % galleryImages.length);
  const prev = () => setActive((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const current = galleryImages[active];

  return (
    <div className="min-h-screen bg-background pb-32 lg:pb-12">
      <BuyerHeader />

      <div className="mx-auto max-w-7xl px-4 pt-4 lg:px-8">
        <nav className="text-xs text-muted-foreground">
          <Link to="/buyer" className="hover:text-foreground">Home</Link> ·{" "}
          <Link to="/buyer/browse" search={{ category: listing.category }} className="hover:text-foreground">{listing.categoryName}</Link> ·{" "}
          <span className="text-foreground">{listing.subcategory}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-6 lg:grid-cols-[1.3fr,1fr] lg:px-8 lg:py-8">
        {/* Gallery */}
        <section>
          <div className="relative">
            <ProductImage hue={current.hue} src={current.src} variant="hero" label={listing.title} />
            <button onClick={prev} aria-label="Previous" className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card/95 shadow-soft hover:bg-card">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next" className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card/95 shadow-soft hover:bg-card">
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute right-3 top-3 flex gap-2">
              <button aria-label="Wishlist" className="grid h-10 w-10 place-items-center rounded-full bg-card/95 shadow-soft"><Heart className="h-4 w-4" /></button>
              <button aria-label="Share" className="grid h-10 w-10 place-items-center rounded-full bg-card/95 shadow-soft"><Share2 className="h-4 w-4" /></button>
            </div>
            <span className="absolute bottom-3 left-3 rounded-full bg-card/95 px-2.5 py-1 font-mono text-[11px] font-semibold shadow-soft">
              {active + 1} / {galleryImages.length}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {galleryImages.map((g, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`overflow-hidden rounded-lg border-2 transition-all ${i === active ? "border-primary" : "border-transparent hover:border-border"}`}
              >
                <ProductImage hue={g.hue} src={g.src} variant="thumb" />
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-5">
            <h3 className="font-display text-lg font-semibold">About this rental</h3>
            <p className="mt-2 text-sm text-muted-foreground">{listing.description}</p>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              {listing.size && <Spec label="Size" value={listing.size} />}
              <Spec label="Condition" value={listing.condition} />
              <Spec label="Subcategory" value={listing.subcategory} />
              <Spec label="Listing ID" value={listing.id} mono />
              {listing.specs?.map((s) => <Spec key={s.label} label={s.label} value={s.value} />)}
            </dl>
          </div>

          {/* Escrow refund timeline */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-success" />
              <h3 className="font-display text-lg font-semibold">Escrow & refund timeline</h3>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Your refundable hold of <span className="font-mono font-semibold text-foreground">₹{listing.itemValue.toLocaleString("en-IN")}</span> is held in The RentVerse escrow — never touched by the seller until release rules are met.
            </p>

            <ol className="mt-5 space-y-4">
              {[
                { icon: IndianRupee, t: "Day 0 — Payment to escrow", b: "You pay rental + delivery + refundable hold. Funds locked in The RentVerse Pay escrow account.", state: "done" },
                { icon: Truck, t: "Day 0–1 — Doorstep delivery", b: "Item shipped via verified courier with tamper-proof packaging.", state: "current" },
                { icon: Clock, t: "Rental period", b: "Use the item with care during your booked window.", state: "upcoming" },
                { icon: PackageCheck, t: "Day +1 — Return inspection", b: "Seller inspects item within 24 hours of return and uploads photos.", state: "upcoming" },
                { icon: CheckCircle2, t: "Day +2 to +3 — Hold refunded", b: "If inspection passes, full hold auto-refunded to source account in 24–48 hours.", state: "upcoming" },
              ].map((s, i) => (
                <li key={s.t} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${
                      s.state === "done" ? "bg-success text-success-foreground" :
                      s.state === "current" ? "bg-primary text-primary-foreground" :
                      "bg-surface-alt text-muted-foreground"
                    }`}>
                      <s.icon className="h-4 w-4" />
                    </div>
                    {i < 4 && <div className={`mt-1 w-px flex-1 ${s.state === "done" ? "bg-success/40" : "bg-border"}`} />}
                  </div>
                  <div className="pb-2">
                    <p className="text-sm font-semibold">{s.t}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{s.b}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-4 rounded-lg border border-warning/30 bg-warning-soft/60 p-3 text-xs">
              <p className="font-semibold text-warning">Disputes are resolved within 72 hours</p>
              <p className="mt-0.5 text-muted-foreground">If the seller raises a damage claim, our ops team reviews evidence from both sides before any deduction.</p>
            </div>
          </div>

          {/* Seller card */}
          <div className="mt-6 rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-4">
              <ProductImage hue={listing.imageHue} variant="thumb" className="h-14 w-14 rounded-full" />
              <div className="flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="font-semibold">{listing.sellerName}</p>
                  {listing.sellerVerified && <BadgeCheck className="h-4 w-4 text-info" />}
                </div>
                <p className="text-xs text-muted-foreground">{listing.city} · {listing.distanceKm} km away · responds in 12 min</p>
              </div>
              <button className="hidden h-10 items-center gap-2 rounded-lg border border-border px-3 text-sm font-medium hover:bg-surface-alt sm:inline-flex">
                <MessageCircle className="h-4 w-4" /> Chat
              </button>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-dashed border-border pt-4 text-center text-xs">
              <div><p className="font-display text-lg font-bold">{listing.rating} ★</p><p className="text-muted-foreground">Avg rating</p></div>
              <div><p className="font-display text-lg font-bold">98%</p><p className="text-muted-foreground">On-time return</p></div>
              <div><p className="font-display text-lg font-bold">2yr</p><p className="text-muted-foreground">On The RentVerse</p></div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Verified rental reviews</h3>
              <a href="#" className="text-sm font-medium text-primary">See all {listing.reviewCount}</a>
            </div>
            <div className="mt-3 space-y-3">
              {reviews.map((r) => (
                <div key={r.name} className="rounded-xl border border-border bg-card p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="grid h-8 w-8 place-items-center rounded-full bg-saffron-soft text-xs font-semibold text-primary-deep">{r.name[0]}</div>
                      <div>
                        <p className="text-sm font-semibold">{r.name}</p>
                        <p className="text-[11px] text-muted-foreground">{r.city} · {r.date}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-semibold text-success">
                      <BadgeCheck className="h-3 w-3" /> Verified rental
                    </span>
                  </div>
                  <div className="mt-2 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`h-3.5 w-3.5 ${i < r.rating ? "fill-warning text-warning" : "text-muted-foreground/30"}`} />
                    ))}
                  </div>
                  <p className="mt-2 text-sm text-foreground">{r.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sticky checkout */}
        <aside className="lg:sticky lg:top-20 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
            {listing.badge && (
              <span className="inline-block rounded-full bg-saffron-soft px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary-deep">
                {listing.badge}
              </span>
            )}
            <h1 className="mt-2 font-display text-2xl font-bold leading-tight">{listing.title}</h1>
            <div className="mt-1.5 flex items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-warning text-warning" /><span className="font-semibold">{listing.rating}</span></span>
              <span className="text-muted-foreground">({listing.reviewCount} reviews)</span>
              <span className="inline-flex items-center gap-1 text-xs text-muted-foreground"><MapPin className="h-3 w-3" /> {listing.distanceKm} km</span>
            </div>

            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="font-mono text-3xl font-bold">₹{listing.dailyRate.toLocaleString("en-IN")}</span>
              <span className="text-sm text-muted-foreground">/ day</span>
            </div>

            {/* Calculator */}
            <div className="mt-5 space-y-3 rounded-xl border border-dashed border-border p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Rental calculator</p>
              <div className="grid grid-cols-2 gap-2">
                <DateInput label="Pickup" value="12 Nov 2025" />
                <DateInput label="Return" value="15 Nov 2025" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Rental ({days} days × ₹{listing.dailyRate})</span>
                <span className="font-mono font-medium">₹{rentalFee.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Doorstep delivery</span>
                <span className="font-mono font-medium">₹{delivery}</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-success-soft px-3 py-2 text-sm">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-success" />
                  Refundable hold
                  <Info className="h-3 w-3 text-muted-foreground" />
                </span>
                <span className="font-mono font-semibold text-success">₹{listing.itemValue.toLocaleString("en-IN")}</span>
              </div>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="text-sm font-semibold">You pay today</span>
                <span className="font-mono text-lg font-bold">₹{total.toLocaleString("en-IN")}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Refunded within <span className="font-semibold text-success">48 hours</span> of safe return.
              </p>
            </div>

            <Link
              to="/buyer/checkout/$id"
              params={{ id: listing.id }}
              className="mt-5 grid h-12 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground shadow-soft hover:bg-primary-hover"
            >
              Rent Now
            </Link>

            <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-muted-foreground">
              <div className="rounded-lg border border-border p-2"><Truck className="mx-auto h-4 w-4 text-primary" /><p className="mt-1">Doorstep delivery</p></div>
              <div className="rounded-lg border border-border p-2"><RotateCcw className="mx-auto h-4 w-4 text-primary" /><p className="mt-1">Free pickup</p></div>
              <div className="rounded-lg border border-border p-2"><Calendar className="mx-auto h-4 w-4 text-primary" /><p className="mt-1">Flexible dates</p></div>
            </div>
          </div>
        </aside>
      </div>

      {/* Sticky mobile rent CTA */}
      <div className="fixed bottom-14 left-0 right-0 z-30 border-t border-border bg-background p-3 lg:hidden">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-mono text-base font-bold">₹{total.toLocaleString("en-IN")}</p>
            <p className="text-[10px] text-muted-foreground">incl. ₹{listing.itemValue.toLocaleString("en-IN")} refundable</p>
          </div>
          <Link
            to="/buyer/checkout/$id"
            params={{ id: listing.id }}
            className="inline-flex h-11 flex-1 max-w-[180px] items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground"
          >
            Rent Now
          </Link>
        </div>
      </div>

      <BuyerBottomNav />
    </div>
  );
}

function Spec({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</dt>
      <dd className={`mt-0.5 font-medium ${mono ? "font-mono text-sm" : ""}`}>{value}</dd>
    </div>
  );
}

function DateInput({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground">{label}</p>
      <button className="mt-1 flex h-10 w-full items-center justify-between rounded-md border border-border bg-background px-2.5 text-left text-sm">
        <span>{value}</span>
        <Calendar className="h-4 w-4 text-muted-foreground" />
      </button>
    </div>
  );
}
