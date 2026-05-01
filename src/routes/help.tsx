import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, ShieldCheck, RefreshCw, Truck, AlertTriangle } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { Footer } from "@/components/rentkart/Footer";

export const Route = createFileRoute("/help")({
  head: () => ({ meta: [{ title: "Trust, safety & FAQ — RentKart" }] }),
  component: Help,
});

const faqs = [
  { q: "What is the Refundable Hold?", a: "When you book a rental, RentKart places a hold equal to the item's declared value (e.g. ₹24,500). It is NOT a charge — it is reserved on your payment method and released back to your source account within 48 hours of a successful return inspection." },
  { q: "What happens if I return the item late?", a: "Day 20 we send a friendly reminder. Day 23 a stronger nudge. Day 24 a final warning. From Day 26, a daily late fee of 5% of the rental fee is deducted from your hold. Beyond Day 30 the item is treated as non-returned and the full hold is forfeited." },
  { q: "What if the item arrives damaged or wrong?", a: "Open a dispute within 24 hours of delivery with photos. We pause the rental clock instantly and assign an Ops Manager. If verified, you get a full refund including hold and rental fee." },
  { q: "How do I know sellers are genuine?", a: "Every seller is KYC-verified (PAN + Aadhaar + bank). Stores must complete 3 successful rentals before earning the Verified Badge. Look for the blue tick on listings." },
  { q: "When do sellers get paid?", a: "Rental fees are released to sellers within 24 hours of a successful return inspection. Payouts hit your registered bank account directly via NEFT/IMPS." },
  { q: "Can I cancel a booking?", a: "Yes — free cancellation up to 5 days before rental start. Within 5 days, 25% of rental fee is non-refundable. Hold is always refunded in full on cancellation." },
];

export default Help;

function Help() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <Link to="/"><Logo /></Link>
          <nav className="flex items-center gap-4 text-sm">
            <Link to="/buyer" className="text-muted-foreground hover:text-foreground">Renter</Link>
            <Link to="/seller" className="text-muted-foreground hover:text-foreground">Seller</Link>
            <Link to="/login" className="font-semibold text-primary">Sign in</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 lg:px-8 lg:py-16">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Help & trust</p>
          <h1 className="mt-2 font-display text-4xl font-bold sm:text-5xl">Renting on RentKart, explained</h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground">
            Transparent answers about the refundable hold, returns, disputes and seller payouts.
          </p>
        </div>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "Refundable Hold", b: "Reserved, never charged unless damaged" },
            { icon: Truck, t: "Doorstep Delivery", b: "Tracked, insured, dry-cleaned" },
            { icon: RefreshCw, t: "48h Refund SLA", b: "Hold returned within 2 business days" },
            { icon: AlertTriangle, t: "Dispute Window", b: "Raise within 24h of delivery" },
          ].map((p) => (
            <div key={p.t} className="rounded-xl border border-border bg-card p-5">
              <p.icon className="h-5 w-5 text-primary" />
              <h3 className="mt-2 font-semibold">{p.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.b}</p>
            </div>
          ))}
        </section>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-bold">Frequently asked questions</h2>
          <div className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((f, i) => (
              <details key={i} className="group" open={i === 0}>
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4">
                  <span className="text-base font-semibold">{f.q}</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl bg-saffron-gradient p-8 text-primary-foreground">
          <h3 className="font-display text-2xl font-bold">Still have a question?</h3>
          <p className="mt-1 text-sm opacity-90">Our care team responds in under 30 minutes, 9am–9pm IST.</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <a href="#" className="rounded-lg bg-card px-4 py-2.5 text-sm font-semibold text-foreground">Chat with us</a>
            <a href="#" className="rounded-lg border border-primary-foreground/30 px-4 py-2.5 text-sm font-semibold">Call 1800-200-RENT</a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
