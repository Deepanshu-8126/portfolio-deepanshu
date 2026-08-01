"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function RotatingStars() {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.02;
      ref.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <group ref={ref}>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1} 
      />
    </group>
  );
}

export function StarsBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#06060B]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
      </Canvas>
    </div>
  );
}
