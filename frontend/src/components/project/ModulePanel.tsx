type Props = {
  modules: string[];
};


export default function ModulePanel({
  modules,
}: Props) {

  return (
    <div
      className="
        flex
        flex-wrap
        gap-3
      "
    >

      {modules.map((module) => (

        <span
          key={module}
          className="
            rounded-full
            border
            border-purple-500/20
            bg-purple-500/10
            px-5
            py-2
            text-sm
            text-purple-300
          "
        >
          {module}
        </span>

      ))}

    </div>
  );
}