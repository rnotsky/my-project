export const runtime = "edge";

import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "@/lib/projects";

import SystemPanel from "@/components/project/SystemPanel";
import StatusBadge from "@/components/project/StatusBadge";
import ProgressPanel from "@/components/project/ProgressPanel";
import ModulePanel from "@/components/project/ModulePanel";
import TimelinePanel from "@/components/project/TimelinePanel";
import ProjectVisual from "@/components/project/ProjectVisual";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};



export default async function ProjectPage({ params }: Props) {

  const { slug } = await params;


  const project = projects.find(
    (item) => item.slug === slug
  );


  if (!project) {
    notFound();
  }



  return (
    <main
      className="
        min-h-screen
        bg-black
        text-white
      "
    >

      {/* PROJECT HEADER */}

      <section
        className="
          border-b
          border-white/10
          py-24
        "
      >

        <div
          className="
            mx-auto
            max-w-7xl
            px-5
            sm:px-8
            lg:px-10
          "
        >

          <Link
            href="/projects"
            className="
              text-sm
              text-purple-400
              hover:text-purple-300
            "
          >
            ← Return to Project Archive
          </Link>


          <p
            className="
              mt-12
              text-xs
              uppercase
              tracking-[0.4em]
              text-purple-400
            "
          >
            PROJECT SYSTEM
          </p>


          <h1
            className="
              mt-5
              text-5xl
              font-bold
              sm:text-7xl
            "
          >
            {project.title}
          </h1>


          <p
            className="
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-gray-400
            "
          >
            {project.overview}
          </p>

        </div>

      </section>



      {/* CONTROL PANEL */}


      <section className="py-20">

        <div
          className="
            mx-auto
            grid
            max-w-7xl
            gap-8
            px-5
            lg:grid-cols-3
          "
        >


          {/* LEFT SIDE */}

          <div
            className="
              space-y-8
              lg:col-span-2
            "
          >


            <SystemPanel title="MISSION BRIEF">

              <p className="leading-8 text-gray-400">
                {project.description}
              </p>

            </SystemPanel>



            <SystemPanel title="ACTIVE MODULES">

              <ModulePanel
                modules={project.technologies}
              />

            </SystemPanel>



            <SystemPanel title="RESEARCH TIMELINE">

              <TimelinePanel />

            </SystemPanel>


          </div>





          {/* RIGHT SIDE */}


          <div className="space-y-8">


            <SystemPanel title="SYSTEM STATUS">

              <StatusBadge
                status={project.status}
              />


              <div className="mt-8">

                <ProgressPanel
                  progress={project.progress}
                />

              </div>


            </SystemPanel>





            <SystemPanel title="PROJECT VISUAL">

              <ProjectVisual
                type="image"
                src={project.image}
                alt={project.title}
              />

            </SystemPanel>





            <SystemPanel title="NEXT OBJECTIVE">

              <p className="leading-7 text-gray-400">
                Advancing this system toward
                real-world deployment and
                intelligent automation.
              </p>

            </SystemPanel>


          </div>


        </div>

      </section>


    </main>
  );
}