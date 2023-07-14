import { Image, Text, useGLTF, BoxHelper } from "@react-three/drei";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
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

const Box = ({ box, scale }) => {
  const size = new THREE.Vector3();
  box.getSize(size);
  const scaledSize = size.multiplyScalar(scale);
  const center = new THREE.Vector3();
  box.getCenter(center);

  return (
    <mesh position={center}>
      <boxGeometry args={[scaledSize.x, scaledSize.y, scaledSize.z]} />
      <meshBasicMaterial color="orange" wireframe />
    </mesh>
  );
};

const Model = ({ position, rotation, scale, url }: Props) => {
  const gltf = useGLTF(url);
  console.log(gltf);
  const [active, setActive] = useState(false);
  const ref = useRef();
  const [bbox, setBbox] = useState<THREE.Box3 | null>(null);
  const [modelHeight, setModelHeight] = useState(0); // 모델 높이 저장

  const handleClick = (event) => {
    event.stopPropagation(); // 이벤트 버블링 중단
    setActive(!active);

    if (!bbox && ref.current) {
      // prettier-ignore
      const newBbox = (new THREE.Box3).setFromObject(ref.current);
      setBbox(newBbox);
      console.log(newBbox);
    }
  };

  useEffect(() => {
    if (!bbox && ref.current) {
      const newBbox = new THREE.Box3().setFromObject(ref.current);
      setBbox(newBbox);
      const size = new THREE.Vector3();
      newBbox.getSize(size);
      // 모델의 높이를 저장함 (y축에 해당)
      setModelHeight(size.y);
    }
  }, [bbox]);

  const modelPosition = [
    position[0],
    position[1] + modelHeight * 0.5 * scale,
    position[2],
  ];

  return (
    <group>
      <primitive
        object={gltf.scene}
        position={modelPosition}
        rotation={rotation}
        scale={scale}
        ref={ref}
        onClick={handleClick}
      />
      {active && bbox && (
        <>
          {/* <Information position={position} rotation={rotation} /> */}
          <Box box={bbox} scale={scale} />
        </>
      )}
    </group>
  );
};

export default Model;
