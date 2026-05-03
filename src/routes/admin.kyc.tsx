import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, Search, Filter, AlertCircle, CheckCircle } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";
import { ThemeToggle } from "@/components/rentkart/ThemeToggle";
import { AdminSidebar } from "@/components/rentkart/AdminSidebar";

export const Route = createFileRoute("/admin/kyc")({
  head: () => ({ meta: [{ title: "KYC Review — Admin" }] }),
  component: KYCReview,
});

function KYCReview() {
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
              <h1 className="font-display text-xl font-bold">KYC Review</h1>
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

        <main className="flex-1 px-4 py-6 lg:px-8">
          <div className="max-w-6xl">
            {/* Page header */}
            <div className="mb-6">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">Verification</p>
              <h2 className="mt-1 font-display text-2xl font-bold">KYC review</h2>
              <p className="mt-1 text-sm text-muted-foreground">Manual verification pipeline for seller documentation.</p>
            </div>

            {/* Filters & Search */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search by seller ID or name..."
                  className="w-full h-10 rounded-lg border border-border bg-background pl-10 pr-4 text-sm placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button className="flex items-center gap-2 h-10 rounded-lg border border-border bg-background px-4 text-sm font-medium hover:bg-surface-alt">
                <Filter className="h-4 w-4" />
                Severity
              </button>
            </div>

            {/* Stats */}
            <div className="mb-6 grid gap-4 sm:grid-cols-4">
              <div className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground font-mono uppercase">Pending</p>
                <p className="mt-1 font-display text-2xl font-bold">6</p>
              </div>
              <div className="rounded-lg border border-error/30 bg-card p-4">
                <p className="text-xs text-error font-mono uppercase">High severity</p>
                <p className="mt-1 font-display text-2xl font-bold">2</p>
              </div>
              <div className="rounded-lg border border-warning/30 bg-card p-4">
                <p className="text-xs text-warning font-mono uppercase">Medium severity</p>
                <p className="mt-1 font-display text-2xl font-bold">3</p>
              </div>
              <div className="rounded-lg border border-success/30 bg-card p-4">
                <p className="text-xs text-success font-mono uppercase">KYC pass rate</p>
                <p className="mt-1 font-display text-2xl font-bold">87.8%</p>
              </div>
            </div>

            {/* KYC items */}
            <div className="space-y-3">
              {[
                { id: "S-2455", name: "Zarina Boutique", issue: "Aadhaar mismatch", severity: "high", docs: ["Aadhaar", "PAN", "Bank"] },
                { id: "S-2611", name: "Tara Closet", issue: "PAN OCR low confidence", severity: "medium", docs: ["PAN", "GST"] },
                { id: "S-2700", name: "Banga Vastra", issue: "Bank micro-deposit", severity: "low", docs: ["Bank statement"] },
                { id: "S-2701", name: "Luxury Rentals", issue: "GST registration pending", severity: "medium", docs: ["GST", "License"] },
                { id: "S-2702", name: "Ethnic Wear Co.", issue: "Aadhaar photo quality", severity: "low", docs: ["Aadhaar"] },
                { id: "S-2703", name: "Modern Fashion", issue: "Address proof missing", severity: "high", docs: ["Address proof needed"] },
              ].map((kyc) => (
                <div key={kyc.id} className="rounded-xl border border-border bg-card p-5 hover:border-primary/30 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="font-mono text-xs font-semibold text-foreground">{kyc.id}</p>
                          <p className="text-sm font-semibold mt-1">{kyc.name}</p>
                        </div>
                        <span
                          className={`rounded-full px-2 py-1 text-[10px] font-semibold ${
                            kyc.severity === "high"
                              ? "bg-error-soft text-error"
                              : kyc.severity === "medium"
                              ? "bg-warning-soft text-warning"
                              : "bg-success-soft text-success"
                          }`}
                        >
                          {kyc.severity}
                        </span>
                      </div>

                      <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {kyc.issue}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {kyc.docs.map((doc) => (
                          <span key={doc} className="inline-flex items-center gap-1 rounded-md bg-surface-alt px-2 py-1 text-[10px] font-medium">
                            {doc.includes("needed") ? <AlertCircle className="h-3 w-3 text-error" /> : <CheckCircle className="h-3 w-3 text-success" />}
                            {doc}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="h-10 rounded-lg bg-info px-4 text-sm font-semibold text-info-foreground hover:bg-info/90 shrink-0">Review</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <p>Showing 1–6 of 6 reviews</p>
              <div className="flex gap-2">
                <button className="h-8 rounded-md border border-border bg-background px-3 font-medium hover:bg-surface-alt">← Previous</button>
                <button className="h-8 rounded-md border border-border bg-background px-3 font-medium hover:bg-surface-alt">Next →</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
