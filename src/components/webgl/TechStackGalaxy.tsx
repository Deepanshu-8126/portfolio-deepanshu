"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float, Trail } from "@react-three/drei";
import * as THREE from "three";
import { 
  SiPython, SiMysql, SiPandas, SiNumpy, SiScikitlearn, 
  SiTableau 
} from "react-icons/si";
import { FaChartBar, FaBrain, FaChartLine, FaTable } from "react-icons/fa";

const SKILLS = [
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "SQL", icon: <SiMysql size={40} /> },
  { name: "Pandas", icon: <SiPandas size={40} /> },
  { name: "NumPy", icon: <SiNumpy size={40} /> },
  { name: "Machine Learning", icon: <FaBrain size={40} /> },
  { name: "Data Visualization", icon: <FaChartBar size={40} /> },
  { name: "Excel", icon: <FaTable size={40} /> },
  { name: "Tableau", icon: <SiTableau size={40} /> },
  { name: "Power BI", icon: <FaChartLine size={40} /> },
  { name: "Statistics", icon: <SiScikitlearn size={40} /> }
];

function SkillNode({ skill, position, index }: { skill: any, position: [number, number, number], index: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  
  // Color palette cycling
  const colors = ["#4CC9F0", "#7209B7", "#A855F7", "#F72585"];
  const color = colors[index % colors.length];

  useFrame((state) => {
    if (groupRef.current) {
      // Normal orbit vs Crazy Hover animation
      if (hovered) {
        groupRef.current.rotation.x += 0.1;
        groupRef.current.rotation.y += 0.1;
        groupRef.current.rotation.z += 0.1;
        
        // Pulse scale
        const pulse = 1.5 + Math.sin(state.clock.elapsedTime * 20) * 0.2;
        groupRef.current.scale.lerp(new THREE.Vector3(pulse, pulse, pulse), 0.2);
      } else {
        groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.2 + index;
        groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3 + index;
        groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
      <group position={position} ref={groupRef}>
        <Trail width={0.2} length={4} color={color} attenuation={(t) => t * t}>
          <mesh
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
          >
            <icosahedronGeometry args={[0.8, 0]} />
            <meshStandardMaterial 
              color={color} 
              emissive={color} 
              emissiveIntensity={hovered ? 2 : 0} 
              wireframe 
              transparent
              opacity={hovered ? 1 : 0.3}
            />
          </mesh>
        </Trail>
        
        {/* Render actual React Icon in 3D Space */}
        <Html center zIndexRange={[100, 0]} className="pointer-events-none">
          <div 
            className={`flex flex-col items-center justify-center transition-all duration-300 ${
              hovered ? "scale-150 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] text-white" : "text-[#A0A0C0] opacity-80"
            }`}
            style={{ color: hovered ? color : undefined }}
          >
            {skill.icon}
            <span className={`text-[10px] font-bold mt-2 whitespace-nowrap px-2 py-1 rounded bg-black/50 backdrop-blur-sm border border-white/10 ${
              hovered ? "opacity-100" : "opacity-0"
            }`}>
              {skill.name}
            </span>
          </div>
        </Html>
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
    <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-white/5 bg-[#0D0D14]/50 backdrop-blur-md shadow-2xl relative">
      <div className="absolute inset-0 bg-gradient-radial from-[#7209B7]/10 to-transparent pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <group>
          {SKILLS.map((skill, i) => (
            <SkillNode key={skill.name} skill={skill} position={positions[i]} index={i} />
          ))}
        </group>
      </Canvas>
      <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none z-10">
        <p className="text-xs text-[#A0A0C0] uppercase tracking-[0.2em]">Interactive 3D Tech Stack • Hover to explore</p>
      </div>
    </div>
  );
}
