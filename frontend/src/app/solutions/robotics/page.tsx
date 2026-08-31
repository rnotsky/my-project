export default function RoboticsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      <section className="max-w-6xl mx-auto">

        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm">
          RNOTSKY SOLUTIONS
        </p>


        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          Robotics Engineering
        </h1>


        <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-8">
          Building intelligent robotic systems combining AI,
          automation, computer vision, and next-generation technology.
        </p>



        <div className="mt-16 grid md:grid-cols-3 gap-6">


          <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
          ">
            <h2 className="text-xl font-semibold">
              AI Robotics
            </h2>

            <p className="mt-4 text-gray-400">
              Intelligent robots powered by machine learning
              and advanced algorithms.
            </p>
          </div>



          <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
          ">
            <h2 className="text-xl font-semibold">
              Computer Vision
            </h2>

            <p className="mt-4 text-gray-400">
              Vision systems that allow machines to understand
              and interact with the environment.
            </p>
          </div>




          <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
          ">
            <h2 className="text-xl font-semibold">
              Automation
            </h2>

            <p className="mt-4 text-gray-400">
              Smart automation solutions for industries
              and future applications.
            </p>
          </div>


        </div>


      </section>

    </main>
  );
}