"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-black py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <div
          className="
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.03]
            backdrop-blur-xl
            p-10
            sm:p-14
            lg:p-20
          "
        >
          <div className="mx-auto max-w-4xl text-center">
            {/* Small Label */}
            <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
              Start Today
            </span>

            {/* Heading */}
            <h2 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Experience the Future of
              <br />
              <span className="text-purple-400">
                Artificial Intelligence
              </span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              Build faster, think smarter, and unlock powerful AI capabilities
              with RNOTSKY. Start for free and upgrade whenever you're ready.
            </p>

            {/* Buttons */}
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-2xl
                  bg-purple-600
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.03]
                  hover:bg-purple-500
                "
              >
                Get Started Free
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="
                  inline-flex
                  items-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:border-purple-500/40
                  hover:bg-white/[0.06]
                "
              >
                Contact Sales
              </Link>
            </div>

            {/* Bottom Text */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-500">
              <span>No hidden fees</span>
              <span>•</span>
              <span>Cancel anytime</span>
              <span>•</span>
              <span>Secure payments</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}