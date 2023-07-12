import { Canvas } from "@react-three/fiber";
import Room from "./components/Room";
import {
  SoftShadows,
  Float,
  CameraControls,
  Sky,
  PerformanceMonitor,
} from "@react-three/drei";

function App() {
  return (
    <Canvas camera={{ position: [5, 2, 10], fov: 50 }}>
      <CameraControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Room />
    </Canvas>
  );
}

export default App;
