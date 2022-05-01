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

let App = () => {
    // function Camera(props) {
  //   const ref = useRef()
  //   console.log(ref)
  //   // ref.updateProjectionMatrix()
  //   return <perspectiveCamera ref={ref} {...props} />
  // }

  function MoveCamera(props) {

    useFrame((state) => {
      state.camera.zoom += 0.001
      
    })
    // return null
  }
  
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 1.2, 12]} fov={30} zoom={0.1} />
      {/* <Camera makeDefault position={[0, 1.2, 12]} fov={30} zoom={0.1} /> */}
      <Suspense fallback={null}>
        <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
        <ambientLight intensity={0.2} />

        <Car scale={1} position={[0, 0, 0]} rotation={[0, Math.PI / 5, 0]}/>
        
        <OrbitControls enablePan enableZoom enableRotate maxPolarAngle={Math.PI / 2.1} /> 
        {/*  minPolarAngle={Math.PI / 4.25} autoRotate autoRotateSpeed={1}  */}
      </Suspense>

      <Environment background near={1} far={10} resolution={256}>
        <mesh scale={10}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshBasicMaterial side={THREE.BackSide} color="silver" />
        </mesh>
      </Environment>

      <mesh scale={100}>
        <sphereGeometry args={[1, 64, 64]} />
        <LayerMaterial side={THREE.BackSide} >
          <Gradient colorA="#004e92" colorB="#000428" alpha={1}    />
          
        </LayerMaterial>
      </mesh>
      
      <MoveCamera />
    </Canvas>
  );
}


export default App;



