import RButton from "@/components/common/RButton";
import Logo3D from "@/components/Logo3D";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-black
        text-white

        pt-24
        pb-12

        md:pt-28
        md:pb-16

        lg:pt-32
        lg:pb-24
      "
    >
      <div
        className="
          mx-auto

          flex

          min-h-fit

          max-w-[1400px]

          flex-col

          items-center

          justify-center

          gap-8

          px-6

          sm:gap-10

          md:min-h-[70vh]
          md:gap-12

          lg:min-h-[85vh]
          lg:flex-row
          lg:gap-20
          lg:px-4
        "
      >
        {/* LEFT CONTENT */}

        <div
          className="
            w-full

            text-center

            lg:w-[48%]
            lg:text-left
          "
        >
          {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[180px]" />

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
              Welcome to RNOTSKY
            </span>
          </div>

          <h1
            className="
              mt-8

              text-4xl

              font-extrabold

              leading-[1.05]

              tracking-tight

              sm:text-5xl

              md:text-6xl

              xl:text-7xl
            "
          >
            WE BUILD THE

            <span
              className="
                mt-2

                block

                bg-gradient-to-r

                from-purple-400

                via-violet-500

                to-fuchsia-500

                bg-clip-text

                text-transparent
              "
            >
              NEXT GENERATION
            </span>

            OF TECHNOLOGY
          </h1>

          <p
            className="
              mx-auto

              mt-7

              max-w-xl

              text-base

              leading-8

              text-gray-400

              sm:text-lg

              lg:mx-0
            "
          >
            RNOTSKY engineers intelligent software,
            AI systems, robotics and future-ready
            technology that transforms ambitious
            ideas into real-world innovation.
          </p>

             <div
  className="
    mt-10
    flex
    flex-col
    gap-4
    sm:flex-row
    sm:justify-center
    lg:justify-start
  "
>
  <RButton
    href="/products"
    variant="primary"
    size="lg"
  >
    Explore Products →
  </RButton>

  <RButton
    href="/contact"
    variant="secondary"
    size="lg"
  >
    Contact Us
  </RButton>
</div>

{/* Feature List */}

<div
  className="
    mt-10

    flex

    flex-col

    items-start

    gap-4

    sm:flex-row
    sm:flex-wrap
    sm:justify-center

    lg:justify-start
  "
>
  {[
    "AI Solutions",
    "Software Engineering",
    "Robotics",
  ].map((item) => (
    <div
      key={item}
      className="
        flex
        items-center
        gap-3
      "
    >
      <span className="relative flex h-3 w-3 items-center justify-center">
        <span
          className="
            absolute
            h-3
            w-3
            rounded-full
            bg-purple-500/30
            blur-[5px]
          "
        />
        <span
          className="
            relative
            h-2
            w-2
            rounded-full
            bg-purple-400
            shadow-[0_0_10px_rgba(168,85,247,1)]
          "
        />
      </span>

      <span className="text-sm font-medium text-gray-400">
        {item}
      </span>
    </div>
  ))}
</div>

{/* Close LEFT CONTENT */}
</div>

{/* RIGHT CONTENT */}

<div
  className="
    flex
    w-full
    items-center
    justify-center
    lg:w-[52%]
  "
>
  <Logo3D />
</div>

</div>
</section>


  );
}