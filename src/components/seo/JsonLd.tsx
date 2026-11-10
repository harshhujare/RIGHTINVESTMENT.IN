// ─── JSON-LD Structured Data ───────────────────────────────────────────────
// Server component that injects FinancialService + LocalBusiness schema
// for rich search results and Google knowledge panel eligibility.

import { siteConfig } from "@/config/site";

/** Builds the full JSON-LD array from siteConfig values. */
function buildJsonLd() {
  const { brand, advisor, location, contact, services } = siteConfig;

  const phoneE164 = contact.phone.href.replace("tel:", "");

  // Derive service type labels from the services array
  const serviceTypes = services.map((s) => s.title);

  const financialService = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: brand.name,
    description: `Trusted mutual fund distribution, SIP advisory, retirement planning, insurance, and wealth management services by ${advisor.name} in ${location.area}, ${location.city}.`,
    url: "https://rightinvestment.in",
    telephone: phoneE164,
    email: contact.email,
    founder: {
      "@type": "Person",
      name: advisor.name,
      jobTitle: "Investment Advisor & Mutual Fund Distributor",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: location.area,
      addressRegion: location.state,
      postalCode: location.pincode,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: location.city,
    },
    serviceType: serviceTypes,
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: brand.name,
    description: `Investment advisory and mutual fund distribution firm in ${location.area}, ${location.city}`,
    telephone: phoneE164,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.area,
      addressLocality: location.city,
      addressRegion: location.state,
      postalCode: location.pincode,
      addressCountry: "IN",
    },
    sameAs: [contact.instagram.url, contact.facebook.url],
  };

  return [financialService, localBusiness];
}

/**
 * Renders a `<script type="application/ld+json">` tag with
 * FinancialService and LocalBusiness structured data.
 *
 * Drop this component inside `<head>` or at the top of `<body>`
 * in your root layout.
 */
export function JsonLd() {
  const jsonLd = buildJsonLd();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
