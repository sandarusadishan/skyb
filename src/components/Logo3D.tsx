import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

function GraduationCap() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.015;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.3}>
      <group ref={groupRef}>
        {/* Cap top (mortarboard) */}
        <mesh position={[0, 0.15, 0]}>
          <boxGeometry args={[1.2, 0.08, 1.2]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.8}
            roughness={0.2}
            emissive="#FFD700"
            emissiveIntensity={0.15}
          />
        </mesh>
        
        {/* Cap base (skull cap) */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.45, 0.5, 0.35, 8]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.7}
            roughness={0.3}
            emissive="#FFD700"
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Button on top */}
        <mesh position={[0, 0.22, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.9}
            roughness={0.1}
            emissive="#FFD700"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Tassel string */}
        <mesh position={[0.4, 0.15, 0]}>
          <cylinderGeometry args={[0.02, 0.02, 0.5, 8]} />
          <meshStandardMaterial color="#FFD700" metalness={0.5} roughness={0.5} />
        </mesh>
        
        {/* Tassel end */}
        <mesh position={[0.4, -0.15, 0]}>
          <coneGeometry args={[0.06, 0.15, 8]} />
          <meshStandardMaterial
            color="#FFD700"
            metalness={0.6}
            roughness={0.4}
            emissive="#FFD700"
            emissiveIntensity={0.2}
          />
        </mesh>
      </group>
    </Float>
  );
}

export function Logo3D() {
  return (
    <div className="w-12 h-12">
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
        <GraduationCap />
      </Canvas>
    </div>
  );
}
