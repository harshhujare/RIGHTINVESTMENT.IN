"use client";

// ─── Navbar — Sticky Glassmorphic Header ───────────────────────────────────
// High-trust sticky header with monogram, nav links, WhatsApp CTA, and
// mobile drawer. Uses scroll detection for elevated shadow state.

import { useState, useEffect, useCallback } from "react";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// ─── Nav Links (smooth-scroll anchors) ─────────────────────────────────────
const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Mutual Funds", href: "#why-mutual-funds" },
  { label: "Retirement Preview", href: "#retirement-preview" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── Monogram Badge ────────────────────────────────────────────────────────
// A 40×40 emerald square with "RI" text and a tiny gold diamond accent.
function Monogram() {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-primary">
      {/* Monogram initials */}
      <span className="font-display text-base font-bold leading-none text-white">
        {siteConfig.brand.monogram}
      </span>
      {/* Gold diamond accent — rotated square in top-right corner */}
      <span
        className="absolute -right-0.5 -top-0.5 h-2 w-2 rotate-45 rounded-[1px] bg-gold"
        aria-hidden="true"
      />
    </div>
  );
}

// ─── Navbar Component ──────────────────────────────────────────────────────
export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ── Scroll detection ─────────────────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // ── Smooth-scroll handler ────────────────────────────────────────────────
  const handleNavClick = useCallback(
    (href: string) => {
      setMobileOpen(false);
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    []
  );

  const whatsappUrl = getWhatsAppUrl();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-stone-border bg-[#FAF8F5]/90 backdrop-blur-md transition-shadow duration-200",
        scrolled ? "shadow-elevated" : "shadow-none"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-18 lg:px-8">
        {/* ── Left: Monogram + Brand Title ──────────────────────────────── */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex cursor-pointer items-center gap-3"
          aria-label="Right Investment — back to top"
        >
          <Monogram />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold leading-tight text-emerald-primary">
              {siteConfig.brand.name}
            </span>
            <span className="font-sans text-[10px] uppercase leading-tight tracking-[0.3em] text-text-secondary">
              {siteConfig.brand.tagline}
            </span>
          </div>
        </a>

        {/* ── Center: Desktop Nav Links ─────────────────────────────────── */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="cursor-pointer text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-emerald-primary"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* ── Right: CTA + Mobile Toggle ────────────────────────────────── */}
        <div className="flex items-center gap-3">
          {/* WhatsApp CTA — hidden on small mobile, visible sm+ */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden cursor-pointer items-center gap-2 rounded-full bg-emerald-primary px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-hover sm:flex"
          >
            <Phone className="h-4 w-4" />
            <span>WhatsApp: {siteConfig.contact.whatsapp.display}</span>
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-text-secondary transition-colors duration-200 hover:bg-emerald-light hover:text-emerald-primary lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* ── Mobile Drawer Overlay ──────────────────────────────────────── */}
      {mobileOpen && (
        <div className="fixed inset-0 top-16 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <nav
            className="relative flex h-full flex-col bg-canvas px-6 pb-8 pt-6 shadow-elevated"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className="w-full cursor-pointer rounded-lg px-4 py-3 text-left text-base font-medium text-text-secondary transition-colors duration-200 hover:bg-emerald-light hover:text-emerald-primary"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* WhatsApp CTA in mobile drawer */}
            <div className="mt-auto pt-6">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-emerald-primary px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-emerald-hover"
              >
                <Phone className="h-4 w-4" />
                <span>WhatsApp: {siteConfig.contact.whatsapp.display}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
