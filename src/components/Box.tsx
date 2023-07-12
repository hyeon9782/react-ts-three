import * as THREE from "three";
import React, { useRef } from "react";
import { Canvas, useFrame, ThreeElements } from "@react-three/fiber";

const Box = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  return (
    <mesh {...props} ref={meshRef} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};

export default Box;
