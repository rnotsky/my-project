type SolutionCardProps = {
  title: string;
  description: string;
  status: string;
  statusColor: string;
};


export default function SolutionCard({
  title,
  description,
  status,
  statusColor,
}: SolutionCardProps) {
  return (
    <div
      className="
      group
      relative
      overflow-hidden

      rounded-3xl

      border
      border-white/10

      bg-[#0B0B0B]

      p-6

      transition-all
      duration-300

      sm:p-8

      hover:-translate-y-1

      hover:border-purple-500/40

      hover:shadow-[0_20px_60px_rgba(124,58,237,0.15)]
      "
    >

      



      <div
        className="
        relative
        z-10
        "
      >


        {/* Title */}


        <h3
          className="
          text-2xl

          font-bold

          text-white

          transition-colors

          duration-300

          group-hover:text-purple-100
          "
        >
          {title}
        </h3>





        {/* Description */}


        <p
          className="
          mt-4

          text-sm

          leading-7

          text-gray-400

          sm:text-base
          "
        >
          {description}
        </p>





        {/* Bottom */}


        <div
          className="
          mt-8

          flex

          items-center

          justify-between

          gap-4
          "
        >


          <span
            className={`
            rounded-full

            px-4

            py-1.5

            text-xs

            font-medium

            ${statusColor}
            `}
          >
            {status}
          </span>




          <button
            className="
            text-sm

            font-semibold

            text-purple-400

            transition

            hover:text-purple-300
            "
          >
            Learn More →
          </button>


        </div>


      </div>


    </div>
  );
}