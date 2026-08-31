"use client";

import { MessageCircle, Clock3, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-32 pb-24">
      <div className="mx-auto max-w-7xl">

        {/* Badge */}
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
              Contact Us
            </span>
          </div>

        {/* Heading */}
        <h1 className="mt-8 max-w-4xl text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          Let's Build
          <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-white bg-clip-text text-transparent">
            Something Great Together
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          Whether you have a question, need technical support, want to discuss
          a partnership, explore career opportunities, or simply learn more
          about RNOTSKY, we're here to help.
        </p>

        {/* Stats */}
        <div className="mt-14 grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
              <Clock3 size={22} />
            </div>

            <h3 className="mt-5 text-3xl font-bold text-white">
              &lt;24h
            </h3>

            <p className="mt-2 text-gray-400">
              Average response time
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
              <ShieldCheck size={22} />
            </div>

            <h3 className="mt-5 text-3xl font-bold text-white">
              Secure
            </h3>

            <p className="mt-2 text-gray-400">
              Your information stays private
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
              <MessageCircle size={22} />
            </div>

            <h3 className="mt-5 text-3xl font-bold text-white">
              Global
            </h3>

            <p className="mt-2 text-gray-400">
              Supporting clients and developers worldwide
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}