// components/ThreeDBackground.js
"use client";

import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';

function Cubes() {
  const group = useRef();
  
  // Animate the cubes to rotate slowly
  useFrame(() => {
    if (group.current) {
      group.current.rotation.x += 0.0005;
      group.current.rotation.y += 0.0008;
    }
  });

  const positions = [];
  const numCubes = 150;
  for (let i = 0; i < numCubes; i++) {
    positions.push([
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 50,
      (Math.random() - 0.5) * 50
    ]);
  }

  return (
    <group ref={group}>
      {positions.map((position, index) => (
        <mesh key={index} position={position}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#888888" emissive="#1a1a1a" />
        </mesh>
      ))}
    </group>
  );
}

export default function ThreeDBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-20">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Cubes />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      </Canvas>
    </div>
  );
}