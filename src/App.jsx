import "./App.css"
import { Suspense, useEffect, useState, useRef} from "react";
import styled from 'styled-components';
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Lightformer, GradientTexture, Environment, Float, ContactShadows, PerspectiveCamera } from "@react-three/drei";
import { useControls } from 'leva'
import { LayerMaterial, Base, Depth, Noise, Gradient, Color } from 'lamina'


import Model from './components/Model';
import Car from './components/Car';
import Loader from './components/Loader';

function MoveCamera(props) {

  useFrame((state) => {
    state.camera.lookAt(0.22, 0, 0)

    const vec = new THREE.Vector3();
    let time = state.clock.elapsedTime
    state.camera.position.lerp(vec.set(Math.sin(time / 2.5) + 0.6, 0.1, 15 + Math.cos(time / 2.5)), 0.1)

  })
}

let App = () => {
  
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[1, 0.1, 15]} fov={30} zoom={1.6} />
      <Suspense fallback={null}>
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
        <ambientLight intensity={0.2} />

        <Car scale={1} position={[0, 0, 0]} rotation={[0, Math.PI / 5, 0]}/>
        
        {/* <OrbitControls makeDefault enablePan enableZoom enableRotate maxPolarAngle={Math.PI / 2.1} />  */}
        <MoveCamera />
      </Suspense>

      <Environment background near={1} far={300} resolution={256}>
        <mesh scale={10}>
          <sphereGeometry args={[1, 128, 128]} />
          <meshBasicMaterial side={THREE.BackSide} color="silver" />
        </mesh>
      </Environment>

      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide} >
          <Gradient colorA="#1F41E9" colorB="#1E41EB" alpha={1.0}    />
          
        </LayerMaterial>
      </mesh>
      
      
    </Canvas>
  );
}


export default App;



