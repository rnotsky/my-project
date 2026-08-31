"use client";

import Image from "next/image";

type ProjectVisualProps = {
  type: "image" | "video" | "3d";
  src: string;
  alt?: string;
};


export default function ProjectVisual({
  type,
  src,
  alt = "Project Visual",
}: ProjectVisualProps) {


  return (
    <div
      className="
        relative
        flex
        h-64
        w-full
        items-center
        justify-center

        overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-black

        sm:h-80
      "
    >


      {/* IMAGE MODE */}

      {type === "image" && (

        <Image
          src={src}
          alt={alt}
          fill
          className="
            object-cover
            transition
            duration-500
            hover:scale-105
          "
        />

      )}





      {/* VIDEO MODE */}

      {type === "video" && (

        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="
            h-full
            w-full
            object-cover
          "
        />

      )}






      {/* 3D PLACEHOLDER */}

      {type === "3d" && (

        <div
          className="
            text-center
            text-gray-500
          "
        >

          <p className="text-lg">
            3D Model
          </p>

          <p className="mt-2 text-sm">
            GLB Viewer Coming Soon
          </p>

        </div>

      )}



      {/* Glow Effect */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-purple-500/10
          to-transparent
        "
      />


    </div>
  );
}