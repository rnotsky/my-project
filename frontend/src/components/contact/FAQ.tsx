"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does it take to receive a response?",
    answer:
      "Most inquiries receive a response within 24 business hours. Complex technical or partnership requests may require additional review.",
  },
  {
    question: "Can I apply for a job through this form?",
    answer:
      "Yes. Select the 'Careers' inquiry type before submitting your message. You can include your portfolio, resume link, GitHub, or LinkedIn profile in your message.",
  },
  {
    question: "Do you offer custom AI or software development?",
    answer:
      "Absolutely. We build AI solutions, custom software platforms, robotics systems, automation tools, and enterprise applications tailored to business requirements.",
  },
  {
    question: "How can I request enterprise pricing?",
    answer:
      "Choose the 'Sales' inquiry type and provide details about your organization, expected users, and requirements. Our team will prepare the appropriate solution.",
  },
  {
    question: "Can I become a technology partner?",
    answer:
      "Yes. We welcome collaboration with startups, enterprises, educational institutions, and technology partners. Select 'Partnership' when contacting us.",
  },
  {
    question: "Is my information secure?",
    answer:
      "Yes. Every inquiry is handled securely and confidentially. Your information is only used to respond to your request and is never sold to third parties.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="px-6 py-28">
      <div className="mx-auto max-w-5xl">

        {/* Header */}

        <div className="text-center">

          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-300 backdrop-blur-xl">
            <HelpCircle size={16} />
            Frequently Asked Questions
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-5xl">
            Everything You Need
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-white bg-clip-text text-transparent">
              To Know
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Find quick answers to the most common questions about
            RNOTSKY, our services, careers, partnerships, and support.
          </p>
        </div>

        {/* Accordion */}

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => {

            const active = open === index;

            return (

              <div
                key={index}
                className={`
                  overflow-hidden
                  rounded-3xl
                  border
                  transition-all
                  duration-300

                  ${
                    active
                       ? "border-purple-500/40 bg-gradient-to-br from-purple-500/15 to-purple-900/10 shadow-[0_0_40px_rgba(168,85,247,0.12)]"
                         : "border-white/10 bg-white/[0.03] hover:border-purple-500/20 hover:bg-white/[0.05]"
                  }
                `}
              >

                <button
                  onClick={() =>
                    setOpen(active ? null : index)
                  }
                  className="flex w-full items-center justify-between p-7 text-left"
                >

                  <h3 className="pr-8 text-lg font-semibold text-white">
                    {faq.question}
                  </h3>

                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-xl
                      transition-all
                      duration-300

                      ${
                        active
                          ? "rotate-180 bg-purple-600 text-white"
                          : "bg-white/5 text-gray-400"
                      }
                    `}
                  >
                    <ChevronDown size={20} />
                  </div>

                </button>

                <div
                  className={`
                    grid
                    transition-all
                    duration-500
                    ease-in-out

                    ${
                      active
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }
                  `}
                >
                  <div className="overflow-hidden">

                    <div className="border-t border-white/10 px-7 py-6">

                      <p className="leading-8 text-gray-400">
                        {faq.answer}
                      </p>

                    </div>

                  </div>
                </div>

              </div>

            );

          })}

        </div>

      </div>
    </section>
  );
}