import Link from "next/link";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-black
        py-20
        text-white

        sm:py-28
        lg:py-32
      "
    >

      {/* Background Glow */}
      <div
        className="
          pointer-events-none
          absolute

          left-1/2
          top-0

          h-[400px]
          w-[400px]

          -translate-x-1/2

          rounded-full

          bg-purple-600/20

          blur-[140px]

          sm:h-[600px]
          sm:w-[600px]

          sm:blur-[170px]

          lg:h-[700px]
          lg:w-[700px]
        "
      />


      <div
        className="
          relative
          z-10

          mx-auto

          max-w-[1600px]

          px-5

          sm:px-8

          lg:px-12

          xl:px-16
        "
      >


        {/* Hero */}

        <section
          className="
            max-w-4xl
          "
        >


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
                text-[10px]

                font-semibold

                uppercase

                tracking-[0.28em]

                text-purple-400

                sm:text-xs
              "
            >
              PROJECT ARCHIVE
            </span>


          </div>




          <h1
            className="
              mt-6

              text-4xl

              font-bold

              leading-[1.05]

              tracking-tight


              sm:text-5xl


              md:text-6xl


              lg:text-7xl
            "
          >

            Building Systems


            <br />


            <span
              className="
                bg-gradient-to-r

                from-purple-400

                via-violet-500

                to-fuchsia-500

                bg-clip-text

                text-transparent
              "
            >
              Beyond Ideas
            </span>


          </h1>




          <p
            className="
              mt-6

              max-w-2xl

              text-sm

              leading-7

              text-gray-400


              sm:text-base


              md:text-lg

              md:leading-8
            "
          >
            Exploring artificial intelligence,
            robotics, and software systems
            designed to shape the next generation
            of technology.
          </p>



        </section>
                {/* Project Grid */}

        <section
          className="
            mt-14

            grid

            gap-6


            sm:mt-16


            md:grid-cols-2


            lg:mt-20


            lg:grid-cols-3


            lg:gap-8
          "
        >


          {projects.map((project) => (


            <article
              key={project.id}

              className="
                group

                relative

                flex

                min-h-[420px]

                flex-col

                overflow-hidden

                rounded-3xl

                border

                border-white/10

                bg-[#0b0b0b]

                p-6


                transition-all

                duration-300


                hover:border-purple-500/40


                hover:bg-[#101010]


                sm:p-8
              "
            >



              {/* Project Number */}


              <p
                className="
                  text-xs

                  tracking-[0.3em]

                  text-purple-400

                  sm:text-sm
                "
              >
                PROJECT {project.id}
              </p>




              {/* Title */}


              <h2
                className="
                  mt-5

                  text-2xl

                  font-semibold

                  leading-tight


                  sm:text-3xl
                "
              >
                {project.title}
              </h2>





              {/* Description */}


              <p
                className="
                  mt-4

                  flex-1

                  text-sm

                  leading-7

                  text-gray-400


                  sm:mt-5

                  sm:text-base

                  sm:leading-8
                "
              >
                {project.description}
              </p>





              {/* Progress */}

              <div
                className="
                  mt-8
                "
              >


                <div
                  className="
                    flex

                    items-center

                    justify-between

                    gap-3

                    text-xs

                    text-gray-500


                    sm:text-sm
                  "
                >

                  <span>
                    Development Progress
                  </span>


                  <span>
                    {project.progress}%
                  </span>


                </div>




                <div
                  className="
                    mt-3

                    h-1.5

                    overflow-hidden

                    rounded-full

                    bg-white/10
                  "
                >


                  <div
                    className="
                      h-full

                      rounded-full

                      bg-purple-500

                      transition-all

                      duration-500
                    "

                    style={{
                      width: `${project.progress}%`,
                    }}
                  />


                </div>


              </div>
                            {/* Footer */}

              <div
                className="
                  mt-8

                  flex

                  flex-col

                  gap-4


                  sm:flex-row

                  sm:items-center

                  sm:justify-between
                "
              >



                {/* Status */}

                <span
                  className="
                    inline-flex

                    w-fit

                    items-center

                    rounded-full

                    border

                    border-purple-500/30

                    bg-purple-500/10

                    px-4

                    py-2

                    text-xs

                    text-purple-300


                    sm:text-sm
                  "
                >
                  {project.status}
                </span>





                {/* Explore Button */}

                <Link
                  href={`/projects/${project.slug}`}
                  className="
                    inline-flex

                    items-center

                    text-sm

                    font-semibold

                    text-purple-400

                    transition

                    hover:text-purple-300
                  "
                >
                  Explore
                  <span className="ml-1">
                    →
                  </span>
                </Link>



              </div>




            </article>


          ))}


        </section>



      </div>


    </main>
  );
}