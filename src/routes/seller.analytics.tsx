import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, Eye, RefreshCw, Users } from "lucide-react";
import { SellerSidebar, SellerTopbar } from "@/components/rentkart/SellerChrome";
import { SellerBottomNav } from "@/components/rentkart/BottomNav";

export const Route = createFileRoute("/seller/analytics")({
  head: () => ({ meta: [{ title: "Analytics — RentKart Seller" }] }),
  component: Analytics,
});

function Analytics() {
  return (
    <div className="flex min-h-screen bg-background">
      <SellerSidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        <SellerTopbar title="Analytics" subtitle="Last 30 days" />
        <main className="mx-auto max-w-6xl space-y-6 px-4 py-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Kpi icon={Eye} label="Total views" value="4,820" delta="+18%" />
            <Kpi icon={TrendingUp} label="Conversion" value="68%" delta="+4 pts" />
            <Kpi icon={RefreshCw} label="Repeat renters" value="34%" delta="+6 pts" />
            <Kpi icon={Users} label="Unique renters" value="142" delta="+22" />
          </div>

          <section className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold">Revenue trend</h2>
              <span className="font-mono text-xs text-muted-foreground">Daily · 30d</span>
            </div>
            <svg viewBox="0 0 400 120" className="mt-4 h-32 w-full">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {Array.from({ length: 6 }).map((_, i) => (
                <line key={i} x1="0" x2="400" y1={i * 24} y2={i * 24} stroke="var(--border)" strokeWidth="0.5" />
              ))}
              <polyline fill="url(#g1)" stroke="none" points="0,90 30,80 60,70 90,75 120,55 150,60 180,40 210,50 240,30 270,42 300,25 330,35 360,18 400,22 400,120 0,120" />
              <polyline fill="none" stroke="var(--primary)" strokeWidth="2" points="0,90 30,80 60,70 90,75 120,55 150,60 180,40 210,50 240,30 270,42 300,25 330,35 360,18 400,22" />
            </svg>
            <div className="mt-3 grid grid-cols-3 gap-4 border-t border-dashed border-border pt-4 text-sm">
              <div><p className="text-xs text-muted-foreground">Total revenue</p><p className="font-mono text-lg font-bold">₹1,28,440</p></div>
              <div><p className="text-xs text-muted-foreground">Avg. order value</p><p className="font-mono text-lg font-bold">₹4,830</p></div>
              <div><p className="text-xs text-muted-foreground">Best day</p><p className="font-mono text-lg font-bold">₹12,200</p></div>
            </div>
          </section>

          <section className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-display text-base font-semibold">Revenue by category</h3>
              <ul className="mt-3 space-y-2.5 text-sm">
                {[
                  { c: "Lehenga", pct: 62, val: 79620 },
                  { c: "Sherwani", pct: 22, val: 28250 },
                  { c: "Saree", pct: 11, val: 14130 },
                  { c: "Accessories", pct: 5, val: 6440 },
                ].map((r) => (
                  <li key={r.c}>
                    <div className="flex justify-between text-xs">
                      <span>{r.c}</span><span className="font-mono">₹{r.val.toLocaleString("en-IN")}</span>
                    </div>
                    <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-surface-alt">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${r.pct}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="font-display text-base font-semibold">Repeat renter cohort</h3>
              <p className="mt-1 text-xs text-muted-foreground">34% of renters this month rented before — strong loyalty signal.</p>
              <div className="mt-4 grid grid-cols-7 gap-1">
                {Array.from({ length: 28 }).map((_, i) => (
                  <div key={i} className="aspect-square rounded-sm" style={{ background: `oklch(0.96 ${0.02 + (i % 5) * 0.02} 45)` }} />
                ))}
              </div>
              <p className="mt-2 text-[10px] text-muted-foreground">Lighter = fewer rentals · Darker = more rentals</p>
            </div>
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
