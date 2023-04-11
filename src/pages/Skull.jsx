import { Canvas, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

import React, { Suspense } from 'react';
import { Environment, OrbitControls } from '@react-three/drei';
import Sidebar from '../components/Sidebar';

const Skull = () => {
	const Scene = () => {
		const fbx = useLoader(FBXLoader,"Skull2.fbx")
		return (
			<primitive object={fbx} scale={ 0.03} />
		)
	}
	return (
		<div>
			<Sidebar />
			<Canvas>
				<Suspense>
					<Scene />
					<ambientLight />
					<OrbitControls />
				</Suspense>
			</Canvas>
		</div>
	);
};

export default Skull;