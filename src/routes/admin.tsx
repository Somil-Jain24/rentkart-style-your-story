import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, FileCheck, AlertTriangle, Wallet, Users, Boxes } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin operations — The RentVerse" }] }),
  component: Admin,
});

function Admin() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-3">
            <Link to="/"><Logo /></Link>
            <span className="rounded-full bg-info-soft px-2 py-0.5 text-[10px] font-semibold text-info">Operations console</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-mono">ops@rentkart.in</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron-soft text-xs font-bold text-primary-deep">OP</span>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Internal use only</p>
          <h1 className="mt-1 font-display text-3xl font-bold">The RentVerse Operations Overview</h1>
          <p className="mt-1 text-sm text-muted-foreground">Compact admin module: listing approvals, KYC review, disputes, payouts and override actions.</p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat icon={Boxes} label="Pending listing approvals" value="14" tone="warn" />
          <Stat icon={FileCheck} label="KYC reviews" value="6" tone="warn" />
          <Stat icon={AlertTriangle} label="Open disputes" value="3" tone="error" />
          <Stat icon={Wallet} label="Payouts queued today" value="₹4.82L" tone="ok" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Listing approvals */}
          <section className="rounded-2xl border border-border bg-card">
            <div className="border-b border-border p-5">
              <h2 className="font-display text-lg font-semibold">Listing approval queue</h2>
              <p className="text-xs text-muted-foreground">SLA: review within 4 hours</p>
            </div>
            <ul className="divide-y divide-border text-sm">
              {[
                { id: "RK-10391", t: "Crystal Embellished Saree", seller: "Meera Drapes", flag: "High value" },
                { id: "RK-10388", t: "Velvet Sherwani Set", seller: "Karan Menswear", flag: "New seller" },
                { id: "RK-10385", t: "Pearl Choker Set", seller: "Rajwada Ornaments" },
              ].map((r) => (
                <li key={r.id} className="flex items-start justify-between gap-3 p-4">
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] text-muted-foreground">{r.id}</p>
                    <p className="truncate font-medium">{r.t}</p>
                    <p className="text-xs text-muted-foreground">{r.seller}</p>
                    {r.flag && <span className="mt-1 inline-block rounded-full bg-warning-soft px-2 py-0.5 text-[10px] font-semibold text-warning">{r.flag}</span>}
                  </div>
                  <div className="flex shrink-0 gap-1">
                    <button className="h-8 rounded-md bg-success px-2.5 text-[11px] font-semibold text-success-foreground">Approve</button>
                    <button className="h-8 rounded-md border border-border bg-background px-2.5 text-[11px] font-medium">Reject</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* KYC */}
          <section className="rounded-2xl border border-border bg-card">
            <div className="border-b border-border p-5">
              <h2 className="font-display text-lg font-semibold">KYC review</h2>
              <p className="text-xs text-muted-foreground">Manual verification pipeline</p>
            </div>
            <ul className="divide-y divide-border text-sm">
              {[
                { id: "S-2455", n: "Zarina Boutique", k: "Aadhaar mismatch" },
                { id: "S-2611", n: "Tara Closet", k: "PAN OCR low confidence" },
                { id: "S-2700", n: "Banga Vastra", k: "Bank micro-deposit" },
              ].map((r) => (
                <li key={r.id} className="flex items-start justify-between gap-3 p-4">
                  <div>
                    <p className="font-mono text-[10px] text-muted-foreground">{r.id}</p>
                    <p className="font-medium">{r.n}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{r.k}</p>
                  </div>
                  <button className="h-8 rounded-md bg-info px-3 text-[11px] font-semibold text-info-foreground">Review</button>
                </li>
              ))}
            </ul>
          </section>

          {/* Disputes */}
          <section className="rounded-2xl border border-border bg-card">
            <div className="border-b border-border p-5">
              <h2 className="font-display text-lg font-semibold">Active disputes</h2>
              <p className="text-xs text-muted-foreground">Override hold release / refund</p>
            </div>
            <ul className="divide-y divide-border text-sm">
              {[
                { id: "ORD-87902", t: "Damage claim", v: "₹8,200", w: "Day 2 of 5" },
                { id: "ORD-87841", t: "Wrong item delivered", v: "₹14,500", w: "Day 1 of 5" },
                { id: "ORD-87780", t: "Late return dispute", v: "₹2,800", w: "Day 4 of 5" },
              ].map((d) => (
                <li key={d.id} className="p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-[10px] text-muted-foreground">{d.id}</p>
                    <span className="rounded-full bg-error-soft px-2 py-0.5 text-[10px] font-semibold text-error">Open</span>
                  </div>
                  <p className="mt-1 font-medium">{d.t}</p>
                  <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                    <span>Hold at risk · <span className="font-mono text-foreground">{d.v}</span></span>
                    <span>{d.w}</span>
                  </div>
                  <div className="mt-2 flex gap-1">
                    <button className="h-8 rounded-md border border-border bg-background px-2.5 text-[11px] font-medium">Refund renter</button>
                    <button className="h-8 rounded-md border border-border bg-background px-2.5 text-[11px] font-medium">Pay seller</button>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Override actions */}
        <section className="mt-8 rounded-2xl border border-border bg-card p-6">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 h-5 w-5 text-info" />
            <div className="flex-1">
              <h2 className="font-display text-lg font-semibold">Override actions</h2>
              <p className="mt-1 text-sm text-muted-foreground">Audit-logged manual interventions. All actions require dual-approval above ₹50,000.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium">Force release hold</button>
                <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium">Suspend seller</button>
                <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium">Cancel order with full refund</button>
                <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium">Issue store credit</button>
                <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium">Trigger payout retry</button>
              </div>
            </div>
            <Users className="hidden h-12 w-12 text-muted-foreground/40 lg:block" />
          </div>
        </section>
      </main>
    </div>
  );
}

function Stat({ icon: Icon, label, value, tone }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; tone: "ok" | "warn" | "error" }) {
  const ring = tone === "ok" ? "border-success/30" : tone === "warn" ? "border-warning/40" : "border-error/40";
  const text = tone === "ok" ? "text-success" : tone === "warn" ? "text-warning" : "text-error";
  return (
    <div className={`rounded-2xl border bg-card p-5 ${ring}`}>
      <Icon className={`h-5 w-5 ${text}`} />
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold">{value}</p>
    </div>
  );
}
