"use client";

import { Check, Minus } from "lucide-react";

const features = [
  {
    feature: "AI Chat",
    free: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Daily Messages",
    free: "20/day",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "Advanced AI Model",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Image Understanding",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "File Uploads",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Conversation History",
    free: true,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Priority Response Speed",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Email Support",
    free: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "API Access",
    free: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: "Custom AI Models",
    free: false,
    pro: false,
    enterprise: true,
  },
  {
    feature: "Dedicated Account Manager",
    free: false,
    pro: false,
    enterprise: true,
  },
];

function Cell({
  value,
}: {
  value: boolean | string;
}) {
  if (typeof value === "string") {
    return (
      <span className="font-medium text-white">
        {value}
      </span>
    );
  }

  return value ? (
    <Check
      size={20}
      className="mx-auto text-purple-400"
    />
  ) : (
    <Minus
      size={20}
      className="mx-auto text-gray-600"
    />
  );
}

export default function Comparison() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">

        {/* Header */}

        <div className="mb-16 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-purple-400">
            Compare Plans
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Feature Comparison
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Compare every feature included in each
            RNOTSKY AI subscription plan.
          </p>

        </div>

        {/* Table */}

        <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03]">

          <table className="min-w-full">

            <thead>

              <tr className="border-b border-white/10">

                <th className="px-8 py-6 text-left text-white">
                  Features
                </th>

                <th className="px-8 py-6 text-center text-white">
                  Free
                </th>

                <th className="px-8 py-6 text-center text-purple-400">
                  Pro
                </th>

                <th className="px-8 py-6 text-center text-white">
                  Enterprise
                </th>

              </tr>

            </thead>

            <tbody>

              {features.map((item) => (

                <tr
                  key={item.feature}
                  className="border-b border-white/5 last:border-none"
                >

                  <td className="px-8 py-5 text-gray-300">
                    {item.feature}
                  </td>

                  <td className="px-8 py-5 text-center">
                    <Cell value={item.free} />
                  </td>

                  <td className="bg-purple-500/5 px-8 py-5 text-center">
                    <Cell value={item.pro} />
                  </td>

                  <td className="px-8 py-5 text-center">
                    <Cell value={item.enterprise} />
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}