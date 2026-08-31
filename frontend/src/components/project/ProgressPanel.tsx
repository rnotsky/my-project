type Props = {
  progress: number;
};

export default function ProgressPanel({
  progress,
}: Props) {

  return (
    <div>

      <div
        className="
          flex
          justify-between
          text-sm
          text-gray-500
        "
      >

        <span>
          Development Progress
        </span>

        <span>
          {progress}%
        </span>

      </div>


      <div
        className="
          mt-3
          h-2
          w-full
          overflow-hidden
          rounded-full
          bg-white/10
        "
      >

        <div
          className="
            h-full
            rounded-full
            bg-purple-500
            transition-all
            duration-500
          "
          style={{
            width: `${progress}%`,
          }}
        />

      </div>


    </div>
  );
}