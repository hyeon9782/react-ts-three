import React, { useRef } from "react";

const Room = (props) => {
  return (
    <group rotation={[1, 1, 1]}>
      {/* 벽 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
      {/* 천장 */}
      <mesh position={[0, 5, 0]}>
        <boxGeometry args={[10, 1, 10]} />
        <meshStandardMaterial color={"gray"} />
      </mesh>
      {/* 바닥 */}
      <mesh position={[0, -5, 0]}>
        <boxGeometry args={[10, 1, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 좌측 벽 */}
      <mesh position={[-5, 0, 0]}>
        <boxGeometry args={[1, 10, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 우측 벽 */}
      <mesh position={[5, 0, 0]}>
        <boxGeometry args={[1, 10, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      {/* 뒷벽 */}
      <mesh position={[0, 0, -5]}>
        <boxGeometry args={[10, 10, 1]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* 의자 */}
      <mesh position={[1, -2, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
};

export default Room;
