import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { ShieldCheck, Phone, Mail, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-alt/60 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              India's premier fashion rental marketplace. Wear premium designer pieces for a fraction of the price — verified sellers, refundable hold, doorstep delivery.
            </p>
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-success" />
              All payments protected by RentKart Refundable Hold™
            </div>
            <div className="mt-4 flex items-center gap-3">
              <a aria-label="Instagram" href="#" className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card hover:bg-surface-alt"><Instagram className="h-4 w-4" /></a>
              <a aria-label="Twitter" href="#" className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card hover:bg-surface-alt"><Twitter className="h-4 w-4" /></a>
              <a aria-label="Facebook" href="#" className="grid h-9 w-9 place-items-center rounded-md border border-border bg-card hover:bg-surface-alt"><Facebook className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Marketplace</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/buyer" className="hover:text-foreground">Discover</Link></li>
              <li><Link to="/buyer/browse" className="hover:text-foreground">Browse all</Link></li>
              <li><Link to="/role" className="hover:text-foreground">Become a seller</Link></li>
              <li><Link to="/help" className="hover:text-foreground">Trust & safety</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Support</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/help" className="hover:text-foreground">Help centre</Link></li>
              <li><a className="hover:text-foreground" href="#">Refund policy</a></li>
              <li><a className="hover:text-foreground" href="#">Disputes</a></li>
              <li><a className="hover:text-foreground" href="#">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground">Reach us</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 1800-200-RENT</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> care@rentkart.in</li>
              <li className="text-xs">Mon–Sat • 9am–9pm IST</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2025 RentKart Technologies Pvt Ltd · CIN U72900MH2024PTC123456 · GSTIN 27AABCR1234C1Z5</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Cookie policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
