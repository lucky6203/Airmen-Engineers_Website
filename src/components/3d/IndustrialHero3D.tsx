'use client';

// ============================================
// Airmen Engineers — 3D Hero Gallery
// ============================================

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshReflectorMaterial, Image as DreiImage, Float, Text } from '@react-three/drei';
import * as THREE from 'three';
import Scene3DWrapper from './Scene3DWrapper';

const IMAGES = [
  { url: '/images/banner-1.jpg', title: 'Kaeser Compressors' },
  { url: '/images/banner-2.jpg', title: 'Industrial Solutions' },
  { url: '/images/banner-3.jpg', title: 'EP Forklifts' },
  { url: '/images/banner-4.jpg', title: 'Greaves Power' },
  { url: '/images/banner-5.jpg', title: 'AIRpipe Systems' }
];

function Carousel() {
  const groupRef = useRef<THREE.Group>(null);
  const radius = 3.5;

  useFrame((state) => {
    if (groupRef.current) {
      // Rotate the entire carousel slowly
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.5, -2]}>
      {IMAGES.map((img, index) => {
        const angle = (index / IMAGES.length) * Math.PI * 2;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;

        return (
          <Float key={img.url} speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
            <group position={[x, 0, z]} rotation={[0, angle, 0]}>
              <DreiImage
                url={img.url}
                transparent
                opacity={0.9}
                scale={[3, 1.7]}
                toneMapped={false}
              />
              <mesh position={[0, 0, -0.01]}>
                <planeGeometry args={[3.1, 1.8]} />
                <meshBasicMaterial color="#D97706" />
              </mesh>
            </group>
          </Float>
        );
      })}
    </group>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        mirror={0.2}
        blur={[400, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={0.5}
        color="#0A1628"
        metalness={0.8}
        roughness={0.6}
      />
    </mesh>
  );
}

function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 1, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <fog attach="fog" args={['#0A1628', 5, 15]} />

      <ambientLight intensity={0.4} />
      <spotLight position={[0, 10, 0]} intensity={0.8} penumbra={1} color="#F59E0B" />
      <pointLight position={[-5, 2, 5]} intensity={0.5} color="#fff" />

      <Carousel />
      <Ground />

      <Environment preset="city" />
    </Canvas>
  );
}

export default function IndustrialHero3D() {
  return (
    <Scene3DWrapper className="w-full h-full">
      <HeroScene />
    </Scene3DWrapper>
  );
}
