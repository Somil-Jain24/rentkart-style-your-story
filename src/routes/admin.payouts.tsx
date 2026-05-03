import { createFileRoute, Link } from "@tanstack/react-router";
import { Wallet, Search, Filter, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { ThemeToggle } from "@/components/rentkart/ThemeToggle";
import { AdminSidebar } from "@/components/rentkart/AdminSidebar";

export const Route = createFileRoute("/admin/payouts")({
  head: () => ({ meta: [{ title: "Payouts — Admin" }] }),
  component: Payouts,
});

function Payouts() {
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
              <h1 className="font-display text-xl font-bold">Payouts</h1>
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
            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Financial</p>
              <h2 className="mt-1 font-display text-2xl font-bold">Payouts</h2>
              <p className="mt-1 text-sm text-muted-foreground">Monitor and process seller payouts, refunds, and chargebacks.</p>
            </div>

            {/* Filters & Search */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by seller ID or name..."
                  className="w-full h-10 rounded-lg border border-border bg-background pl-10 pr-4 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button className="flex items-center gap-2 h-10 rounded-lg border border-border bg-background px-4 text-sm font-medium hover:bg-surface-alt">
                <Filter className="h-4 w-4" />
                Status
              </button>
            </div>

            {/* Stats */}
            <div className="mb-6 grid gap-4 sm:grid-cols-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground font-mono uppercase">Queued today</p>
                <p className="mt-1 font-display text-2xl font-bold">₹4.82L</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground font-mono uppercase">Processing</p>
                <p className="mt-1 font-display text-2xl font-bold">₹1.45L</p>
              </div>
              <div className="rounded-lg border border-success/30 bg-card p-4">
                <p className="text-xs text-success font-mono uppercase">Completed today</p>
                <p className="mt-1 font-display text-2xl font-bold">₹8.23L</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground font-mono uppercase">Pending approval</p>
                <p className="mt-1 font-display text-2xl font-bold">12</p>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-6 flex gap-2 border-b border-border">
              {["Queued", "Processing", "Completed", "Failed"].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    tab === "Queued"
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Payouts table */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface-alt">
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Seller</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Amount</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Orders</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Status</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Next payout</th>
                      <th className="px-6 py-3 text-right font-semibold text-foreground">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { seller: "GearLoop Rentals", id: "S-3120", amount: "₹45,230", orders: 12, status: "queued", nextPayout: "Today 4 PM", icon: Clock },
                      { seller: "Meera Drapes", id: "S-1908", amount: "₹28,500", orders: 8, status: "processing", nextPayout: "Tomorrow", icon: AlertCircle },
                      { seller: "Karan Menswear", id: "S-2310", amount: "₹22,000", orders: 5, status: "completed", nextPayout: "Completed", icon: CheckCircle },
                      { seller: "FrameRent", id: "S-3310", amount: "₹156,700", orders: 24, status: "queued", nextPayout: "Today 6 PM", icon: Clock },
                      { seller: "SoundHaus", id: "S-3720", amount: "₹89,400", orders: 15, status: "queued", nextPayout: "Tomorrow", icon: Clock },
                    ].map((payout) => (
                      <tr key={payout.id} className="hover:bg-surface-alt transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium">{payout.seller}</p>
                            <p className="text-xs text-muted-foreground font-mono">{payout.id}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 font-mono font-semibold">{payout.amount}</td>
                        <td className="px-6 py-4">{payout.orders}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <payout.icon className={`h-4 w-4 ${payout.status === "queued" ? "text-warning" : payout.status === "processing" ? "text-info" : "text-success"}`} />
                            <span className="text-xs capitalize">{payout.status}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-xs text-muted-foreground">{payout.nextPayout}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="h-8 rounded-md border border-border bg-background px-3 text-xs font-medium hover:bg-surface-alt">Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer */}
              <div className="border-t border-border px-6 py-4 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Showing 1–5 of 247 payouts</p>
                <div className="flex gap-2">
                  <button className="h-8 rounded-md border border-border bg-background px-3 text-xs font-medium hover:bg-surface-alt">← Previous</button>
                  <button className="h-8 rounded-md border border-border bg-background px-3 text-xs font-medium hover:bg-surface-alt">Next →</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
