"use client";

import {
  Mail,
  Clock3,
  MapPin,
  ShieldCheck,
  Globe,
  Sparkles,
} from "lucide-react";

const items = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@rnotsky.com",
    description: "General inquiries & business communication",
  },
  {
    icon: Clock3,
    title: "Response Time",
    value: "< 24 Hours",
    description: "Average business response",
  },
  {
    icon: Globe,
    title: "Availability",
    value: "Worldwide",
    description: "Remote collaboration across time zones",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Tamil Nadu, India",
    description: "Serving clients globally",
  },
];

export default function ContactInfo() {
  return (
    <aside className="lg:sticky lg:top-24 h-fit">
      <div className="overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">

        {/* Header */}

        <div className="border-b border-white/10 p-8">

          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
            <Sparkles size={15} />
            Contact Information
          </div>

          <h2 className="mt-6 text-3xl font-bold text-white">
            Let's Start a Conversation
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            Whether you're exploring AI, software, robotics,
            partnerships, careers, or enterprise solutions,
            we're ready to help.
          </p>

        </div>

        {/* Contact Items */}

        <div className="p-8 space-y-5">

          {items.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/30
                  p-5
                  transition-all
                  duration-300
                  hover:border-purple-500/30
                  hover:bg-purple-500/5
                "
              >

                <div className="flex gap-4">

                  <div className="
                    flex
                    h-14
                    w-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-2xl
                    bg-purple-500/15
                    text-purple-300
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  ">
                    <Icon size={24} />
                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-lg font-bold text-purple-300">
                      {item.value}
                    </p>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {item.description}
                    </p>

                  </div>

                </div>

              </div>
            );

          })}

        </div>

        {/* Trust Card */}

        <div className="border-t border-white/10 p-8">

          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-500/15 to-purple-900/10 p-6">

            <div className="flex items-start gap-4">

              <div className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-purple-600/20
                text-purple-300
              ">
                <ShieldCheck size={24} />
              </div>

              <div>

                <h3 className="text-lg font-bold text-white">
                  Secure & Confidential
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  Every inquiry is encrypted, handled privately,
                  and reviewed by the appropriate RNOTSKY team.
                  Your information is never shared with third parties.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </aside>
  );
}