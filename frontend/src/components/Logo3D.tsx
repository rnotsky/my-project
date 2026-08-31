"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/rnotsky-logo.glb");

  const model = useMemo(() => scene.clone(), [scene]);
  const ref = useRef<THREE.Group>(null);

  const { viewport } = useThree();

  const isSmall = viewport.width < 5.5;
  const isMedium = viewport.width >= 5.5 && viewport.width < 8;

  // Bigger model
  const scale = isSmall ? 1.45 : isMedium ? 1.75 : 2.0;

  // Slightly left and up
  const position: [number, number, number] = isSmall
    ? [-0.05, 0.10, 0]
    : isMedium
    ? [0.08, 0.16, 0]
    : [0.18, 0.22, 0];

  useFrame((state, delta) => {
    if (!ref.current) return;

    // Smooth rotation
    ref.current.rotation.y -= delta * 0.28;

    // Tiny natural tilt
    ref.current.rotation.x =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.01;

    ref.current.rotation.z =
      Math.sin(state.clock.elapsedTime * 0.6) * 0.008;
  });

  return (
    <primitive
      ref={ref}
      object={model}
      scale={scale}
      position={position}
    />
  );
}

function Loader() {
  return null;
}

export default function Logo3D() {
  return (
    <div
      className="
        relative
        mx-auto
        w-full

        h-[320px]
        max-w-[320px]

        sm:h-[420px]
        sm:max-w-[420px]

        md:h-[520px]
        md:max-w-[520px]

        lg:h-[600px]
        lg:max-w-[600px]

        xl:h-[680px]
        xl:max-w-[680px]
      "
    >
      {/* Soft White Glow */}
      <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-[120px]" />

      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 5.2],
          fov: 40,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.35,
          outputColorSpace: THREE.SRGBColorSpace,
        }}
      >
        {/* Ambient */}
        <ambientLight intensity={0.22} />

        {/* Main Light */}
        <directionalLight
          castShadow
          position={[6, 6, 5]}
          intensity={3.5}
          color="#ffffff"
        />

        {/* Fill Light */}
        <directionalLight
          position={[-5, 2, 4]}
          intensity={1.5}
          color="#d4d4d8"
        />

        {/* Purple Rim */}
        <pointLight
          position={[4, 2, 3]}
          intensity={18}
          color="#8b5cf6"
        />

        {/* White Highlight */}
        <pointLight
          position={[-3, 3, 5]}
          intensity={14}
          color="#ffffff"
        />

        {/* Back Light */}
        <pointLight
          position={[0, 0, -6]}
          intensity={16}
          color="#6d28d9"
        />

        {/* Bottom Fill */}
        <pointLight
          position={[0, -4, 2]}
          intensity={6}
          color="#ffffff"
        />

        <Suspense fallback={<Loader />}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/rnotsky-logo.glb");