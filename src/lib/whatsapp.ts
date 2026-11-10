// ─── WhatsApp URL Helper ───────────────────────────────────────────────────
// Generates properly URL-encoded wa.me links with service-specific pre-fill.

import { siteConfig } from "@/config/site";

/**
 * Generate a WhatsApp chat URL with a pre-filled bilingual message.
 *
 * @param serviceTitle - Optional service name to include in the message
 * @param customContext - Optional custom context to append
 * @returns Full `https://wa.me/...` URL string
 */
export function getWhatsAppUrl(
  serviceTitle?: string,
  customContext?: string
): string {
  const number = siteConfig.contact.whatsapp.number;

  let message: string;

  if (serviceTitle) {
    message = `नमस्ते सचिन सर (Right Investment),\n\nमला ${serviceTitle} बद्दल माहिती आणि योग्य गुंतवणूक सल्ला हवा आहे.\n\nHello Sachin Sir, I would like to know more about ${serviceTitle} and get the right investment advice.`;
  } else {
    message = `नमस्ते सचिन सर (Right Investment),\n\nमला गुंतवणूक सल्ला हवा आहे. कृपया संपर्क करा.\n\nHello Sachin Sir, I would like investment advisory guidance. Please connect.`;
  }

  if (customContext) {
    message += `\n\n${customContext}`;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/**
 * Generate a WhatsApp URL for a specific service by its ID.
 */
export function getServiceWhatsAppUrl(serviceId: string): string {
  const service = siteConfig.services.find((s) => s.id === serviceId);
  if (!service) {
    return getWhatsAppUrl();
  }
  return getWhatsAppUrl(`${service.title} (${service.titleMarathi})`);
}

