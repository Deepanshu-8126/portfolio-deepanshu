"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedNode() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.3;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      
      // Interpolate scale on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron
        ref={meshRef}
        args={[1, 0]}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#A855F7" : "#4CC9F0"}
          emissive={hovered ? "#A855F7" : "#4CC9F0"}
          emissiveIntensity={0.8}
          wireframe={true}
          distort={hovered ? 0.4 : 0.2}
          speed={hovered ? 5 : 2}
        />
      </Icosahedron>
    </Float>
  );
}

export function DataNode3D() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] cursor-pointer">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <AnimatedNode />
      </Canvas>
    </div>
  );
}
