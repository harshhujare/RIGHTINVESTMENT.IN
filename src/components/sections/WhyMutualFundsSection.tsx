// ─── WhyMutualFundsSection ─────────────────────────────────────────────────
// Campaign & Education Strip: Myth-busting + Retirement benchmark visualization.
// Two pillars: "Why Mutual Funds" education cards + "SIP → SWP Retirement" preview.

import {
  TrendingUp,
  Landmark,
  Gem,
  Shield,
  ArrowRight,
  ArrowDown,
  MessageCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";

// ─── Fund Category Cards Data ──────────────────────────────────────────────
const fundCategories = [
  {
    icon: TrendingUp,
    title: "Equity",
    titleMarathi: "इक्विटी",
    pill: "Growth",
    pillColor: "bg-emerald-light text-emerald-primary",
    description: "Market-linked returns for long-term wealth creation",
    iconBg: "bg-emerald-light",
  },
  {
    icon: Landmark,
    title: "Government Bonds / Debt",
    titleMarathi: "सरकारी बॉण्ड्स",
    pill: "Stable",
    pillColor: "bg-blue-50 text-blue-700",
    description: "Government-backed safety with predictable income",
    iconBg: "bg-blue-50",
  },
  {
    icon: Gem,
    title: "Gold",
    titleMarathi: "सोने",
    pill: "Hedge",
    pillColor: "bg-gold-light text-gold",
    description: "Traditional safety plus inflation protection",
    iconBg: "bg-gold-light",
  },
  {
    icon: Shield,
    title: "Low-Risk Hybrid",
    titleMarathi: "कमी जोखीम",
    pill: "Balanced",
    pillColor: "bg-purple-50 text-purple-700",
    description: "Best of equity & debt in one diversified fund",
    iconBg: "bg-purple-50",
  },
] as const;

// ─── Component ─────────────────────────────────────────────────────────────
export function WhyMutualFundsSection() {
  const retirementWhatsAppUrl = getWhatsAppUrl(
    "Retirement Pension Plan (SIP + SWP)",
    "I want a custom retirement calculation based on my age and income."
  );

  return (
    <section className="bg-surface border-y border-stone-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* ── Pillar A: Why Mutual Funds ─────────────────────────────── */}
        <div id="why-mutual-funds" className="scroll-mt-20">
          {/* Section Header */}
          <h2 className="font-devanagari text-2xl sm:text-3xl font-bold text-emerald-primary leading-relaxed">
            म्युच्युअल फंड म्हणजे फक्त शेअर मार्केट नाही!
          </h2>
          <p className="font-display text-xl sm:text-2xl font-semibold text-text-primary mt-2">
            Mutual Funds Are More Than Just The Stock Market
          </p>

          {/* Myth-busting description */}
          <p className="font-devanagari text-base text-text-secondary leading-relaxed mt-4 max-w-3xl">
            {siteConfig.marathi.mythBusting}
          </p>

          {/* Visual Breakdown: 4 Category Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {fundCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.title}
                  className="bg-canvas rounded-xl p-6 border border-stone-border hover:shadow-card transition-all duration-200 cursor-pointer"
                >
                  {/* Icon Circle */}
                  <div
                    className={`w-12 h-12 rounded-full ${category.iconBg} flex items-center justify-center`}
                  >
                    <Icon size={22} className="text-emerald-primary" />
                  </div>

                  {/* Bilingual Title */}
                  <h3 className="font-sans text-base font-bold text-text-primary mt-4">
                    {category.title}
                  </h3>
                  <p className="font-devanagari text-sm text-text-secondary leading-relaxed">
                    {category.titleMarathi}
                  </p>

                  {/* Pill Badge */}
                  <span
                    className={`inline-block text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full mt-3 ${category.pillColor}`}
                  >
                    {category.pill}
                  </span>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mt-3">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Pillar B: Retirement Preview ───────────────────────────── */}
        <div id="retirement-preview" className="scroll-mt-20 mt-20">
          {/* Section Header */}
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-text-primary">
            Plan Your Retirement with SIP + SWP
          </h2>
          <p className="font-devanagari text-lg text-gold font-semibold mt-2 leading-relaxed">
            {siteConfig.marathi.secondaryTagline}
          </p>

          {/* Signature Benchmark Visualization Card */}
          <div className="bg-canvas rounded-2xl p-8 border border-stone-border shadow-card mt-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
              {/* Left Column: SIP (Invest Phase) */}
              <div className="text-center md:text-left flex-1">
                <p className="text-xs uppercase tracking-wider font-semibold text-text-muted">
                  Invest Phase (SIP)
                </p>
                <p className="tabular-nums font-display text-emerald-primary text-4xl font-bold mt-2">
                  ₹10,000
                  <span className="text-lg font-semibold text-text-secondary">
                    /month
                  </span>
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  for{" "}
                  <span className="tabular-nums font-display text-emerald-primary text-xl font-bold">
                    20
                  </span>{" "}
                  years
                </p>
              </div>

              {/* Connecting Arrow */}
              <div className="flex-shrink-0">
                {/* Desktop: right arrow */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-emerald-light">
                  <ArrowRight
                    size={24}
                    className="text-emerald-primary"
                  />
                </div>
                {/* Mobile: down arrow */}
                <div className="flex md:hidden items-center justify-center w-12 h-12 rounded-full bg-emerald-light">
                  <ArrowDown
                    size={24}
                    className="text-emerald-primary"
                  />
                </div>
              </div>

              {/* Right Column: SWP (Retirement Phase) */}
              <div className="text-center md:text-left flex-1">
                <p className="text-xs uppercase tracking-wider font-semibold text-text-muted">
                  Retirement Phase (SWP)
                </p>
                <p className="tabular-nums font-display text-gold text-4xl font-bold mt-2">
                  ₹49,463
                  <span className="text-lg font-semibold text-text-secondary">
                    /month
                  </span>
                </p>
                <p className="text-sm text-text-secondary mt-1">
                  lifetime pension
                </p>
              </div>
            </div>

            {/* Disclaimer Note */}
            <p className="text-sm text-text-muted text-center mt-8">
              Illustrative projection based on historical equity mutual fund
              returns. Actual returns may vary.
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col items-center mt-8 gap-4">
            <a
              href={retirementWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-primary hover:bg-emerald-hover text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-200 cursor-pointer text-base"
            >
              <MessageCircle size={20} />
              Get Your Custom Retirement Plan on WhatsApp
            </a>

            {/* Phase 2 Badge */}
            <span className="bg-gold-light text-gold text-xs font-medium px-3 py-1 rounded-full">
              🔜 Full Interactive Calculator Coming in Phase 2
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
