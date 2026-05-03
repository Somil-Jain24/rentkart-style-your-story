import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, FileCheck, AlertTriangle, Wallet, Users, Boxes, Clock, TrendingUp, CheckCircle, XCircle } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { ThemeToggle } from "@/components/rentkart/ThemeToggle";
import { AdminSidebar } from "@/components/rentkart/AdminSidebar";

export const Route = createFileRoute("/admin")({
  head: () => ({ meta: [{ title: "Admin operations — The RentVerse" }] }),
  component: Admin,
});

function Admin() {
  return (
    <div className="flex min-h-screen bg-background">
      <AdminSidebar />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border bg-card sticky top-0 z-40">
          <div className="flex h-16 items-center justify-between px-4 lg:px-8">
            <div className="flex items-center gap-3 lg:hidden">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="flex-1 hidden lg:block">
              <h1 className="font-display text-xl font-bold">Operations Overview</h1>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="font-mono">ops@rentkart.in</span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-saffron-soft text-xs font-bold text-primary-deep">OP</span>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 px-4 py-8 lg:px-8">
          <div className="max-w-6xl">
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

            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
              <QuickStat icon={Clock} label="Avg SLA time" value="2.5h" />
              <QuickStat icon={TrendingUp} label="Approval rate" value="94.2%" />
              <QuickStat icon={CheckCircle} label="KYC pass rate" value="87.8%" />
              <QuickStat icon={XCircle} label="Disputed orders" value="0.8%" />
              <QuickStat icon={Users} label="Active sellers" value="2,847" />
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
                    { id: "RK-10391", t: "Crystal Embellished Saree", seller: "Meera Drapes", flag: "High value", value: "₹28,500", age: "1h 20m" },
                    { id: "RK-10388", t: "Velvet Sherwani Set", seller: "Karan Menswear", flag: "New seller", value: "₹22,000", age: "45m" },
                    { id: "RK-10385", t: "Pearl Choker Set", seller: "Rajwada Ornaments", value: "₹9,500", age: "32m" },
                    { id: "RK-10382", t: "MacBook Pro 14\" M3", seller: "GearLoop Rentals", flag: "High value", value: "₹195,000", age: "18m" },
                  ].map((r) => (
                    <li key={r.id} className="flex items-start justify-between gap-3 p-4 hover:bg-surface-alt transition-colors">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-mono text-[10px] font-semibold text-foreground">{r.id}</p>
                          <p className="text-[10px] text-muted-foreground">{r.age}</p>
                        </div>
                        <p className="truncate font-medium mt-1">{r.t}</p>
                        <p className="text-xs text-muted-foreground">{r.seller}</p>
                        <div className="mt-1.5 flex items-center gap-1.5">
                          {r.flag && <span className="rounded-full bg-warning-soft px-2 py-0.5 text-[10px] font-semibold text-warning">{r.flag}</span>}
                          <span className="text-[10px] text-muted-foreground font-mono">{r.value}</span>
                        </div>
                      </div>
                      <div className="flex shrink-0 gap-1">
                        <button className="h-8 rounded-md bg-success px-2.5 text-[11px] font-semibold text-success-foreground hover:bg-success/90">Approve</button>
                        <button className="h-8 rounded-md border border-border bg-background px-2.5 text-[11px] font-medium hover:bg-surface-alt">Reject</button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border p-3">
                  <Link to="/admin/listings" className="block w-full text-xs font-semibold text-primary hover:text-primary-deep text-center">View all 14 pending approvals →</Link>
                </div>
              </section>

              {/* KYC */}
              <section className="rounded-2xl border border-border bg-card">
                <div className="border-b border-border p-5">
                  <h2 className="font-display text-lg font-semibold">KYC review</h2>
                  <p className="text-xs text-muted-foreground">Manual verification pipeline</p>
                </div>
                <ul className="divide-y divide-border text-sm">
                  {[
                    { id: "S-2455", n: "Zarina Boutique", k: "Aadhaar mismatch", severity: "high" },
                    { id: "S-2611", n: "Tara Closet", k: "PAN OCR low confidence", severity: "medium" },
                    { id: "S-2700", n: "Banga Vastra", k: "Bank micro-deposit", severity: "low" },
                    { id: "S-2701", n: "Luxury Rentals", k: "GST registration pending", severity: "medium" },
                    { id: "S-2702", n: "Ethnic Wear Co.", k: "Aadhaar photo quality", severity: "low" },
                  ].map((r) => (
                    <li key={r.id} className="flex items-start justify-between gap-3 p-4 hover:bg-surface-alt transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="font-mono text-[10px] font-semibold text-foreground">{r.id}</p>
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${r.severity === "high" ? "bg-error-soft text-error" : r.severity === "medium" ? "bg-warning-soft text-warning" : "bg-success-soft text-success"}`}>{r.severity}</span>
                        </div>
                        <p className="font-medium mt-1">{r.n}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{r.k}</p>
                      </div>
                      <button className="h-8 rounded-md bg-info px-3 text-[11px] font-semibold text-info-foreground hover:bg-info/90 shrink-0">Review</button>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border p-3">
                  <Link to="/admin/kyc" className="block w-full text-xs font-semibold text-primary hover:text-primary-deep text-center">View all 6 pending reviews →</Link>
                </div>
              </section>

              {/* Disputes */}
              <section className="rounded-2xl border border-border bg-card">
                <div className="border-b border-border p-5">
                  <h2 className="font-display text-lg font-semibold">Active disputes</h2>
                  <p className="text-xs text-muted-foreground">Override hold release / refund</p>
                </div>
                <ul className="divide-y divide-border text-sm">
                  {[
                    { id: "ORD-87902", t: "Damage claim", v: "₹8,200", w: "Day 2 of 5", buyer: "Priya S.", seller: "Meera Drapes" },
                    { id: "ORD-87841", t: "Wrong item delivered", v: "₹14,500", w: "Day 1 of 5", buyer: "Anjali M.", seller: "Karan Menswear" },
                    { id: "ORD-87780", t: "Late return dispute", v: "₹2,800", w: "Day 4 of 5", buyer: "Riya K.", seller: "ToolBay" },
                  ].map((d) => (
                    <li key={d.id} className="p-4 hover:bg-surface-alt transition-colors">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-mono text-[10px] font-semibold text-foreground">{d.id}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">{d.buyer} vs {d.seller}</p>
                        </div>
                        <span className="rounded-full bg-error-soft px-2 py-0.5 text-[10px] font-semibold text-error">Open</span>
                      </div>
                      <p className="mt-2 font-medium">{d.t}</p>
                      <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
                        <span>Hold at risk · <span className="font-mono text-foreground font-semibold">{d.v}</span></span>
                        <span className="font-mono">{d.w}</span>
                      </div>
                      <div className="mt-3 flex gap-1.5 flex-wrap">
                        <button className="h-8 rounded-md border border-error/30 bg-error-soft px-2.5 text-[11px] font-medium text-error hover:bg-error/10">Refund renter</button>
                        <button className="h-8 rounded-md border border-success/30 bg-success-soft px-2.5 text-[11px] font-medium text-success hover:bg-success/10">Pay seller</button>
                        <button className="h-8 rounded-md border border-border bg-background px-2.5 text-[11px] font-medium hover:bg-surface-alt">View case</button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border p-3">
                  <Link to="/admin/disputes" className="block w-full text-xs font-semibold text-primary hover:text-primary-deep text-center">View all 3 open disputes →</Link>
                </div>
              </section>
            </div>

            {/* Override actions */}
            <section className="mt-8 rounded-2xl border border-border bg-card p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-0.5 h-6 w-6 text-info flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-lg font-semibold">Override actions</h2>
                  <p className="mt-1 text-sm text-muted-foreground">Audit-logged manual interventions. All actions require dual-approval above ₹50,000.</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium hover:bg-surface-alt transition-colors">Force release hold</button>
                    <button className="h-10 rounded-lg border border-error/30 bg-error-soft/20 px-3 text-sm font-medium text-error hover:bg-error-soft/30 transition-colors">Suspend seller</button>
                    <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium hover:bg-surface-alt transition-colors">Cancel order + refund</button>
                    <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium hover:bg-surface-alt transition-colors">Issue store credit</button>
                    <button className="h-10 rounded-lg border border-border bg-background px-3 text-sm font-medium hover:bg-surface-alt transition-colors">Trigger payout retry</button>
                    <button className="h-10 rounded-lg border border-warning/30 bg-warning-soft/20 px-3 text-sm font-medium text-warning hover:bg-warning-soft/30 transition-colors">Block listing</button>
                  </div>
                </div>
                <Users className="hidden h-12 w-12 text-muted-foreground/40 lg:block flex-shrink-0" />
              </div>
            </section>

            {/* Activity log */}
            <section className="mt-8 rounded-2xl border border-border bg-card">
              <div className="border-b border-border p-6">
                <h2 className="font-display text-lg font-semibold">Recent admin actions</h2>
                <p className="text-xs text-muted-foreground mt-1">All changes are logged and auditable</p>
              </div>
              <ul className="divide-y divide-border text-sm">
                {[
                  { action: "Approved listing RK-10380", user: "ops@rentkart.in", time: "2 minutes ago" },
                  { action: "Force released hold for ORD-87850", user: "ops@rentkart.in", time: "18 minutes ago" },
                  { action: "KYC verification passed - S-2404", user: "ops@rentkart.in", time: "45 minutes ago" },
                  { action: "Suspended seller S-2100 (fraud report)", user: "ops@rentkart.in", time: "2 hours ago" },
                  { action: "Issued ₹2,500 store credit to buyer", user: "ops@rentkart.in", time: "3 hours ago" },
                ].map((log, i) => (
                  <li key={i} className="flex items-center justify-between p-4 hover:bg-surface-alt transition-colors">
                    <div>
                      <p className="font-medium">{log.action}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">By {log.user}</p>
                    </div>
                    <span className="text-xs text-muted-foreground font-mono shrink-0">{log.time}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
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

function QuickStat({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card/50 p-4">
      <Icon className="h-4 w-4 text-primary" />
      <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-0.5 font-display text-lg font-bold">{value}</p>
    </div>
  );
}
