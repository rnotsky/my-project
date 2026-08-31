"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      title: "Rnotsky AI",
      tag: "Artificial Intelligence",
      slug: "ai",
      description:
        "Advanced AI systems engineered to understand, learn and assist across next-generation applications with speed, intelligence and reliability.",
    },

    {
      title: "Rnotsky Robotics",
      tag: "Robotics",
      slug: "robotics",
      description:
        "Future robotic platforms combining intelligent software, automation and precision engineering for real-world innovation.",
    },

    {
      title: "Rnotsky Vision",
      tag: "Computer Vision",
      slug: "vision",
      description:
        "Powerful computer vision technology enabling machines to interpret, analyze and understand the world around them.",
    },
  ];

  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isDragging, products.length]);

  function nextProduct() {
    setActive((prev) => (prev + 1) % products.length);
  }

  function previousProduct() {
    setActive((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  }

  return (
    <section
      className="
      relative
      overflow-hidden
      bg-black
      py-20
      text-white
      sm:py-28
      lg:py-36
      "
    >


      {/* Grid */}

      <div
        className="
        absolute
        inset-0
        opacity-[0.04]
        [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
        [background-size:60px_60px]
        "
      />

      <div
        className="
        relative
        mx-auto
        max-w-[1450px]
        px-6
        sm:px-8
        lg:px-12
        xl:px-20
        "
      >
        {/* Header */}

        <div className="max-w-3xl">
          <p
            className="
            flex
            items-center
            gap-2
            text-xs
            font-semibold
            uppercase
            tracking-[0.35em]
            text-purple-400
            "
          >
            <Sparkles size={14} />

            Featured Products
          </p>

          <h2
            className="
            mt-6
            text-4xl
            font-bold
            leading-tight
            sm:text-5xl
            lg:text-7xl
            "
          >
            Building the

            <span
              className="
              block
              bg-gradient-to-r
              from-purple-300
              via-purple-400
              to-purple-600
              bg-clip-text
              text-transparent
              "
            >
              Future with AI
            </span>
          </h2>

          <p
            className="
            mt-7
            max-w-2xl
            text-base
            leading-8
            text-gray-400
            sm:text-lg
            "
          >
            Discover the growing RNOTSKY ecosystem of artificial
            intelligence, robotics and computer vision technologies,
            engineered to power the next generation of innovation.
          </p>
        </div>

        {/* Carousel */}

        <div className="relative mt-20"></div>
        <AnimatePresence mode="wait">
  <motion.div
    key={active}
    drag="x"
    dragConstraints={{ left: 0, right: 0 }}
    dragElastic={0.18}
    onDragStart={() => setIsDragging(true)}
    onDragEnd={(event, info) => {
      setIsDragging(false);

      if (info.offset.x < -100) nextProduct();
      if (info.offset.x > 100) previousProduct();
    }}
    initial={{
      opacity: 0,
      x: 80,
      scale: 0.97,
    }}
    animate={{
      opacity: 1,
      x: 0,
      scale: 1,
    }}
    exit={{
      opacity: 0,
      x: -80,
      scale: 0.97,
    }}
    transition={{
      duration: 0.45,
      ease: "easeOut",
    }}
    className="
      cursor-grab
      active:cursor-grabbing
      select-none
    "
  >
    <div
      className="
        relative
        overflow-hidden

        rounded-[36px]

        border
        border-white/10

        bg-gradient-to-br
        from-white/[0.06]
        via-white/[0.03]
        to-transparent

        backdrop-blur-2xl

        transition-all
        duration-500

        hover:border-purple-500/40
        hover:shadow-[0_25px_70px_rgba(168,85,247,.18)]
      "
    >
      {/* Animated Glow */}

      <motion.div
        animate={{
          x: ["-15%", "15%", "-15%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-32
          right-0

          h-96
          w-96

          rounded-full

          bg-purple-600/10

          blur-[120px]
        "
      />

      {/* Accent Line */}

      <div
        className="
          absolute
          left-0
          top-0

          h-[3px]
          w-full

          bg-gradient-to-r
          from-transparent
          via-purple-500
          to-transparent
        "
      />

      <div
        className="
          relative

          grid

          items-center

          gap-12

          p-8

          sm:p-12

          lg:grid-cols-2

          lg:p-16
        "
      >
        {/* Left Panel */}

        <div
          className="
            relative

            overflow-hidden

            rounded-3xl

            border
            border-white/10

            bg-gradient-to-br
            from-[#151515]
            via-[#111111]
            to-[#0b0b0b]

            p-10

            min-h-[280px]

            flex
            flex-col
            justify-between
          "
        >
          <div
            className="
              absolute
              inset-0

              opacity-[0.05]

              [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
              [background-size:32px_32px]
            "
          />

          <div
            className="
              absolute
              -right-16
              -bottom-16

              h-56
              w-56

              rounded-full

              bg-purple-600/15

              blur-3xl
            "
          />

          <div className="relative z-10">
            <span
              className="
                inline-flex

                rounded-full

                border
                border-purple-500/20

                bg-purple-500/10

                px-4
                py-2

                text-xs

                font-semibold

                uppercase

                tracking-[0.25em]

                text-purple-300
              "
            >
              {products[active].tag}
            </span>

            <motion.h3
              key={products[active].title}
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                mt-8

                text-4xl

                font-bold

                leading-tight

                lg:text-5xl
              "
            >
              {products[active].title}
            </motion.h3>
          </div>

          <div
            className="
              relative

              mt-12

              h-px

              bg-gradient-to-r

              from-purple-500/50

              to-transparent
            "
          />
        </div>

        {/* Right Panel */}

        <div className="relative">
          <motion.p
            key={products[active].description}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              text-lg

              leading-9

              text-gray-300
            "
          >
            {products[active].description}
          </motion.p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href={`/products/${products[active].slug}`}
              className="
                inline-flex

                items-center

                gap-3

                rounded-full

                bg-gradient-to-r

                from-purple-700
                via-purple-600
                to-purple-500

                px-7

                py-3.5

                text-sm

                font-semibold

                text-white

                transition-all

                duration-300

                hover:scale-105

                hover:shadow-[0_0_30px_rgba(168,85,247,.45)]
              "
            >
              Explore Product

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>
                      </div>
        </div>
      </div>
    </div>
  </motion.div>
</AnimatePresence>

{/* Controls */}

<div
  className="
    mt-10

    flex

    flex-col

    items-center

    justify-between

    gap-6

    sm:flex-row
  "
>
  {/* Arrows */}

  <div className="flex items-center gap-3">
    <button
      onClick={previousProduct}
      className="
        flex

        h-12
        w-12

        items-center
        justify-center

        rounded-full

        border
        border-white/10

        bg-white/5

        backdrop-blur-xl

        transition-all
        duration-300

        hover:border-purple-500/50
        hover:bg-purple-500/10
        hover:shadow-[0_0_25px_rgba(168,85,247,.25)]
      "
    >
      <ChevronLeft size={20} />
    </button>

    <button
      onClick={nextProduct}
      className="
        flex

        h-12
        w-12

        items-center
        justify-center

        rounded-full

        border
        border-white/10

        bg-white/5

        backdrop-blur-xl

        transition-all
        duration-300

        hover:border-purple-500/50
        hover:bg-purple-500/10
        hover:shadow-[0_0_25px_rgba(168,85,247,.25)]
      "
    >
      <ChevronRight size={20} />
    </button>
  </div>

  {/* Indicators */}

  <div className="flex items-center gap-3">
    {products.map((_, index) => (
      <button
        key={index}
        onClick={() => setActive(index)}
        className={`
          h-2.5

          rounded-full

          transition-all
          duration-500

          ${
            active === index
              ? "w-12 bg-gradient-to-r from-purple-500 to-purple-300 shadow-[0_0_18px_rgba(168,85,247,.55)]"
              : "w-2.5 bg-white/25 hover:bg-white/50"
          }
        `}
      />
    ))}
  </div>
</div>

      </div>
    </section>
  );
}