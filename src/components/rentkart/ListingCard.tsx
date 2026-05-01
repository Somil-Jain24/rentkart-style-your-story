import { Link } from "@tanstack/react-router";
import { Star, MapPin, BadgeCheck, ShieldCheck } from "lucide-react";
import type { Listing } from "@/data/mock";
import { ProductImage } from "./ProductImage";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <Link
      to="/buyer/product/$id"
      params={{ id: listing.id }}
      className="group block rounded-2xl border border-border bg-card p-2 transition-all hover:shadow-card focus-visible:shadow-card"
    >
      <div className="relative">
        <ProductImage hue={listing.imageHue} label={listing.title} />
        {listing.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-card/95 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-deep shadow-soft">
            {listing.badge}
          </span>
        )}
        {!listing.available && (
          <span className="absolute right-3 top-3 rounded-full bg-error-soft px-2.5 py-1 text-[10px] font-semibold text-error">
            Booked
          </span>
        )}
      </div>

      <div className="px-1.5 pb-2 pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="line-clamp-1 text-sm font-semibold text-foreground group-hover:text-primary">
            {listing.title}
          </h3>
          <div className="flex shrink-0 items-center gap-0.5 text-xs">
            <Star className="h-3.5 w-3.5 fill-warning text-warning" />
            <span className="font-semibold">{listing.rating}</span>
          </div>
        </div>

        <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
          <span>{listing.sellerName}</span>
          {listing.sellerVerified && <BadgeCheck className="h-3.5 w-3.5 text-info" />}
          <span>·</span>
          <MapPin className="h-3 w-3" />
          <span>{listing.city}</span>
        </div>

        <div className="mt-3 flex items-end justify-between border-t border-dashed border-border pt-2.5">
          <div>
            <p className="font-mono text-base font-semibold text-foreground">
              ₹{listing.dailyRate.toLocaleString("en-IN")}
              <span className="ml-1 text-[11px] font-normal text-muted-foreground">/day</span>
            </p>
            <p className="mt-0.5 flex items-center gap-1 text-[10px] text-muted-foreground">
              <ShieldCheck className="h-3 w-3 text-success" />
              ₹{listing.itemValue.toLocaleString("en-IN")} refundable hold
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
