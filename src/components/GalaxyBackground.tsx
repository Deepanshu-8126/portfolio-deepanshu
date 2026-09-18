import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PointMaterial, Points } from '@react-three/drei';
import { useState, useRef, Suspense } from 'react';
import * as THREE from 'three';

// Custom moving galaxy particles
const GalaxyParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  // Create dual particle clouds (Cyan + Violet) for multi-color cosmic depth
  const [cyanSphere] = useState(() => {
    const positions = new Float32Array(3500 * 3);
    for (let i = 0; i < 3500; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 6 + Math.random() * 32;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  });

  const [violetSphere] = useState(() => {
    const positions = new Float32Array(2500 * 3);
    for (let i = 0; i < 2500; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 8 + Math.random() * 36;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
    if (groupRef.current) {
      const targetX = (state.pointer.y * 0.25) + Math.sin(state.clock.elapsedTime * 0.1) * 0.15;
      const targetY = (state.pointer.x * 0.35) + Math.cos(state.clock.elapsedTime * 0.1) * 0.15;
      
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      {/* Cyan Star Cloud */}
      <Points ref={ref} positions={cyanSphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      {/* Violet/Purple Star Cloud */}
      <Points positions={violetSphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#a855f7"
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

// Animated Stars Wrapper
const AnimatedStars = () => {
  const starsRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.x += delta / 20;
      starsRef.current.rotation.y += delta / 30;
      starsRef.current.position.z = (Math.sin(state.clock.elapsedTime * 0.2) * 5) - 5; // Move back and forth
    }
  });

  return (
    <group ref={starsRef}>
      <Stars radius={50} depth={20} count={3000} factor={4} saturation={0} fade speed={2} />
      <Stars radius={100} depth={50} count={2000} factor={6} saturation={1} fade speed={1.5} />
    </group>
  );
};

const GalaxyBackground = () => {
  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 85% 15%, rgba(168, 85, 247, 0.16) 0%, transparent 60%), radial-gradient(ellipse at 15% 85%, rgba(0, 240, 255, 0.12) 0%, transparent 60%), radial-gradient(circle at center, #090b1c 0%, #020308 100%)'
      }}
    >
      <Canvas 
        dpr={[1, 1.5]}
        gl={{ powerPreference: 'high-performance', antialias: true }}
        camera={{ position: [0, 0, 5], fov: 60 }}
      >
        <Suspense fallback={null}>
          <AnimatedStars />
          <GalaxyParticles />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GalaxyBackground;
