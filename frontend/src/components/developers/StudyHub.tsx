"use client";

import {
  Brain,
  Bot,
  BookOpen,
  Code2,
  Cpu,
  GraduationCap,
  Lock,
} from "lucide-react";

const courses = [
  {
    title: "AI Fundamentals",
    icon: Brain,
    description:
      "Learn the foundations of artificial intelligence and modern AI systems.",
  },
  {
    title: "Machine Learning",
    icon: Bot,
    description:
      "Build and train machine learning models with practical examples.",
  },
  {
    title: "Web Development",
    icon: Code2,
    description:
      "Master modern frontend and backend development technologies.",
  },
  {
    title: "Robotics",
    icon: Cpu,
    description:
      "Explore robotics, automation, and intelligent hardware systems.",
  },
  {
    title: "Software Engineering",
    icon: BookOpen,
    description:
      "Write scalable, maintainable, and production-ready software.",
  },
  {
    title: "Career Preparation",
    icon: GraduationCap,
    description:
      "Interview preparation, portfolio guidance, and career growth.",
  },
];

export default function StudyHub() {
  return (
    <section
      id="studyhub"
      className="relative overflow-hidden bg-black px-6 py-28"
    >
      {/* Purple Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
            Coming Soon
          </div>

          <h2 className="mt-8 text-4xl font-black tracking-tight text-white md:text-6xl">
            Study Hub
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Learn Artificial Intelligence, Machine Learning,
            Software Engineering, Robotics, Web Development,
            and more through premium courses, guided projects,
            and real-world learning experiences built by RNOTSKY.
          </p>

        </div>

        {/* Course Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">          {courses.map((course) => {
            const Icon = course.icon;

            return (
              <div
                key={course.title}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-purple-500/40
                  hover:bg-white/[0.05]
                "
              >
                {/* Card Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-600/20 blur-3xl" />
                </div>

                {/* Locked Badge */}
                <div className="absolute right-6 top-6 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-purple-300">
                  Locked
                </div>

                {/* Icon */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-500/10 text-purple-300 transition-all duration-500 group-hover:scale-110 group-hover:bg-purple-500/20">
                  <Icon size={36} />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-3xl font-bold text-white">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="mt-5 flex-1 leading-8 text-gray-400">
                  {course.description}
                </p>

                {/* Divider */}
                <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                {/* Status */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2 text-sm font-medium text-yellow-300">
                    Coming Soon
                  </span>

                  <Lock
                    size={18}
                    className="text-purple-400 transition-transform duration-300 group-hover:rotate-12"
                  />
                </div>
              </div>
            );
          })}
        </div>        {/* Bottom Banner */}

        <div className="relative mt-24 overflow-hidden rounded-[40px] border border-purple-500/20 bg-gradient-to-br from-purple-500/10 via-[#101010] to-[#090909] px-8 py-16 sm:px-12 lg:px-20">

          {/* Glow */}
          <div className="absolute left-1/2 top-0 h-[320px] w-[320px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />

          <div className="relative text-center">

            <div className="mx-auto inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-purple-300">
              Future Learning Platform
            </div>

            <h3 className="mt-8 text-4xl font-black tracking-tight text-white md:text-5xl">
              Learn. Build. Innovate.
            </h3>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
              RNOTSKY Study Hub is designed for developers who want to
              master Artificial Intelligence, Machine Learning, Robotics,
              Software Engineering, and modern technologies through
              structured learning paths, practical projects, and
              industry-focused courses.
            </p>

            {/* Stats */}

            <div className="mt-14 grid gap-6 sm:grid-cols-3">

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h4 className="text-3xl font-bold text-white">
                  50+
                </h4>

                <p className="mt-2 text-gray-400">
                  Premium Courses
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h4 className="text-3xl font-bold text-white">
                  100+
                </h4>

                <p className="mt-2 text-gray-400">
                  Hands-on Projects
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h4 className="text-3xl font-bold text-white">
                  24/7
                </h4>

                <p className="mt-2 text-gray-400">
                  AI Learning Support
                </p>
              </div>

            </div>

            <div className="mt-12 inline-flex rounded-full border border-purple-500/30 bg-purple-600 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Launching Soon
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}