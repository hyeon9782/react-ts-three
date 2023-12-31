import { useEffect, useRef } from "react";
import Model from "./Model";

const Room = (props) => {
  const roomRef = useRef(null);

  useEffect(() => {
    console.log(roomRef.current);
    console.log(roomRef.current.position.y);
  }, [roomRef]);
  return (
    <group>
      <group rotation={[0, 1, 0]} scale={2}>
        {/* 벽 */}
        {/* <mesh position={[0, 0, 0]}>
        <boxGeometry args={[10, 10, 10]} />
        <meshStandardMaterial color={"gray"} />
      </mesh> */}
        {/* 천장 */}
        <mesh position={[0, 5, 0]}>
          <boxGeometry args={[10, 0.1, 10]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
        {/* 바닥 */}
        <mesh position={[0, -5, 0]} ref={roomRef}>
          <boxGeometry args={[10, 0.1, 10]} />
          <meshStandardMaterial color="gray" />
        </mesh>

        {/* 좌측 벽 */}
        {/* <mesh position={[-5, 0, 0]}>
        <boxGeometry args={[1, 10, 10]} />
        <meshStandardMaterial color="gray" />
      </mesh> */}

        {/* 우측 벽 */}
        <mesh position={[5, 0, 0]}>
          <boxGeometry args={[0.1, 10, 10]} />
          <meshStandardMaterial color="gray" />
        </mesh>

        {/* 뒷벽 */}
        <mesh position={[0, 0, -5]}>
          <boxGeometry args={[10, 10, 0.1]} />
          <meshStandardMaterial color="gray" />
        </mesh>
      </group>
      {/* 의자 */}
      <Model position={[0, 5, 0]} url={"chair.glb"} rotation={[0, 3, 0]} />
    </group>
  );
};

export default Room;
