import { createLazyFileRoute } from "@tanstack/react-router";
import { TrendingUp, Users, ShoppingCart, BarChart3, ArrowUp, Calendar } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { StatsCard } from "@/components/admin/StatsCard";
import { useState } from "react";

export const Route = createLazyFileRoute("/admin/layout/analytics")({
  component: AnalyticsPage,
});

interface MetricCard {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
  icon: React.ComponentType<{ className?: string }>;
  color: "lavender" | "pink" | "yellow" | "green" | "blue";
}

function AnalyticsPage() {
  const [dateRange] = useState("Last 30 days");

  const metrics: MetricCard[] = [
    {
      label: "Revenue Growth",
      value: "₹234.8L",
      delta: "+18.2% vs last period",
      trend: "up",
      icon: TrendingUp,
      color: "green",
    },
    {
      label: "Active Rentals",
      value: "2,847",
      delta: "+12% from last month",
      trend: "up",
      icon: ShoppingCart,
      color: "blue",
    },
    {
      label: "Monthly Users",
      value: "18,392",
      delta: "+8.5% increase",
      trend: "up",
      icon: Users,
      color: "lavender",
    },
    {
      label: "Seller Growth",
      value: "+234",
      delta: "+28% YoY growth",
      trend: "up",
      icon: BarChart3,
      color: "yellow",
    },
    {
      label: "Conversion Rate",
      value: "8.2%",
      delta: "+0.5 percentage points",
      trend: "up",
      icon: ArrowUp,
      color: "pink",
    },
    {
      label: "Retention Rate",
      value: "92.4%",
      delta: "+2.1 percentage points",
      trend: "up",
      icon: Users,
      color: "green",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <AdminPageHeader
            title="Analytics"
            subtitle="Investor-grade analytics dashboard"
          />
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">{dateRange}</span>
          </div>
        </div>

        {/* Top Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    {metric.label}
                  </p>
                  <p className="mt-3 font-display text-3xl font-bold text-foreground">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-xs text-green-600 flex items-center gap-1">
                    <ArrowUp className="h-3 w-3" />
                    {metric.delta}
                  </p>
                </div>
                <metric.icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 mb-8">
          {/* Revenue Line Chart */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-lg font-semibold mb-6">Revenue Trend</h2>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <p>Revenue line chart would appear here (Recharts)</p>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Rental Trends */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-lg font-semibold mb-6">Rental Trends</h2>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <p>Area chart would appear here</p>
              </div>
            </div>

            {/* Seller Growth */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <h2 className="font-display text-lg font-semibold mb-6">Seller Growth</h2>
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <p>Bar chart would appear here</p>
              </div>
            </div>
          </div>

          {/* Traffic Sources Pie Chart */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-lg font-semibold mb-6">Traffic Sources</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="h-64 flex items-center justify-center text-muted-foreground">
                <p>Pie chart would appear here</p>
              </div>
              <div className="space-y-4">
                {[
                  { source: "Direct", percentage: 35, color: "bg-blue-600" },
                  { source: "Search Engine", percentage: 28, color: "bg-green-600" },
                  { source: "Social Media", percentage: 22, color: "bg-purple-600" },
                  { source: "Referral", percentage: 15, color: "bg-yellow-600" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                      <span className="text-sm text-foreground">{item.source}</span>
                    </div>
                    <span className="text-sm font-semibold text-foreground">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Geographic Analytics */}
        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          {/* Top Cities */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-lg font-semibold mb-6">Top Cities</h2>
            <div className="space-y-4">
              {[
                { city: "Mumbai", rentals: 2847, revenue: "₹45.2L" },
                { city: "Delhi", rentals: 2134, revenue: "₹32.5L" },
                { city: "Bangalore", rentals: 1893, revenue: "₹28.4L" },
                { city: "Hyderabad", rentals: 1456, revenue: "₹21.8L" },
                { city: "Pune", rentals: 987, revenue: "₹14.9L" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold text-foreground">{item.city}</p>
                    <p className="text-xs text-muted-foreground mt-1">{item.rentals} rentals</p>
                  </div>
                  <span className="font-semibold text-foreground">{item.revenue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Orders by Region */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-lg font-semibold mb-6">Orders by Region</h2>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <p>Region heatmap would appear here</p>
            </div>
          </div>
        </div>

        {/* Product Insights */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Most Rented Products */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-lg font-semibold mb-6">Most Rented Products</h2>
            <div className="space-y-4">
              {[
                { name: "Wedding Sarees", rentals: 847, revenue: "₹34.2L" },
                { name: "Ethnic Lehengas", rentals: 723, revenue: "₹29.5L" },
                { name: "Designer Sherwanis", rentals: 612, revenue: "₹24.8L" },
                { name: "Jewelry Sets", rentals: 534, revenue: "₹18.3L" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0">
                  <p className="font-medium text-foreground">{item.name}</p>
                  <span className="text-xs text-muted-foreground">{item.rentals}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Highest Earning Categories */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <h2 className="font-display text-lg font-semibold mb-6">
              Highest Earning Categories
            </h2>
            <div className="space-y-4">
              {[
                { category: "Women's Ethnic", revenue: "₹87.4L", growth: "+15.2%" },
                { category: "Men's Formal", revenue: "₹65.2L", growth: "+12.8%" },
                { category: "Jewelry & Accessories", revenue: "₹52.1L", growth: "+8.5%" },
                { category: "Kids Wear", revenue: "₹31.8L", growth: "+22.3%" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between pb-4 border-b border-border last:border-0 last:pb-0">
                  <div>
                    <p className="font-medium text-foreground">{item.category}</p>
                    <p className="text-xs text-green-600 mt-1">{item.growth}</p>
                  </div>
                  <span className="font-semibold text-foreground">{item.revenue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
