'use client';

import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

const SERVICES = [
  { label: 'SEO', color: '#ff2424' },
  { label: 'Web', color: '#ffffff' },
  { label: 'App', color: '#cc0000' },
  { label: 'AI', color: '#ff2424' },
  { label: 'Automation', color: '#ffffff' }
];

export const HeroModel = () => {
  const groupRef = useRef<THREE.Group>(null);
  const globeRef = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  const globeRadius = 2.0;
  const nodesRadius = 2.5;

  // Generate points for the high-tech globe using Fibonacci sphere algorithm
  const particlesCount = 2000;
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / particlesCount);
      const theta = Math.sqrt(particlesCount * Math.PI) * phi;
      
      positions[i * 3] = globeRadius * Math.cos(theta) * Math.sin(phi);
      positions[i * 3 + 1] = globeRadius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = globeRadius * Math.cos(phi);
    }
    return positions;
  }, [globeRadius]);

  // Generate coordinates for service nodes uniformly on the sphere
  const nodes = useMemo(() => {
    return SERVICES.map((service, index) => {
      const phi = Math.acos(1 - 2 * (index + 0.5) / SERVICES.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * index;
      
      const x = nodesRadius * Math.cos(theta) * Math.sin(phi);
      const y = nodesRadius * Math.sin(theta) * Math.sin(phi);
      const z = nodesRadius * Math.cos(phi);
      
      return { ...service, position: new THREE.Vector3(x, y, z) };
    });
  }, [nodesRadius]);

  const targetRotation = useRef(new THREE.Vector2(0, 0));

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Constant slow rotation for the globe
    groupRef.current.rotation.y += delta * 0.15;
    
    // Mouse parallax interaction (subtle tilt)
    targetRotation.current.x = (mouse.y * viewport.height) * 0.05;
    targetRotation.current.y = (mouse.x * viewport.width) * 0.05;
    
    // Smoothly interpolate to target rotation for the parallax effect
    groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.z += (-targetRotation.current.y - groupRef.current.rotation.z) * 0.05;
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* High-tech dotted Globe */}
      <points ref={globeRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlesPosition, 3]}
          />
        </bufferGeometry>
        <pointsMaterial 
          size={0.02} 
          color="#ff0000" 
          transparent 
          opacity={0.4} 
          sizeAttenuation 
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </points>

      {/* Ambient Inner Glow for the globe */}
      <mesh>
        <sphereGeometry args={[globeRadius * 0.95, 32, 32]} />
        <meshStandardMaterial 
          color="#050505" 
          emissive="#110000"
          roughness={0.9}
          metalness={0.1}
          transparent 
          opacity={0.85} 
        />
      </mesh>

      {/* Service Nodes & Labels */}
      {nodes.map((node, i) => (
        <group key={i} position={node.position}>
          {/* Core Node Point */}
          <mesh>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={2} roughness={0.2} metalness={0.8} />
          </mesh>
          
          {/* Outer Glow for Node */}
          <mesh>
            <sphereGeometry args={[0.2, 16, 16]} />
            <meshBasicMaterial color={node.color} transparent opacity={0.2} blending={THREE.AdditiveBlending} depthWrite={false} />
          </mesh>
          
          {/* Connecting Line to Globe Surface */}
          <lineSegments>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                args={[
                  new Float32Array([
                    0, 0, 0, // Node position (relative to this group)
                    -node.position.x * 0.125, -node.position.y * 0.125, -node.position.z * 0.125 // Vector towards center
                  ]),
                  3
                ]}
              />
            </bufferGeometry>
            <lineBasicMaterial color={node.color} transparent opacity={0.3} blending={THREE.AdditiveBlending} depthWrite={false} />
          </lineSegments>
          
          {/* 3D Text Label */}
          <Text
            position={[0, 0.35, 0]}
            fontSize={0.25}
            color={node.color}
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.015}
            outlineColor="#000000"
          >
            {node.label}
          </Text>
        </group>
      ))}
    </group>
  );
};
