export default function SoftwareEngineeringPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      <section className="max-w-6xl mx-auto">

        <p className="text-purple-400 uppercase tracking-[0.3em] text-sm">
          RNOTSKY SOLUTIONS
        </p>


        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          Software Engineering
        </h1>


        <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-8">
          Creating modern, scalable, and secure software solutions
          designed for businesses and future technologies.
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
              Web Applications
            </h2>

            <p className="mt-4 text-gray-400">
              High-performance web platforms built with modern
              technologies and frameworks.
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
              Backend Systems
            </h2>

            <p className="mt-4 text-gray-400">
              Reliable APIs, databases, authentication,
              and scalable server architecture.
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
              Custom Software
            </h2>

            <p className="mt-4 text-gray-400">
              Tailored software solutions built around
              specific business requirements.
            </p>
          </div>


        </div>


      </section>

    </main>
  );
}