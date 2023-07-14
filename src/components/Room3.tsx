import React from "react";
import Move from "./Move";
import Model from "./Model";
import { useGLTF } from "@react-three/drei";

useGLTF.preload("chair.glb");

const Room3 = () => {
  return (
    <group scale={0.8}>
      {/* 벽 */}
      <mesh position={[-25, 0, 0]}>
        <boxGeometry args={[0.1, 30, 50]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
      {/* 바닥 */}
      <mesh position={[0, -15, 0]}>
        <boxGeometry args={[50, 0.1, 50]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* 좌측 벽 */}
      <mesh position={[0, 0, 25]}>
        <boxGeometry args={[50, 30, 0.1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* 우측 벽 */}
      <mesh position={[25, 0, 0]}>
        <boxGeometry args={[0.1, 30, 50]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* 뒷벽 */}
      <mesh position={[0, 0, -25]}>
        <boxGeometry args={[50, 30, 0.1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* <Move /> */}
      <Model
        position={[0, 0, 0]}
        url={"chair.glb"}
        rotation={[0, 0, 0]}
        scale={1}
      />
    </group>
  );
};

export default Room3;
