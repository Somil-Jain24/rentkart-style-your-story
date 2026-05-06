import { createLazyFileRoute } from "@tanstack/react-router";
import { Star, TrendingUp, Package, MessageSquare, CheckCircle } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { useState } from "react";

export const Route = createLazyFileRoute("/admin/sellers")({
  component: SellerManagementPage,
});

interface Seller {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  totalRentals: number;
  revenue: string;
  activeListings: number;
  verified: boolean;
  joinDate: string;
}

interface ActivityLog {
  id: string;
  action: string;
  timestamp: string;
  type: "listing" | "order" | "complaint" | "refund";
}

function SellerManagementPage() {
  const [sellers] = useState<Seller[]>([
    {
      id: "1",
      name: "Meera Drapes",
      image: "https://via.placeholder.com/80?text=MD",
      rating: 4.8,
      reviews: 124,
      totalRentals: 342,
      revenue: "₹45,200",
      activeListings: 28,
      verified: true,
      joinDate: "Jan 2023",
    },
    {
      id: "2",
      name: "Karan Menswear",
      image: "https://via.placeholder.com/80?text=KM",
      rating: 4.6,
      reviews: 98,
      totalRentals: 256,
      revenue: "₹32,500",
      activeListings: 21,
      verified: true,
      joinDate: "Mar 2023",
    },
    {
      id: "3",
      name: "Royal Jewelry",
      image: "https://via.placeholder.com/80?text=RJ",
      rating: 4.9,
      reviews: 156,
      totalRentals: 428,
      revenue: "₹62,300",
      activeListings: 35,
      verified: true,
      joinDate: "Nov 2022",
    },
  ]);

  const [selectedSeller, setSelectedSeller] = useState<Seller>(sellers[0]);

  const activityLogs: ActivityLog[] = [
    {
      id: "1",
      action: "Uploaded 4 new listings",
      timestamp: "2 hours ago",
      type: "listing",
    },
    {
      id: "2",
      action: "Completed order ORD-87902",
      timestamp: "1 day ago",
      type: "order",
    },
    {
      id: "3",
      action: "Complaint received - Damage claim",
      timestamp: "2 days ago",
      type: "complaint",
    },
    {
      id: "4",
      action: "Refund issued ₹8,200",
      timestamp: "3 days ago",
      type: "refund",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <AdminPageHeader
          title="Seller Management"
          subtitle="Seller CRM-style admin dashboard"
        />

        {/* Seller Cards Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {sellers.map((seller) => (
            <div
              key={seller.id}
              onClick={() => setSelectedSeller(seller)}
              className={`rounded-2xl border p-6 cursor-pointer transition-all ${
                selectedSeller.id === seller.id
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:shadow-lg"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <img
                  src={seller.image}
                  alt={seller.name}
                  className="h-16 w-16 rounded-lg object-cover bg-muted"
                />
                {seller.verified && (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                )}
              </div>

              <h3 className="font-display text-lg font-semibold">{seller.name}</h3>

              <div className="mt-2 flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  <span className="font-semibold text-foreground">{seller.rating}</span>
                </div>
                <span className="text-xs text-muted-foreground">
                  ({seller.reviews} reviews)
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Rentals</span>
                  <span className="font-semibold text-foreground">{seller.totalRentals}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Revenue</span>
                  <span className="font-semibold text-foreground">{seller.revenue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Active Listings</span>
                  <span className="font-semibold text-foreground">{seller.activeListings}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Seller Details */}
        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {/* Analytics Charts */}
          <div className="lg:col-span-2 space-y-6">
            {/* Growth Chart */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Revenue Trend
              </h3>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <p>Growth chart visualization would appear here</p>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Cancellation Rate
                </p>
                <p className="mt-2 font-display text-2xl font-bold">1.2%</p>
                <p className="mt-1 text-xs text-green-600">↓ 0.3% from last month</p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Avg Rating
                </p>
                <p className="mt-2 font-display text-2xl font-bold">{selectedSeller.rating}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Based on {selectedSeller.reviews} reviews
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                  Fulfillment
                </p>
                <p className="mt-2 font-display text-2xl font-bold">98.5%</p>
                <p className="mt-1 text-xs text-green-600">On-time delivery</p>
              </div>
            </div>
          </div>

          {/* Seller Info & Actions */}
          <div className="rounded-2xl border border-border bg-card p-6 h-fit">
            <div className="mb-6">
              <img
                src={selectedSeller.image}
                alt={selectedSeller.name}
                className="w-full h-40 rounded-lg object-cover bg-muted mb-4"
              />
              <h2 className="font-display text-xl font-semibold">{selectedSeller.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Joined {selectedSeller.joinDate}
              </p>
            </div>

            <div className="space-y-3">
              <button className="w-full px-4 py-2 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors text-sm">
                View Profile
              </button>
              <button className="w-full px-4 py-2 rounded-lg border border-yellow-300 bg-yellow-50 text-yellow-700 font-semibold hover:bg-yellow-100 transition-colors text-sm">
                Suspend Seller
              </button>
              <button className="w-full px-4 py-2 rounded-lg border border-red-300 bg-red-50 text-red-700 font-semibold hover:bg-red-100 transition-colors text-sm">
                Ban Seller
              </button>
              <button className="w-full px-4 py-2 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors text-sm flex items-center justify-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Contact Seller
              </button>
            </div>
          </div>
        </div>

        {/* Activity Logs */}
        <div className="rounded-2xl border border-border bg-card">
          <div className="border-b border-border p-6">
            <h3 className="font-display text-lg font-semibold">Activity Logs</h3>
          </div>
          <div className="divide-y divide-border">
            {activityLogs.map((log) => (
              <div key={log.id} className="p-6 hover:bg-surface-alt transition-colors">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-medium text-foreground">{log.action}</p>
                    <p className="text-xs text-muted-foreground mt-1">{log.timestamp}</p>
                  </div>
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                    {log.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
