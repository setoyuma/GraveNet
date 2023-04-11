import { Canvas, useFrame } from "react-three-fiber";

import React, { useRef } from "react";
import { MeshPhongMaterial, OctahedronGeometry } from "three";
import { OrbitControls } from "@react-three/drei";

const Cubes = () => {
  const MyRotatingSquare = () => {
    const myMesh = useRef();

    useFrame(({ clock }) => {
      const a = clock.getElapsedTime();
      myMesh.current.rotation.y = a;
      myMesh.current.rotation.x = a;
    });

    return (
      <mesh ref={myMesh}>
        <boxGeometry args={ [3, 3, 3] }/>
        <meshPhongMaterial color="fuchsia" />
      </mesh>
    );
  };

  return (
    <div className="h-96">
      <Canvas>
        <OrbitControls />
        <MyRotatingSquare />
        <ambientLight intensity={0.1} />
        <directionalLight />
      </Canvas>
    </div>
  );
};

export default Cubes;
