"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { PointMaterial, Points } from "@react-three/drei";

function ParticleSwarm({ count = 3000 }) {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random positions for the particles within a sphere
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 20 * Math.random();
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      p[i * 3] = x;
      p[i * 3 + 1] = y;
      p[i * 3 + 2] = z;
    }
    return p;
  }, [count]);

  // Animate the particles rotating slowly
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#4CC9F0"
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.6}
      />
    </Points>
  );
}

export function BackgroundParticles() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#06060B]">
      {/* 3D WebGL Canvas layer */}
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <fog attach="fog" args={["#06060B", 10, 25]} />
        <ParticleSwarm />
      </Canvas>
      
      {/* 2D Overlay layer for the subtle grid/noise */}
      <div className="absolute inset-0 z-10 pointer-events-none futuristic-grid opacity-30 mix-blend-overlay"></div>
      
      {/* Gradient ambient glow */}
      <div className="absolute inset-0 z-10 bg-gradient-radial from-[#7209B7]/5 via-transparent to-transparent opacity-50"></div>
    </div>
  );
}
