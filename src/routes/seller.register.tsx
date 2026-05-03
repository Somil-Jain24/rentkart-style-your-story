import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ShieldCheck, TrendingUp, Wallet } from "lucide-react";
import { Logo } from "@/components/rentkart/Logo";

export const Route = createFileRoute("/seller/register")({
  head: () => ({ meta: [{ title: "Become a seller — The RentVerse" }] }),
  component: SellerRegister,
});

function SellerRegister() {
  const steps = [
    { n: 1, t: "Verify mobile via OTP" },
    { n: 2, t: "Set password" },
    { n: 3, t: "KYC: PAN + Aadhaar" },
    { n: 4, t: "Bank details for payouts" },
    { n: 5, t: "Store profile setup" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/role" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>
        <Logo />
        <span className="w-12" />
      </header>

      <main className="mx-auto grid max-w-6xl gap-10 px-4 py-8 lg:grid-cols-[1.4fr,1fr] lg:py-14 lg:px-8">
        <section>
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Seller onboarding · Step 1 of 5</p>
          <h1 className="mt-2 font-display text-3xl font-bold">Start earning from your wardrobe</h1>
          <p className="mt-1 text-sm text-muted-foreground">Top The RentVerse sellers earn ₹15k–₹80k per month. Average payout in 24 hours after return.</p>

          <ol className="mt-6 grid grid-cols-5 gap-2">
            {steps.map((s) => (
              <li key={s.n} className={`rounded-lg border p-2.5 text-center ${s.n === 1 ? "border-primary bg-saffron-soft" : "border-border bg-card"}`}>
                <p className={`font-mono text-xs ${s.n === 1 ? "text-primary-deep" : "text-muted-foreground"}`}>0{s.n}</p>
                <p className="mt-1 hidden text-[11px] font-medium md:block">{s.t}</p>
              </li>
            ))}
          </ol>

          <form className="mt-8 space-y-5">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full name (as per PAN)" placeholder="Aarohi Verma" />
              <Field label="Store / brand name" placeholder="Aarohi Couture" />
            </div>
            <div>
              <label className="text-sm font-medium">Mobile number</label>
              <div className="mt-1 flex h-11 items-center rounded-lg border border-border bg-card">
                <span className="grid h-full w-14 place-items-center border-r border-border font-mono text-sm text-muted-foreground">+91</span>
                <input className="h-full flex-1 bg-transparent px-3 outline-none font-mono" placeholder="98xxxxxxxx" />
                <button type="button" className="mr-1.5 h-8 rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground">
                  Send OTP
                </button>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Enter 6-digit OTP</label>
              <div className="mt-1 flex gap-2">
                {[0,1,2,3,4,5].map((i) => (
                  <input key={i} maxLength={1} className="h-12 w-11 rounded-lg border border-border bg-card text-center font-mono text-lg outline-none focus:border-primary focus:ring-2 focus:ring-ring" />
                ))}
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">Resend OTP in <span className="font-mono">00:23</span></p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Email" type="email" placeholder="aarohi@brand.com" />
              <Field label="Pincode" placeholder="400050" />
            </div>
            <Link to="/seller" className="grid h-12 place-items-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
              Continue to KYC
            </Link>
          </form>
        </section>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <Stat icon={Wallet} label="Avg. monthly payout" value="₹42,800" hint="across active sellers" />
          <Stat icon={TrendingUp} label="Listing-to-rental rate" value="68%" hint="for verified stores" />
          <div className="rounded-2xl border border-border bg-surface-alt/60 p-5">
            <ShieldCheck className="h-5 w-5 text-success" />
            <h4 className="mt-2 font-semibold">The RentVerse Damage Protection</h4>
            <p className="mt-1 text-sm text-muted-foreground">If a renter damages your item, the refundable hold covers repair or replacement up to declared item value.</p>
          </div>
        </aside>
      </main>
    </div>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input type={type} placeholder={placeholder} className="mt-1 h-11 w-full rounded-lg border border-border bg-card px-3 text-base outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}

function Stat({ icon: Icon, label, value, hint }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <Icon className="h-5 w-5 text-primary" />
      <p className="mt-2 font-mono text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 font-display text-2xl font-bold">{value}</p>
      <p className="text-xs text-muted-foreground">{hint}</p>
    </div>
  );
}
