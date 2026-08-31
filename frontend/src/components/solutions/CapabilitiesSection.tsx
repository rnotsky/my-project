type Capability = {
  title: string;
  description: string;
};


type CapabilitiesSectionProps = {
  title: string;
  description: string;
  items: Capability[];
};


export default function CapabilitiesSection({
  title,
  description,
  items,
}: CapabilitiesSectionProps) {


  return (

    <section
      className="
      bg-black

      pt-2
      pb-20

      text-white

      sm:pt-4
      sm:pb-24

      lg:pt-6
      lg:pb-28
      "
    >


      <div
        className="
        mx-auto

        max-w-[1400px]

        px-5

        sm:px-8

        lg:px-12
        "
      >




        {/* Heading */}



        <div
          className="
          max-w-3xl
          "
        >



          <p
            className="
            text-xs

            font-semibold

            uppercase

            tracking-[0.35em]

            text-purple-400

            sm:text-sm
            "
          >
            CAPABILITIES
          </p>





          <h2
            className="
            mt-4

            text-3xl

            font-black

            leading-tight

            tracking-tight

            sm:text-5xl

            lg:text-6xl
            "
          >
            {title}
          </h2>






          <p
            className="
            mt-5

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



        </div>








        {/* Capability Cards */}



        <div
          className="
          mt-10

          grid

          grid-cols-1

          gap-5

          sm:mt-12

          md:grid-cols-2

          lg:grid-cols-4

          lg:gap-6
          "
        >



          {items.map((item, index) => (

            <div
              key={item.title}

              className="
              group

              rounded-3xl

              border

              border-white/10

              bg-[#0B0B0B]

              p-6

              transition-all

              duration-300

              hover:-translate-y-1

              hover:border-purple-500/40

              hover:shadow-[0_20px_60px_rgba(124,58,237,0.12)]

              sm:p-7
              "
            >




              <span
                className="
                text-xs

                font-semibold

                tracking-widest

                text-purple-400
                "
              >
                0{index + 1}
              </span>





              <h3
                className="
                mt-6

                text-xl

                font-bold

                text-white

                transition-colors

                duration-300

                group-hover:text-purple-100
                "
              >
                {item.title}
              </h3>






              <p
                className="
                mt-4

                text-sm

                leading-7

                text-gray-400
                "
              >
                {item.description}
              </p>




            </div>


          ))}



        </div>





      </div>


    </section>

  );
}