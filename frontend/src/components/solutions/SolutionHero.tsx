import RButton from "@/components/common/RButton";

type SolutionHeroProps = {
  category: string;
  title: string;
  description: string;
};

export default function SolutionHero({
  category,
  title,
  description,
}: SolutionHeroProps) {
  return (
    <section
      className="
      relative
      overflow-hidden

      bg-black

      text-white

      flex

      items-center

      min-h-screen

      pt-28

      sm:pt-32

      lg:pt-24
      "
    >

     



      <div
        className="
        relative

        mx-auto

        w-full

        max-w-[1400px]

        px-5

        sm:px-8

        lg:px-12
        "
      >



        <div
          className="
          max-w-4xl

          text-left
          "
        >


          {/* CATEGORY */}

          <p
            className="
            mb-5

            text-xs

            font-semibold

            uppercase

            tracking-[0.35em]

            text-purple-400

            sm:text-sm
            "
          >
            {category}
          </p>





          {/* TITLE */}

          <h1
            className="
            text-4xl

            font-black

            leading-[1.05]

            tracking-tight

            sm:text-6xl

            lg:text-8xl
            "
          >
            {title}
          </h1>





          {/* DESCRIPTION */}

          <p
            className="
            mt-6

            max-w-2xl

            text-base

            leading-7

            text-gray-400

            sm:text-lg

            sm:leading-8
            "
          >
            {description}
          </p>






          {/* BUTTONS */}

          <div
            className="
            mt-8

            flex

            flex-col

            gap-4

            sm:flex-row
            "
          >

            <RButton
              href="/contact"
              variant="primary"
              size="lg"
            >
              Start a Project →
            </RButton>


            <RButton
              href="/products"
              variant="secondary"
              size="lg"
            >
              Explore Products
            </RButton>


          </div>



        </div>



      </div>



    </section>
  );
}