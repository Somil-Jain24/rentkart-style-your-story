import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, MapPin, ShieldCheck, AlertCircle, Check, CreditCard, Smartphone, Building2 } from "lucide-react";
import { BuyerHeader } from "@/components/rentkart/BuyerHeader";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { listings } from "@/data/mock";

export const Route = createFileRoute("/buyer/checkout/$id")({
  head: () => ({ meta: [{ title: "Checkout — The RentVerse" }] }),
  component: Checkout,
});

function Checkout() {
  const { id } = Route.useParams();
  const listing = listings.find((l) => l.id === id) ?? listings[0];
  const days = 3;
  const rental = listing.dailyRate * days;
  const delivery = 180;
  const total = rental + delivery + listing.itemValue;
  const isHighValue = listing.itemValue > 20000;

  return (
    <div className="min-h-screen bg-background pb-24">
      <BuyerHeader />

      <div className="mx-auto max-w-6xl px-4 py-6 lg:px-8">
        <Link to="/buyer/product/$id" params={{ id: listing.id }} className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" /> Back to listing
        </Link>
        <h1 className="mt-2 font-display text-3xl font-bold">Confirm your rental</h1>

        {/* Steps */}
        <ol className="mt-6 grid grid-cols-3 gap-2 text-xs font-medium">
          {[
            { n: 1, t: "Address & Delivery", state: "current" },
            { n: 2, t: "Verify & Review", state: "upcoming" },
            { n: 3, t: "Payment", state: "upcoming" },
          ].map((s) => (
            <li key={s.n} className={`rounded-lg border px-3 py-2.5 ${s.state === "current" ? "border-primary bg-saffron-soft text-primary-deep" : "border-border bg-card text-muted-foreground"}`}>
              <span className="font-mono">0{s.n}</span> · {s.t}
            </li>
          ))}
        </ol>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr,1fr]">
          <div className="space-y-5">
            {/* Address */}
            <Section title="Delivery address">
              <div className="space-y-2">
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border-2 border-primary bg-saffron-soft/50 p-4">
                  <input type="radio" defaultChecked name="addr" className="mt-1 h-4 w-4 text-primary" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">Priya Sharma · <span className="text-muted-foreground font-normal">Home</span></p>
                      <span className="rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-semibold text-success">Default</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">B-1204, Lodha Bellissimo, N M Joshi Marg, Lower Parel, Mumbai — <span className="font-mono">400013</span></p>
                    <p className="mt-1 font-mono text-xs text-muted-foreground">+91 98203 11244</p>
                  </div>
                </label>
                <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-card p-4 hover:bg-surface-alt">
                  <input type="radio" name="addr" className="mt-1 h-4 w-4 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Priya Sharma · <span className="text-muted-foreground font-normal">Office</span></p>
                    <p className="mt-1 text-sm text-muted-foreground">8th Flr, One BKC, Bandra Kurla Complex, Mumbai — <span className="font-mono">400051</span></p>
                  </div>
                </label>
                <button className="text-sm font-medium text-primary">+ Add new address</button>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-lg bg-info-soft p-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-info" />
                <div className="text-xs">
                  <p className="font-semibold text-info">Delivery feasible to <span className="font-mono">400013</span></p>
                  <p className="mt-0.5 text-muted-foreground">Estimated pickup: 11 Nov · Delivery on or before 12 Nov, 11:00 AM</p>
                </div>
              </div>
            </Section>

            {/* ID Verification */}
            {isHighValue && (
              <Section title="ID verification" pill="Required for ₹20k+ items">
                <div className="rounded-xl border border-warning/40 bg-warning-soft p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
                    <div>
                      <p className="text-sm font-semibold">Quick KYC needed</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">This item has an item value above ₹20,000. Please verify your Aadhaar/Passport before checkout. Takes 60 seconds.</p>
                      <button className="mt-3 inline-flex h-9 items-center gap-1.5 rounded-md bg-warning px-3 text-xs font-semibold text-warning-foreground">
                        Verify with DigiLocker
                      </button>
                    </div>
                  </div>
                </div>
              </Section>
            )}

            {/* Hold explanation */}
            <Section title="The Refundable Hold, simply">
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { n: "1", t: "You pay total now", b: `₹${total.toLocaleString("en-IN")} including hold` },
                  { n: "2", t: "Wear, return on time", b: "Schedule pickup before Day 25" },
                  { n: "3", t: "Hold refunded", b: `₹${listing.itemValue.toLocaleString("en-IN")} back in 48h` },
                ].map((s) => (
                  <div key={s.n} className="rounded-lg border border-border bg-card p-3">
                    <span className="font-mono text-xs text-primary">0{s.n}</span>
                    <p className="mt-1 text-sm font-semibold">{s.t}</p>
                    <p className="text-xs text-muted-foreground">{s.b}</p>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-start gap-2 rounded-lg border border-warning/30 bg-warning-soft/60 p-3 text-xs">
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
                <p>Return must be scheduled by Day 25. Late returns incur 5%/day late fee deducted from your hold.</p>
              </div>
            </Section>

            {/* Payment */}
            <Section title="Payment method">
              <div className="grid gap-2 sm:grid-cols-3">
                <PayMethod icon={Smartphone} label="UPI" sub="GPay · PhonePe · Paytm" active />
                <PayMethod icon={CreditCard} label="Card" sub="Debit / Credit" />
                <PayMethod icon={Building2} label="Netbanking" sub="50+ banks" />
              </div>
              <div className="mt-3 rounded-lg border border-border bg-card p-3">
                <label className="text-xs font-medium">UPI ID</label>
                <input className="mt-1 h-10 w-full rounded-md border border-border bg-background px-3 font-mono text-sm" defaultValue="priya@okicici" />
              </div>
            </Section>
          </div>

          {/* Order summary */}
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <div className="rounded-2xl border border-border bg-card p-5">
              <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Order summary</p>
              <div className="mt-3 flex gap-3 border-b border-dashed border-border pb-4">
                <ProductImage hue={listing.imageHue} src={listing.imageSrc} variant="thumb" className="h-20 w-20" />
                <div className="min-w-0 flex-1">
                  <p className="line-clamp-2 text-sm font-semibold">{listing.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{listing.sellerName} · Size {listing.size}</p>
                  <p className="mt-1 font-mono text-xs">{days} days · 12 → 15 Nov</p>
                </div>
              </div>

              <dl className="mt-4 space-y-2 text-sm">
                <Row label={`Rental fee (${days} × ₹${listing.dailyRate})`} value={`₹${rental.toLocaleString("en-IN")}`} />
                <Row label="Doorstep delivery" value={`₹${delivery}`} />
                <Row label="Refundable hold" value={`₹${listing.itemValue.toLocaleString("en-IN")}`} accent />
                <div className="my-2 border-t border-dashed border-border" />
                <Row label="You pay today" value={`₹${total.toLocaleString("en-IN")}`} bold />
                <div className="rounded-lg bg-success-soft p-3 text-xs">
                  <p className="flex items-center gap-1.5 font-semibold text-success">
                    <ShieldCheck className="h-3.5 w-3.5" /> Expected refund
                  </p>
                  <p className="mt-1 font-mono text-base font-bold text-success">₹{listing.itemValue.toLocaleString("en-IN")}</p>
                  <p className="text-success/80">Within 48 hours of safe return</p>
                </div>
              </dl>

              <button className="mt-5 grid h-12 w-full place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
                Pay ₹{total.toLocaleString("en-IN")} & confirm
              </button>
              <p className="mt-2 text-center text-[11px] text-muted-foreground">
                <Check className="mr-1 inline h-3 w-3 text-success" />
                Secured by The RentVerse Pay · 256-bit encryption
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Section({ title, pill, children }: { title: string; pill?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold">{title}</h2>
        {pill && <span className="rounded-full bg-warning-soft px-2 py-0.5 text-[10px] font-semibold text-warning">{pill}</span>}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Row({ label, value, bold, accent }: { label: string; value: string; bold?: boolean; accent?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={accent ? "text-success" : "text-muted-foreground"}>{label}</span>
      <span className={`font-mono ${bold ? "text-base font-bold" : accent ? "font-semibold text-success" : ""}`}>{value}</span>
    </div>
  );
}

function PayMethod({ icon: Icon, label, sub, active }: { icon: React.ComponentType<{ className?: string }>; label: string; sub: string; active?: boolean }) {
  return (
    <button className={`rounded-lg border p-3 text-left ${active ? "border-primary bg-saffron-soft" : "border-border bg-card hover:bg-surface-alt"}`}>
      <Icon className={`h-5 w-5 ${active ? "text-primary" : "text-muted-foreground"}`} />
      <p className="mt-1 text-sm font-semibold">{label}</p>
      <p className="text-[11px] text-muted-foreground">{sub}</p>
    </button>
  );
}
