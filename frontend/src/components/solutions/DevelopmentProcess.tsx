type ProcessStep = {
  title: string;
  description: string;
};


type DevelopmentProcessProps = {
  title: string;
  description: string;
  steps: ProcessStep[];
};


export default function DevelopmentProcess({
  title,
  description,
  steps,
}: DevelopmentProcessProps) {
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
            DEVELOPMENT PROCESS
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

            text-gray-400

            leading-8

            sm:text-lg
            "
          >
            {description}
          </p>


        </div>








        {/* Steps */}


        <div
          className="
          mt-12

          grid

          grid-cols-1

          gap-6

          md:grid-cols-2

          lg:grid-cols-4
          "
        >



          {steps.map((step,index)=>(


            <div
              key={step.title}

              className="
              rounded-3xl

              border

              border-white/10

              bg-[#0B0B0B]

              p-7

              transition-all

              duration-300


              hover:-translate-y-1


              hover:border-purple-500/40
              "
            >



              <span
                className="
                text-sm

                font-semibold

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
                "
              >
                {step.title}
              </h3>





              <p
                className="
                mt-4

                text-sm

                leading-7

                text-gray-400
                "
              >
                {step.description}
              </p>



            </div>


          ))}



        </div>




      </div>

    </section>
  );
}