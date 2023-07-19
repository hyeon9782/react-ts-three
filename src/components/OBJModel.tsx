import React, { useRef } from "react";
import * as THREE from "three";
import { useLoader, useThree } from "react-three-fiber";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";

const ThreeScene = () => {
  const { camera, scene, gl } = useThree();
  const controlsRef = useRef();
  const objectRef = useRef();

  // Load mtl and obj files using react-three-fiber hooks
  const mtlLoader = useLoader(MTLLoader, "path/to/model.mtl");
  const objLoader = useLoader(OBJLoader, "path/to/model.obj", (loader) => {
    mtlLoader.preload();
    loader.setMaterials(mtlLoader);
  });

  // Set up model position and scale
  objLoader.position.y = -0.95;
  objLoader.scale.setScalar(0.01);
  scene.add(objLoader);

  // Set up orbit controls
  useThree(() => ({
    camera,
    gl,
  }));

  return (
    <>
      <ambientLight color={0xffffff} intensity={1.0} />
      <pointLight color={0xffffff} intensity={15} position={[0, 0, 0]} />
      <primitive object={objLoader} ref={objectRef} />
      <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />
    </>
  );
};

export default ThreeScene;
