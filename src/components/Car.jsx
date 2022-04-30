import React, { useRef, useMemo, useEffect  } from 'react'
import { useGLTF  } from '@react-three/drei'
import { applyProps, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export default function Car(props) {
  const { scene, nodes, materials } = useGLTF('gltfs/car/scene.gltf')
  
  
  useMemo(() => {
    // console.log(nodes);
    Object.values(nodes).forEach((node) => {
      
    });
    
    Object.values(nodes).forEach((node) => {
      if (node.isMesh) {
        // console.log(node.material.name);
        node.receiveShadow = node.castShadow = true
        // console.log(node.receiveShadow, node.castShadow)
        applyProps(materials.rubber, { color: '#222', roughness: 0.6, roughnessMap: null, normalScale: [4, 4] })
        applyProps(materials.window, { color: '#000', roughness: 0.3, clearcoat: 0 })
        applyProps(materials.coat, { envMapIntensity: 4, roughness: 0.5, metalness: 1 })
        applyProps(materials.paint, { roughness: 0.5, metalness: 0.8, color: '#6c9fce', envMapIntensity: 2 })
        // applyProps(materials.plastic, { roughness: 0.5, metalness: 0.8, color: '#424d59', envMapIntensity: 2 })
      }
    })
  }, [nodes, materials])
  
  return <primitive object={scene} {...props} />

}

