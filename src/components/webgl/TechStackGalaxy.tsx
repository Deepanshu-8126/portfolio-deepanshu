"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float } from "@react-three/drei";
import * as THREE from "three";
import { 
  SiPython, SiNumpy, SiPandas, 
  SiMysql, SiPostgresql, SiMongodb, SiRedis
} from "react-icons/si";
import { FaChartBar } from "react-icons/fa"; // Using this for Matplotlib/Seaborn representation

const SKILLS = [
  { name: "Python", icon: <SiPython size={40} />, color: "#3776AB" },
  { name: "NumPy", icon: <SiNumpy size={40} />, color: "#013243" },
  { name: "Pandas", icon: <SiPandas size={40} />, color: "#150458" },
  { name: "Seaborn", icon: <FaChartBar size={40} />, color: "#4CC9F0" },
  { name: "Matplotlib", icon: <FaChartBar size={40} />, color: "#11557C" },
  { name: "MySQL", icon: <SiMysql size={40} />, color: "#4479A1" },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} />, color: "#336791" },
  { name: "MongoDB", icon: <SiMongodb size={40} />, color: "#47A248" },
  { name: "Redis", icon: <SiRedis size={40} />, color: "#DC382D" }
];

function SkillNode({ skill, index, total }: { skill: any, index: number, total: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHover] = useState(false);
  
  const radius = 6;
  const angle = (index / total) * Math.PI * 2;

  useFrame((state) => {
    if (groupRef.current) {
      // Circular Orbit Motion
      const speed = 0.5;
      const currentAngle = angle + state.clock.getElapsedTime() * speed;
      
      groupRef.current.position.x = Math.cos(currentAngle) * radius;
      groupRef.current.position.z = Math.sin(currentAngle) * radius;
      groupRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 2 + index) * 0.5;

      // Hover Animation
      if (hovered) {
        const pulse = 1.8 + Math.sin(state.clock.elapsedTime * 15) * 0.1;
        groupRef.current.scale.lerp(new THREE.Vector3(pulse, pulse, pulse), 0.2);
      } else {
        groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <group ref={groupRef}>
      {/* Invisible mesh for hover detection without the wireframe */}
      <mesh
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial visible={false} />
      </mesh>
      
      <Html center zIndexRange={[100, 0]} className="pointer-events-none">
        <div 
          className={`flex flex-col items-center justify-center transition-all duration-300 ${
            hovered ? "scale-125 drop-shadow-[0_0_20px_rgba(255,255,255,1)] text-white" : "text-[#A0A0C0] opacity-80 hover:opacity-100"
          }`}
          style={{ color: hovered ? skill.color : undefined }}
        >
          {skill.icon}
          <span className={`text-[12px] font-bold mt-2 whitespace-nowrap px-3 py-1 rounded bg-[#06060B]/80 backdrop-blur-md border transition-opacity duration-300 ${
            hovered ? "opacity-100 border-[#4CC9F0]" : "opacity-0 border-white/10"
          }`}
          style={{ borderColor: hovered ? skill.color : undefined }}>
            {skill.name}
          </span>
        </div>
      </Html>
    </group>
  );
}

export function TechStackGalaxy() {
  return (
    <div className="w-full h-[600px] rounded-3xl overflow-hidden border border-white/5 bg-transparent relative">
      <Canvas camera={{ position: [0, 4, 12], fov: 60 }}>
        <ambientLight intensity={1} />
        
        {/* Subtle center core */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <group position={[0,0,0]}>
             <Html center className="pointer-events-none">
                <div className="text-[#4CC9F0] text-xl font-black uppercase tracking-widest text-center drop-shadow-[0_0_20px_#4CC9F0]">
                   Tech <br/> Stack
                </div>
             </Html>
             <mesh>
               <sphereGeometry args={[1.5, 32, 32]} />
               <meshBasicMaterial color="#4CC9F0" wireframe transparent opacity={0.1} />
             </mesh>
          </group>
        </Float>

        <group rotation={[0.2, 0, 0]}>
          {SKILLS.map((skill, i) => (
            <SkillNode key={skill.name} skill={skill} index={i} total={SKILLS.length} />
          ))}
        </group>
      </Canvas>
      <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none z-10">
        <p className="text-xs text-[#A0A0C0] uppercase tracking-[0.2em] font-semibold bg-[#06060B]/50 inline-block px-4 py-2 rounded-full backdrop-blur-md">
          Interactive Orbital Tech Stack • Hover to explore
        </p>
      </div>
    </div>
  );
}
