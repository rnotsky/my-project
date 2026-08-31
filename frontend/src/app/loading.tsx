import Image from "next/image";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">


      {/* Purple Glow */}
      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-[450px]
        w-[450px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-purple-600/20
        blur-[150px]
        "
      />


      {/* Grid Background */}
      <div
        className="
        absolute
        inset-0
        bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
        bg-[size:40px_40px]
        "
      />


      {/* Loader Content */}
      <div className="relative z-10 flex flex-col items-center">


        {/* RNOTSKY Logo */}
        <div
          className="
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-3xl
          border
          border-purple-500/30
          bg-white/[0.05]
          backdrop-blur-xl
          shadow-[0_0_60px_rgba(168,85,247,0.35)]
          "
        >

          <Image
            src="/icons/ai.png"
            alt="RNOTSKY Logo"
            width={74}
            height={74}
            priority
            className="
            object-contain
            animate-pulse
            "
          />

        </div>



        {/* Brand Name */}
        <h1
          className="
          mt-7
          text-3xl
          font-black
          tracking-[0.25em]
          bg-gradient-to-r
          from-purple-400
          via-purple-200
          to-white
          bg-clip-text
          text-transparent
          "
        >
          RNOTSKY
        </h1>



        {/* Loading Text */}
        <p
          className="
          mt-4
          text-xs
          uppercase
          tracking-[0.35em]
          text-gray-500
          "
        >
          Initializing System
        </p>



        {/* Loading Bar */}
        <div
          className="
          mt-8
          h-1
          w-52
          overflow-hidden
          rounded-full
          bg-white/10
          "
        >

          <div
            className="
            h-full
            w-24
            rounded-full
            bg-gradient-to-r
            from-purple-600
            to-purple-300
            animate-pulse
            "
          />

        </div>



        {/* Status */}
        <div
          className="
          mt-6
          flex
          items-center
          gap-2
          text-xs
          text-gray-600
          "
        >

          <span
            className="
            h-2
            w-2
            rounded-full
            bg-purple-500
            shadow-[0_0_15px_#a855f7]
            "
          />

          System Online

        </div>


      </div>


    </main>
  );
}