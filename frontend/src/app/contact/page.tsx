import Hero from "@/components/contact/Hero";
import InquiryTypes from "@/components/contact/InquiryTypes";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQ from "@/components/contact/FAQ";
import CTA from "@/components/contact/CTA";

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />

      <div className="relative z-10">
        <Hero />
        <InquiryTypes />

        <section className="px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_420px]">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>

        <FAQ />
        <CTA />
      </div>
    </main>
  );
}