type TechStackProps = {
  title: string;
  description: string;
  technologies: string[];
};


export default function TechStack({
  title,
  description,
  technologies,
}: TechStackProps) {


  return (

    <section
      className="
      bg-black

      py-20

      text-white

      sm:py-24

      lg:py-28
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
            TECHNOLOGY
          </p>



          <h2
            className="
            mt-4

            text-3xl

            font-black

            sm:text-5xl
            "
          >
            {title}
          </h2>




          <p
            className="
            mt-5

            text-gray-400

            sm:text-lg

            leading-8
            "
          >
            {description}
          </p>



        </div>








        {/* Technology Cards */}


        <div
          className="
          mt-12

          grid

          grid-cols-2

          gap-4

          sm:grid-cols-3

          lg:grid-cols-6
          "
        >


          {technologies.map((tech)=>(


            <div
              key={tech}

              className="
              flex

              h-24

              items-center

              justify-center


              rounded-2xl


              border

              border-white/10


              bg-[#0B0B0B]


              text-sm

              font-semibold


              text-gray-300


              transition-all


              duration-300


              hover:border-purple-500/40


              hover:text-white
              "
            >

              {tech}

            </div>


          ))}


        </div>



      </div>


    </section>

  );
}