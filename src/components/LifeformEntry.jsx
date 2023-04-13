import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { useGLTF, useAnimations, Environment } from "@react-three/drei";
import Entry from './Entry';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { OrbitControls } from '@react-three/drei';
import { ObjectLoader } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import * as THREE from 'three'
import Showcase from './Showcase';

const LifeformEntry = ({ model_path, model_type, life_form_name }) => {
	const GLTFScene = ({ path }) => {
		const gltf = useLoader(GLTFLoader, `${path}`);
		let mixer
		if (gltf.animations.length) {
			console.log(gltf.animations.length);
			mixer = new THREE.AnimationMixer(gltf.scene);
			gltf.animations.forEach(clip => {
				const action = mixer.clipAction(clip)
				action.play();
			});
		}
		useFrame((state, delta) => {
			mixer?.update(delta)
		})
		return (
			<primitive object={gltf.scene} scale={1} />
		);
	};
	// const gltf = useLoader(GLTFLoader, `${model_path}`);
	// const model_animations = useAnimations(gltf);
	// useEffect(() => {
	// model_animations.actions[model_animations.names].play();
	// }, []);
	const OBJScene = ({ path }) => {
		const obj = useLoader(OBJLoader, `${path}`);
		return (
			<primitive object={obj} scale={0.03} />
		);
	};
	return (
		<div>
			<h1 className="text-white text-3xl text-right p-1">Lifeform #0</h1>

			<Showcase what_to_showcase={life_form_name} title={life_form_name ? life_form_name : ""}>
				<Canvas style={{ display: 'inline-block', height: 320 }}>
					<Suspense>
						{/* <OBJScene path={model_path} /> */}
						<GLTFScene path={model_path} />
						{/* model_type === "OBJ" ? <OBJScene path={model_path} /> : <GLTFScene path={model_path} /> */}
						<ambientLight />
						<OrbitControls />
					</Suspense>
				</Canvas>
			</Showcase	>
		</div>
	);
};

export default LifeformEntry;