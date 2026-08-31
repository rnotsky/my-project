"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-16 flex items-center justify-center gap-2">
      {/* Previous */}

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-xl

          border
          border-white/10

          bg-white/[0.03]

          transition-all

          hover:border-purple-500/40
          hover:bg-purple-500/10

          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <ChevronLeft size={18} />
      </button>

      {/* Pages */}

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-xl

            border

            font-medium

            transition-all

            ${
              currentPage === page
                ? "border-purple-500 bg-purple-600 text-white"
                : "border-white/10 bg-white/[0.03] text-gray-300 hover:border-purple-500/40 hover:bg-white/[0.05]"
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next */}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          flex
          h-11
          w-11
          items-center
          justify-center

          rounded-xl

          border
          border-white/10

          bg-white/[0.03]

          transition-all

          hover:border-purple-500/40
          hover:bg-purple-500/10

          disabled:cursor-not-allowed
          disabled:opacity-40
        "
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}