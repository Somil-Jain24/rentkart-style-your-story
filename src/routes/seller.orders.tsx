import { createFileRoute } from "@tanstack/react-router";
import { Camera, AlertTriangle, Check, MessageCircle } from "lucide-react";
import { SellerSidebar, SellerTopbar } from "@/components/rentkart/SellerChrome";
import { SellerBottomNav } from "@/components/rentkart/BottomNav";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { sellerOrders } from "@/data/mock";

export const Route = createFileRoute("/seller/orders")({
  head: () => ({ meta: [{ title: "Orders — The RentVerse Seller" }] }),
  component: SellerOrders,
});

const statusStyle: Record<string, string> = {
  Pending: "bg-warning-soft text-warning",
  Active: "bg-success-soft text-success",
  Returned: "bg-info-soft text-info",
};

function SellerOrders() {
  return (
    <div className="flex min-h-screen bg-background">
      <SellerSidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        <SellerTopbar title="Orders" subtitle="Accept, fulfil and inspect returns" />
        <main className="mx-auto max-w-6xl px-4 py-6 lg:px-8">
          <div className="flex gap-1 border-b border-border text-sm">
            {["New (1)", "Active (1)", "Returned (1)", "Disputes (0)"].map((t, i) => (
              <button key={t} className={`relative px-3 py-2.5 font-medium ${i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {t}{i === 0 && <span className="absolute -bottom-px left-2 right-2 h-0.5 bg-primary" />}
              </button>
            ))}
          </div>

          <div className="mt-5 space-y-4">
            {/* Pending */}
            <div className="rounded-2xl border border-warning/40 bg-warning-soft/40 p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="mt-1 h-5 w-5 text-warning" />
                  <div>
                    <p className="text-sm font-semibold">Action required · accept within 4 hours</p>
                    <p className="text-xs text-muted-foreground">ORD-88312 from Priya Sharma · pickup needed by 17 Nov</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="h-9 rounded-md border border-border bg-card px-3 text-xs font-medium">Decline</button>
                  <button className="h-9 rounded-md bg-success px-3 text-xs font-semibold text-success-foreground">Accept order</button>
                </div>
              </div>
            </div>

            {sellerOrders.map((o) => (
              <article key={o.id} className="rounded-2xl border border-border bg-card p-5">
                <div className="flex flex-col gap-4 sm:flex-row">
                  <ProductImage hue={o.imageHue} variant="thumb" className="h-24 w-24 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <p className="font-mono text-[11px] text-muted-foreground">{o.id}</p>
                        <h3 className="mt-0.5 font-semibold">{o.title}</h3>
                        <p className="text-xs text-muted-foreground">Renter: {o.buyerName}</p>
                      </div>
                      <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${statusStyle[o.status] ?? "bg-surface-alt text-muted-foreground"}`}>{o.status}</span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
                      <Stat label="Pickup" value={o.rentStart} />
                      <Stat label="Return by" value={o.rentEnd} />
                      <Stat label="Your payout" value={`₹${o.rentalFee.toLocaleString("en-IN")}`} mono />
                      <Stat label="Hold reserved" value={`₹${o.refundableHold.toLocaleString("en-IN")}`} mono />
                    </div>

                    {o.status === "Returned" && (
                      <div className="mt-4 rounded-xl border border-info/30 bg-info-soft p-4">
                        <div className="flex items-start gap-3">
                          <Camera className="mt-0.5 h-5 w-5 text-info" />
                          <div className="flex-1">
                            <p className="text-sm font-semibold">Return inspection required</p>
                            <p className="mt-0.5 text-xs text-muted-foreground">Upload 4 photos of the item within 24 hours. Approve to release renter's hold OR claim damage.</p>
                            <div className="mt-3 grid grid-cols-4 gap-2">
                              {[0,1,2,3].map((i) => (
                                <button key={i} className="grid aspect-square place-items-center rounded-md border-2 border-dashed border-border bg-card text-muted-foreground">
                                  <Camera className="h-4 w-4" />
                                </button>
                              ))}
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                              <button className="inline-flex h-9 items-center gap-1.5 rounded-md bg-success px-3 text-xs font-semibold text-success-foreground"><Check className="h-3.5 w-3.5" /> Approve return</button>
                              <button className="inline-flex h-9 items-center gap-1.5 rounded-md border border-error/30 bg-error-soft px-3 text-xs font-semibold text-error">Claim damage</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap gap-2">
                      <button className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-medium hover:bg-surface-alt"><MessageCircle className="h-3.5 w-3.5" /> Chat with renter</button>
                      <button className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-medium hover:bg-surface-alt">View details</button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
      <SellerBottomNav />
    </div>
  );
}

function Stat({ label, value, mono }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className={`mt-0.5 font-medium ${mono ? "font-mono" : ""}`}>{value}</p>
    </div>
  );
}
