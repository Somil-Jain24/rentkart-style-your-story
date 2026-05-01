import { createFileRoute, Link } from "@tanstack/react-router";
import { Package, Clock, AlertTriangle, CheckCircle2, MessageCircle, RefreshCw, ArrowRight } from "lucide-react";
import { BuyerHeader } from "@/components/rentkart/BuyerHeader";
import { BuyerBottomNav } from "@/components/rentkart/BottomNav";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { buyerOrders } from "@/data/mock";

export const Route = createFileRoute("/buyer/orders")({
  head: () => ({ meta: [{ title: "My orders — RentKart" }] }),
  component: Orders,
});

const statusStyle: Record<string, string> = {
  Active: "bg-success-soft text-success",
  "Return Due": "bg-warning-soft text-warning",
  Pending: "bg-info-soft text-info",
  Confirmed: "bg-info-soft text-info",
  Refunded: "bg-surface-alt text-muted-foreground",
  Returned: "bg-success-soft text-success",
  Disputed: "bg-error-soft text-error",
  "In Transit": "bg-info-soft text-info",
};

function Orders() {
  const active = buyerOrders.filter((o) => ["Active", "Return Due", "Pending", "Confirmed", "In Transit"].includes(o.status));
  const past = buyerOrders.filter((o) => !["Active", "Return Due", "Pending", "Confirmed", "In Transit"].includes(o.status));

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-12">
      <BuyerHeader />

      <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold">My orders</h1>
        <p className="text-sm text-muted-foreground">Track active rentals, schedule returns and view past bookings.</p>

        {/* Day-23 alert */}
        <div className="mt-5 flex items-start gap-3 rounded-xl border border-warning/40 bg-warning-soft p-4">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
          <div className="flex-1">
            <p className="text-sm font-semibold">Return due tomorrow — ORD-88119 (Emerald Anarkali)</p>
            <p className="mt-0.5 text-xs text-muted-foreground">Schedule pickup before <span className="font-mono">11:00 PM, 10 Nov 2025</span> to avoid late fees of 5%/day.</p>
          </div>
          <button className="h-9 shrink-0 rounded-md bg-warning px-3 text-xs font-semibold text-warning-foreground">Schedule Return</button>
        </div>

        {/* Tabs */}
        <div className="mt-6 flex gap-2 border-b border-border">
          {["Active rentals", "Past orders", "Disputes"].map((t, i) => (
            <button key={t} className={`relative px-4 py-2.5 text-sm font-medium ${i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
              {t}
              {i === 0 && <span className="absolute -bottom-px left-2 right-2 h-0.5 rounded-full bg-primary" />}
            </button>
          ))}
        </div>

        <div className="mt-5 space-y-4">
          {active.map((o) => (
            <article key={o.id} className="rounded-2xl border border-border bg-card p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row">
                <ProductImage hue={o.imageHue} variant="thumb" className="h-24 w-24 shrink-0" />
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <p className="font-mono text-xs text-muted-foreground">{o.id}</p>
                      <h3 className="mt-0.5 font-semibold">{o.title}</h3>
                      <p className="text-xs text-muted-foreground">from {o.sellerName}</p>
                    </div>
                    <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyle[o.status]}`}>{o.status}</span>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
                    <Stat label="Pickup" value={o.rentStart} />
                    <Stat label="Return by" value={o.rentEnd} />
                    <Stat label="Total paid" value={`₹${o.total.toLocaleString("en-IN")}`} mono />
                    <Stat label="Refund pending" value={`₹${o.refundableHold.toLocaleString("en-IN")}`} mono accent />
                  </div>

                  {/* Timeline */}
                  <div className="mt-4 rounded-lg bg-surface-alt p-3">
                    <Timeline status={o.status} />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {o.status === "Return Due" && (
                      <button className="inline-flex h-9 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground hover:bg-primary-hover">
                        <RefreshCw className="h-3.5 w-3.5" /> Schedule Return
                      </button>
                    )}
                    <Link to="/buyer/product/$id" params={{ id: o.listingId }} className="inline-flex h-9 items-center gap-1 rounded-md border border-border bg-background px-3 text-xs font-medium hover:bg-surface-alt">
                      View order <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <button className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-medium hover:bg-surface-alt">
                      <MessageCircle className="h-3.5 w-3.5" /> Chat with seller
                    </button>
                    <button className="inline-flex h-9 items-center gap-1.5 rounded-md border border-error/30 bg-error-soft px-3 text-xs font-medium text-error">
                      Raise dispute
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <h2 className="mt-10 font-display text-xl font-bold">Past orders</h2>
        <div className="mt-3 space-y-3">
          {past.map((o) => (
            <div key={o.id} className="flex items-center gap-3 rounded-xl border border-border bg-card p-3">
              <ProductImage hue={o.imageHue} variant="thumb" className="h-14 w-14" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-mono text-[11px] text-muted-foreground">{o.id}</p>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusStyle[o.status]}`}>{o.status}</span>
                </div>
                <p className="truncate text-sm font-semibold">{o.title}</p>
                <p className="text-xs text-muted-foreground">{o.rentStart} – {o.rentEnd}</p>
              </div>
              <p className="font-mono text-sm font-semibold">₹{o.total.toLocaleString("en-IN")}</p>
            </div>
          ))}
        </div>
      </div>

      <BuyerBottomNav />
    </div>
  );
}

function Stat({ label, value, mono, accent }: { label: string; value: string; mono?: boolean; accent?: boolean }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className={`mt-0.5 font-medium ${mono ? "font-mono" : ""} ${accent ? "text-success" : ""}`}>{value}</p>
    </div>
  );
}

function Timeline({ status }: { status: string }) {
  const steps = [
    { k: "Confirmed", icon: CheckCircle2 },
    { k: "Picked up", icon: Package },
    { k: "Delivered", icon: Package },
    { k: "Return", icon: RefreshCw },
    { k: "Refunded", icon: CheckCircle2 },
  ];
  const map: Record<string, number> = {
    Pending: 0, Confirmed: 0, "In Transit": 1, Active: 2, "Return Due": 2, Returned: 3, Refunded: 4,
  };
  const current = map[status] ?? 0;

  return (
    <ol className="flex items-center gap-1">
      {steps.map((s, i) => {
        const done = i <= current;
        return (
          <li key={s.k} className="flex flex-1 items-center gap-1">
            <div className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${done ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground border border-border"}`}>
              <Clock className="h-3 w-3" />
            </div>
            <span className={`hidden text-[10px] font-medium sm:inline ${done ? "text-foreground" : "text-muted-foreground"}`}>{s.k}</span>
            {i < steps.length - 1 && <span className={`h-px flex-1 ${i < current ? "bg-primary" : "bg-border"}`} />}
          </li>
        );
      })}
    </ol>
  );
}
