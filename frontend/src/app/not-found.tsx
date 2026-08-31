"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">

      {/* Purple Glow */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />


      {/* Grid */}
      <div
        className="
        absolute inset-0
        bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
        bg-[size:40px_40px]
        "
      />


      {/* Content */}
      <div className="relative z-10 w-full max-w-lg">

        <div
          className="
          rounded-3xl
          border border-white/10
          bg-white/[0.04]
          p-8
          text-center
          backdrop-blur-xl
          "
        >

          {/* 404 */}
          <h1
            className="
            text-7xl
            font-black
            tracking-tighter
            bg-gradient-to-r
            from-purple-400
            to-white
            bg-clip-text
            text-transparent
            sm:text-8xl
            "
          >
            404
          </h1>


          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Page Not Found
          </h2>


          <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
            The page you are looking for doesn't exist
            or has been moved.
          </p>


          {/* Status */}
          <div
            className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            text-sm
            text-gray-500
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

            RNOTSKY System Online
          </div>



          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">

            <Link
              href="/"
              className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              bg-gradient-to-r
              from-purple-600
              to-purple-400
              px-6
              py-3
              text-sm
              font-semibold
              text-black
              transition
              hover:scale-105
              "
            >
              <Home size={16}/>
              Home
            </Link>


            <button
              onClick={() => history.back()}
              className="
              flex
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-white/5
              px-6
              py-3
              text-sm
              font-semibold
              transition
              hover:bg-white/10
              "
            >
              <ArrowLeft size={16}/>
              Back
            </button>

          </div>


          <p
            className="
            mt-8
            text-[11px]
            tracking-[0.35em]
            text-gray-600
            "
          >
            RNOTSKY
          </p>

        </div>

      </div>

    </main>
  );
}