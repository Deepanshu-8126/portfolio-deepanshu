"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture, Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function PhotoMesh({ photoUrl }: { photoUrl: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture(photoUrl);
  const [hovered, setHovered] = useState(false);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (meshRef.current) {
      // Smoothly interpolate rotation to mouse position
      const mouse = state.pointer;
      targetRotation.current.x = (mouse.y * Math.PI) / 6;
      targetRotation.current.y = (mouse.x * Math.PI) / 6;

      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        targetRotation.current.x,
        0.1
      );
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotation.current.y,
        0.1
      );

      // Subtle breathing scale
      const scale = hovered ? 1.1 : 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      meshRef.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <group>
        {/* Glowing Rim Layer */}
        <mesh position={[0, 0, -0.1]}>
          <planeGeometry args={[4.2, 4.2]} />
          <meshBasicMaterial color="#4CC9F0" transparent opacity={hovered ? 0.8 : 0.3} />
        </mesh>
        
        {/* Main Photo Layer */}
        <mesh 
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <planeGeometry args={[4, 4, 32, 32]} />
          <meshStandardMaterial
            map={texture}
            roughness={0.2}
            metalness={0.8}
            emissive={new THREE.Color("#7209B7")}
            emissiveIntensity={hovered ? 0.2 : 0}
          />
        </mesh>

        {/* Holographic Distortion Overlay */}
        <mesh position={[0, 0, 0.1]} scale={1.01}>
          <planeGeometry args={[4, 4, 64, 64]} />
          <MeshDistortMaterial
            color="#4CC9F0"
            transparent
            opacity={0.15}
            distort={0.2}
            speed={3}
            roughness={0}
            metalness={1}
            wireframe
          />
        </mesh>
      </group>
    </Float>
  );
}

export function HoloPhoto3D({ photoUrl = "/images/deepanshu_photo_portfolio.jpeg" }: { photoUrl?: string }) {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] cursor-none perspective-container relative">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} intensity={2} color="#ffffff" />
        <pointLight position={[-5, -5, 5]} intensity={1.5} color="#7209B7" />
        <pointLight position={[5, -5, 5]} intensity={1.5} color="#4CC9F0" />
        <PhotoMesh photoUrl={photoUrl} />
      </Canvas>
    </div>
  );
}
