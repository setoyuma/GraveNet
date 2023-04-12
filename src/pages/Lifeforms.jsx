import React, { Suspense } from 'react';
import Sidebar from '../components/Sidebar';
import Entry from '../components/Entry';
import { Canvas, useLoader } from 'react-three-fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { OrbitControls } from '@react-three/drei';
import LifeformEntry from '../components/LifeformEntry';
import Showcase from '../components/Showcase';

const Lifeforms = () => {
	return (
		<div>
			<div className='absolute right-0'>
				<div className=' text-white'>
					<Showcase>
						<div>
							<h3>Hello</h3>
						</div>
					</Showcase>
				</div>
			</div>
			<div className='flex space-between absolute top-60'>
				<Showcase footer_info={"12345 Experiments Cleared"} what_to_showcase={"Recent Life"}>
					<table className='w-full h-auto text-white'>
						<colgroup>
							{/* <col span={1} style={{backgroundColor:"red"}}/> */}
						</colgroup>
						<tr>
							<th className='border-2 text-center border-white'>LIFEFORMS</th>
							<th className='border-2 text-center border-white'>ID</th>
							<th className='border-2 text-center border-white'>AUTHOR</th>
						</tr>
						<tr>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>ert5</td>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>1</td>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>@seto</td>
						</tr>
						<tr>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>nnbmvbcd</td>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>2</td>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>@seto</td>
						</tr>
						<tr>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>njytrt</td>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>3</td>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>@seto</td>
						</tr>
						<tr>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>234r44tdf</td>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>4</td>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>@seto</td>
						</tr>
						<tr>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>awdedadas</td>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>5</td>
							<td className=' hover:bg-white hover:text-black border-2 text-center border-white'>@seto</td>
						</tr>
					</table>
				</Showcase>
			</div>
			<div className='absolute top-3/4'>
				<Showcase what_to_showcase={"Top Researchers"} footer_info={"12345 Lifeforms Documented"}>

				</Showcase>
			</div>
			<Sidebar />
			<div className='flex justify-center'>
				<div className=' bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-x p-1 rounded-sm'>
					<ul className='bg-background inline-block px-60 py-6'>
						<li className='flex justify-center'>
							<div>
								<div className=' bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-xy text-6xl text-white inline-blockalign-middle p-1'>
									<h3 className=' h-20 overflow-clip bg-black text-center'>Lifeforms</h3>
								</div>
							</div>
						</li>
						<li className='my-20'>
							<LifeformEntry life_form_name={"A Floor"} model_path={"scene.gltf"} />
							{/* <LifeformEntry model_type={"OBJ"} model_path={"shaders.obj"} /> */}
						</li>
						<li className='my-20'>
							<LifeformEntry life_form_name={"A Skull"} model_path={"scene.glb"} />
						</li>
					</ul>
				</div>

			</div>
		</div>
	);
};

export default Lifeforms;