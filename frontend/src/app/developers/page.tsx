import Hero from "@/components/developers/Hero";
import OpenPositions from "@/components/developers/OpenPositions";
import Culture from "@/components/developers/Culture";
import StudyHub from "@/components/developers/StudyHub";
import CTA from "@/components/developers/CTA";
import PageGlow from "@/components/ui/PageGlow";

export default function DevelopersPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* Purple Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />

      <div className="relative z-10">
        <Hero />
        <OpenPositions />
        <Culture />
        <StudyHub />
        <CTA />
      </div>
    </main>
  );
}