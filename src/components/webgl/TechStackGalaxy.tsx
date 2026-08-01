"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Trail } from "@react-three/drei";
import * as THREE from "three";

const SKILLS = [
  "Python", "SQL", "Pandas", "NumPy", "Machine Learning", 
  "Data Visualization", "Excel", "Tableau", "Power BI", "Statistics"
];

function SkillNode({ text, position, index }: { text: string, position: [number, number, number], index: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false);
  
  // Color palette cycling
  const colors = ["#4CC9F0", "#7209B7", "#A855F7", "#F72585"];
  const color = colors[index % colors.length];

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 + index;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 + index;
      
      const targetScale = hovered ? 1.5 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <group position={position}>
        <Trail width={0.2} length={4} color={color} attenuation={(t) => t * t}>
          <mesh
            ref={meshRef}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
          >
            <icosahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial 
              color={color} 
              emissive={color} 
              emissiveIntensity={hovered ? 2 : 0.5} 
              wireframe 
            />
          </mesh>
        </Trail>
        <Text
          position={[0, -1, 0]}
          fontSize={0.3}
          color="#E6E6FF"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {text}
        </Text>
      </group>
    </Float>
  );
}

export function TechStackGalaxy() {
  // Generate random spherical positions
  const positions = useMemo(() => {
    const pos: [number, number, number][] = [];
    for (let i = 0; i < SKILLS.length; i++) {
      const radius = 4 + Math.random() * 2;
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos.push([
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      ]);
    }
    return pos;
  }, []);

  return (
    <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-white/5 bg-[#0D0D14]/50 backdrop-blur-md shadow-2xl relative">
      <div className="absolute inset-0 bg-gradient-radial from-[#7209B7]/10 to-transparent pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <group>
          {SKILLS.map((skill, i) => (
            <SkillNode key={skill} text={skill} position={positions[i]} index={i} />
          ))}
        </group>
      </Canvas>
      <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none">
        <p className="text-xs text-[#A0A0C0] uppercase tracking-[0.2em]">Interactive 3D Tech Stack • Hover to explore</p>
      </div>
    </div>
  );
}
