"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Purple Glow */}
      <div
        className="
          absolute
          left-1/2
          top-[-120px]
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-purple-700/20
          blur-[160px]
        "
      />

      {/* Background Grid */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:45px_45px]
          opacity-30
        "
      />

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />

      <div
        className="
          relative
          mx-auto
          flex
          max-w-[1600px]
          flex-col
          items-start
          px-6
          py-24
          text-left
          sm:px-10
          lg:px-16
          lg:py-32
        "
      >
        {/* Badge */}
       <div
            className="
              inline-flex

              items-center

              rounded-full

              border

              border-purple-500/20

              bg-purple-500/10

              px-4

              py-2
            "
          >
            <span
              className="
                text-xs

                font-semibold

                uppercase

                tracking-[0.28em]

                text-purple-400
              "
            >
              RNOTSKY Updates
            </span>
          </div>

        {/* Heading */}
        <h1
          className="
            mt-8
            max-w-4xl
            text-4xl
            font-bold
            leading-tight
            tracking-tight
            text-white
            sm:text-6xl
            lg:text-7xl
          "
        >
          Latest News
          <br />

          <span
            className="
              bg-gradient-to-r
              from-purple-400
              to-purple-600
              bg-clip-text
              text-transparent
            "
          >
            Announcements & Updates
          </span>
        </h1>

        {/* Description */}
        <p
          className="
            mt-8
            max-w-2xl
            text-base
            leading-8
            text-left
            text-gray-400
            sm:text-lg
          "
        >
          Stay informed with the latest announcements, product launches,
          company milestones, research progress, and important updates
          from RNOTSKY.
        </p>

        {/* Stats */}
        <div
          className="
            mt-14
            grid
            w-full
            max-w-5xl
            grid-cols-1
            gap-5
            sm:grid-cols-3
          "
        >
          {[
            {
              title: "Latest",
              subtitle: "Company News",
            },
            {
              title: "AI",
              subtitle: "Product Updates",
            },
            {
              title: "Robotics",
              subtitle: "Development News",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                px-8
                py-6
                text-left
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-purple-500/40
                hover:bg-purple-500/5
              "
            >
              <h3 className="text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}