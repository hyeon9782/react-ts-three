import { Canvas } from "@react-three/fiber";
import Room from "./components/Room";
import { CameraControls, OrbitControls } from "@react-three/drei";
import Room2 from "./components/Room2";
import Room3 from "./components/Room3";
import ThreeScene from "./components/ThreeScene";
import ObjModel from "./components/OBJModel";

function App() {
  return (
    <Canvas
      camera={{
        position: [30, 60, 70],
        fov: 75,
        near: 0.1,
        far: 1000,
      }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      {/* <Room /> */}
      {/* <Room3 /> */}
      <ObjModel />
      {/* <ThreeScene /> */}
      {/* <Room2 /> */}
      <OrbitControls makeDefault />
      {/* <CameraControls makeDefault /> */}
    </Canvas>
  );
}

export default App;
