// ─── ServicesBento ─────────────────────────────────────────────────────────
// 8-Service Asymmetric Bento Grid with dynamic icons, bilingual titles,
// hover-reveal WhatsApp CTA footer, and responsive layout.

"use client";

import {
  TrendingUp,
  Landmark,
  HeartPulse,
  Shield,
  Lock,
  Crown,
  Gem,
  Wallet,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/cn";

// ─── Icon Mapping ──────────────────────────────────────────────────────────
// Maps icon string names from siteConfig to lucide-react components.
const iconMap: Record<string, LucideIcon> = {
  TrendingUp,
  Landmark,
  HeartPulse,
  Shield,
  Lock,
  Crown,
  Gem,
  Wallet,
};

// ─── Component ─────────────────────────────────────────────────────────────
export function ServicesBento() {
  return (
    <section id="services" className="scroll-mt-20 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* ── Section Header ────────────────────────────────────────── */}
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary text-center">
          360° Wealth, Retirement &amp; Family Protection
        </h2>
        <p className="font-devanagari text-xl text-gold font-semibold text-center mt-3 leading-relaxed">
          {siteConfig.marathi.secondaryTagline}
        </p>

        {/* ── Bento Grid ────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {siteConfig.services.map((service) => {
            const Icon = iconMap[service.icon];
            const whatsappUrl = getServiceWhatsAppUrl(service.id);

            return (
              <a
                key={service.id}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  // Base card styles
                  "bg-surface rounded-xl border border-stone-border p-6",
                  "hover:shadow-elevated transition-all duration-200 cursor-pointer",
                  "group relative overflow-hidden flex flex-col",
                  // Span 2 for featured wide cards
                  service.span === 2 && "sm:col-span-2",
                  // Gold left border for featured cards
                  service.featured && "border-l-4 border-l-gold"
                )}
              >
                {/* Category Pill */}
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-emerald-light text-emerald-primary w-fit">
                  {service.category}
                </span>

                {/* Service Icon */}
                {Icon && (
                  <Icon
                    size={28}
                    className="text-emerald-primary mt-4"
                  />
                )}

                {/* Bilingual Title */}
                <h3 className="font-sans text-lg font-bold text-text-primary mt-3">
                  {service.title}
                </h3>
                <p className="font-devanagari text-sm text-text-secondary leading-relaxed mt-1">
                  {service.titleMarathi}
                </p>

                {/* Subtitle */}
                <p className="text-xs text-gold font-medium mt-1">
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed mt-3 flex-grow">
                  {service.description}
                </p>

                {/* Hover-reveal Footer */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mt-4 pt-4 border-t border-stone-border flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-primary">
                    Ask Sachin on WhatsApp →
                  </span>
                  <MessageCircle
                    size={16}
                    className="text-emerald-primary"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
