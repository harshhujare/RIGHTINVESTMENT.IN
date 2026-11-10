// ─── Advisor Authority & Contact Section ───────────────────────────────────
// Displays Sachin Jagtap's credentials and all contact channels.
// Bilingual (English + Marathi) editorial layout.

import { siteConfig } from "@/config/site";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  Share2,
  Award,
  CheckCircle,
} from "lucide-react";

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

/** Reusable icon circle for contact cards */
function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-light text-emerald-primary">
      {children}
    </div>
  );
}

export function AdvisorProfile() {
  const { advisor, location, contact, marathi } = siteConfig;

  return (
    <section
      id="contact"
      className="scroll-mt-20 bg-surface border-y border-stone-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* ── Left Column — Authority Editorial ────────────────────── */}
          <div className="lg:col-span-2">
            {/* Small label */}
            <span className="text-xs uppercase tracking-[0.2em] text-gold font-semibold">
              Your Financial Advisor
            </span>

            {/* Name (English) */}
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mt-3">
              {advisor.name}
            </h2>

            {/* Name (Marathi) */}
            <p className="font-devanagari text-xl text-emerald-primary font-semibold mt-2 leading-relaxed">
              {advisor.fullTitleMarathi}
            </p>

            {/* Experience badge */}
            <span className="bg-emerald-light text-emerald-primary text-sm font-medium px-4 py-2 rounded-full inline-flex items-center gap-2 mt-4">
              <Award className="h-4 w-4" />
              {advisor.experience} {advisor.experienceLabel}
            </span>

            {/* Marathi quote 1 — Authority Promise */}
            <blockquote className="border-l-4 border-gold pl-4 mt-8">
              <p className="font-devanagari text-lg text-text-primary leading-relaxed font-medium">
                {marathi.authorityPromise}
              </p>
            </blockquote>

            {/* Marathi quote 2 — Sign-off */}
            <blockquote className="border-l-4 border-gold pl-4 mt-6">
              <p className="font-devanagari text-lg text-text-primary leading-relaxed font-medium">
                {marathi.signOff}
              </p>
            </blockquote>

            {/* Description paragraph */}
            <p className="text-text-secondary text-base leading-relaxed mt-6">
              Sachin Jagtap has been guiding families and business owners across
              Pune in making informed investment decisions. From disciplined SIP
              planning to comprehensive retirement architectures, his goal-based
              advisory approach ensures every rupee works toward your financial
              freedom.
            </p>
          </div>

          {/* ── Right Column — Contact Cards Grid ────────────────────── */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
            {/* Card 1 — Office Location */}
            <div className="bg-canvas rounded-xl border border-stone-border p-6">
              <div className="flex items-start gap-3">
                <IconCircle>
                  <MapPin className="h-5 w-5" />
                </IconCircle>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-text-primary">
                    Visit Our Office
                  </h3>
                  <p className="text-sm text-text-secondary mt-1 leading-relaxed">
                    {location.full}
                  </p>
                </div>
              </div>

              {/* Status badge */}
              <span className="bg-emerald-light text-emerald-primary text-xs font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mt-4">
                <CheckCircle className="h-3.5 w-3.5" />
                Always Open for Scheduled &amp; Walk-In Consultations
              </span>
            </div>

            {/* Card 2 — Phone & WhatsApp */}
            <div className="bg-canvas rounded-xl border border-stone-border p-6">
              <div className="flex items-start gap-3">
                <IconCircle>
                  <Phone className="h-5 w-5" />
                </IconCircle>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-text-primary">
                    Call or WhatsApp
                  </h3>
                  <p className="text-sm text-text-secondary mt-1 tabular-nums">
                    {contact.phone.display}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 mt-4">
                <a
                  href={contact.phone.href}
                  className="bg-canvas border border-stone-border hover:bg-emerald-light text-emerald-primary rounded-full px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 inline-flex items-center gap-1.5"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call Now
                </a>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-primary hover:bg-emerald-hover text-white rounded-full px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Card 3 — Email */}
            <div className="bg-canvas rounded-xl border border-stone-border p-6">
              <div className="flex items-start gap-3">
                <IconCircle>
                  <Mail className="h-5 w-5" />
                </IconCircle>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-text-primary">
                    Email Us
                  </h3>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-text-secondary hover:text-emerald-primary transition-colors duration-200 cursor-pointer mt-1 inline-block break-all"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4 — Social Channels */}
            <div className="bg-canvas rounded-xl border border-stone-border p-6">
              <div className="flex items-start gap-3">
                <IconCircle>
                  <Share2 className="h-5 w-5" />
                </IconCircle>
                <div>
                  <h3 className="font-sans text-sm font-semibold text-text-primary">
                    Follow Us
                  </h3>
                </div>
              </div>

              {/* Social links */}
              <div className="mt-4 space-y-2.5">
                <a
                  href={contact.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-emerald-primary transition-colors duration-200 cursor-pointer"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {contact.instagram.handle}
                </a>
                <a
                  href={contact.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-text-secondary hover:text-emerald-primary transition-colors duration-200 cursor-pointer"
                >
                  <FacebookIcon className="h-4 w-4" />
                  {contact.facebook.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
