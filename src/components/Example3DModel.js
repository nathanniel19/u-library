import React from 'react';

import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

import { Environment, OrbitControls } from '@react-three/drei';




const Scene = () => {
    const fbx = useLoader(FBXLoader, './Piston.fbx')
    return <primitive object = {fbx} scale={0.05}/>
}

const Example3DModel = () => {
  return (
    <div>
        <Canvas style={{width: '100%', height: 600, alignContent: 'center'}}>
            <ambientLight intensity={1} />
            <ambientLight intensity={5} />

            <directionalLight color='white' position={[0, 0, 5]} intensity={1}/>
        
            <Scene />
            <OrbitControls />
            
            
            
        </Canvas>

    </div>
  )
}

export default Example3DModel