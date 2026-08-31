"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface UpdateCardProps {
  category: string;
  title: string;
  date: string;
  description: string;
  href?: string;
}

export default function UpdateCard({
  category,
  title,
  date,
  description,
  href = "#",
}: UpdateCardProps) {
  return (
    <Link
      href={href}
      className="
        group
        block
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-7

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-purple-500/40
        hover:bg-white/[0.05]
        hover:shadow-[0_0_40px_rgba(168,85,247,0.12)]
      "
    >
      {/* Category */}

      <span
        className="
          inline-flex
          rounded-full
          border
          border-purple-500/30
          bg-purple-500/10
          px-3
          py-1

          text-xs
          font-semibold
          uppercase
          tracking-wider

          text-purple-300
        "
      >
        {category}
      </span>

      {/* Date */}

      <p className="mt-5 text-sm text-gray-500">
        {date}
      </p>

      {/* Title */}

      <h3
        className="
          mt-3

          text-2xl
          font-bold

          text-white

          transition-colors

          group-hover:text-purple-300
        "
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="
          mt-4

          leading-7

          text-gray-400
        "
      >
        {description}
      </p>

      {/* Read More */}

      <div
        className="
          mt-8

          inline-flex
          items-center
          gap-2

          font-medium

          text-purple-400

          transition-all

          group-hover:gap-3
        "
      >
        Read More

        <ArrowRight size={18} />
      </div>
    </Link>
  );
}