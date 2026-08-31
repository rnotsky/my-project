import Hero from "@/components/ai-pricing/Hero";
import PricingCards from "@/components/ai-pricing/PricingCards";
import Comparison from "@/components/ai-pricing/Comparison";
import FAQ from "@/components/ai-pricing/FAQ";
import CTA from "@/components/ai-pricing/CTA";

export const metadata = {
  title: "AI Pricing | RNOTSKY",
  description:
    "Explore RNOTSKY AI pricing plans for individuals, developers, and businesses.",
};

export default function AIPricingPage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <PricingCards />
      <Comparison />
      <FAQ />
      <CTA />
    </main>
  );
}