"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />

      <div className="relative mx-auto flex max-w-[1600px] flex-col items-start px-6 py-24 text-left sm:px-10 lg:px-16 lg:py-32">
        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
          AI Pricing
        </div>

        {/* Heading */}
        <h1 className="mt-8 max-w-5xl text-4xl font-bold leading-tight text-white sm:text-6xl lg:text-7xl">
          Powerful AI
          <br />
          <span className="text-purple-400">Simple Pricing</span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Choose the perfect plan for your workflow. Whether you're exploring
          AI, building products, or scaling your business, RNOTSKY AI has a
          plan designed for you.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-purple-500 active:scale-[0.98]"
          >
            View Plans
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-purple-500/40 hover:bg-white/[0.05]"
          >
            Contact Sales
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid w-full max-w-5xl gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-4xl font-bold text-white">₹300</h3>
            <p className="mt-2 text-gray-400">Monthly Pro Plan</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-4xl font-bold text-white">$5</h3>
            <p className="mt-2 text-gray-400">International Pricing</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-4xl font-bold text-white">€5</h3>
            <p className="mt-2 text-gray-400">European Pricing</p>
          </div>
        </div>
      </div>
    </section>
  );
}