"use client";

import {
  Brain,
  Rocket,
  Users,
  Lightbulb,
} from "lucide-react";

const values = [
  {
    icon: Rocket,
    title: "Innovation First",
    description:
      "We embrace ambitious ideas and build products that push the boundaries of AI, robotics, and modern software.",
  },
  {
    icon: Users,
    title: "Build Together",
    description:
      "Great products are created by great teams. Collaboration, respect, and knowledge sharing are part of our daily culture.",
  },
  {
    icon: Brain,
    title: "Never Stop Learning",
    description:
      "Technology evolves every day, and so do we. Continuous learning and curiosity are encouraged across every role.",
  },
  {
    icon: Lightbulb,
    title: "Ownership",
    description:
      "Every team member is trusted to make decisions, take initiative, and create meaningful impact from day one.",
  },
];

export default function Culture() {
  return (
    <section className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            Our Culture
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            More Than a Workplace
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            At RNOTSKY, we believe that the best technology is built by curious,
            passionate people working together toward a shared vision.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/15 text-purple-300 transition group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Quote */}

        <div className="mt-20 rounded-[32px] border border-purple-500/20 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 p-10 text-center backdrop-blur-xl">
          <h3 className="text-3xl font-bold text-white">
            "We're building technology that inspires the future."
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Whether you're writing code, designing experiences, or training AI
            models, your work contributes to products that aim to make a real
            difference.
          </p>
        </div>
      </div>
    </section>
  );
}