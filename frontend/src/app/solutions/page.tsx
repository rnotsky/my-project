export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      <section className="max-w-6xl mx-auto">

        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm">
          RNOTSKY SOLUTIONS
        </p>


        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          AI Solutions For The Future
        </h1>


        <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-8">
          RNOTSKY builds advanced AI, robotics, cloud infrastructure,
          and software solutions to solve real-world problems.
        </p>



        <div className="mt-16 grid md:grid-cols-4 gap-6">


          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold">
              Artificial Intelligence
            </h2>

            <p className="mt-4 text-gray-400">
              Machine learning, AI systems and intelligent automation.
            </p>
          </div>



          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold">
              Robotics
            </h2>

            <p className="mt-4 text-gray-400">
              Robotics software and intelligent machines.
            </p>
          </div>



          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold">
              Cloud Infrastructure
            </h2>

            <p className="mt-4 text-gray-400">
              Scalable backend and cloud systems.
            </p>
          </div>



          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-xl font-semibold">
              Software Engineering
            </h2>

            <p className="mt-4 text-gray-400">
              Modern web and software development.
            </p>
          </div>


        </div>

      </section>

    </main>
  );
}