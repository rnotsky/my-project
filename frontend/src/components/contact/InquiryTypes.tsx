"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  MessageCircle,
  Briefcase,
  LifeBuoy,
  Users,
  Handshake,
  Sparkles,
} from "lucide-react";

const inquiries = [
  {
    id: "general",
    title: "General Inquiry",
    description: "Questions about RNOTSKY, products, or services.",
    icon: MessageCircle,
  },
  {
    id: "sales",
    title: "Sales",
    description: "Product information, pricing, and enterprise solutions.",
    icon: Briefcase,
  },
  {
    id: "support",
    title: "Support",
    description: "Technical help, bugs, and account assistance.",
    icon: LifeBuoy,
  },
  {
    id: "careers",
    title: "Careers",
    description: "Job opportunities, internships, and applications.",
    icon: Users,
  },
  {
    id: "partnership",
    title: "Partnership",
    description: "Business collaborations and strategic partnerships.",
    icon: Handshake,
  },
  {
    id: "other",
    title: "Other",
    description: "Anything that doesn't fit the categories above.",
    icon: Sparkles,
  },
];

export default function InquiryTypes() {
  const searchParams = useSearchParams();

  const [selected, setSelected] = useState("general");

  useEffect(() => {
    const type = searchParams.get("type");

    if (type) {
      setSelected(type.toLowerCase());
    }
  }, [searchParams]);

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Inquiry Type
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white">
            How can we help you?
          </h2>

          <p className="mt-4 text-lg leading-8 text-gray-400">
            Select the option that best matches your inquiry so we can direct
            your message to the right team.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {inquiries.map((item) => {
            const Icon = item.icon;
            const active = selected === item.id;

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelected(item.id)}
                className={`group rounded-3xl border p-7 text-left transition-all duration-300 ${
                  active
                    ? "border-purple-500 bg-purple-500/10 shadow-[0_0_35px_rgba(168,85,247,0.25)]"
                    : "border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-purple-500/40 hover:bg-white/[0.06]"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    active
                      ? "bg-purple-600 text-white"
                      : "bg-purple-500/15 text-purple-300"
                  }`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>

                {active && (
                  <div className="mt-6 inline-flex rounded-full bg-purple-500/20 px-3 py-1 text-sm font-medium text-purple-300">
                    Selected
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}