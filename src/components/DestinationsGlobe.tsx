import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { Sphere, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';

interface Country {
  name: string;
  lat: number;
  lng: number;
  flag: string;
}

const countries: Country[] = [
  { name: 'United Kingdom', lat: 51.5, lng: -0.12, flag: '🇬🇧' },
  { name: 'Canada', lat: 56.13, lng: -106.35, flag: '🇨🇦' },
  { name: 'Ireland', lat: 53.14, lng: -7.69, flag: '🇮🇪' },
  { name: 'Ukraine', lat: 48.38, lng: 31.17, flag: '🇺🇦' },
  { name: 'Italy', lat: 41.87, lng: 12.57, flag: '🇮🇹' },
  { name: 'New Zealand', lat: -40.9, lng: 174.89, flag: '🇳🇿' },
  { name: 'Bosnia', lat: 43.92, lng: 17.68, flag: '🇧🇦' },
  { name: 'Greece', lat: 39.07, lng: 21.82, flag: '🇬🇷' },
  { name: 'Mexico', lat: 23.63, lng: -102.55, flag: '🇲🇽' },
  { name: 'France', lat: 46.23, lng: 2.21, flag: '🇫🇷' },
  { name: 'Germany', lat: 51.17, lng: 10.45, flag: '🇩🇪' },
  { name: 'Spain', lat: 40.46, lng: -3.75, flag: '🇪🇸' },
  { name: 'Portugal', lat: 39.4, lng: -8.22, flag: '🇵🇹' },
  { name: 'Singapore', lat: 1.35, lng: 103.82, flag: '🇸🇬' },
  { name: 'Malaysia', lat: 4.21, lng: 101.98, flag: '🇲🇾' },
  { name: 'Australia', lat: -25.27, lng: 133.78, flag: '🇦🇺' },
];

function latLngToVector3(lat: number, lng: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -radius * Math.sin(phi) * Math.cos(theta);
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.sin(theta);
  return new THREE.Vector3(x, y, z);
}

function CountryPoint({ country, radius }: { country: Country; radius: number }) {
  const [hovered, setHovered] = useState(false);
  const position = useMemo(() => latLngToVector3(country.lat, country.lng, radius), [country, radius]);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(hovered ? 1.5 : 1);
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshStandardMaterial
          color={hovered ? '#FFD700' : '#FFD700'}
          emissive="#FFD700"
          emissiveIntensity={hovered ? 0.8 : 0.3}
        />
      </mesh>
      {hovered && (
        <Html distanceFactor={8} center>
          <div className="glass px-3 py-2 rounded-lg whitespace-nowrap pointer-events-none">
            <p className="text-foreground font-display text-sm font-semibold flex items-center gap-2">
              <span>{country.flag}</span>
              {country.name}
            </p>
            <p className="text-primary text-xs mt-1">Click to Apply →</p>
          </div>
        </Html>
      )}
    </group>
  );
}

function Globe() {
  const globeRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={globeRef}>
      {/* Globe sphere */}
      <Sphere args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#0a0a0a"
          metalness={0.3}
          roughness={0.8}
          transparent
          opacity={0.9}
        />
      </Sphere>
      
      {/* Globe wireframe */}
      <Sphere args={[2.02, 32, 32]}>
        <meshBasicMaterial color="#FFD700" wireframe opacity={0.15} transparent />
      </Sphere>
      
      {/* Equator ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.05, 0.01, 16, 100]} />
        <meshBasicMaterial color="#FFD700" opacity={0.3} transparent />
      </mesh>
      
      {/* Country points */}
      {countries.map((country) => (
        <CountryPoint key={country.name} country={country} radius={2.05} />
      ))}
    </group>
  );
}

export function DestinationsGlobe() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase mb-4 text-sm">
            Study Worldwide
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Gateway to <span className="gradient-text">Global Education</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore study destinations across 17+ countries. Hover over the globe to discover opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[500px] md:h-[600px] relative"
        >
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
            <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ffffff" />
            <Globe />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI - Math.PI / 4}
            />
          </Canvas>
          
          {/* Glow effect */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-primary/5 via-transparent to-transparent" />
        </motion.div>

        {/* Country Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mt-8"
        >
          {countries.map((country, index) => (
            <motion.span
              key={country.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className="px-4 py-2 glass rounded-full text-sm text-foreground hover:glow-yellow-sm 
                         hover:border-primary/50 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{country.flag}</span>
              {country.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
