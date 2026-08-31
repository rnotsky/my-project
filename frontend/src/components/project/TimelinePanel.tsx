const timeline = [
  {
    phase: "Phase 01",
    title: "Research",
    status: "Completed",
  },
  {
    phase: "Phase 02",
    title: "Development",
    status: "Active",
  },
  {
    phase: "Phase 03",
    title: "Deployment",
    status: "Future",
  },
];


export default function TimelinePanel() {

  return (
    <div
      className="
        space-y-6
      "
    >

      {timeline.map((item) => (

        <div
          key={item.phase}
          className="
            border-l
            border-purple-500/30
            pl-5
          "
        >

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-purple-400
            "
          >
            {item.phase}
          </p>


          <h3
            className="
              mt-2
              text-xl
              font-semibold
            "
          >
            {item.title}
          </h3>


          <p
            className="
              mt-1
              text-sm
              text-gray-500
            "
          >
            {item.status}
          </p>


        </div>

      ))}

    </div>
  );
}