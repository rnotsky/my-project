import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  slug: string;
};

export default function ProductCard({
  title,
  description,
  slug,
}: Props) {
  return (
    <Link
      href={`/products/${slug}`}
      className="
        group
        relative
        flex
        min-h-[320px]
        flex-col
        justify-between
        overflow-hidden

        rounded-3xl
        border
        border-white/10

        bg-[#0a0a0a]

        backdrop-blur-xl

        p-6
        sm:p-8
        lg:p-10

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-white/20
        hover:bg-[#111111]
        hover:shadow-[0_20px_60px_rgba(255,255,255,0.06)]
      "
    >
      {/* Hover Overlay */}
      <div
        className="
          absolute
          inset-0
          rounded-3xl

          opacity-0
          transition-opacity
          duration-500

          group-hover:opacity-100

          bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.05),transparent_45%)]
        "
      />

      {/* Content */}
      <div className="relative z-10">
        <span
          className="
            inline-flex
            rounded-full
            border
            border-white/10

            bg-white/5

            px-3
            py-1

            text-[11px]
            font-semibold
            uppercase
            tracking-[0.25em]

            text-gray-300
          "
        >
          PRODUCT
        </span>

        <h2
          className="
            mt-6

            text-2xl
            sm:text-3xl
            lg:text-4xl

            font-bold
            tracking-tight

            text-white

            transition-colors
            duration-300

            group-hover:text-white
          "
        >
          {title}
        </h2>

        <p
          className="
            mt-5

            text-sm
            sm:text-base

            leading-7
            text-gray-400
          "
        >
          {description}
        </p>
      </div>

      {/* Explore */}
      <div
        className="
          relative
          z-10

          mt-10

          flex
          items-center

          text-sm
          font-semibold

          text-gray-300

          transition-colors
          duration-300

          group-hover:text-white
        "
      >
        Explore

        <ArrowRight
          size={18}
          className="
            ml-2

            transition-transform
            duration-300

            group-hover:translate-x-2
          "
        />
      </div>
    </Link>
  );
}