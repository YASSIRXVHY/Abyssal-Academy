/**
 * FloatingShape - Education-themed 3D element
 * Abstract brain/neural network representing learning & knowledge
 */

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Neural network / brain-like structure
function NeuralBrain() {
  const groupRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  // Create neural nodes (brain structure)
  const { nodePositions, connectionLines } = useMemo(() => {
    const nodes: number[] = [];
    const lines: number[] = [];
    
    // Create brain-like distribution - two hemispheres
    const nodeCount = 40;
    const nodeArray: THREE.Vector3[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      // Spherical distribution with brain-like shape
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      // Bias toward center for brain shape
      const r = 1.2 + Math.random() * 0.8;
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta) * 0.8; // Slightly flattened
      const z = r * Math.cos(phi);
      
      // Offset to right side of screen
      nodes.push(x + 3.5, y, z);
      nodeArray.push(new THREE.Vector3(x + 3.5, y, z));
    }
    
    // Create connections between nearby nodes (neural pathways)
    for (let i = 0; i < nodeArray.length; i++) {
      for (let j = i + 1; j < nodeArray.length; j++) {
        const dist = nodeArray[i].distanceTo(nodeArray[j]);
        if (dist < 1.2 && Math.random() > 0.6) {
          lines.push(
            nodeArray[i].x, nodeArray[i].y, nodeArray[i].z,
            nodeArray[j].x, nodeArray[j].y, nodeArray[j].z
          );
        }
      }
    }
    
    return {
      nodePositions: new Float32Array(nodes),
      connectionLines: new Float32Array(lines)
    };
  }, []);

  useFrame((state) => {
    if (!groupRef.current || !particlesRef.current) return;
    const time = state.clock.elapsedTime;
    
    // Slow gentle rotation like a floating brain
    groupRef.current.rotation.y = time * 0.03;
    groupRef.current.rotation.z = Math.sin(time * 0.1) * 0.05;
    
    // Breathing/pulsing effect
    const scale = 1 + Math.sin(time * 0.5) * 0.02;
    groupRef.current.scale.set(scale, scale, scale);
    
    // Gentle floating
    groupRef.current.position.y = Math.sin(time * 0.3) * 0.15;
  });

  return (
    <group ref={groupRef}>
      {/* Neural nodes */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[nodePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#ffffff"
          transparent
          opacity={0.6}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* Neural connections */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[connectionLines, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#444444"
          transparent
          opacity={0.3}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      
      {/* Central glow core */}
      <mesh>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshBasicMaterial
          color="#222222"
          transparent
          opacity={0.15}
          wireframe
        />
      </mesh>
    </group>
  );
}

// Ambient floating particles around the brain
function AmbientParticles() {
  const count = 25;
  const pointsRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = 2 + Math.random() * 5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#666666"
        transparent
        opacity={0.25}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Scene composition
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <NeuralBrain />
      <AmbientParticles />
    </>
  );
}

export default function FloatingShape() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
