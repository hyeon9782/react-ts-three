import { Canvas } from "@react-three/fiber";
import Room from "./components/Room";

import Box from "./components/Box";
import {
  SoftShadows,
  Float,
  CameraControls,
  Sky,
  PerformanceMonitor,
  OrbitControls,
} from "@react-three/drei";

function App() {
  return (
    <Canvas
      camera={{
        position: [1, 1, 30],
        fov: 75,
        near: 0.1,
        far: 100,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Room />
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
