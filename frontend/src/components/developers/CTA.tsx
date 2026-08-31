"use client";

import Link from "next/link";
import { ArrowRight, Briefcase, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative overflow-hidden px-6 py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[160px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl">
          <div className="relative p-10 md:p-16 lg:p-20">
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-medium text-purple-300">
              Join RNOTSKY
            </div>

            {/* Heading */}

            <h2 className="mt-8 text-4xl font-black leading-tight text-white md:text-6xl">
              Ready to Build the
              <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-white bg-clip-text text-transparent">
                Future With Us?
              </span>
            </h2>

            {/* Description */}

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              Whether you're an engineer, designer, or future innovator,
              we're always looking for passionate people who want to create
              technology that makes a real impact.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="#jobs"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)]"
              >
                <Briefcase size={18} />
                View Open Positions
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-purple-500/40 hover:bg-white/10"
              >
                <Mail size={18} />
                Contact Us
              </Link>
            </div>

            {/* Bottom Stats */}

            <div className="mt-14 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
              <div>
                <h3 className="text-3xl font-bold text-purple-300">
                  Remote
                </h3>

                <p className="mt-2 text-gray-400">
                  Flexible opportunities where applicable.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-purple-300">
                  Learning
                </h3>

                <p className="mt-2 text-gray-400">
                  Continuous growth with our upcoming Study Hub.
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-purple-300">
                  Innovation
                </h3>

                <p className="mt-2 text-gray-400">
                  Build AI-powered products with a passionate team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}