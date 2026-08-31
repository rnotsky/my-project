export default function WhyRnotsky() {
  const features = [
    {
      title: "AI First",
      description:
        "Building intelligent systems with artificial intelligence at the core of every solution.",
    },
    {
      title: "Innovation",
      description:
        "Creating advanced technology that transforms ideas into future-ready products.",
    },
    {
      title: "Future Ready",
      description:
        "Developing solutions designed to adapt and grow with tomorrow's technology.",
    },
    {
      title: "Scalable",
      description:
        "Engineering reliable platforms built for performance and global expansion.",
    },
  ];

  return (
    <section
      className="
        bg-black
        py-16
        text-white

        sm:py-24

        lg:py-32
      "
    >
      <div
        className="
          mx-auto

          max-w-[1600px]

          px-5
          sm:px-8
          lg:px-10
          xl:px-16
        "
      >
        {/* Heading */}

        <div
          className="
            mx-auto
            max-w-4xl

            text-center

            lg:mx-0
            lg:text-left
          "
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]

              text-purple-400

              sm:text-sm
            "
          >
            WHY RNOTSKY
          </p>

          <h2
            className="
              mt-5

              text-3xl
              font-bold
              leading-tight

              sm:text-5xl

              lg:text-6xl
            "
          >
            Driven by intelligence,

            <br />

            <span className="text-white/95">
              designed for impact
            </span>
          </h2>

          <p
            className="
              mx-auto

              mt-6

              max-w-2xl

              text-base
              leading-7

              text-gray-400

              sm:text-lg
              sm:leading-8

              lg:mx-0
            "
          >
            We combine artificial intelligence,
            software engineering, and robotics
            to create technology built for the future.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
            mt-14

            grid

            grid-cols-1

            gap-6

            md:grid-cols-2

            lg:mt-16
            lg:gap-8
          "
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              className="
                rounded-3xl

                border
                border-white/10

                bg-[#0b0b0b]

                p-6

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-purple-500/40
                hover:bg-[#101010]
                hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]

                sm:p-8

                lg:p-10
              "
            >
              <h3
                className="
                  text-2xl
                  font-semibold

                  sm:text-3xl
                "
              >
                {feature.title}
              </h3>

              <p
                className="
                  mt-5

                  text-base
                  leading-7

                  text-gray-400

                  sm:text-lg
                  sm:leading-8
                "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}