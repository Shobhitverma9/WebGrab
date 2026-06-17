'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export const HeroModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Gentle floating
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.05 - 0.5;

    // Waving animation on the right arm pivot
    if (rightArmRef.current) {
      // Fast wave
      rightArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 8) * 0.3 - 0.2;
    }

    // Head looking at pointer
    if (headRef.current && state.pointer) {
      // Map pointer coordinates to angles (-1 to 1)
      const targetX = (state.pointer.x || 0) * 0.6;
      const targetY = (state.pointer.y || 0) * 0.6;
      
      // Smooth interpolation for head turning
      headRef.current.rotation.y += (targetX - headRef.current.rotation.y) * 0.1;
      headRef.current.rotation.x += (-targetY - headRef.current.rotation.x) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={1.8}>
      
      {/* Head */}
      <mesh ref={headRef} position={[0, 1.4, 0]}>
        <sphereGeometry args={[0.35, 32, 32]} />
        <meshStandardMaterial color="#fcd3b6" roughness={0.4} />
        {/* Eyes */}
        <mesh position={[-0.12, 0.05, 0.3]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0.12, 0.05, 0.3]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color="#1a1a1a" />
        </mesh>
        {/* Smile */}
        <mesh position={[0, -0.1, 0.32]} rotation={[Math.PI / 8, 0, 0]}>
          <torusGeometry args={[0.1, 0.02, 16, 32, Math.PI]} />
          <meshBasicMaterial color="#1a1a1a" />
        </mesh>
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.0, 0]}>
        <cylinderGeometry args={[0.1, 0.12, 0.3, 16]} />
        <meshStandardMaterial color="#fcd3b6" roughness={0.4} />
      </mesh>

      {/* Body / Torso */}
      <mesh position={[0, 0.4, 0]}>
        <capsuleGeometry args={[0.3, 0.6, 16, 32]} />
        <meshStandardMaterial color="#ff2424" roughness={0.2} metalness={0.1} />
        {/* Detail on shirt */}
        <mesh position={[0, 0.1, 0.31]}>
          <circleGeometry args={[0.15, 32]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </mesh>

      {/* Left Arm (Relaxed) */}
      <group position={[-0.4, 0.8, 0]} rotation={[0, 0, Math.PI / 6]}>
        <mesh position={[0, -0.35, 0]}>
          <capsuleGeometry args={[0.1, 0.5, 16, 16]} />
          <meshStandardMaterial color="#ff2424" />
        </mesh>
        {/* Hand */}
        <mesh position={[0, -0.7, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#fcd3b6" />
        </mesh>
      </group>

      {/* Right Arm (Waving Pivot) */}
      <group position={[0.4, 0.8, 0]} ref={rightArmRef}>
        <mesh position={[0.2, 0.2, 0]} rotation={[0, 0, -Math.PI / 4]}>
          <capsuleGeometry args={[0.1, 0.5, 16, 16]} />
          <meshStandardMaterial color="#ff2424" />
        </mesh>
        {/* Hand */}
        <mesh position={[0.45, 0.45, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#fcd3b6" />
        </mesh>
      </group>

      {/* Legs */}
      {/* Left Leg */}
      <mesh position={[-0.15, -0.3, 0]}>
        <cylinderGeometry args={[0.12, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      {/* Right Leg */}
      <mesh position={[0.15, -0.3, 0]}>
        <cylinderGeometry args={[0.12, 0.1, 0.8, 16]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Feet */}
      <mesh position={[-0.15, -0.75, 0.05]}>
        <boxGeometry args={[0.15, 0.1, 0.25]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.15, -0.75, 0.05]}>
        <boxGeometry args={[0.15, 0.1, 0.25]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
      
    </group>
  );
};
