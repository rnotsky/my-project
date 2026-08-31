type Props = {
  title: string;
  children: React.ReactNode;
};

export default function SystemPanel({
  title,
  children,
}: Props) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-white/10
        bg-[#0b0b0b]
        p-8
      "
    >

      <p
        className="
          text-sm
          uppercase
          tracking-[0.3em]
          text-purple-400
        "
      >
        {title}
      </p>


      <div className="mt-6">
        {children}
      </div>


    </div>
  );
}