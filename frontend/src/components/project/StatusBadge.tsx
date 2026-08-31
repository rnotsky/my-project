type Props = {
  status: string;
};

export default function StatusBadge({ status }: Props) {
  let style =
    "text-purple-300 bg-purple-500/10 border-purple-500/30";


  if (status === "Development") {
    style =
      "text-blue-300 bg-blue-500/10 border-blue-500/30";
  }


  if (status === "Available") {
    style =
      "text-green-300 bg-green-500/10 border-green-500/30";
  }


  return (
    <div
      className={`
        inline-flex
        items-center
        rounded-full
        border
        px-5
        py-2
        text-sm
        font-medium
        ${style}
      `}
    >

      <span
        className="
          mr-2
          h-2
          w-2
          rounded-full
          bg-current
        "
      />

      {status}

    </div>
  );
}