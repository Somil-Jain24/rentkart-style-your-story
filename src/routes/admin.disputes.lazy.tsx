import { createLazyFileRoute } from "@tanstack/react-router";
import { MessageSquare, Image as ImageIcon, Clock } from "lucide-react";
import { AdminPageHeader } from "@/components/admin/AdminPageHeader";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { useState } from "react";

export const Route = createLazyFileRoute("/admin/disputes")({
  component: DisputesPage,
});

interface Dispute {
  id: string;
  buyerName: string;
  sellerName: string;
  itemImage: string;
  reason: string;
  refundAmount: string;
  status: "open" | "under-review" | "resolved";
  daysActive: number;
}

interface Message {
  id: string;
  sender: "buyer" | "seller" | "support";
  senderName: string;
  content: string;
  timestamp: string;
}

interface TimelineEvent {
  id: string;
  title: string;
  timestamp: string;
  status: "completed" | "pending";
}

function DisputesPage() {
  const [disputes] = useState<Dispute[]>([
    {
      id: "ORD-87902",
      buyerName: "Priya S.",
      sellerName: "Meera Drapes",
      itemImage: "https://via.placeholder.com/60?text=Saree",
      reason: "Damage claim",
      refundAmount: "₹8,200",
      status: "open",
      daysActive: 2,
    },
    {
      id: "ORD-87841",
      buyerName: "Anjali M.",
      sellerName: "Karan Menswear",
      itemImage: "https://via.placeholder.com/60?text=Sherwani",
      reason: "Wrong item delivered",
      refundAmount: "₹14,500",
      status: "open",
      daysActive: 1,
    },
    {
      id: "ORD-87780",
      buyerName: "Riya K.",
      sellerName: "ToolBay",
      itemImage: "https://via.placeholder.com/60?text=Tool",
      reason: "Late return dispute",
      refundAmount: "₹2,800",
      status: "open",
      daysActive: 4,
    },
  ]);

  const [selectedDispute, setSelectedDispute] = useState<Dispute>(disputes[0]);

  const chatMessages: Message[] = [
    {
      id: "1",
      sender: "buyer",
      senderName: "Priya S.",
      content: "I received the saree with a major tear in the fabric. It's unwearable.",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      sender: "seller",
      senderName: "Meera Drapes",
      content: "We're sorry to hear about the damage. Can you send photos of the damage?",
      timestamp: "1.5 hours ago",
    },
    {
      id: "3",
      sender: "buyer",
      senderName: "Priya S.",
      content: "Here are the photos showing the damage.",
      timestamp: "1 hour ago",
    },
    {
      id: "4",
      sender: "support",
      senderName: "Support Team",
      content: "We've reviewed the evidence and confirm the damage. Awaiting admin resolution.",
      timestamp: "30 minutes ago",
    },
  ];

  const timeline: TimelineEvent[] = [
    { id: "1", title: "Dispute opened", timestamp: "Day 1 - 2 hours ago", status: "completed" },
    { id: "2", title: "Seller responded", timestamp: "Day 1 - 1.5 hours ago", status: "completed" },
    { id: "3", title: "Evidence submitted", timestamp: "Day 1 - 1 hour ago", status: "completed" },
    { id: "4", title: "Admin review", timestamp: "Today - 30 minutes ago", status: "pending" },
    { id: "5", title: "Refund processed", timestamp: "Pending", status: "pending" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="px-4 py-8 lg:px-8 max-w-7xl mx-auto">
        <AdminPageHeader
          title="Disputes"
          subtitle="Premium customer dispute management"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Dispute List */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card overflow-hidden">
              <div className="border-b border-border p-4">
                <h2 className="font-display text-lg font-semibold">Active Disputes</h2>
              </div>
              <div className="divide-y divide-border max-h-96 overflow-y-auto">
                {disputes.map((dispute) => (
                  <div
                    key={dispute.id}
                    onClick={() => setSelectedDispute(dispute)}
                    className={`p-4 cursor-pointer transition-colors ${
                      selectedDispute.id === dispute.id
                        ? "bg-primary/10"
                        : "hover:bg-surface-alt"
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={dispute.itemImage}
                        alt=""
                        className="h-10 w-10 rounded object-cover bg-muted"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{dispute.reason}</p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {dispute.buyerName} vs {dispute.sellerName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-mono font-semibold text-foreground">
                        {dispute.refundAmount}
                      </span>
                      <StatusBadge status={dispute.status}>
                        {dispute.status === "open"
                          ? "Open"
                          : dispute.status === "under-review"
                          ? "Under Review"
                          : "Resolved"}
                      </StatusBadge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chat and Timeline */}
          <div className="lg:col-span-2 space-y-6">
            {/* Dispute Header */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">
                    {selectedDispute.id}
                  </p>
                  <h2 className="font-display text-xl font-semibold">{selectedDispute.reason}</h2>
                </div>
                <StatusBadge status={selectedDispute.status}>
                  {selectedDispute.status === "open"
                    ? "Open"
                    : selectedDispute.status === "under-review"
                    ? "Under Review"
                    : "Resolved"}
                </StatusBadge>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Buyer</p>
                  <p className="font-semibold text-foreground mt-1">{selectedDispute.buyerName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Seller</p>
                  <p className="font-semibold text-foreground mt-1">{selectedDispute.sellerName}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Refund Amount</p>
                  <p className="font-semibold text-foreground mt-1">{selectedDispute.refundAmount}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Days Active</p>
                  <p className="font-semibold text-foreground mt-1">{selectedDispute.daysActive} of 5</p>
                </div>
              </div>
            </div>

            {/* Chat Section */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Conversation
              </h3>

              <div className="space-y-4 mb-4">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${
                      msg.sender === "buyer"
                        ? "flex-row"
                        : msg.sender === "seller"
                        ? "flex-row-reverse"
                        : "flex-row"
                    }`}
                  >
                    <div
                      className={`flex-1 ${
                        msg.sender === "support"
                          ? "px-4 py-2 rounded-lg bg-blue-50 border border-blue-200"
                          : msg.sender === "buyer"
                          ? "px-4 py-2 rounded-lg bg-blue-100 text-foreground"
                          : "px-4 py-2 rounded-lg bg-gray-100"
                      }`}
                    >
                      <p className="text-xs font-semibold text-muted-foreground mb-1">
                        {msg.senderName}
                      </p>
                      <p className="text-sm text-foreground">{msg.content}</p>
                      <p className="text-xs text-muted-foreground mt-1">{msg.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resolution Timeline */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Resolution Timeline
              </h3>

              <div className="space-y-4">
                {timeline.map((event, idx) => (
                  <div key={event.id} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          event.status === "completed" ? "bg-green-600" : "bg-yellow-600"
                        }`}
                      ></div>
                      {idx < timeline.length - 1 && (
                        <div className="w-0.5 h-12 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="pb-4">
                      <p className="font-medium text-foreground">{event.title}</p>
                      <p className="text-xs text-muted-foreground mt-1">{event.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Resolution Actions */}
            <div className="flex gap-3">
              <button className="flex-1 px-4 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
                Refund Buyer
              </button>
              <button className="flex-1 px-4 py-3 rounded-lg border border-red-300 bg-red-50 text-red-700 font-semibold hover:bg-red-100 transition-colors">
                Reject Claim
              </button>
              <button className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors">
                Escalate Case
              </button>
              <button className="flex-1 px-4 py-3 rounded-lg border border-border bg-background font-semibold hover:bg-surface-alt transition-colors">
                Contact Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
