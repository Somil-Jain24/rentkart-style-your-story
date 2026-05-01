import { createFileRoute, Link } from "@tanstack/react-router";
import { Plus, Upload, Search, Filter, Edit3, Eye, Calendar, MoreVertical } from "lucide-react";
import { SellerSidebar, SellerTopbar } from "@/components/rentkart/SellerChrome";
import { SellerBottomNav } from "@/components/rentkart/BottomNav";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { listings } from "@/data/mock";

export const Route = createFileRoute("/seller/listings")({
  head: () => ({ meta: [{ title: "My Listings — RentKart Seller" }] }),
  component: Listings,
});

const stateBadge: Record<string, string> = {
  Live: "bg-success-soft text-success",
  Pending: "bg-warning-soft text-warning",
  Draft: "bg-surface-alt text-muted-foreground",
  Rejected: "bg-error-soft text-error",
};

function Listings() {
  const rows = listings.slice(0, 8).map((l, i) => ({
    ...l,
    state: i === 1 ? "Pending" : i === 5 ? "Draft" : "Live",
    views: 420 - i * 30,
    rentals: 18 - i * 2,
  }));

  return (
    <div className="flex min-h-screen bg-background">
      <SellerSidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        <SellerTopbar title="My Listings" subtitle={`${rows.length} listings · 6 live · 1 in review · 1 draft`} />
        <main className="mx-auto max-w-6xl px-4 py-6 lg:px-8">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="flex h-10 flex-1 min-w-[200px] items-center rounded-lg border border-border bg-card px-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input className="h-full flex-1 bg-transparent px-2 text-sm outline-none" placeholder="Search by name or ID" />
            </div>
            <button className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-surface-alt">
              <Filter className="h-4 w-4" /> Status
            </button>
            <button className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-border bg-card px-3 text-sm font-medium hover:bg-surface-alt">
              <Upload className="h-4 w-4" /> Bulk upload (CSV)
            </button>
            <Link to="/seller/listings/new" className="inline-flex h-10 items-center gap-1.5 rounded-lg bg-primary px-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
              <Plus className="h-4 w-4" /> New listing
            </Link>
          </div>

          {/* Tabs */}
          <div className="mt-5 flex gap-1 border-b border-border text-sm">
            {["All (8)", "Live (6)", "In review (1)", "Drafts (1)"].map((t, i) => (
              <button key={t} className={`relative px-3 py-2.5 font-medium ${i === 0 ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                {t}{i === 0 && <span className="absolute -bottom-px left-2 right-2 h-0.5 bg-primary" />}
              </button>
            ))}
          </div>

          {/* Table desktop / cards mobile */}
          <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
            <table className="hidden w-full text-sm md:table">
              <thead className="bg-surface-alt text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">Listing</th>
                  <th className="px-3 py-3 text-left font-medium">Status</th>
                  <th className="px-3 py-3 text-right font-medium">Daily rate</th>
                  <th className="px-3 py-3 text-right font-medium">Item value</th>
                  <th className="px-3 py-3 text-right font-medium">Views</th>
                  <th className="px-3 py-3 text-right font-medium">Rentals</th>
                  <th className="px-3 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((r) => (
                  <tr key={r.id} className="hover:bg-surface-alt/40">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <ProductImage hue={r.imageHue} variant="thumb" className="h-12 w-12" />
                        <div>
                          <p className="font-medium">{r.title}</p>
                          <p className="font-mono text-[10px] text-muted-foreground">{r.id} · Size {r.size}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-3"><span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${stateBadge[r.state]}`}>{r.state}</span></td>
                    <td className="px-3 text-right font-mono">₹{r.dailyRate.toLocaleString("en-IN")}</td>
                    <td className="px-3 text-right font-mono text-muted-foreground">₹{r.itemValue.toLocaleString("en-IN")}</td>
                    <td className="px-3 text-right font-mono text-xs">{r.views}</td>
                    <td className="px-3 text-right font-mono text-xs">{r.rentals}</td>
                    <td className="px-3 text-right">
                      <div className="inline-flex gap-1">
                        <button className="grid h-8 w-8 place-items-center rounded-md border border-border hover:bg-surface-alt"><Eye className="h-3.5 w-3.5" /></button>
                        <button className="grid h-8 w-8 place-items-center rounded-md border border-border hover:bg-surface-alt"><Edit3 className="h-3.5 w-3.5" /></button>
                        <button className="grid h-8 w-8 place-items-center rounded-md border border-border hover:bg-surface-alt"><Calendar className="h-3.5 w-3.5" /></button>
                        <button className="grid h-8 w-8 place-items-center rounded-md border border-border hover:bg-surface-alt"><MoreVertical className="h-3.5 w-3.5" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Mobile cards */}
            <ul className="divide-y divide-border md:hidden">
              {rows.map((r) => (
                <li key={r.id} className="flex gap-3 p-4">
                  <ProductImage hue={r.imageHue} variant="thumb" className="h-16 w-16" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="truncate text-sm font-medium">{r.title}</p>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${stateBadge[r.state]}`}>{r.state}</span>
                    </div>
                    <p className="font-mono text-[10px] text-muted-foreground">{r.id}</p>
                    <div className="mt-2 flex items-center gap-3 text-xs">
                      <span className="font-mono">₹{r.dailyRate}/d</span>
                      <span className="text-muted-foreground">{r.views} views</span>
                      <span className="text-muted-foreground">{r.rentals} rents</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
      <SellerBottomNav />
    </div>
  );
}
