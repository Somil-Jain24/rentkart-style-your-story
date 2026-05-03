import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { User, MapPin, CreditCard, Receipt, Gift, Settings, LogOut, ChevronRight, BadgeCheck } from "lucide-react";
import { BuyerHeader } from "@/components/rentkart/BuyerHeader";
import { BuyerBottomNav } from "@/components/rentkart/BottomNav";

export const Route = createFileRoute("/buyer/profile")({
  head: () => ({ meta: [{ title: "My profile — The RentVerse" }] }),
  component: Profile,
});

function Profile() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate({ to: "/" });
  };
  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-12">
      <BuyerHeader />
      <div className="mx-auto max-w-5xl px-4 py-6 lg:px-8">
        <div className="flex items-center gap-4 rounded-2xl bg-saffron-gradient p-5 text-primary-foreground shadow-card">
          <div className="grid h-16 w-16 place-items-center rounded-full bg-card text-xl font-bold text-primary-deep">PS</div>
          <div className="flex-1">
            <div className="flex items-center gap-1.5">
              <h1 className="font-display text-2xl font-bold">Priya Sharma</h1>
              <BadgeCheck className="h-5 w-5" />
            </div>
            <p className="text-sm opacity-90 font-mono">priya@example.com · +91 98203 11244</p>
            <p className="mt-1 text-xs opacity-90">Member since Mar 2024 · 12 rentals · ₹500 credit</p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <KpiCard label="Total rentals" value="12" hint="+3 this month" />
          <KpiCard label="Saved vs. buying" value="₹84,200" hint="Across all rentals" tone="success" />
          <KpiCard label="Loyalty tier" value="Gold" hint="Next: Platinum at 15 rentals" tone="primary" />
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <Row icon={User} title="Personal information" sub="Name, email, mobile, DOB" />
          <Row icon={MapPin} title="Saved addresses" sub="2 addresses" />
          <Row icon={CreditCard} title="Payment methods" sub="UPI · 1 saved card" />
          <Row icon={Receipt} title="Transaction history" sub="₹1,28,440 lifetime spend" />
          <Row icon={Gift} title="Refer & earn" sub="Get ₹500 + give ₹500" tone="primary" />
          <Row icon={Settings} title="App settings & notifications" />
        </div>

        <button onClick={handleLogout} className="mt-6 inline-flex h-11 items-center gap-2 rounded-lg border border-error/30 bg-error-soft px-4 text-sm font-semibold text-error">
          <LogOut className="h-4 w-4" /> Sign out
        </button>
      </div>
      <BuyerBottomNav />
    </div>
  );
}

function KpiCard({ label, value, hint, tone }: { label: string; value: string; hint: string; tone?: "primary" | "success" }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className={`mt-1 font-display text-3xl font-bold ${tone === "success" ? "text-success" : tone === "primary" ? "text-primary" : ""}`}>{value}</p>
      <p className="text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}

function Row({ icon: Icon, title, sub, tone }: { icon: React.ComponentType<{ className?: string }>; title: string; sub?: string; tone?: "primary" }) {
  return (
    <button className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 text-left transition-colors hover:bg-surface-alt">
      <div className={`grid h-10 w-10 place-items-center rounded-full ${tone === "primary" ? "bg-saffron-soft text-primary" : "bg-surface-alt text-foreground"}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold">{title}</p>
        {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </button>
  );
}
