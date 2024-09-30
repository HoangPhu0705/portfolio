import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import PropTypes from 'prop-types';  // Import prop-types
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Float
      speed = {1.75} 
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight />
      <directionalLight/>
      <mesh

        scale={2.75}
      > 
        <sphereGeometry  />
        <meshBasicMaterial
          color='#fff8eb'

        />

        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          flatShading
          map={decal}
        />
      </mesh>

    </Float>
  )
}

Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired,  
};


const BallCanvas = ({icon}) => {
  return (
    <Canvas
      frameloop='demand'
      gl = {{preserveDrawingBuffer: true}}
    >
      <Suspense>
        <OrbitControls 
          enableZoom = {false}
        />

        <Ball imgUrl = {icon}/>

        <Preload all/>
      </Suspense>


    </Canvas>
  )
}

BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired,  
};

export default BallCanvas 