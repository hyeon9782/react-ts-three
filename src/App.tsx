import { Canvas } from "@react-three/fiber";
import Room from "./components/Room";
import { CameraControls, OrbitControls } from "@react-three/drei";
import Room2 from "./components/Room2";

function App() {
  return (
    <Canvas
      camera={{
        position: [1, 1, 70],
        fov: 75,
        near: 0.1,
        far: 100,
      }}
    >
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Room />
      {/* <Room2 /> */}
      {/* <OrbitControls makeDefault /> */}
      <CameraControls makeDefault />
    </Canvas>
  );
}

export default App;
