import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Search, Filter, Clock } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { ThemeToggle } from "@/components/rentkart/ThemeToggle";
import { AdminSidebar } from "@/components/rentkart/AdminSidebar";

export const Route = createFileRoute("/admin/disputes")({
  head: () => ({ meta: [{ title: "Disputes — Admin" }] }),
  component: Disputes,
});

function Disputes() {
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
              <h1 className="font-display text-xl font-bold">Disputes Management</h1>
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
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Resolution</p>
              <h2 className="mt-1 font-display text-2xl font-bold">Active disputes</h2>
              <p className="mt-1 text-sm text-muted-foreground">Manage order disputes and override hold release / refund decisions.</p>
            </div>

            {/* Filters & Search */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by order ID..."
                  className="w-full h-10 rounded-lg border border-border bg-background pl-10 pr-4 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button className="flex items-center gap-2 h-10 rounded-lg border border-border bg-background px-4 text-sm font-medium hover:bg-surface-alt">
                <Filter className="h-4 w-4" />
                Filter
              </button>
            </div>

            {/* Stats */}
            <div className="mb-6 grid gap-4 sm:grid-cols-4">
              <div className="rounded-lg border border-error/30 bg-card p-4">
                <p className="text-xs text-error font-mono uppercase">Open</p>
                <p className="mt-1 font-display text-2xl font-bold">3</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground font-mono uppercase">Hold at risk</p>
                <p className="mt-1 font-display text-2xl font-bold">₹25,500</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground font-mono uppercase">Avg resolution</p>
                <p className="mt-1 font-display text-2xl font-bold">3.2d</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground font-mono uppercase">SLA compliance</p>
                <p className="mt-1 font-display text-2xl font-bold">96.5%</p>
              </div>
            </div>

            {/* Disputes list */}
            <div className="space-y-4">
              {[
                { id: "ORD-87902", claim: "Damage claim", buyer: "Priya S.", seller: "Meera Drapes", hold: "₹8,200", days: "2/5", desc: "Renter reports stains on lehenga" },
                { id: "ORD-87841", claim: "Wrong item delivered", buyer: "Anjali M.", seller: "Karan Menswear", hold: "₹14,500", days: "1/5", desc: "Seller shipped incorrect sherwani size" },
                { id: "ORD-87780", claim: "Late return dispute", buyer: "Riya K.", seller: "ToolBay", hold: "₹2,800", days: "4/5", desc: "Return received 3 days late" },
              ].map((dispute) => (
                <div key={dispute.id} className="rounded-xl border border-error/20 bg-card p-6 hover:border-error/40 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div>
                          <p className="font-mono text-sm font-semibold text-foreground">{dispute.id}</p>
                          <p className="text-sm font-semibold text-foreground mt-1">{dispute.claim}</p>
                        </div>
                        <span className="rounded-full bg-error-soft px-2 py-1 text-[10px] font-semibold text-error">Open</span>
                      </div>

                      <p className="text-xs text-muted-foreground mb-2">{dispute.buyer} vs {dispute.seller}</p>
                      <p className="text-sm text-foreground mb-3">{dispute.desc}</p>

                      <div className="flex items-center gap-6 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1.5">
                          <AlertTriangle className="h-3.5 w-3.5 text-error" />
                          <span>Hold at risk: <span className="font-mono font-semibold text-foreground">{dispute.hold}</span></span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          <span>Day <span className="font-mono">{dispute.days}</span></span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                    <button className="h-9 rounded-lg border border-error/30 bg-error-soft px-3 text-xs font-semibold text-error hover:bg-error-soft/80">Refund renter</button>
                    <button className="h-9 rounded-lg border border-success/30 bg-success-soft px-3 text-xs font-semibold text-success hover:bg-success-soft/80">Pay seller</button>
                    <button className="h-9 rounded-lg border border-border bg-background px-3 text-xs font-semibold hover:bg-surface-alt">View case details</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <p>Showing 1–3 of 3 open disputes</p>
              <div className="flex gap-2">
                <button className="h-8 rounded-md border border-border bg-background px-3 font-medium hover:bg-surface-alt disabled:opacity-50">← Previous</button>
                <button className="h-8 rounded-md border border-border bg-background px-3 font-medium hover:bg-surface-alt disabled:opacity-50">Next →</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
