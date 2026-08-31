"use client";

import UpdateCard from "./UpdateCard";

const updates = [
  {
    category: "Company",
    title: "RNOTSKY Website Officially Launches",
    date: "August 4, 2026",
    description:
      "The official RNOTSKY website is now live with products, developer resources, pricing, and support.",
    href: "/updates/website-launch",
  },
  {
    category: "Developers",
    title: "Developer Portal Released",
    date: "July 30, 2026",
    description:
      "Developers can now access our documentation, SDKs, APIs, and integration guides.",
    href: "/updates/developer-portal",
  },
  {
    category: "AI",
    title: "New AI Platform Preview",
    date: "July 24, 2026",
    description:
      "A first look at our upcoming AI platform focused on intelligent automation and enterprise solutions.",
    href: "/updates/ai-platform-preview",
  },
  {
    category: "Robotics",
    title: "Robotics Research Division",
    date: "July 18, 2026",
    description:
      "RNOTSKY officially begins robotics research with a focus on autonomous systems and AI-powered machines.",
    href: "/updates/robotics-division",
  },
  {
    category: "Platform",
    title: "New Authentication System",
    date: "July 12, 2026",
    description:
      "Our platform now includes improved authentication, enhanced security, and better account management.",
    href: "/updates/auth-update",
  },
  {
    category: "Community",
    title: "Community Program Announced",
    date: "July 5, 2026",
    description:
      "We're building a community where developers, creators, and AI enthusiasts can collaborate together.",
    href: "/updates/community-program",
  },
];

export default function UpdatesGrid() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">

        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">
            Latest Updates
          </h2>

          <p className="mt-3 max-w-2xl text-gray-400">
            Discover the latest news, announcements, milestones,
            and innovations from RNOTSKY.
          </p>
        </div>

        <div
          className="
            grid
            gap-6

            md:grid-cols-2

            xl:grid-cols-3
          "
        >
          {updates.map((update, index) => (
            <UpdateCard
              key={index}
              category={update.category}
              title={update.title}
              date={update.date}
              description={update.description}
              href={update.href}
            />
          ))}
        </div>

      </div>
    </section>
  );
}