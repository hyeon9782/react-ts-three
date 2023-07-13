import { Image, Text, useGLTF, BoxHelper } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type Props = {
  position: [];
  rotation: [];
  scale: number;
  url: string;
};

const Information = ({ position, rotation }) => {
  return (
    <group position={position}>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[0, 7, 0]}
      >
        Wooden Chair (13.8$)
      </Text>
      <Image url="/chair.png" transparent position={[0, 3, 0]} scale={6} />
    </group>
  );
};

const Model = ({ position, rotation, scale, url }: Props) => {
  const gltf = useGLTF(url);
  const modelRef = useRef(null);
  const boxRef = useRef(null);
  const [active, setActive] = useState(true);

  //   // 모델 로딩 후 바운딩 박스 업데이트
  //   useEffect(() => {
  //     const box = new THREE.Box3().setFromObject(modelRef.current);
  //     boxRef.current = box;
  //   }, [gltf]);

  //   setActive(false);

  useEffect(() => {
    setActive(false);
  }, []);

  const handleClick = (event) => {
    event.stopPropagation(); // 이벤트 버블링 중단
    setActive(!active);
  };
  return (
    <group>
      <primitive
        object={gltf.scene}
        position={position}
        rotation={rotation}
        scale={scale}
        ref={modelRef}
        onClick={handleClick}
      />
      {/* {boxRef.current && (
        <BoxHelper args={[boxRef.current]}>
          <mesh onClick={handleClick}>
            <boxGeometry args={[1, 1, 1]} />
            <meshBasicMaterial color={0x00ff00} opacity={0.9} transparent />
          </mesh>
        </BoxHelper>
      )} */}
      {active && <Information position={position} rotation={rotation} />}
    </group>
  );
};

export default Model;
