export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <div
        className="
          mx-auto
          max-w-[1400px]
          px-5
          py-24
          sm:px-8
          lg:px-16
        "
      >


        {/* HERO */}

        <section className="max-w-4xl">

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-purple-400
            "
          >
            About Rnotsky
          </p>


          <h1
            className="
              mt-6
              text-4xl
              font-bold
              leading-tight

              sm:text-6xl

              lg:text-7xl
            "
          >
            Building intelligent
            <span
              className="
                block
                bg-gradient-to-r
                from-purple-400
                via-violet-500
                to-fuchsia-500
                bg-clip-text
                text-transparent
              "
            >
              technology for tomorrow.
            </span>
          </h1>


          <p
            className="
              mt-8
              max-w-2xl
              text-base
              leading-7
              text-gray-400

              sm:text-lg
            "
          >
            Rnotsky develops artificial intelligence,
            robotics and software solutions designed
            to transform ideas into real-world
            technology.
          </p>


        </section>








        {/* STORY */}

        <section
          className="
            mt-24
            grid
            gap-8

            lg:grid-cols-2
          "
        >


          <div>

            <p
              className="
                text-sm
                uppercase
                tracking-[0.3em]
                text-purple-400
              "
            >
              Our Story
            </p>


            <h2
              className="
                mt-5
                text-3xl
                font-bold

                sm:text-5xl
              "
            >
              Creating technology
              beyond boundaries.
            </h2>

          </div>



          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-[#0b0b0b]
              p-6

              sm:p-8
            "
          >

            <p
              className="
                leading-8
                text-gray-400
              "
            >
              Rnotsky was founded with a vision to
              explore the future of intelligent systems.

              <br />
              <br />

              By combining AI, robotics and engineering,
              we create solutions that connect creativity
              with advanced technology.
            </p>


          </div>


        </section>









        {/* TECHNOLOGY */}


        <section className="mt-24">


          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-purple-400
            "
          >
            Technologies
          </p>


          <div
            className="
              mt-8
              grid
              gap-6

              md:grid-cols-3
            "
          >

            <InfoCard
              title="Artificial Intelligence"
              text="Building intelligent systems that learn, analyze and improve."
            />


            <InfoCard
              title="Robotics"
              text="Developing technology that connects intelligence with the physical world."
            />


            <InfoCard
              title="Software"
              text="Creating scalable platforms and modern digital solutions."
            />

          </div>


        </section>









        {/* FOUNDER */}

        <section className="mt-28">


          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-purple-400
            "
          >
            Founder
          </p>



          <div
            className="
              mt-8
              grid
              gap-10

              rounded-3xl

              border
              border-white/10

              bg-[#0b0b0b]

              p-6

              sm:p-10

              lg:grid-cols-[250px_1fr]

              lg:p-12
            "
          >



            {/* Avatar */}


            <div
              className="
                flex
                justify-center
                lg:justify-start
              "
            >

              <div
                className="
                  flex

                  h-48
                  w-48

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-purple-500/40

                  bg-black

                  shadow-[0_0_50px_rgba(168,85,247,0.25)]
                "
              >

                <span
                  className="
                    text-6xl
                    font-bold
                    text-purple-400
                  "
                >
                  AK
                </span>


              </div>


            </div>







            {/* Content */}


            <div>


              <h2
                className="
                  text-3xl
                  font-bold

                  sm:text-5xl
                "
              >
                Athi Kesavan
              </h2>



              <p
                className="
                  mt-2
                  text-purple-400
                "
              >
                Founder & Vision Architect
              </p>



              <p
                className="
                  mt-6

                  max-w-2xl

                  leading-8

                  text-gray-400
                "
              >
                Building Rnotsky with a focus on
                artificial intelligence, robotics and
                future technology.

                <br />
                <br />

                The mission is to create reliable
                intelligent systems that turn innovative
                ideas into practical solutions.
              </p>





              <div
                className="
                  mt-8

                  grid

                  grid-cols-1

                  gap-4

                  sm:grid-cols-3
                "
              >

                <Stat
                  title="Focus"
                  value="AI"
                />


                <Stat
                  title="Domain"
                  value="Robotics"
                />


                <Stat
                  title="Goal"
                  value="Innovation"
                />

              </div>


            </div>


          </div>


        </section>




      </div>


    </main>
  );
}






function InfoCard({
  title,
  text,
}:{
  title:string;
  text:string;
}) {

return (

<div
className="
rounded-3xl
border
border-white/10
bg-[#0b0b0b]
p-6

transition

hover:border-purple-500/40
"
>

<h3
className="
text-2xl
font-semibold
"
>
{title}
</h3>


<p
className="
mt-4
leading-7
text-gray-400
"
>
{text}
</p>


</div>

);

}






function Stat({
  title,
  value,
}:{
  title:string;
  value:string;
}) {

return (

<div
className="
rounded-2xl
border
border-white/10
bg-black
p-4
"
>

<p
className="
text-sm
text-gray-500
"
>
{title}
</p>


<p
className="
mt-2
font-semibold
text-purple-400
"
>
{value}
</p>


</div>

);

}