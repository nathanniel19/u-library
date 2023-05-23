import React from 'react';

import Navbar from './Navbar';

import { Canvas, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

import { Environment, OrbitControls } from '@react-three/drei';

import { Container } from '@mui/system';




const Scene = () => {
    const gltf = useLoader(GLTFLoader, '/Example/scene.gltf')
    return <primitive object = {gltf.scene} scale={0.01}/>
}

const Example3DModel = () => {
  return (
    <div>
      <Navbar />
        <Canvas style={{width: '100%', height: 600, alignContent: 'center'}}>
            <ambientLight intensity={0.2} />
            <directionalLight color='white' position={[0, 0, 5]} intensity={1}/>
            <Scene />
            <OrbitControls enableZoom='true' enablePan='true' />
        </Canvas>
        <Container sx={{mt: 2}}>
          <ul>
            <li>1. Bearing  P/N: 123840</li>
            <li>2. Gear  P/N: 671397</li>
            <li>3. Spring P/N: 248862</li>
            <li>4. Bolt  P/N: 831694</li>
          </ul>
        </Container>

    </div>
  )
}

export default Example3DModel