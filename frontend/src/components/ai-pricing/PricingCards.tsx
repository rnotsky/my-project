"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    description: "Explore RNOTSKY AI with essential features.",
    button: "Get Started",
    href: "/signup",
    featured: false,
    features: [
      "20 AI messages/day",
      "Standard AI Model",
      "Conversation History",
      "Community Support",
      "Basic Response Speed",
    ],
  },
  {
    name: "Pro",
    price: "₹300",
    usd: "$5",
    eur: "€5",
    period: "/month",
    description: "Everything you need for professional AI work.",
    button: "Upgrade to Pro",
    href: "/checkout/pro",
    featured: true,
    features: [
      "Unlimited AI Chat",
      "Advanced AI Model",
      "Image Understanding",
      "File Uploads",
      "Priority Speed",
      "Long-Term Memory",
      "Priority Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Custom AI solutions built for organizations.",
    button: "Contact Sales",
    href: "/contact",
    featured: false,
    features: [
      "Unlimited Usage",
      "Dedicated AI Models",
      "API Access",
      "Admin Dashboard",
      "Team Workspace",
      "Enterprise Security",
      "Dedicated Manager",
    ],
  },
];

export default function PricingCards() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-black py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}

        <div className="mb-20 text-center">
          <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
            Pricing
          </span>

          <h2 className="mt-8 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Choose Your Perfect Plan
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Simple, transparent pricing designed for individuals,
            professionals, and enterprises.
          </p>
        </div>

        {/* Cards */}


<div className="grid items-stretch gap-8 lg:grid-cols-3">
  {plans.map((plan) => (
    <div
      key={plan.name}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[32px] border transition-all duration-500 hover:-translate-y-2 ${
        plan.featured
          ? "scale-[1.03] border-purple-500/40 bg-gradient-to-b from-purple-500/15 via-[#121212] to-[#090909] shadow-[0_0_80px_rgba(168,85,247,0.20)]"
          : "border-white/10 bg-white/[0.03] hover:border-purple-500/30"
      }`}
    >
      {/* Glow */}
      {plan.featured && (
        <div className="absolute inset-0 -z-10 rounded-[32px] bg-purple-600/10 blur-3xl" />
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-8">
        {plan.featured && (
          <div className="absolute right-8 top-8 rounded-full bg-purple-600 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-white">
            Popular
          </div>
        )}

        <h3 className="text-4xl font-bold text-white">
          {plan.name}
        </h3>

        <p className="mt-5 min-h-[60px] leading-8 text-gray-400">
          {plan.description}
        </p>

        <div className="mt-10 min-h-[130px]">
          <div className="flex items-end gap-2">
            <span className="text-6xl font-bold tracking-tight text-white">
              {plan.price}
            </span>

            {plan.period && (
              <span className="pb-2 text-lg text-gray-400">
                {plan.period}
              </span>
            )}
          </div>

          {plan.featured && (
            <p className="mt-4 text-sm font-medium text-purple-300">
              Also available for {plan.usd} / {plan.eur}
            </p>
          )}
                  </div>

        {/* Features */}
        <div className="flex-1 space-y-5">
          {plan.features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-4"
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  plan.featured
                    ? "bg-purple-500/20"
                    : "bg-white/5"
                }`}
              >
                <Check
                  size={15}
                  className="text-purple-400"
                />
              </div>

              <span className="text-[16px] text-gray-300">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link
          href={plan.href}
          className={`mt-12 flex h-14 w-full items-center justify-center gap-2 rounded-2xl text-base font-semibold transition-all duration-300 ${
            plan.featured
              ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30 hover:bg-purple-500"
              : "border border-white/10 bg-white/[0.03] text-white hover:border-purple-500/40 hover:bg-white/[0.06]"
          }`}
        >
          {plan.button}
          <ArrowRight size={18} />
        </Link>

        {/* Footer */}
        <p className="mt-5 text-center text-sm text-gray-500">
          No hidden fees
        </p>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}