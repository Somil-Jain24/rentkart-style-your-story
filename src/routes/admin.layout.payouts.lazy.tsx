import { createLazyFileRoute } from "@tanstack/react-router";
import { Download, RefreshCw } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { StatsCard } from "@/components/admin/StatsCard";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Wallet, TrendingUp, AlertTriangle, Clock } from "lucide-react";
import { useState } from "react";

export const Route = createLazyFileRoute("/admin/layout/payouts")({
  component: PayoutsPage,
});

interface Payout {
  id: string;
  sellerName: string;
  bankStatus: string;
  earnings: string;
  commission: string;
  netPayout: string;
  status: "paid" | "pending" | "processing" | "failed";
  transferDate: string;
}

function PayoutsPage() {
  const [payouts] = useState<Payout[]>([
    {
      id: "1",
      sellerName: "Meera Drapes",
      bankStatus: "Verified",
      earnings: "₹45,200",
      commission: "₹4,520",
      netPayout: "₹40,680",
      status: "paid",
      transferDate: "Yesterday",
    },
    {
      id: "2",
      sellerName: "Karan Menswear",
      bankStatus: "Verified",
      earnings: "₹32,500",
      commission: "₹3,250",
      netPayout: "₹29,250",
      status: "processing",
      transferDate: "Today",
    },
    {
      id: "3",
      sellerName: "Rajwada Ornaments",
      bankStatus: "Verified",
      earnings: "₹28,900",
      commission: "₹2,890",
      netPayout: "₹26,010",
      status: "pending",
      transferDate: "Today",
    },
    {
      id: "4",
      sellerName: "Royal Jewelry",
      bankStatus: "Pending Verification",
      earnings: "₹52,300",
      commission: "₹5,230",
      netPayout: "₹47,070",
      status: "failed",
      transferDate: "Failed",
    },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <AdminPageHeader
          title="Payouts"
          subtitle="Modern fintech payout management dashboard"
        />

        {/* Revenue Summary Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard
            label="Total Pending"
            value="₹8.5L"
            supporting="18 sellers"
            icon={Wallet}
            iconBgColor="yellow"
          />
          <StatsCard
            label="Processed (30d)"
            value="₹125.4L"
            supporting="+12.5% from last period"
            icon={TrendingUp}
            iconBgColor="green"
          />
          <StatsCard
            label="Failed Transactions"
            value="2"
            supporting="₹89,000 at risk"
            icon={AlertTriangle}
            iconBgColor="pink"
          />
          <StatsCard
            label="This Month Revenue"
            value="₹234.8L"
            supporting="Commission: ₹23.5L"
            icon={Clock}
            iconBgColor="blue"
          />
        </div>

        {/* Actions Bar */}
        <div className="mb-6 flex flex-wrap gap-3">
          <button className="px-4 py-2 rounded-lg bg-primary text-white font-semibold hover:bg-primary-deep transition-colors">
            Process Payout
          </button>
          <button className="px-4 py-2 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Retry Failed Payment
          </button>
          <button className="px-4 py-2 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export CSV
          </button>
          <button className="px-4 py-2 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors">
            View Invoice
          </button>
        </div>

        {/* Payout Table */}
        <div className="rounded-2xl border border-border overflow-hidden bg-card mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-surface-alt">
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Seller Name
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Bank Status
                  </th>
                  <th className="px-6 py-4 text-right font-semibold text-muted-foreground">
                    Earnings
                  </th>
                  <th className="px-6 py-4 text-right font-semibold text-muted-foreground">
                    Commission
                  </th>
                  <th className="px-6 py-4 text-right font-semibold text-muted-foreground">
                    Net Payout
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Transfer Date
                  </th>
                  <th className="px-6 py-4 text-left font-semibold text-muted-foreground">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {payouts.map((payout) => (
                  <tr key={payout.id} className="border-b border-border hover:bg-surface-alt transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{payout.sellerName}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{payout.bankStatus}</td>
                    <td className="px-6 py-4 text-right font-semibold text-foreground">
                      {payout.earnings}
                    </td>
                    <td className="px-6 py-4 text-right text-muted-foreground">{payout.commission}</td>
                    <td className="px-6 py-4 text-right font-semibold text-foreground">
                      {payout.netPayout}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={payout.status}>
                        {payout.status.charAt(0).toUpperCase() + payout.status.slice(1)}
                      </StatusBadge>
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {payout.transferDate}
                    </td>
                    <td className="px-6 py-4">
                      {payout.status === "failed" ? (
                        <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">
                          Retry
                        </button>
                      ) : (
                        <button className="text-xs font-semibold text-muted-foreground hover:text-foreground">
                          View
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Revenue Chart Placeholder */}
        <div className="rounded-2xl border border-border bg-card p-8">
          <h2 className="font-display text-lg font-semibold mb-6">Weekly Payout Trends</h2>
          <div className="h-64 flex items-center justify-center text-muted-foreground">
            <p>Revenue chart visualization would appear here</p>
            <p className="text-xs ml-2">(Using Recharts integration)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
