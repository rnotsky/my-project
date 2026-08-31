"use client";

import Link from "next/link";
import { Newspaper } from "lucide-react";

export default function EmptyState() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/[0.03]
            px-8
            py-16
            text-center
          "
        >
          {/* Icon */}

          <div
            className="
              mx-auto
              flex
              h-20
              w-20
              items-center
              justify-center

              rounded-full

              border
              border-purple-500/30

              bg-purple-500/10
            "
          >
            <Newspaper
              size={36}
              className="text-purple-400"
            />
          </div>

          {/* Title */}

          <h2 className="mt-8 text-3xl font-bold text-white">
            No Updates Yet
          </h2>

          {/* Description */}

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-400">
            There are currently no announcements available.
            Check back later to stay informed about the latest
            news, product launches, and company updates from
            RNOTSKY.
          </p>

          {/* Button */}

          <Link
            href="/"
            className="
              mt-10
              inline-flex
              items-center
              justify-center

              rounded-2xl

              bg-purple-600

              px-6
              py-3

              font-semibold
              text-white

              transition-all
              duration-300

              hover:bg-purple-500
            "
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}