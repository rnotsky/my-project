"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";

import ProductCard from "@/components/products/ProductCard";
import { productCategories } from "@/lib/products";

export default function ProductsPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return productCategories.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white pt-32 pb-20">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />


      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Hero */}

        <div className="max-w-4xl">
          <span className="inline-flex rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-purple-300">
            Product Ecosystem
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Technology
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-white bg-clip-text text-transparent">
              Built for Tomorrow
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            Discover the complete RNOTSKY ecosystem of AI platforms,
            robotics, operating systems, developer tools, APIs, cloud
            services, and next-generation technologies engineered for the
            future.
          </p>
        </div>

        {/* Search */}

        <div className="mt-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-xl">
            <Search
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="
                h-14
                w-full

                rounded-2xl

                border
                border-white/10

                bg-white/[0.03]

                pl-14
                pr-5

                text-white
                placeholder:text-gray-500

                backdrop-blur-xl

                outline-none

                transition-all
                duration-300

                focus:border-purple-500
                focus:shadow-[0_0_25px_rgba(168,85,247,.2)]
              "
            />
          </div>

          <p className="text-sm text-gray-500">
            {filtered.length} Product{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* Grid */}

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              description={item.description}
              slug={item.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
}