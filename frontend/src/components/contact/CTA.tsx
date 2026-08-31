"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] p-10 backdrop-blur-2xl sm:p-16">

        {/* Badge */}

        <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-300">
          <MessageCircle size={16} />
          Ready to Connect?
        </div>

        {/* Content */}

        <div className="mt-8 max-w-3xl">

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-6xl">
            Let's Build the
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-white bg-clip-text text-transparent">
              Future Together
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            Whether you're exploring AI, software development,
            robotics, partnerships, careers, or simply have a
            question, our team is ready to help you take the
            next step.
          </p>

        </div>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/"
            className="
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-fuchsia-600
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
            "
          >
            Explore RNOTSKY
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/developers"
            className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:border-purple-500/40
              hover:bg-purple-500/10
            "
          >
            Join Our Team
          </Link>

        </div>

        {/* Bottom Stats */}

        <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-3">

          <div>
            <h3 className="text-3xl font-bold text-white">
              &lt;24h
            </h3>

            <p className="mt-2 text-gray-400">
              Average Response Time
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              Global
            </h3>

            <p className="mt-2 text-gray-400">
              Supporting Clients Worldwide
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              Secure
            </h3>

            <p className="mt-2 text-gray-400">
              Private & Confidential Communication
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}