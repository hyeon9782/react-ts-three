import { Image, Text, useGLTF } from "@react-three/drei";
import { useState } from "react";
import * as THREE from "three";

type Props = {
  position: [];
  rotation: [];
  scale: number;
  url: string;
};

const Information = () => {
  return (
    <mesh position={[0, 0, 0]}>
      <Text
        color="black"
        anchorX="center"
        anchorY="middle"
        position={[0, 1, 0]}
      >
        Wooden Chair (13.8$)
      </Text>
      <Image url="/chair.png" transparent position={[0, -3, 0]} scale={6} />
      {/* <boxGeometry args={[10, 10, 0.1]} /> */}
    </mesh>
  );
};

const Model = ({ position, rotation, scale, url }: Props) => {
  const gltf = useGLTF(url);
  const [active, setActive] = useState(false);
  return (
    <group onClick={() => setActive(!active)}>
      <primitive
        object={gltf.scene}
        position={position}
        rotation={rotation}
        scale={scale}
      />
      {active && <Information />}
    </group>
  );
};

export default Model;
