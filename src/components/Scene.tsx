import { Float, MeshTransmissionMaterial, OrbitControls, Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Mesh } from "three";
import * as THREE from "three";

function Core() {
  const mesh = useRef<Mesh>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: 34 }, (_, index) => {
        const angle = index * 0.74;
        const radius = 1.5 + (index % 5) * 0.16;
        return [Math.cos(angle) * radius, Math.sin(index * 1.17) * 0.55, Math.sin(angle) * radius] as const;
      }),
    []
  );

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.16;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.24;
  });

  return (
    <group>
      <Float speed={1.8} rotationIntensity={0.45} floatIntensity={0.7}>
        <mesh ref={mesh}>
          <icosahedronGeometry args={[1.05, 2]} />
          <MeshTransmissionMaterial
            backside
            samples={8}
            thickness={0.7}
            chromaticAberration={0.15}
            anisotropy={0.2}
            distortion={0.35}
            distortionScale={0.25}
            temporalDistortion={0.08}
            color="#7bdcff"
            roughness={0.18}
            metalness={0.1}
          />
        </mesh>
      </Float>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={nodes.length * 2}
            array={
              new Float32Array(
                nodes.flatMap((node) => [0, 0, 0, node[0], node[1], node[2]])
              )
            }
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#4fe5ff" transparent opacity={0.22} />
      </lineSegments>
      {nodes.map((node, index) => (
        <mesh key={index} position={node}>
          <sphereGeometry args={[0.035 + (index % 4) * 0.01, 16, 16]} />
          <meshStandardMaterial color={index % 2 ? "#ffb020" : "#8cffc1"} emissive={index % 2 ? "#5a3300" : "#0f5a3a"} />
        </mesh>
      ))}
    </group>
  );
}

export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0.3, 5.2], fov: 42 }} dpr={[1, 1.6]}>
      <color attach="background" args={["#05060a"]} />
      <ambientLight intensity={0.65} />
      <pointLight position={[3, 4, 3]} intensity={16} color="#60efff" />
      <pointLight position={[-4, -2, 2]} intensity={10} color="#ffb020" />
      <Core />
      <Stars radius={60} depth={24} count={900} factor={3.2} saturation={0} fade speed={0.55} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.45} />
    </Canvas>
  );
}
