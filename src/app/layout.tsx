import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Sans_Devanagari } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari"],
  weight: ["500", "600", "700"],
  variable: "--font-noto-devanagari",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Right Investment — Plan | Invest | Grow | Mutual Fund & Investment Advisory, Pune",
  description:
    "Right Investment by Sachin Jagtap — 10+ years of trusted mutual fund, SIP, retirement planning, insurance, and wealth advisory in Bibwewadi, Pune. योग्य गुंतवणूक, योग्य मार्गदर्शन.",
  keywords: [
    "Right Investment",
    "Sachin Jagtap",
    "mutual fund advisor Pune",
    "SIP advisor Bibwewadi",
    "investment advisory Pune",
    "retirement planning Pune",
    "financial advisor Bibwewadi",
    "mutual fund distributor Pune",
    "health insurance Pune",
    "term insurance advisor",
    "PMS AIF Pune",
  ],
  authors: [{ name: "Right Investment — Sachin Jagtap" }],
  openGraph: {
    title: "Right Investment — Plan | Invest | Grow",
    description:
      "Trusted mutual fund & investment advisory by Sachin Jagtap in Bibwewadi, Pune. SIP, SWP, Retirement, Insurance & Wealth Planning.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} ${notoDevanagari.variable}`}
    >
      <body className="min-h-screen bg-canvas text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

