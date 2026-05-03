import { createFileRoute } from "@tanstack/react-router";
import { Bell, Truck, AlertTriangle, CheckCircle2, Wallet } from "lucide-react";
import { BuyerHeader } from "@/components/rentkart/BuyerHeader";
import { BuyerBottomNav } from "@/components/rentkart/BottomNav";

export const Route = createFileRoute("/buyer/notifications")({
  head: () => ({ meta: [{ title: "Notifications — The RentVerse" }] }),
  component: Notifs,
});

const items = [
  { icon: AlertTriangle, tone: "warning", title: "Return due tomorrow", body: "ORD-88119 · Emerald Anarkali Suit. Schedule pickup before 11:00 PM, 10 Nov.", time: "2h ago", unread: true },
  { icon: Truck, tone: "info", title: "Out for delivery", body: "ORD-88241 · Royal Maroon Banarasi Lehenga is arriving today between 10am – 1pm.", time: "5h ago", unread: true },
  { icon: CheckCircle2, tone: "success", title: "Refund credited", body: "₹14,500 refunded to HDFC ····2210 for ORD-87740.", time: "Yesterday" },
  { icon: Wallet, tone: "info", title: "Welcome credit unlocked", body: "₹500 has been added. Apply at checkout.", time: "3 days ago" },
  { icon: Bell, tone: "default", title: "Wedding season picks live", body: "200+ new lehengas added in Mumbai for Nov–Dec dates.", time: "5 days ago" },
];

const toneStyle: Record<string, string> = {
  warning: "bg-warning-soft text-warning",
  info: "bg-info-soft text-info",
  success: "bg-success-soft text-success",
  default: "bg-surface-alt text-muted-foreground",
};

function Notifs() {
  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-12">
      <BuyerHeader />
      <div className="mx-auto max-w-3xl px-4 py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-display text-3xl font-bold">Notifications</h1>
            <p className="text-sm text-muted-foreground">Important order updates and offers.</p>
          </div>
          <button className="text-xs font-medium text-primary hover:underline">Mark all read</button>
        </div>
        <ul className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
          {items.map((n, i) => (
            <li key={i} className={`flex gap-3 p-4 ${n.unread ? "bg-saffron-soft/30" : ""}`}>
              <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${toneStyle[n.tone]}`}>
                <n.icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-semibold">{n.title}</p>
                  <span className="shrink-0 text-[11px] text-muted-foreground">{n.time}</span>
                </div>
                <p className="mt-0.5 text-sm text-muted-foreground">{n.body}</p>
              </div>
              {n.unread && <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />}
            </li>
          ))}
        </ul>
      </div>
      <BuyerBottomNav />
    </div>
  );
}
