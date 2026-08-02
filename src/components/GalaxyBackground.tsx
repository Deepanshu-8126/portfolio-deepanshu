import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, PointMaterial, Points } from '@react-three/drei';
import { useState, useRef, Suspense } from 'react';
import * as THREE from 'three';

// Custom moving galaxy particles
const GalaxyParticles = () => {
  const ref = useRef<THREE.Points>(null);
  const groupRef = useRef<THREE.Group>(null);
  
  // Create random particles in a sphere for extra depth
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000);
    for (let i = 0; i < 5000; i++) {
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 5 + Math.random() * 35; // 5 to 40 radius
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta); // x
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      positions[i * 3 + 2] = radius * Math.cos(phi); // z
    }
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotate particles continuously
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
    if (groupRef.current) {
      // Slowly rotate the entire galaxy group for a cinematic 3D pan
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.2;
      groupRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f0ff"
          size={0.08}
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
        background: 'radial-gradient(circle at center, #0a0515 0%, #020105 100%)' // Deep galaxy gradient
      }}
    >
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Suspense fallback={null}>
          <AnimatedStars />
          <GalaxyParticles />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GalaxyBackground;
