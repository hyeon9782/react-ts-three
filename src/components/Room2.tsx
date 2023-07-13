import React, { useRef } from "react";
import Model from "./Model";

const Room2 = () => {
  const roomRef = useRef(null);
  return (
    <group>
      <group rotation={[0, 1, 0]} scale={0.8}>
        {/* 천장 */}
        <mesh position={[0, 15, 0]}>
          <boxGeometry args={[50, 0.1, 50]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        {/* 바닥 */}
        <mesh position={[0, -15, 0]} ref={roomRef}>
          <boxGeometry args={[50, 0.1, 50]} />
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
      </group>
      <Model position={[20, -3, 3]} url={"chair.glb"} rotation={[0, 2.5, 0]} />
    </group>
  );
};

export default Room2;
