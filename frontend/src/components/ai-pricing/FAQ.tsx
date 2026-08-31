"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel your subscription at any time. Your plan will remain active until the end of your current billing period.",
  },
  {
    question: "What payment methods are supported?",
    answer:
      "We support UPI, Credit & Debit Cards, Net Banking, Google Pay, PhonePe, Paytm, PayPal, and Stripe-supported international payment methods.",
  },
  {
    question: "Can I upgrade from Free to Pro later?",
    answer:
      "Absolutely. You can upgrade your plan whenever you want without losing your conversation history or account data.",
  },
  {
    question: "Does the Pro plan include unlimited AI usage?",
    answer:
      "The Pro plan includes generous usage limits designed for everyday professional use. Fair usage policies may apply to ensure service quality for everyone.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Refund requests are reviewed according to our billing and refund policy. Please contact our support team if you believe you're eligible.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. Your conversations and account data are protected using industry-standard security practices. We continuously improve our security to protect user information.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-10 lg:px-16">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Everything you need to know about RNOTSKY AI
            subscriptions and billing.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-7 py-6 text-left transition-all duration-300 hover:bg-white/[0.02]"
              >
                <span className="text-lg font-semibold text-white">
                  {faq.question}
                </span>

                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-7 py-6 leading-8 text-gray-400">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}