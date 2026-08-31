import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

const updates = [
  {
    slug: "website-launch",
    category: "Company",
    title: "RNOTSKY Website Officially Launches",
    date: "August 4, 2026",
    content: `
The official RNOTSKY website is now live.

This launch introduces our complete digital platform,
bringing together Products, Developers, Pricing,
Support, Contact, and future AI services.

The website has been built with performance,
modern design, and scalability in mind,
creating a strong foundation for upcoming
AI, Robotics, and Software products.

This marks the beginning of the RNOTSKY journey,
and many exciting updates are already in development.
    `,
  },
  {
    slug: "developer-portal",
    category: "Developers",
    title: "Developer Portal Released",
    date: "July 30, 2026",
    content: `
The Developer Portal is now available.

Developers can explore SDKs,
API documentation,
integration guides,
and future developer tools.

More APIs and examples will be added
over the coming months.
    `,
  },
  {
    slug: "ai-platform-preview",
    category: "AI",
    title: "New AI Platform Preview",
    date: "July 24, 2026",
    content: `
Today we're sharing the first preview
of the upcoming RNOTSKY AI Platform.

Our goal is to build intelligent,
scalable AI solutions for developers,
businesses, and enterprise customers.
    `,
  },
  {
    slug: "robotics-division",
    category: "Robotics",
    title: "Robotics Research Division",
    date: "July 18, 2026",
    content: `
RNOTSKY officially begins robotics research.

Our long-term vision is to combine
Artificial Intelligence,
Computer Vision,
and Robotics into one ecosystem.

This is only the beginning.
    `,
  },
];

export default async function UpdateDetailsPage({ params }: Props) {
  const { slug } = await params;

  const article = updates.find((item) => item.slug === slug);

  if (!article) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Update Not Found</h1>

          <p className="mt-4 text-gray-400">
            The announcement you're looking for doesn't exist.
          </p>

          <Link
            href="/updates"
            className="mt-8 inline-flex rounded-xl bg-purple-600 px-6 py-3 font-semibold hover:bg-purple-500"
          >
            Back to Updates
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">

        <Link
          href="/updates"
          className="mb-10 inline-flex items-center gap-2 text-purple-400 hover:text-purple-300"
        >
          <ArrowLeft size={18} />
          Back to Updates
        </Link>

        <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs uppercase tracking-widest text-purple-300">
          {article.category}
        </span>

        <p className="mt-8 text-gray-500">
          {article.date}
        </p>

        <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
          {article.title}
        </h1>

        <div className="mt-10 h-px w-full bg-white/10" />

        <article className="prose prose-invert mt-10 max-w-none leading-8 text-gray-300 whitespace-pre-line">
          {article.content}
        </article>

      </section>
    </main>
  );
}