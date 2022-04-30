import "./App.css"
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Lightformer } from "@react-three/drei";
import { Suspense } from "react";
import { useControls } from 'leva'

import Model from './components/Model';
import Car from './components/Car';
import Loader from './components/Loader';

// let Canvas = styled.canvas`
//   height: 100%;
//   width: 100%;
// `;

let App = () => {


  return (
    <Canvas camera={{ position: [0, 3, 12], fov: 30 }}>
      <Suspense fallback={null}>
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={1}  />
        <ambientLight intensity={1} />
        <Lightformer intensity={0.75} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
        {/* <Model castShadow receiveShadow/> */}
        <Car scale={1} position={[0, 0, 0]} rotation={[0, Math.PI / 5, 0]} />
        
        <OrbitControls enablePan enableZoom enableRotate/>
      </Suspense>
      
    </Canvas>
  );
}

export default App;
