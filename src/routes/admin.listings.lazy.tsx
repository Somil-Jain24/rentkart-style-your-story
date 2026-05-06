import { createLazyFileRoute } from "@tanstack/react-router";
import { Search, ChevronDown } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { useState } from "react";

export const Route = createLazyFileRoute("/admin/listings")({
  component: ListingApprovalsPage,
});

interface Listing {
  id: string;
  name: string;
  category: string;
  brand: string;
  seller: string;
  price: string;
  uploadDate: string;
  stock: number;
  image: string;
  status: "pending" | "approved" | "rejected";
}

function ListingApprovalsPage() {
  const [listings] = useState<Listing[]>([
    {
      id: "RK-10391",
      name: "Crystal Embellished Saree",
      category: "Women's Ethnic",
      brand: "Meera Drapes",
      seller: "Meera Drapes",
      price: "₹28,500",
      uploadDate: "Today",
      stock: 5,
      image: "https://via.placeholder.com/60?text=Saree",
      status: "pending",
    },
    {
      id: "RK-10388",
      name: "Velvet Sherwani Set",
      category: "Men's Ethnic",
      brand: "Karan Menswear",
      seller: "Karan Menswear",
      price: "₹22,000",
      uploadDate: "Today",
      stock: 3,
      image: "https://via.placeholder.com/60?text=Sherwani",
      status: "pending",
    },
    {
      id: "RK-10385",
      name: "Pearl Choker Set",
      category: "Jewelry",
      brand: "Rajwada",
      seller: "Rajwada Ornaments",
      price: "₹9,500",
      uploadDate: "Yesterday",
      stock: 12,
      image: "https://via.placeholder.com/60?text=Choker",
      status: "pending",
    },
    {
      id: "RK-10380",
      name: "Gold Bridal Necklace",
      category: "Jewelry",
      brand: "Royal Gold",
      seller: "Royal Jewelry",
      price: "₹45,000",
      uploadDate: "2 days ago",
      stock: 2,
      image: "https://via.placeholder.com/60?text=Necklace",
      status: "approved",
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <AdminPageHeader
          title="Listing Approvals"
          subtitle="Review and moderate newly submitted clothing listings."
        />

        {/* Search & Filters Bar */}
        <div className="mb-8 rounded-xl border border-border bg-card p-4 space-y-4 lg:flex lg:gap-3 lg:space-y-0">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search listings by name, brand, or seller…"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <select className="px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Categories</option>
            <option>Women's Ethnic</option>
            <option>Men's Ethnic</option>
            <option>Jewelry</option>
          </select>

          <select className="px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Sellers</option>
          </select>

          <select className="px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>

          <button className="px-4 py-2 rounded-lg border border-border bg-background text-sm font-medium hover:bg-surface-alt transition-colors">
            Bulk Actions
          </button>
        </div>

        {/* Listings Table */}
        <div className="rounded-2xl border border-border overflow-hidden bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-alt">
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Product</th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Category</th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Seller</th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Price</th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Stock</th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Uploaded</th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Status</th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing) => (
                  <tr key={listing.id} className="border-b border-border hover:bg-surface-alt transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={listing.image}
                          alt={listing.name}
                          className="h-10 w-10 rounded object-cover bg-muted"
                        />
                        <div>
                          <p className="font-medium text-foreground">{listing.name}</p>
                          <p className="text-xs text-muted-foreground font-mono">{listing.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{listing.category}</td>
                    <td className="px-6 py-4 text-foreground">{listing.seller}</td>
                    <td className="px-6 py-4 font-semibold text-foreground">{listing.price}</td>
                    <td className="px-6 py-4 text-foreground">{listing.stock} units</td>
                    <td className="px-6 py-4 text-muted-foreground text-xs">{listing.uploadDate}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={listing.status}>
                        {listing.status.charAt(0).toUpperCase() + listing.status.slice(1)}
                      </StatusBadge>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        {listing.status === "pending" && (
                          <>
                            <button className="px-3 py-1 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 text-xs font-semibold transition-colors">
                              Approve
                            </button>
                            <button className="px-3 py-1 rounded-lg border border-red-300 text-red-700 hover:bg-red-50 text-xs font-semibold transition-colors">
                              Reject
                            </button>
                          </>
                        )}
                        <button className="px-3 py-1 rounded-lg border border-border hover:bg-surface-alt text-xs font-semibold transition-colors">
                          Details
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">Showing 1-4 of 24 pending listings</p>
          <div className="flex gap-2">
            <button className="px-3 py-2 rounded-lg border border-border hover:bg-surface-alt text-sm font-medium transition-colors">
              Previous
            </button>
            <button className="px-3 py-2 rounded-lg border border-border hover:bg-surface-alt text-sm font-medium transition-colors">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
