import { createLazyFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Upload, Image as ImageIcon, MapPin, Info, Eye, Save, ChevronLeft, Check, Sparkles } from "lucide-react";
import { SellerSidebar, SellerTopbar } from "@/components/rentkart/SellerChrome";
import { ProductImage } from "@/components/rentkart/ProductImage";
import { CATEGORIES } from "@/data/categories";

export const Route = createLazyFileRoute("/seller/listings/new")({
  component: NewListing,
});

function NewListing() {
  const [categorySlug, setCategorySlug] = useState<string>("");
  const [subcategory, setSubcategory] = useState<string>("");
  const [customCategory, setCustomCategory] = useState<string>("");
  const [customDesc, setCustomDesc] = useState<string>("");
  const selected = CATEGORIES.find((c) => c.slug === categorySlug);
  const isOther = categorySlug === "other";

  return (
    <div className="flex min-h-screen bg-background">
      <SellerSidebar />
      <div className="flex-1">
        <SellerTopbar title="New listing" subtitle="Step 1 of 6 · Choose a category for your item" />
        <main className="mx-auto max-w-6xl px-4 py-6 lg:px-8">
          <Link to="/seller/listings" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><ChevronLeft className="h-4 w-4" /> All listings</Link>

          {/* Stepper */}
          <ol className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {["Category", "Photos", "Details", "Pricing", "Availability", "Review"].map((s, i) => (
              <li key={s} className={`rounded-lg border px-3 py-2 text-center text-xs ${i === 0 ? "border-primary bg-saffron-soft text-primary-deep" : "border-border bg-card text-muted-foreground"}`}>
                <p className="font-mono">0{i + 1}</p>
                <p className="font-medium">{s}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr,1fr]">
            <div className="space-y-5">
              {/* Category picker */}
              <Section title="What are you renting out?" hint="Pick the category that best describes your item. We'll surface it to the right buyers.">
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  {CATEGORIES.map((c) => {
                    const active = categorySlug === c.slug;
                    return (
                      <button
                        key={c.slug}
                        onClick={() => { setCategorySlug(c.slug); setSubcategory(""); }}
                        className={`group flex items-start gap-3 rounded-xl border p-3 text-left transition-all ${
                          active ? "border-primary bg-saffron-soft shadow-soft" : "border-border bg-card hover:border-primary/40 hover:bg-surface-alt"
                        }`}
                      >
                        <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${active ? "bg-primary text-primary-foreground" : "bg-surface-alt text-primary"}`}>
                          <c.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold">{c.name}</p>
                          <p className="line-clamp-1 text-[11px] text-muted-foreground">{c.blurb}</p>
                        </div>
                        {active && <Check className="h-4 w-4 shrink-0 text-primary" />}
                      </button>
                    );
                  })}
                </div>

                {/* Subcategory */}
                {selected && !isOther && selected.subcategories.length > 0 && (
                  <div className="mt-5 rounded-xl border border-border bg-surface-alt/50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subcategory in {selected.name}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selected.subcategories.map((sc) => (
                        <button
                          key={sc.slug}
                          onClick={() => setSubcategory(sc.name)}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${
                            subcategory === sc.name
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card hover:bg-surface-alt"
                          }`}
                        >
                          {sc.name}
                        </button>
                      ))}
                    </div>
                    <p className="mt-3 text-[11px] text-muted-foreground">
                      Don't see your subcategory? <button onClick={() => setCategorySlug("other")} className="font-semibold text-primary hover:underline">Suggest a custom one →</button>
                    </p>
                  </div>
                )}

                {/* Other / custom category */}
                {isOther && (
                  <div className="mt-5 rounded-xl border border-info/40 bg-info-soft p-4">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-info" />
                      <p className="text-sm font-semibold text-info">Suggest a new category</p>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      We review every suggestion within 24 hours. If approved, your listing goes live in the new category — and your suggestion helps thousands of other sellers.
                    </p>
                    <div className="mt-4 grid gap-3">
                      <div>
                        <label className="text-sm font-medium">Custom category name</label>
                        <input
                          value={customCategory}
                          onChange={(e) => setCustomCategory(e.target.value)}
                          placeholder="e.g. Aquarium tanks, 3D printers, Boat trailers…"
                          className="mt-1 h-11 w-full rounded-lg border border-border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Tell us more</label>
                        <textarea
                          value={customDesc}
                          onChange={(e) => setCustomDesc(e.target.value)}
                          rows={3}
                          placeholder="Describe what kind of item this is, who would rent it, and roughly how many similar items you'd list."
                          className="mt-1 w-full rounded-lg border border-border bg-background p-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <p className="text-[11px] text-muted-foreground">
                        Until approved, your listing will be queued under <span className="font-semibold">"Other"</span> and only shown to buyers who explicitly browse it.
                      </p>
                    </div>
                  </div>
                )}
              </Section>

              {/* Photos */}
              <Section title="Photos" hint="Upload at least 4 high-quality images. First photo is the cover — buyers see it everywhere.">
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="relative aspect-square overflow-hidden rounded-xl">
                      <ProductImage hue={(selected?.hue ?? 350) + i * 12} variant="thumb" className="h-full w-full" />
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
                <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"><Info className="h-3.5 w-3.5" /> Tip: shoot in daylight, plain background. Show wear, accessories and serial numbers when relevant.</p>
              </Section>

              {/* Details */}
              <Section title="Item details">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Listing title" placeholder={selected ? `e.g. ${exampleTitle(selected.slug)}` : "Give your listing a clear title"} />
                  <Field label="Brand / Model (optional)" placeholder="e.g. Apple, Bosch, Sabyasachi" />
                  <SelectField label="Condition" options={["Like New", "Excellent", "Very Good"]} />
                  <Field label="Quantity available" placeholder="1" mono />
                </div>
                <div className="mt-4">
                  <label className="text-sm font-medium">Description</label>
                  <textarea rows={4} className="mt-1 w-full rounded-lg border border-border bg-card p-3 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder="Mention what's included, condition notes, and any usage tips for the renter." />
                </div>
              </Section>

              {/* Pricing */}
              <Section title="Pricing & refundable hold">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Item value (₹)" placeholder="28500" mono hint="Used as refundable hold. Be honest — buyers see this upfront." />
                  <Field label="Daily rental rate (₹)" placeholder="1450" mono hint="Most successful listings sit at 3–6% of item value per day." />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <Field label="Weekly rate (₹)" placeholder="optional" mono />
                  <Field label="Monthly rate (₹)" placeholder="optional" mono />
                  <Field label="Min rental days" placeholder="1" mono />
                </div>
              </Section>

              {/* Location */}
              <Section title="Pickup location">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Pincode" placeholder="400050" mono />
                  <Field label="City" placeholder="Mumbai" />
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground"><MapPin className="h-3.5 w-3.5 text-primary" /> Buyers within 25 km see your listing first. You can add delivery surcharges per zone.</p>
              </Section>

              <div className="flex flex-wrap gap-2">
                <button className="inline-flex h-11 items-center gap-1.5 rounded-lg border border-border bg-card px-4 text-sm font-medium"><Save className="h-4 w-4" /> Save draft</button>
                <button className="inline-flex h-11 items-center gap-1.5 rounded-lg border border-border bg-card px-4 text-sm font-medium"><Eye className="h-4 w-4" /> Preview</button>
                <button className="inline-flex h-11 flex-1 min-w-[180px] items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary-hover">
                  {isOther ? "Submit for category review" : "Publish Listing"}
                </button>
              </div>
            </div>

            {/* Live preview card */}
            <aside className="lg:sticky lg:top-20 lg:self-start">
              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Live preview</p>
                <div className="mt-2">
                  <ProductImage hue={selected?.hue ?? 350} variant="hero" />
                </div>
                <div className="mt-3">
                  <p className="font-display text-base font-bold">{categorySlug ? exampleTitle(categorySlug) : "Your listing title"}</p>
                  <p className="text-xs text-muted-foreground">
                    {isOther && customCategory ? customCategory : (selected?.name ?? "Category")} {subcategory ? ` · ${subcategory}` : ""}
                  </p>
                  <p className="mt-2 font-mono text-lg font-semibold">₹—<span className="text-xs font-normal text-muted-foreground">/day</span></p>
                  <p className="text-[11px] text-muted-foreground">Refundable hold appears here</p>
                </div>
              </div>
              <div className="mt-3 rounded-xl border border-info/30 bg-info-soft p-3 text-xs text-info">
                <strong>Listing review SLA:</strong> {isOther ? "Custom-category listings reviewed in 24h." : "Most listings go live within 4 hours after submission."}
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}

function exampleTitle(slug: string) {
  switch (slug) {
    case "fashion": return "Royal Maroon Banarasi Lehenga";
    case "electronics": return "MacBook Pro 14\" M3 Pro";
    case "cameras": return "Sony A7 IV + 24-70mm GM";
    case "tools": return "Bosch GSB 13 RE Impact Drill";
    case "furniture": return "3-Seater Fabric Sofa (Beige)";
    case "vehicles": return "Royal Enfield Classic 350";
    case "events": return "Marigold Wedding Stage Decor";
    case "jewellery": return "Designer Kundan Necklace Set";
    case "musical": return "Fender Player Stratocaster";
    case "sports": return "Domyos Foldable Treadmill";
    case "outdoor": return "Quechua MH100 4-Person Tent";
    case "baby": return "Chicco Bravo Stroller";
    default: return "Your custom rental item";
  }
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
