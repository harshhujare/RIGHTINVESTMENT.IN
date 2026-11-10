import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { WhyMutualFundsSection } from "@/components/sections/WhyMutualFundsSection";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { AdvisorProfile } from "@/components/sections/AdvisorProfile";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <JsonLd />
      <Navbar />
      <main>
        <HeroSection />
        <WhyMutualFundsSection />
        <ServicesBento />
        <AdvisorProfile />
      </main>
      <Footer />
    </>
  );
}
