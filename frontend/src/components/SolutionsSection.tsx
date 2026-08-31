import SolutionCard from "@/components/SolutionCard";
import Reveal from "@/components/Reveal";

export default function SolutionsSection() {

  const solutions = [
    {
      number: "01",
      title: "Artificial Intelligence",
      description:
        "Building intelligent systems using machine learning, automation, AI assistants and advanced algorithms that help businesses operate smarter.",
      status: "Future Development",
      statusColor:
        "bg-purple-500/20 text-purple-300 border-purple-500/20",
    },

    {
      number: "02",
      title: "Robotics & Automation",
      description:
        "Creating intelligent robotic platforms, autonomous systems and computer vision technologies that connect software with the physical world.",
      status:
        "Research & Development",
      statusColor:
        "bg-blue-500/20 text-blue-300 border-blue-500/20",
    },

    {
      number: "03",
      title: "Software Engineering",
      description:
        "Designing scalable websites, applications, APIs and digital platforms powered by modern engineering practices.",
      status:
        "Available",
      statusColor:
        "bg-green-500/20 text-green-300 border-green-500/20",
    },

    {
      number: "04",
      title: "Cloud Infrastructure",
      description:
        "Developing reliable cloud systems, backend architecture and deployment solutions for future-ready applications.",
      status:
        "Coming Soon",
      statusColor:
        "bg-purple-500/20 text-purple-300 border-purple-500/20",
    },
  ];



  return (

    <section
      className="
      relative
      overflow-hidden
      bg-black
      py-20
      text-white

      sm:py-28

      lg:py-36
      "
    >



      {/* Background Glow */}


      <div
        className="
        absolute

        left-1/2

        top-1/2

        h-[600px]

        w-[600px]

        -translate-x-1/2

        -translate-y-1/2

        rounded-full

        bg-purple-600/10

        blur-[160px]
        "
      />





      <div
        className="
        relative

        mx-auto

        max-w-[1400px]

        px-5

        sm:px-8

        lg:px-12
        "
      >





        {/* HEADER */}



        <Reveal>

          <div
          className="
          mx-auto

          max-w-4xl

          text-center

          "
          >


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

              WHAT WE CREATE

            </p>





            <h2
            className="
            text-4xl

            font-black

            leading-tight

            tracking-tight

            sm:text-5xl

            lg:text-7xl
            "
            >

              TECHNOLOGY

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

                SOLUTIONS

              </span>


            </h2>







            <p
            className="
            mx-auto

            mt-6

            max-w-2xl

            text-base

            leading-8

            text-gray-400

            sm:text-lg
            "
            >

            </p>
          </div>
        </Reveal>

        {/* CARDS */}



        <div
        className="
        mt-16

        grid

        grid-cols-1

        gap-6


        md:grid-cols-2


        lg:mt-20

        lg:gap-8
        "
        >



        {
          solutions.map((solution,index)=>(


            <Reveal
            key={solution.title}
            delay={index * 0.12}
            >


              <div
              className="
              group

              relative
              "
              >



                {/* Number */}



                <div
                className="
                absolute

                right-8

                top-5

                text-7xl

                font-black

                text-white/[0.04]

                transition

                duration-500

                group-hover:text-purple-500/10
                "
                >

                  {solution.number}

                </div>





                <SolutionCard

                title={solution.title}

                description={solution.description}

                status={solution.status}

                statusColor={solution.statusColor}

                />


              </div>



            </Reveal>


          ))
        }



        </div>





      </div>




    </section>

  );
}