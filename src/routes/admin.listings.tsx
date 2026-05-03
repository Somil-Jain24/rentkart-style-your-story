import { createFileRoute, Link } from "@tanstack/react-router";
import { FileCheck, Search, Filter, ChevronRight } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { ThemeToggle } from "@/components/rentkart/ThemeToggle";
import { AdminSidebar } from "@/components/rentkart/AdminSidebar";

export const Route = createFileRoute("/admin/listings")({
  head: () => ({ meta: [{ title: "Listing Approvals — Admin" }] }),
  component: ListingApprovals,
});

function ListingApprovals() {
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
              <h1 className="font-display text-xl font-bold">Listing Approvals</h1>
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
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Listing queue</p>
              <h2 className="mt-1 font-display text-2xl font-bold">Listing approvals</h2>
              <p className="mt-1 text-sm text-muted-foreground">Review and approve pending listings. SLA: 4 hours per listing.</p>
            </div>

            {/* Filters & Search */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by listing ID or title..."
                  className="w-full h-10 rounded-lg border border-border bg-background pl-10 pr-4 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button className="flex items-center gap-2 h-10 rounded-lg border border-border bg-background px-4 text-sm font-medium hover:bg-surface-alt">
                <Filter className="h-4 w-4" />
                Filters
              </button>
            </div>

            {/* Stats */}
            <div className="mb-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground font-mono uppercase">Pending</p>
                <p className="mt-1 font-display text-2xl font-bold">14</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground font-mono uppercase">Avg review time</p>
                <p className="mt-1 font-display text-2xl font-bold">2.3h</p>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground font-mono uppercase">Approval rate</p>
                <p className="mt-1 font-display text-2xl font-bold">94.2%</p>
              </div>
            </div>

            {/* Listings table */}
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-surface-alt">
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Listing ID</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Title</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Seller</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Value</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Age</th>
                      <th className="px-6 py-3 text-left font-semibold text-foreground">Status</th>
                      <th className="px-6 py-3 text-right font-semibold text-foreground">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { id: "RK-10391", t: "Crystal Embellished Saree", seller: "Meera Drapes", value: "₹28,500", age: "1h 20m", flag: "High value" },
                      { id: "RK-10388", t: "Velvet Sherwani Set", seller: "Karan Menswear", value: "₹22,000", age: "45m", flag: "New seller" },
                      { id: "RK-10385", t: "Pearl Choker Set", seller: "Rajwada Ornaments", value: "₹9,500", age: "32m" },
                      { id: "RK-10382", t: "MacBook Pro 14\" M3", seller: "GearLoop Rentals", value: "₹195,000", age: "18m", flag: "High value" },
                      { id: "RK-10378", t: "Premium PA Speaker System", seller: "SoundHaus", value: "₹95,000", age: "2h 15m", flag: "High value" },
                      { id: "RK-10375", t: "Apple Watch Series 9", seller: "TechGear Rentals", value: "₹42,000", age: "3h 40m" },
                    ].map((listing) => (
                      <tr key={listing.id} className="hover:bg-surface-alt transition-colors">
                        <td className="px-6 py-4 font-mono text-xs font-semibold">{listing.id}</td>
                        <td className="px-6 py-4 max-w-xs truncate">{listing.t}</td>
                        <td className="px-6 py-4 text-muted-foreground">{listing.seller}</td>
                        <td className="px-6 py-4 font-mono">{listing.value}</td>
                        <td className="px-6 py-4 text-muted-foreground">{listing.age}</td>
                        <td className="px-6 py-4">
                          {listing.flag && (
                            <span className="inline-block rounded-full bg-warning-soft px-2 py-1 text-[10px] font-semibold text-warning">{listing.flag}</span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-right flex justify-end gap-2">
                          <button className="h-8 rounded-md bg-success px-3 text-[11px] font-semibold text-success-foreground hover:bg-success/90">Approve</button>
                          <button className="h-8 rounded-md border border-border bg-background px-3 text-[11px] font-medium hover:bg-surface-alt">Reject</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="border-t border-border px-6 py-4 flex items-center justify-between">
                <p className="text-xs text-muted-foreground">Showing 1–6 of 14 listings</p>
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
