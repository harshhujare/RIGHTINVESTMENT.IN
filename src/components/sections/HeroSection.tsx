"use client";

// ─── Hero Section — Split Editorial Layout ─────────────────────────────────
// Left: Editorial authority content (Marathi + English bilingual)
// Right: Interactive 3D Rupee coin (dynamically loaded, no SSR)

import dynamic from "next/dynamic";
import { MessageCircle, ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// ── Lazy-load the 3D coin (no SSR — Canvas uses browser APIs) ──────────────
const InteractiveRupeeCoin = dynamic(
  () => import("@/components/three/InteractiveRupeeCoin"),
  {
    ssr: false,
    loading: () => (
      <div className="aspect-square w-full max-w-md mx-auto bg-stone-border/20 rounded-2xl animate-pulse flex items-center justify-center">
        <span className="text-6xl text-text-muted/40 font-display select-none">
          ₹
        </span>
      </div>
    ),
  }
);

export function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-20 bg-canvas"
      aria-labelledby="hero-headline"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* ── Left Column — Editorial Authority ─────────────────────── */}
          <div className="order-2 lg:order-1">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-light text-emerald-primary rounded-full px-4 py-1.5 mb-6">
              {/* Pulsing emerald dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-primary/60 animate-[pulse-dot_2s_ease-in-out_infinite]" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-primary" />
              </span>
              <span className="text-sm font-medium font-sans">
                Bibwewadi, Pune • 10+ Years of Trusted Advisory
              </span>
            </div>

            {/* Primary Marathi Headline */}
            <h1
              className="font-devanagari text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-primary leading-relaxed"
              lang="mr"
            >
              {siteConfig.marathi.heroHookShort}
            </h1>

            {/* English Headline */}
            <p
              id="hero-headline"
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary leading-tight mt-4"
            >
              Build Generational Wealth with Guided Mutual Fund &amp; Investment
              Planning.
            </p>

            {/* Subtext */}
            <p className="text-text-secondary text-base lg:text-lg mt-6 leading-relaxed font-sans">
              Personalized advisory across SIP/SWP, Retirement Planning,
              Government Bonds, Sovereign Gold, and Family Protection — tailored
              to your life goals and risk profile.{" "}
              <span
                className="font-devanagari text-gold font-semibold"
                lang="mr"
              >
                {siteConfig.marathi.signOff}
              </span>
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* Primary CTA — WhatsApp */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-primary hover:bg-emerald-hover text-white rounded-full px-8 py-3.5 text-base font-semibold transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Start Your Wealth Plan on WhatsApp
              </a>

              {/* Secondary CTA — Scroll to Services */}
              <a
                href="#services"
                className="border-2 border-emerald-primary text-emerald-primary hover:bg-emerald-primary hover:text-white rounded-full px-8 py-3.5 text-base font-semibold transition-all duration-200 cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <ArrowDown className="h-5 w-5" aria-hidden="true" />
                Explore All 8 Financial Services
              </a>
            </div>

            {/* Trust Metrics Bar */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
              <TrustMetric number="10+" label="Years in Pune" />
              <Divider />
              <TrustMetric
                number="8"
                label="Core Wealth & Protection Verticals"
              />
              <Divider />
              <TrustMetric
                number="100%"
                label="Goal-Based Personal Advisory"
              />
            </div>
          </div>

          {/* ── Right Column — 3D Coin ────────────────────────────────── */}
          <div className="order-1 lg:order-2 relative">
            {/* Coin Container */}
            <div className="relative">
              <InteractiveRupeeCoin />

              {/* Floating Badge — Top Right */}
              <div className="glass-card absolute -top-2 -right-2 lg:top-4 lg:right-0 rounded-full px-4 py-2 z-10">
                <span className="text-xs font-medium font-sans">
                  <span className="font-devanagari" lang="mr">
                    म्युच्युअल फंड
                  </span>{" "}
                  = Equity + Govt Bonds + Gold
                </span>
              </div>

              {/* Floating Badge — Bottom Left */}
              <div className="glass-card absolute -bottom-2 -left-2 lg:bottom-4 lg:left-0 rounded-xl p-3 max-w-[260px] z-10">
                <p className="text-[10px] text-gold font-semibold uppercase tracking-wider">
                  Signature SIP+SWP Plan
                </p>
                <p className="text-sm font-semibold text-text-primary tabular-nums mt-0.5">
                  ₹10,000/mo (20 Yrs) → ₹49,463/mo Lifetime Pension
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

// ── Trust Metric — small stat block ──────────────────────────────────────────
function TrustMetric({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-1.5">
      <span className="text-sm font-bold text-text-primary tabular-nums">
        {number}
      </span>
      <span className="text-sm text-text-secondary">{label}</span>
    </div>
  );
}

// ── Vertical Divider ─────────────────────────────────────────────────────────
function Divider() {
  return (
    <span
      className="hidden sm:block h-4 w-px bg-stone-border"
      aria-hidden="true"
    />
  );
}
