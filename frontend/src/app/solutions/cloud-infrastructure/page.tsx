export default function CloudInfrastructurePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      <section className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="max-w-3xl">

          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm">
            RNOTSKY SOLUTIONS
          </p>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold">
            Cloud Infrastructure
          </h1>

          <p className="mt-6 text-lg text-gray-400 leading-8">
            Building secure, scalable, and high-performance cloud
            infrastructure for modern AI applications and digital systems.
          </p>

        </div>


        {/* Services */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">


          <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur
          ">
            <h2 className="text-xl font-semibold">
              Cloud Architecture
            </h2>

            <p className="mt-4 text-gray-400">
              Designing scalable cloud environments with reliable
              infrastructure and optimized performance.
            </p>
          </div>



          <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur
          ">
            <h2 className="text-xl font-semibold">
              DevOps & Deployment
            </h2>

            <p className="mt-4 text-gray-400">
              Automated deployment pipelines, monitoring,
              and production-ready workflows.
            </p>
          </div>




          <div className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
            backdrop-blur
          ">
            <h2 className="text-xl font-semibold">
              Cloud Security
            </h2>

            <p className="mt-4 text-gray-400">
              Secure authentication, data protection,
              and infrastructure best practices.
            </p>
          </div>


        </div>



        {/* CTA */}
        <div className="
          mt-16
          rounded-3xl
          border
          border-purple-500/20
          bg-purple-500/10
          p-10
        ">

          <h2 className="text-3xl font-bold">
            Ready to build your next system?
          </h2>

          <p className="mt-4 text-gray-400">
            RNOTSKY helps businesses create powerful,
            scalable cloud solutions.
          </p>


        </div>


      </section>

    </main>
  );
}