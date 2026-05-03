import { createFileRoute, Link } from "@tanstack/react-router";
import { TrendingUp, IndianRupee, Package, Eye, AlertTriangle, ArrowRight, BadgeCheck, Clock, Star } from "lucide-react";
import { SellerSidebar, SellerTopbar } from "@/components/rentkart/SellerChrome";
import { SellerBottomNav } from "@/components/rentkart/BottomNav";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { sellerOrders, listings } from "@/data/mock";

export const Route = createFileRoute("/seller/")({
  head: () => ({ meta: [{ title: "Seller Dashboard — The RentVerse" }] }),
  component: SellerDashboard,
});

function SellerDashboard() {
  return (
    <div className="flex min-h-screen bg-background">
      <SellerSidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        <SellerTopbar title="Dashboard" subtitle="Welcome back, Aarohi · Here's how your store is performing" />
        <main className="mx-auto max-w-6xl px-4 py-6 lg:px-8">
          {/* Alerts */}
          <div className="mb-5 grid gap-3 sm:grid-cols-2">
            <Alert tone="warning" icon={AlertTriangle} title="Return inspection pending" body="ORD-88102 returned. Approve within 24h to release renter's hold." cta="Inspect now" />
            <Alert tone="info" icon={BadgeCheck} title="KYC re-verification due" body="Update PAN proof by 30 Nov to keep payouts active." cta="Update KYC" />
          </div>

          {/* KPIs */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Kpi icon={IndianRupee} label="Earnings (Nov)" value="₹42,840" delta="+18%" />
            <Kpi icon={Package} label="Active rentals" value="7" delta="+2 today" />
            <Kpi icon={Eye} label="Listing views" value="1,284" delta="+24%" />
            <Kpi icon={TrendingUp} label="Conversion" value="68%" delta="+4 pts" />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr,1fr]">
            {/* New orders */}
            <section className="rounded-2xl border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border p-5">
                <div>
                  <h2 className="font-display text-lg font-semibold">New & active orders</h2>
                  <p className="text-xs text-muted-foreground">Action required: 1 pending</p>
                </div>
                <Link to="/seller/orders" className="text-sm font-medium text-primary">View all →</Link>
              </div>
              <div className="divide-y divide-border">
                {sellerOrders.slice(0, 3).map((o) => (
                  <div key={o.id} className="flex items-center gap-3 p-4">
                    <ProductImage hue={o.imageHue} variant="thumb" className="h-14 w-14" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-mono text-[11px] text-muted-foreground">{o.id}</p>
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${o.status === "Pending" ? "bg-warning-soft text-warning" : "bg-success-soft text-success"}`}>{o.status}</span>
                      </div>
                      <p className="truncate text-sm font-semibold">{o.title}</p>
                      <p className="text-xs text-muted-foreground">{o.buyerName} · {o.rentStart} → {o.rentEnd}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-sm font-bold">₹{o.rentalFee.toLocaleString("en-IN")}</p>
                      <p className="text-[10px] text-muted-foreground">payout</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Earnings sparkline + payouts */}
            <section className="space-y-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Last 7 days</p>
                <p className="mt-1 font-display text-3xl font-bold">₹14,260</p>
                <p className="text-xs text-success">+₹3,180 vs prev week</p>
                <svg viewBox="0 0 200 60" className="mt-3 h-14 w-full">
                  <polyline fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" points="0,40 30,30 60,35 90,20 120,28 150,15 180,18 200,8" />
                  <polyline fill="var(--primary)" fillOpacity="0.1" stroke="none" points="0,40 30,30 60,35 90,20 120,28 150,15 180,18 200,8 200,60 0,60" />
                </svg>
              </div>
              <div className="rounded-2xl border border-border bg-card p-5">
                <h3 className="font-semibold">Next payout</h3>
                <p className="mt-1 font-display text-2xl font-bold font-mono">₹8,940</p>
                <p className="text-xs text-muted-foreground">Tomorrow · HDFC ····7710</p>
                <Link to="/seller/account" className="mt-3 inline-flex h-9 items-center gap-1 rounded-md border border-border px-3 text-xs font-medium hover:bg-surface-alt">
                  Payout history <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </section>
          </div>

          {/* Top listings */}
          <section className="mt-8 rounded-2xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border p-5">
              <h2 className="font-display text-lg font-semibold">Top performing listings</h2>
              <Link to="/seller/listings" className="text-sm font-medium text-primary">Manage →</Link>
            </div>
            <table className="w-full text-sm">
              <thead className="bg-surface-alt text-xs uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-5 py-2.5 text-left font-medium">Listing</th>
                  <th className="hidden px-3 py-2.5 text-right font-medium sm:table-cell">Views</th>
                  <th className="px-3 py-2.5 text-right font-medium">Rentals</th>
                  <th className="px-3 py-2.5 text-right font-medium">Revenue</th>
                  <th className="hidden px-3 py-2.5 text-right font-medium sm:table-cell">Rating</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {listings.slice(0, 4).map((l, i) => (
                  <tr key={l.id}>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-3">
                        <ProductImage hue={l.imageHue} variant="thumb" className="h-10 w-10" />
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium">{l.title}</p>
                          <p className="font-mono text-[10px] text-muted-foreground">{l.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="hidden px-3 text-right font-mono text-xs sm:table-cell">{(420 - i * 60).toLocaleString("en-IN")}</td>
                    <td className="px-3 text-right font-mono text-xs">{18 - i * 3}</td>
                    <td className="px-3 text-right font-mono text-sm font-semibold">₹{((18 - i * 3) * l.dailyRate * 3).toLocaleString("en-IN")}</td>
                    <td className="hidden px-3 text-right text-xs sm:table-cell"><Star className="-mt-0.5 mr-0.5 inline h-3 w-3 fill-warning text-warning" />{l.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
      <SellerBottomNav />
    </div>
  );
}

function Kpi({ icon: Icon, label, value, delta }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; delta: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center justify-between">
        <Icon className="h-5 w-5 text-primary" />
        <span className="font-mono text-[10px] font-semibold text-success">{delta}</span>
      </div>
      <p className="mt-3 font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold">{value}</p>
    </div>
  );
}

function Alert({ tone, icon: Icon, title, body, cta }: { tone: "warning" | "info"; icon: React.ComponentType<{ className?: string }>; title: string; body: string; cta: string }) {
  const cls = tone === "warning" ? "border-warning/40 bg-warning-soft" : "border-info/30 bg-info-soft";
  const iconCls = tone === "warning" ? "text-warning" : "text-info";
  const btn = tone === "warning" ? "bg-warning text-warning-foreground" : "bg-info text-info-foreground";
  return (
    <div className={`flex items-start gap-3 rounded-xl border p-4 ${cls}`}>
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconCls}`} />
      <div className="flex-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="mt-0.5 text-xs text-muted-foreground">{body}</p>
      </div>
      <button className={`h-9 shrink-0 rounded-md px-3 text-xs font-semibold ${btn}`}>{cta}</button>
    </div>
  );
}
