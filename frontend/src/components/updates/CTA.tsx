"use client";

import { useState } from "react";
import { Check, Mail } from "lucide-react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) return;

    // Backend API will be added later
    console.log("Newsletter:", email);

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section
      className="
        border-t
        border-white/10
        bg-black
        py-24
      "
    >
      <div
        className="
          mx-auto
          max-w-[1600px]
          px-6

          sm:px-10

          lg:px-16
        "
      >
        <div
          className="
            relative
            overflow-hidden

            rounded-[2rem]

            border
            border-purple-500/20

            bg-gradient-to-br
            from-purple-500/10
            via-[#0f0f12]
            to-[#090909]

            p-8

            sm:p-12

            lg:p-16
          "
        >


          <div className="relative z-10">
            {/* Badge */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-purple-500/30

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
              <Mail size={14} />
              Stay Updated
            </div>

            {/* Heading */}

            <h2
              className="
                mt-6

                text-4xl
                font-bold

                leading-tight

                text-white

                sm:text-5xl
              "
            >
              Subscribe to
              <span className="text-purple-400">
                {" "}
                RNOTSKY Updates
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                mt-6

                max-w-2xl

                text-lg
                leading-8

                text-gray-400
              "
            >
              Receive the latest announcements,
              product launches, AI breakthroughs,
              robotics news, security updates,
              and important company news directly
              in your inbox.
            </p>

            {/* Subscribe Form */}

            <div
              className="
                mt-10

                flex
                flex-col

                gap-4

                lg:flex-row
              "
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="
                  h-14
                  flex-1

                  rounded-2xl

                  border
                  border-white/10

                  bg-black/40

                  px-5

                  text-white

                  outline-none

                  placeholder:text-gray-500

                  transition-colors

                  focus:border-purple-500
                "
              />

              <button
                onClick={handleSubscribe}
                className="
                  h-14

                  rounded-2xl

                  bg-purple-600

                  px-10

                  font-semibold

                  text-white

                  transition-all
                  duration-300

                  hover:bg-purple-500

                  active:scale-[0.98]
                "
              >
                Subscribe
              </button>
            </div>

            {/* Success */}

            {subscribed && (
              <div
                className="
                  mt-6

                  inline-flex
                  items-center
                  gap-2

                  rounded-xl

                  border
                  border-green-500/20

                  bg-green-500/10

                  px-4
                  py-3

                  text-green-400
                "
              >
                <Check size={18} />

                Thanks for subscribing to RNOTSKY Updates.
              </div>
            )}

            {/* Footer */}

            <p
              className="
                mt-5

                text-sm

                text-gray-500
              "
            >
              No spam. Unsubscribe anytime. We only send important
              product announcements, AI news, and company updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}