import { createLazyFileRoute } from "@tanstack/react-router";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { useState } from "react";

export const Route = createLazyFileRoute("/admin/kyc")({
  component: KYCReviewPage,
});

interface Seller {
  id: string;
  name: string;
  sellerId: string;
  avatar: string;
  progress: number;
  riskScore: number;
}

interface Document {
  type: "aadhaar" | "pan" | "bank";
  status: "pending" | "verified" | "flagged";
  matchPercentage: number;
  lastReviewed: string;
  preview: string;
}

function KYCReviewPage() {
  const [sellers] = useState<Seller[]>([
    {
      id: "1",
      name: "Zarina Boutique",
      sellerId: "S-2455",
      avatar: "https://via.placeholder.com/40?text=ZB",
      progress: 66,
      riskScore: 8,
    },
    {
      id: "2",
      name: "Tara Closet",
      sellerId: "S-2611",
      avatar: "https://via.placeholder.com/40?text=TC",
      progress: 50,
      riskScore: 5,
    },
    {
      id: "3",
      name: "Banga Vastra",
      sellerId: "S-2700",
      avatar: "https://via.placeholder.com/40?text=BV",
      progress: 33,
      riskScore: 2,
    },
  ]);

  const [selectedSeller, setSelectedSeller] = useState<Seller>(sellers[0]);

  const documents: Document[] = [
    {
      type: "aadhaar",
      status: "flagged",
      matchPercentage: 85,
      lastReviewed: "2 hours ago",
      preview: "https://via.placeholder.com/100?text=Aadhaar",
    },
    {
      type: "pan",
      status: "verified",
      matchPercentage: 92,
      lastReviewed: "1 hour ago",
      preview: "https://via.placeholder.com/100?text=PAN",
    },
    {
      type: "bank",
      status: "pending",
      matchPercentage: 0,
      lastReviewed: "Never",
      preview: "https://via.placeholder.com/100?text=Bank",
    },
  ];

  const riskIndicators = [
    { type: "Aadhaar mismatch", severity: "high" as const },
    { type: "Multiple devices used", severity: "medium" as const },
    { type: "Address mismatch detected", severity: "medium" as const },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <AdminPageHeader
          title="KYC Review"
          subtitle="Fintech-style verification review dashboard"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Verification Queue */}
          <div className="rounded-2xl border border-border bg-card p-6 h-fit lg:col-span-1">
            <h2 className="font-display text-lg font-semibold mb-4">Verification Queue</h2>
            <div className="space-y-3">
              {sellers.map((seller) => (
                <div
                  key={seller.id}
                  onClick={() => setSelectedSeller(seller)}
                  className={`p-4 rounded-xl cursor-pointer transition-colors ${
                    selectedSeller.id === seller.id
                      ? "bg-primary/10 border border-primary"
                      : "border border-border hover:bg-surface-alt"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <img
                      src={seller.avatar}
                      alt={seller.name}
                      className="h-10 w-10 rounded-full object-cover bg-muted"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-foreground truncate">{seller.name}</p>
                      <p className="text-xs text-muted-foreground font-mono">{seller.sellerId}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-muted-foreground">Progress</span>
                        <span className="text-xs font-semibold text-foreground">{seller.progress}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${seller.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Risk Score</span>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          seller.riskScore > 7
                            ? "bg-red-100 text-red-700"
                            : seller.riskScore > 4
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-green-100 text-green-700"
                        }`}
                      >
                        {seller.riskScore}/10
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Document Verification Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Selected Seller Header */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <img
                  src={selectedSeller.avatar}
                  alt={selectedSeller.name}
                  className="h-12 w-12 rounded-full object-cover bg-muted"
                />
                <div className="flex-1">
                  <h2 className="font-display text-xl font-semibold">{selectedSeller.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">{selectedSeller.sellerId}</p>
                </div>
              </div>
            </div>

            {/* Document Cards */}
            <div className="grid gap-4 md:grid-cols-3">
              {documents.map((doc) => (
                <div key={doc.type} className="rounded-xl border border-border bg-card p-4">
                  <div className="aspect-square rounded-lg bg-muted mb-4 overflow-hidden">
                    <img src={doc.preview} alt={doc.type} className="w-full h-full object-cover" />
                  </div>

                  <p className="text-sm font-semibold capitalize text-foreground mb-3">
                    {doc.type} Verification
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Status</span>
                      <StatusBadge status={doc.status}>
                        {doc.status.charAt(0).toUpperCase() + doc.status.slice(1)}
                      </StatusBadge>
                    </div>

                    {doc.matchPercentage > 0 && (
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Match</span>
                        <span className="text-xs font-semibold text-foreground">
                          {doc.matchPercentage}%
                        </span>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">Last Reviewed</span>
                      <span className="text-xs text-muted-foreground">{doc.lastReviewed}</span>
                    </div>
                  </div>

                  <button className="w-full py-2 rounded-lg border border-border hover:bg-surface-alt text-xs font-semibold transition-colors">
                    Review
                  </button>
                </div>
              ))}
            </div>

            {/* Risk Analysis Panel */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-yellow-600" />
                Risk Analysis
              </h3>

              <div className="space-y-3">
                {riskIndicators.map((indicator, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg flex items-start gap-3 ${
                      indicator.severity === "high"
                        ? "bg-red-50 border border-red-200"
                        : "bg-yellow-50 border border-yellow-200"
                    }`}
                  >
                    <AlertCircle
                      className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                        indicator.severity === "high" ? "text-red-600" : "text-yellow-600"
                      }`}
                    />
                    <span className="text-sm text-foreground">{indicator.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions Section */}
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
                Approve Verification
              </button>
              <button className="flex-1 px-4 py-3 rounded-lg border border-red-300 bg-red-50 text-red-700 font-semibold hover:bg-red-100 transition-colors">
                Reject Verification
              </button>
              <button className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors">
                Request Re-upload
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
