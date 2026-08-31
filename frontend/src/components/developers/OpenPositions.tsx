"use client";

import {
  ArrowRight,
  Briefcase,
  Clock3,
  MapPin,
  
} from "lucide-react";

const jobs = [
  {
    title: "AI / ML Engineer",
    type: "Full Time",
    location: "Remote",
    experience: "2+ Years",
    description:
      "Build intelligent AI systems, train machine learning models, and help shape the future of RNOTSKY AI.",
    skills: ["Python", "PyTorch", "LLMs", "FastAPI"],
  },
  {
    title: "Frontend Developer",
    type: "Full Time",
    location: "Remote",
    experience: "1+ Years",
    description:
      "Create beautiful, fast, and responsive user interfaces using modern frontend technologies.",
    skills: ["Next.js", "React", "Tailwind", "TypeScript"],
  },
  {
    title: "Backend Developer",
    type: "Full Time",
    location: "Remote",
    experience: "2+ Years",
    description:
      "Design scalable backend systems, APIs, authentication, and cloud services.",
    skills: ["FastAPI", "PostgreSQL", "Docker", "Redis"],
  },
  {
    title: "UI / UX Designer",
    type: "Full Time",
    location: "Remote",
    experience: "1+ Years",
    description:
      "Design premium user experiences that feel modern, intuitive, and delightful.",
    skills: ["Figma", "Design Systems", "Motion", "Prototyping"],
  },
];

export default function OpenPositions() {
  return (
    <section
      id="jobs"
      className="relative px-6 py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            <Briefcase size={15} />
            Careers
          </div>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Open Positions
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            We're building the next generation of AI-powered products.
            Join a passionate team creating technology that makes an impact.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-purple-500/40 hover:bg-white/[0.06]"
            >
              {/* Top */}

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {job.title}
                  </h3>

                  <p className="mt-4 text-gray-400">
                    {job.description}
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-500/15 p-3 text-purple-">
                  
                </div>
              </div>

              {/* Info */}

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Briefcase size={16} />
                  {job.type}
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  {job.location}
                </div>

                <div className="flex items-center gap-2">
                  <Clock3 size={16} />
                  {job.experience}
                </div>
              </div>

              {/* Skills */}

              <div className="mt-8 flex flex-wrap gap-3">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}

              <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
                <span className="text-sm text-gray-500">
                  Applications are currently open
                </span>

                <button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]">
                  Apply Now
                  <ArrowRight size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Notice */}

        <div className="mt-16 rounded-3xl border border-purple-500/20 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 p-8 text-center">
          <h3 className="text-2xl font-bold text-white">
            Don't see the perfect role?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            We're always excited to meet talented people. More opportunities
            will be added as RNOTSKY continues to grow.
          </p>
        </div>
      </div>
    </section>
  );
}