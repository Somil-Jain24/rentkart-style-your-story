import { createFileRoute, Link } from "@tanstack/react-router";
import { Upload, Image as ImageIcon, MapPin, Info, Eye, Save, ChevronLeft } from "lucide-react";
import { SellerSidebar, SellerTopbar } from "@/components/rentkart/SellerChrome";
import { ProductImage } from "@/components/rentkart/ProductImage";

export const Route = createFileRoute("/seller/listings/new")({
  head: () => ({ meta: [{ title: "Create listing — The RentVerse Seller" }] }),
  component: NewListing,
});

function NewListing() {
  return (
    <div className="flex min-h-screen bg-background">
      <SellerSidebar />
      <div className="flex-1">
        <SellerTopbar title="New listing" subtitle="Step 3 of 6 · Photos, details and pricing" />
        <main className="mx-auto max-w-6xl px-4 py-6 lg:px-8">
          <Link to="/seller/listings" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><ChevronLeft className="h-4 w-4" /> All listings</Link>

          {/* Stepper */}
          <ol className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {["Category", "Photos", "Details", "Pricing", "Availability", "Review"].map((s, i) => (
              <li key={s} className={`rounded-lg border px-3 py-2 text-center text-xs ${i <= 2 ? "border-primary bg-saffron-soft text-primary-deep" : "border-border bg-card text-muted-foreground"}`}>
                <p className="font-mono">0{i + 1}</p>
                <p className="font-medium">{s}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr,1fr]">
            <div className="space-y-5">
              {/* Photos */}
              <Section title="Photos" hint="Upload at least 4 high-quality images. First photo is the cover.">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
                      <ProductImage hue={350 + i * 12} variant="thumb" className="h-full w-full" />
                      {i === 0 && <span className="absolute left-2 top-2 rounded-full bg-card/95 px-2 py-0.5 text-[10px] font-semibold">Cover</span>}
                    </div>
                  ))}
                  <button className="grid aspect-square place-items-center rounded-xl border-2 border-dashed border-border bg-surface-alt/40 text-muted-foreground hover:bg-surface-alt">
                    <div className="text-center">
                      <Upload className="mx-auto h-5 w-5" />
                      <p className="mt-1 text-[11px] font-medium">Add photo</p>
                      <p className="text-[10px]">JPG · max 8MB</p>
                    </div>
                  </button>
                </div>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"><Info className="h-3.5 w-3.5" /> Tip: shoot in daylight, plain background. Avoid filters.</p>
              </Section>

              {/* Details */}
              <Section title="Item details">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Listing title" placeholder="Royal Maroon Banarasi Lehenga" />
                  <SelectField label="Category" options={["Lehenga", "Sherwani", "Saree", "Anarkali", "Gown", "Jewellery"]} />
                  <SelectField label="Size" options={["XS", "S", "M", "L", "XL"]} />
                  <SelectField label="Condition" options={["Like New", "Excellent", "Very Good"]} />
                  <Field label="Fabric" placeholder="Banarasi silk" />
                  <Field label="Brand (optional)" placeholder="Sabyasachi" />
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium">Description</label>
                  <textarea rows={4} className="mt-1 w-full rounded-lg border border-border bg-card p-3 text-sm outline-none focus:ring-2 focus:ring-ring" defaultValue="Hand-embroidered Banarasi silk lehenga with zari work. Worn twice, dry-cleaned after every rental." />
                </div>
              </Section>

              {/* Pricing */}
              <Section title="Pricing">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Item value (₹)" placeholder="28500" mono hint="Used as refundable hold. Be honest — high values reduce conversion." />
                  <Field label="Daily rental rate (₹)" placeholder="1450" mono hint="Suggested: 4–6% of item value." />
                </div>
                <div className="mt-4 rounded-xl border border-border bg-card p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Daily rate as % of item value</p>
                  <div className="mt-2 flex items-center gap-3">
                    <input type="range" min="2" max="10" defaultValue="5" className="w-full accent-primary" />
                    <span className="font-mono text-sm font-semibold text-primary">5.1%</span>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground">Most rented lehengas in your city sit between 4% and 6%.</p>
                </div>
              </Section>

              {/* Location */}
              <Section title="Pickup location">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Pincode" placeholder="400050" mono />
                  <Field label="City" placeholder="Mumbai" />
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-primary" /> Delivery available across Mumbai · Surcharge for outstation</p>
              </Section>

              <div className="flex flex-wrap gap-2">
                <button className="inline-flex h-11 items-center gap-1.5 rounded-lg border border-border bg-card px-4 text-sm font-medium"><Save className="h-4 w-4" /> Save draft</button>
                <button className="inline-flex h-11 items-center gap-1.5 rounded-lg border border-border bg-card px-4 text-sm font-medium"><Eye className="h-4 w-4" /> Preview PDP</button>
                <button className="inline-flex h-11 flex-1 min-w-[180px] items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">Publish Listing</button>
              </div>
            </div>

            {/* Live preview card */}
            <aside className="lg:sticky lg:top-20 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Live preview</p>
                <div className="mt-2">
                  <ProductImage hue={350} variant="hero" />
                </div>
                <div className="mt-3">
                  <p className="font-display text-base font-bold">Royal Maroon Banarasi Lehenga</p>
                  <p className="text-xs text-muted-foreground">Aarohi Couture · Mumbai · Size M</p>
                  <p className="mt-2 font-mono text-lg font-semibold">₹1,450 <span className="text-xs font-normal text-muted-foreground">/day</span></p>
                  <p className="text-[11px] text-muted-foreground">₹28,500 refundable hold</p>
                </div>
              </div>
              <div className="mt-3 rounded-xl border border-info/30 bg-info-soft p-3 text-xs text-info">
                <strong>Listing review SLA:</strong> Most listings go live within 4 hours after submission.
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

function Section({ title, hint, children }: { title: string; hint?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-center gap-2">
        <ImageIcon className="h-4 w-4 text-muted-foreground" />
        <h2 className="font-display text-lg font-semibold">{title}</h2>
      </div>
      {hint && <p className="mt-1 text-xs text-muted-foreground">{hint}</p>}
      <div className="mt-4">{children}</div>
    </section>
  );
}

function Field({ label, placeholder, mono, hint }: { label: string; placeholder?: string; mono?: boolean; hint?: string }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input className={`mt-1 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring ${mono ? "font-mono" : ""}`} placeholder={placeholder} />
      {hint && <p className="mt-1 text-[11px] text-muted-foreground">{hint}</p>}
    </div>
  );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select className="mt-1 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
