type Application = {
  title: string;
  description: string;
};


type ApplicationsSectionProps = {
  title: string;
  description: string;
  items: Application[];
};


export default function ApplicationsSection({
  title,
  description,
  items,
}: ApplicationsSectionProps) {
  return (
    <section
      className="
      bg-black

      py-20

      text-white

      sm:py-24

      lg:py-32
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
            APPLICATIONS
          </p>



          <h2
            className="
            mt-4

            text-3xl

            font-black

            leading-tight

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

            leading-8

            text-gray-400

            sm:text-lg
            "
          >
            {description}
          </p>


        </div>







        {/* Application Cards */}


        <div
          className="
          mt-12

          grid

          grid-cols-1

          gap-6

          md:grid-cols-2

          lg:gap-8
          "
        >


          {items.map((item, index) => (

            <div
              key={item.title}

              className="
              group

              relative

              overflow-hidden

              rounded-3xl

              border

              border-white/10

              bg-[#0B0B0B]

              p-7


              transition-all

              duration-300


              hover:-translate-y-1


              hover:border-purple-500/40


              sm:p-8
              "
            >


              {/* Number */}

              <span
                className="
                text-sm

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

                text-2xl

                font-bold

                text-white

                group-hover:text-purple-100

                transition-colors
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

                sm:text-base
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