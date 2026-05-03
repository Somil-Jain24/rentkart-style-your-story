import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Building2, CreditCard, FileCheck, Crown, Receipt, ChevronRight, ShieldCheck } from "lucide-react";
import { SellerSidebar, SellerTopbar } from "@/components/rentkart/SellerChrome";
import { SellerBottomNav } from "@/components/rentkart/BottomNav";

export const Route = createFileRoute("/seller/account")({
  head: () => ({ meta: [{ title: "Seller account — The RentVerse" }] }),
  component: Account,
});

function Account() {
  return (
    <div className="flex min-h-screen bg-background">
      <SellerSidebar />
      <div className="flex-1 pb-20 lg:pb-0">
        <SellerTopbar title="Account" subtitle="Store profile, KYC, payouts and subscription" />
        <main className="mx-auto max-w-5xl space-y-5 px-4 py-6 lg:px-8">
          {/* Store header */}
          <section className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 sm:flex-row sm:items-center">
            <div className="grid h-16 w-16 place-items-center rounded-2xl bg-saffron-gradient text-2xl font-bold text-primary-foreground">AC</div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <h2 className="font-display text-xl font-bold">Aarohi Couture</h2>
                <BadgeCheck className="h-5 w-5 text-info" />
              </div>
              <p className="text-sm text-muted-foreground">Store ID <span className="font-mono">S-2201</span> · Mumbai · Live since Mar 2024</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                <Pill>4.9★ rating</Pill>
                <Pill>412 rentals</Pill>
                <Pill>Verified seller</Pill>
              </div>
            </div>
            <button className="h-10 rounded-lg border border-border bg-background px-4 text-sm font-medium hover:bg-surface-alt">Edit store profile</button>
          </section>

          {/* KYC */}
          <section className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-display text-base font-semibold">KYC & verification</h3>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <KycRow label="PAN verified" status="ok" sub="AAAPV1234C" />
              <KycRow label="Aadhaar linked" status="ok" sub="****-****-1820" />
              <KycRow label="GST" status="warn" sub="Re-verify by 30 Nov" />
            </div>
          </section>

          {/* Bank */}
          <section className="rounded-2xl border border-border bg-card p-5">
            <h3 className="font-display text-base font-semibold">Bank & payouts</h3>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-surface-alt/40 p-4">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-card"><Building2 className="h-5 w-5 text-primary" /></div>
                <div>
                  <p className="text-sm font-semibold">HDFC Bank · Current A/c ····7710</p>
                  <p className="font-mono text-xs text-muted-foreground">IFSC HDFC0000123 · Verified</p>
                </div>
              </div>
              <span className="rounded-full bg-success-soft px-2 py-0.5 text-[10px] font-semibold text-success">Active</span>
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-3">
              <Stat label="Pending payout" value="₹8,940" mono accent />
              <Stat label="This month payouts" value="₹42,840" mono />
              <Stat label="Lifetime earnings" value="₹4,82,310" mono />
            </div>
            <button className="mt-4 inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background px-3 text-xs font-medium hover:bg-surface-alt">
              <Receipt className="h-3.5 w-3.5" /> View payout history <ChevronRight className="h-3 w-3" />
            </button>
          </section>

          {/* Subscription */}
          <section className="rounded-2xl border border-primary/30 bg-saffron-soft p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-1.5"><Crown className="h-4 w-4 text-primary" /><h3 className="font-display text-base font-semibold">The RentVerse Pro · Free until Dec 2025</h3></div>
                <p className="mt-1 text-sm text-muted-foreground">Lower commission (8%), priority listing review and dedicated account manager.</p>
              </div>
              <button className="h-10 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">Manage plan</button>
            </div>
          </section>

          {/* Ops trust block */}
          <section className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-success" />
              <div>
                <h3 className="font-semibold">Damage protection enabled</h3>
                <p className="mt-1 text-sm text-muted-foreground">The RentVerse holds 100% of declared item value as refundable hold from every renter. Claims paid within 7 working days of approved evidence.</p>
              </div>
            </div>
          </section>
        </main>
      </div>
      <SellerBottomNav />
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{children}</span>;
}

function KycRow({ label, status, sub }: { label: string; status: "ok" | "warn"; sub: string }) {
  const ok = status === "ok";
  return (
    <div className="rounded-xl border border-border bg-surface-alt/40 p-3">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">{label}</p>
        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${ok ? "bg-success-soft text-success" : "bg-warning-soft text-warning"}`}>{ok ? "Verified" : "Re-verify"}</span>
      </div>
      <p className="mt-1 font-mono text-xs text-muted-foreground">{sub}</p>
      <div className="mt-2 flex items-center gap-1.5 text-[11px] text-muted-foreground">
        {ok ? <FileCheck className="h-3.5 w-3.5 text-success" /> : <CreditCard className="h-3.5 w-3.5 text-warning" />}
        Last checked Oct 2025
      </div>
    </div>
  );
}

function Stat({ label, value, mono, accent }: { label: string; value: string; mono?: boolean; accent?: boolean }) {
  return (
    <div className="rounded-xl border border-border bg-surface-alt/40 p-3">
      <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className={`mt-0.5 text-lg font-bold ${mono ? "font-mono" : ""} ${accent ? "text-success" : ""}`}>{value}</p>
    </div>
  );
}
