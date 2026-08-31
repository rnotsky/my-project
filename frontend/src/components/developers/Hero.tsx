"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, BookOpen,  Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* Left */}
        <div>
         <div
            className="
              inline-flex

              items-center

              rounded-full

              border

              border-purple-500/20

              bg-purple-500/10

              px-4

              py-2
            "
          >
            <span
              className="
                text-xs

                font-semibold

                uppercase

                tracking-[0.28em]

                text-purple-400
              "
            >
              RNOTSKY Developers
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Build the
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-white bg-clip-text text-transparent">
              Future With Us
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Join our engineering team, explore our culture, and get ready for
            the upcoming Study Hub designed to help developers grow through
            practical learning and real-world projects.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#jobs"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]"
            >
              View Open Positions
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#studyhub"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10"
            >
              <BookOpen size={18} />
              Study Hub
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <div className="rounded-[32px] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-2xl">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Engineering Dashboard</p>
                <h3 className="mt-1 text-2xl font-bold">
                  We're Growing
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-300">
                <Briefcase />
              </div>
            </div>

            {/* Status */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5">
                <span className="text-gray-400">Open Positions</span>

                <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm font-semibold text-purple-300">
                  Hiring
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5">
                <span className="text-gray-400">Study Hub</span>

                <span className="rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-semibold text-yellow-300">
                  Coming Soon
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-5">
                <span className="text-gray-400">Team Culture</span>

                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-300">
                  Innovation First
                </span>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-transparent p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-300">
                  <Users size={28} />
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Build with passionate people
                  </h4>

                  <p className="mt-1 text-sm text-gray-400">
                    We're creating AI, software, and future technologies
                    together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -right-10 -top-10 -z-10 h-60 w-60 rounded-full bg-purple-600/20 blur-[120px]" />
        </div>
      </div>
    </section>
  );
}