import { createFileRoute, Link } from "@tanstack/react-router";
import { BarChart3, Calendar, TrendingUp, Activity } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { ThemeToggle } from "@/components/rentkart/ThemeToggle";
import { AdminSidebar } from "@/components/rentkart/AdminSidebar";

export const Route = createFileRoute("/admin/analytics")({
  head: () => ({ meta: [{ title: "Analytics — Admin" }] }),
  component: Analytics,
});

function Analytics() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-card sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between px-4 lg:px-8">
            <div className="flex items-center gap-3 lg:hidden">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <h1 className="font-display text-xl font-bold">Analytics</h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="font-mono">ops@rentkart.in</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron-soft text-xs font-bold text-primary-deep">OP</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-6 lg:px-8">
          <div className="max-w-6xl">
            {/* Page header */}
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-widest text-primary">Insights</p>
                <h2 className="mt-1 font-display text-2xl font-bold">Analytics</h2>
                <p className="mt-1 text-sm text-muted-foreground">Platform performance, metrics and trends.</p>
              </div>
              <button className="flex items-center gap-2 h-10 rounded-lg border border-border bg-background px-4 text-sm font-medium hover:bg-surface-alt">
                <Calendar className="h-4 w-4" />
                Date range
              </button>
            </div>

            {/* Key metrics */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase">Total orders</p>
                    <p className="mt-2 font-display text-3xl font-bold">12,458</p>
                    <p className="mt-1 text-xs text-success">↑ 12.5% vs last period</p>
                  </div>
                  <Activity className="h-8 w-8 text-primary/40" />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase">Revenue</p>
                    <p className="mt-2 font-display text-3xl font-bold">₹48.2L</p>
                    <p className="mt-1 text-xs text-success">↑ 8.3% vs last period</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-success/40" />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase">Avg order value</p>
                    <p className="mt-2 font-display text-3xl font-bold">₹3,870</p>
                    <p className="mt-1 text-xs text-success">↑ 2.1% vs last period</p>
                  </div>
                  <BarChart3 className="h-8 w-8 text-info/40" />
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase">Customer satisfaction</p>
                    <p className="mt-2 font-display text-3xl font-bold">4.7/5</p>
                    <p className="mt-1 text-xs text-muted-foreground">Based on 2,847 reviews</p>
                  </div>
                  <Activity className="h-8 w-8 text-success/40" />
                </div>
              </div>
            </div>

            {/* Chart placeholders */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Orders over time</h3>
                <div className="h-64 rounded-lg bg-surface-alt flex items-center justify-center text-muted-foreground text-sm">
                  Chart visualization would display here
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold mb-4">Category performance</h3>
                <div className="h-64 rounded-lg bg-surface-alt flex items-center justify-center text-muted-foreground text-sm">
                  Chart visualization would display here
                </div>
              </div>
            </div>

            {/* Performance breakdown */}
            <div className="mt-6 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold mb-6">Top categories</h3>
              <div className="space-y-4">
                {[
                  { name: "Apparel & Accessories", orders: 4250, revenue: "₹18.2L", growth: "↑ 15.2%" },
                  { name: "Electronics & Gadgets", orders: 3120, revenue: "₹16.8L", growth: "↑ 12.5%" },
                  { name: "Events & Costumes", orders: 2850, revenue: "₹12.3L", growth: "↑ 8.7%" },
                  { name: "Furniture & Home", orders: 1580, revenue: "₹8.9L", growth: "↑ 5.3%" },
                  { name: "Tools & Equipment", orders: 658, revenue: "₹2.0L", growth: "↑ 2.1%" },
                ].map((cat) => (
                  <div key={cat.name} className="flex items-center justify-between p-4 rounded-lg hover:bg-surface-alt transition-colors">
                    <div className="flex-1">
                      <p className="font-medium">{cat.name}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{cat.orders} orders</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono font-semibold">{cat.revenue}</p>
                      <p className="mt-1 text-xs text-success">{cat.growth}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
