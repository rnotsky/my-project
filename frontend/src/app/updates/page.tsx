import Hero from "@/components/updates/Hero";
import UpdatesGrid from "@/components/updates/UpdatesGrid";
import CTA from "@/components/updates/CTA";


export default function UpdatesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">


      {/* Page Content */}
      <div className="relative z-10">
        <Hero />
        <UpdatesGrid />
        <CTA />
      </div>

    </main>
  );
}