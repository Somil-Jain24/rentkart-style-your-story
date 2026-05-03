import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Search, Filter, CheckCircle, AlertCircle, Clock } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { ThemeToggle } from "@/components/rentkart/ThemeToggle";
import { AdminSidebar } from "@/components/rentkart/AdminSidebar";

export const Route = createFileRoute("/admin/sellers")({
  head: () => ({ meta: [{ title: "Seller Management — Admin" }] }),
  component: SellerManagement,
});

function SellerManagement() {
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
              <h1 className="font-display text-xl font-bold">Seller Management</h1>
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
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Management</p>
              <h2 className="mt-1 font-display text-2xl font-bold">Seller management</h2>
              <p className="mt-1 text-sm text-muted-foreground">Monitor and manage seller accounts, performance, and compliance.</p>
            </div>

            {/* Filters & Search */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by seller name or ID..."
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
                <p className="text-xs text-muted-foreground font-mono uppercase">Total sellers</p>
                <p className="mt-1 font-display text-2xl font-bold">2,847</p>
              </div>
              <div className="rounded-lg border border-success/30 bg-card p-4">
                <p className="text-xs text-success font-mono uppercase">Active</p>
                <p className="mt-1 font-display text-2xl font-bold">2,650</p>
              </div>
              <div className="rounded-lg border border-warning/30 bg-card p-4">
                <p className="text-xs text-warning font-mono uppercase">Suspended</p>
                <p className="mt-1 font-display text-2xl font-bold">12</p>
              </div>
              <div className="rounded-lg border border-error/30 bg-card p-4">
                <p className="text-xs text-error font-mono uppercase">Flagged</p>
                <p className="mt-1 font-display text-2xl font-bold">15</p>
              </div>
            </div>

            {/* Sellers table */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface-alt">
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Seller</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Category</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Listings</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Performance</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Status</th>
                      <th className="px-6 py-3 text-right font-semibold text-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { id: "S-1908", name: "Meera Drapes", cat: "Apparel", listings: 24, rate: 4.8, status: "active" },
                      { id: "S-2310", name: "Karan Menswear", cat: "Apparel", listings: 18, rate: 4.6, status: "active" },
                      { id: "S-3120", name: "GearLoop Rentals", cat: "Electronics", listings: 32, rate: 4.9, status: "active" },
                      { id: "S-3720", name: "SoundHaus", cat: "Audio", listings: 15, rate: 4.7, status: "flagged" },
                      { id: "S-2100", name: "Luxury Rentals", cat: "Premium", listings: 8, rate: 3.2, status: "suspended" },
                    ].map((seller) => (
                      <tr key={seller.id} className="hover:bg-surface-alt transition-colors">
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium">{seller.name}</p>
                            <p className="text-xs text-muted-foreground font-mono">{seller.id}</p>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-muted-foreground">{seller.cat}</td>
                        <td className="px-6 py-4">{seller.listings}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-20 bg-surface-alt rounded-full h-2">
                              <div className="bg-success h-2 rounded-full" style={{ width: `${(seller.rate / 5) * 100}%` }}></div>
                            </div>
                            <span className="text-xs font-semibold">{seller.rate}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${
                            seller.status === "active" ? "bg-success-soft text-success" :
                            seller.status === "flagged" ? "bg-warning-soft text-warning" :
                            "bg-error-soft text-error"
                          }`}>
                            {seller.status === "active" ? <CheckCircle className="h-3 w-3" /> : <AlertCircle className="h-3 w-3" />}
                            {seller.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button className="h-8 rounded-md border border-border bg-background px-3 text-xs font-medium hover:bg-surface-alt">View</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="border-t border-border px-6 py-4 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Showing 1–5 of 2,847 sellers</p>
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
