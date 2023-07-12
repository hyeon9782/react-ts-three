import React, { useRef } from "react";

const Room = (props) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  return (
    <mesh {...props} scale={2} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};

export default Room;
