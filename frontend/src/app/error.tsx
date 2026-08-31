"use client";

import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[160px]" />

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:45px_45px]" />

      {/* Content */}

      <div className="relative z-10 w-full max-w-2xl">

        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-xl">

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">

            <AlertTriangle size={15} />

            AI CORE ERROR

          </div>

          {/* Error */}

          <h1 className="mt-8 text-6xl font-black tracking-tight sm:text-8xl">

            ERROR

          </h1>

          <p className="mt-2 text-lg font-medium text-purple-400">
            Error Code: RNS-500
          </p>

          {/* Description */}

          <p className="mt-8 text-lg leading-8 text-gray-400">

            An unexpected interruption occurred while processing your request.

            <br />

            The RNOTSKY AI Core detected an internal system fault and safely stopped the current operation.

          </p>

          {/* Status */}

          <div className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-6">

            <div className="flex items-center justify-between">

              <span className="text-gray-400">
                System Status
              </span>

              <span className="rounded-full bg-red-500/20 px-3 py-1 text-sm font-semibold text-red-300">
                Offline
              </span>

            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">

              <div className="h-full w-1/3 rounded-full bg-purple-500" />

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button
              onClick={() => reset()}
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-2

                rounded-2xl

                bg-purple-600

                px-8
                py-4

                font-semibold

                transition-all
                duration-300

                hover:bg-purple-500
                active:scale-[0.98]
              "
            >
              <RefreshCw size={18} />

              Restart System
            </button>

            <Link
              href="/"
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-2

                rounded-2xl

                border
                border-white/10

                bg-white/[0.03]

                px-8
                py-4

                font-semibold

                transition-all
                duration-300

                hover:border-purple-500/40
                hover:bg-white/[0.05]
              "
            >
              <Home size={18} />

              Return Home
            </Link>

          </div>

          {/* Footer */}

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-500">

            If this problem continues, please contact the RNOTSKY Support Team.

          </div>

        </div>

      </div>

    </main>
  );
}