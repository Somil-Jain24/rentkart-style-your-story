import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, BadgeCheck, Heart, Share2, Calendar, ShieldCheck, Truck, RotateCcw, MessageCircle, ChevronLeft, ChevronRight, Info } from "lucide-react";
import { BuyerHeader } from "@/components/rentkart/BuyerHeader";
import { BuyerBottomNav } from "@/components/rentkart/BottomNav";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { listings, reviews } from "@/data/mock";

export const Route = createFileRoute("/buyer/product/$id")({
  head: ({ params }) => ({
    meta: [
      { title: `Rent — The RentVerse · ${params.id}` },
      { name: "description", content: "Designer rental from a verified The RentVerse seller." },
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

  return (
    <div className="min-h-screen bg-background pb-32 lg:pb-12">
      <BuyerHeader />

      <div className="mx-auto max-w-7xl px-4 pt-4 lg:px-8">
        <nav className="text-xs text-muted-foreground">
          <Link to="/buyer" className="hover:text-foreground">Home</Link> ·{" "}
          <Link to="/buyer/browse" className="hover:text-foreground">{listing.category}</Link> ·{" "}
          <span className="text-foreground">{listing.title}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-6 lg:grid-cols-[1.3fr,1fr] lg:px-8 lg:py-8">
        {/* Gallery */}
        <section>
          <div className="relative">
            <ProductImage hue={listing.imageHue} src={listing.imageSrc} variant="hero" label={listing.title} />
            <button aria-label="Previous" className="absolute left-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card/95 shadow-soft hover:bg-card">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button aria-label="Next" className="absolute right-3 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-card/95 shadow-soft hover:bg-card">
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute right-3 top-3 flex gap-2">
              <button aria-label="Wishlist" className="grid h-10 w-10 place-items-center rounded-full bg-card/95 shadow-soft"><Heart className="h-4 w-4" /></button>
              <button aria-label="Share" className="grid h-10 w-10 place-items-center rounded-full bg-card/95 shadow-soft"><Share2 className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-5 gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <button key={i} className={`overflow-hidden rounded-lg border-2 ${i === 0 ? "border-primary" : "border-transparent"}`}>
                <ProductImage hue={listing.imageHue + i * 12} variant="thumb" />
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-5">
            <h3 className="font-display text-lg font-semibold">About this rental</h3>
            <p className="mt-2 text-sm text-muted-foreground">{listing.description}</p>
            <dl className="mt-4 grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              <Spec label="Size" value={listing.size} />
              <Spec label="Condition" value={listing.condition} />
              <Spec label="Fabric" value="Banarasi silk" />
              <Spec label="Listing ID" value={listing.id} mono />
            </dl>
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
                <p className="text-xs text-muted-foreground">{listing.city} · 412 successful rentals · responds in 12 min</p>
              </div>
              <button className="hidden h-10 items-center gap-2 rounded-lg border border-border px-3 text-sm font-medium hover:bg-surface-alt sm:inline-flex">
                <MessageCircle className="h-4 w-4" /> Chat
              </button>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-dashed border-border pt-4 text-center text-xs">
              <div><p className="font-display text-lg font-bold">4.9 ★</p><p className="text-muted-foreground">Avg rating</p></div>
              <div><p className="font-display text-lg font-bold">98%</p><p className="text-muted-foreground">On-time return</p></div>
              <div><p className="font-display text-lg font-bold">2yr</p><p className="text-muted-foreground">On The RentVerse</p></div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mt-6">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Verified rental reviews</h3>
              <a href="#" className="text-sm font-medium text-primary">See all 142</a>
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
            <div className="mt-1.5 flex items-center gap-2 text-sm">
              <span className="inline-flex items-center gap-1"><Star className="h-4 w-4 fill-warning text-warning" /><span className="font-semibold">{listing.rating}</span></span>
              <span className="text-muted-foreground">({listing.reviewCount} reviews)</span>
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
                You get <span className="font-mono font-semibold text-success">₹{listing.itemValue.toLocaleString("en-IN")}</span> back after a successful return.
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
              <div className="rounded-lg border border-border p-2"><Calendar className="mx-auto h-4 w-4 text-primary" /><p className="mt-1">25-day window</p></div>
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
