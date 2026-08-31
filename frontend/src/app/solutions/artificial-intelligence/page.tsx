import SolutionHero from "@/components/solutions/SolutionHero";
import CapabilitiesSection from "@/components/solutions/CapabilitiesSection";
import TechStack from "@/components/solutions/TechStack";
import ApplicationsSection from "@/components/solutions/ApplicationsSection";
import DevelopmentProcess from "@/components/solutions/DevelopmentProcess";


export default function ArtificialIntelligencePage() {
  return (
    <main className="bg-black">


      {/* HERO */}

      <SolutionHero
        category="Artificial Intelligence"
        title="Building Intelligent Systems"
        description="
        Rnotsky develops advanced AI solutions
        that learn, adapt and help businesses
        solve complex problems using intelligent
        technology.
        "
      />







      {/* CAPABILITIES */}

      <CapabilitiesSection
        title="AI Technologies We Build"

        description="
        Creating intelligent systems that automate,
        analyze and improve decision making.
        "

        items={[
          {
            title: "AI Assistants",

            description:
              "Smart conversational systems that help users and businesses work efficiently."
          },

          {
            title: "Machine Learning",

            description:
              "Advanced models that learn from data and continuously improve performance."
          },

          {
            title: "Automation",

            description:
              "Intelligent workflows that reduce repetitive tasks and improve productivity."
          },

          {
            title: "Computer Vision",

            description:
              "AI systems that allow machines to understand and analyze visual information."
          }
        ]}
      />







      {/* TECHNOLOGY STACK */}

      <TechStack

        title="Built With Modern AI Technology"

        description="
        Using advanced frameworks, models and
        engineering tools to create reliable
        intelligent systems.
        "

        technologies={[
          "Python",
          "TensorFlow",
          "PyTorch",
          "OpenAI",
          "FastAPI",
          "Cloud"
        ]}

      />








      {/* APPLICATIONS */}

      <ApplicationsSection

        title="AI Solving Real-World Problems"

        description="
        Applying artificial intelligence to automate
        processes, improve decisions and create
        smarter experiences.
        "

        items={[
          {
            title: "AI Assistants",

            description:
              "Intelligent assistants that support customers, teams and everyday workflows."
          },

          {
            title: "Business Automation",

            description:
              "AI-powered systems that reduce manual work and improve efficiency."
          },

          {
            title: "Data Intelligence",

            description:
              "Transform complex data into meaningful insights and predictions."
          },

          {
            title: "Smart Vision Systems",

            description:
              "Computer vision solutions that help machines understand the world."
          }
        ]}

      />









      {/* DEVELOPMENT PROCESS */}

      <DevelopmentProcess

        title="From Idea To Intelligent System"

        description="
        Our engineering process transforms ideas
        into reliable AI solutions through research,
        development and continuous improvement.
        "

        steps={[
          {
            title: "Research",

            description:
              "Understanding problems, data and requirements before development begins."
          },

          {
            title: "Design",

            description:
              "Creating AI architecture and system strategies for scalable solutions."
          },

          {
            title: "Development",

            description:
              "Building, training and integrating intelligent technology."
          },

          {
            title: "Deployment",

            description:
              "Launching systems and improving performance over time."
          }
        ]}

      />




    </main>
  );
}