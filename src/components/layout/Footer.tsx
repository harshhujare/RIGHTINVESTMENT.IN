// ─── Footer — Compliance & SEO Footer ──────────────────────────────────────
// Deep emerald footer with brand identity, quick links, AMFI/SEBI disclaimer,
// Pune local SEO pills, and social links. Server component — no interactivity.

import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// ─── Inline Social SVG Icons (not available in lucide-react) ────────────────
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

// ─── Quick Links (mirror nav anchors + extras) ─────────────────────────────
const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Mutual Funds", href: "#why-mutual-funds" },
  { label: "Retirement Preview", href: "#retirement-preview" },
  { label: "Contact Us", href: "#contact" },
] as const;

// ─── Footer Component ─────────────────────────────────────────────────────
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-emerald-primary text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Top Row: Brand + Social ──────────────────────────────────── */}
        <div className="flex flex-col items-start justify-between gap-6 border-b border-white/15 py-10 sm:flex-row sm:items-center">
          {/* Brand identity */}
          <div className="flex items-center gap-3">
            {/* Monogram badge (matches navbar) */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
              <span className="font-display text-base font-bold leading-none text-white">
                {siteConfig.brand.monogram}
              </span>
              <span
                className="absolute -right-0.5 -top-0.5 h-2 w-2 rotate-45 rounded-[1px] bg-gold"
                aria-hidden="true"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold leading-tight text-white">
                {siteConfig.brand.name}
              </span>
              <span className="font-sans text-[10px] uppercase leading-tight tracking-[0.3em] text-white/60">
                {siteConfig.brand.tagline}
              </span>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.contact.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:border-gold hover:text-gold"
              aria-label="Follow us on Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={siteConfig.contact.facebook.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-white/20 text-white/70 transition-all duration-200 hover:border-gold hover:text-gold"
              aria-label="Follow us on Facebook"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* ── Middle Row: Quick Links + Contact Info ───────────────────── */}
        <div className="grid gap-10 border-b border-white/15 py-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Quick links */}
          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-white/50">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex cursor-pointer items-center gap-1.5 text-sm text-white/70 transition-colors duration-200 hover:text-gold"
                  >
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-white/50">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={siteConfig.contact.phone.href}
                  className="flex cursor-pointer items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-gold"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  <span className="tabular-nums">{siteConfig.contact.phone.display}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex cursor-pointer items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-gold"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>{siteConfig.location.full}</span>
              </li>
            </ul>
          </div>

          {/* WhatsApp CTA */}
          <div className="flex flex-col justify-end sm:col-span-2 lg:col-span-1">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-gold bg-gold/10 px-5 py-3 text-sm font-semibold text-gold transition-all duration-200 hover:bg-gold hover:text-emerald-primary"
            >
              <Phone className="h-4 w-4" />
              <span>WhatsApp: {siteConfig.contact.whatsapp.display}</span>
            </a>
          </div>
        </div>

        {/* ── AMFI / SEBI Disclaimer ──────────────────────────────────── */}
        <div className="border-b border-white/15 py-8">
          <div className="rounded-lg border border-white/15 px-5 py-4">
            <p className="font-sans text-xs leading-relaxed text-white/70">
              <strong className="text-white/90">AMFI / SEBI Disclaimer:</strong>{" "}
              {siteConfig.disclaimer}
            </p>
          </div>
        </div>

        {/* ── Pune Local SEO Pills ────────────────────────────────────── */}
        <div className="border-b border-white/15 py-8">
          <h4 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-white/40">
            Serving Pune
          </h4>
          <div className="flex flex-wrap gap-2">
            {siteConfig.seoAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/60"
              >
                Investment Advisory in {area}
              </span>
            ))}
          </div>
        </div>

        {/* ── Copyright ───────────────────────────────────────────────── */}
        <div className="flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
          <p className="text-xs text-white/50">
            &copy; {currentYear} {siteConfig.brand.name}. All rights reserved.
          </p>
          <p className="font-devanagari text-xs leading-relaxed text-white/40">
            {siteConfig.marathi.signOff}
          </p>
        </div>
      </div>
    </footer>
  );
}
