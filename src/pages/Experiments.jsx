import React from 'react';
import Sidebar from '../components/Sidebar';

const Experiments = () => {
	return (
		<div>
			<Sidebar />
			<ul className=''>
				<li className='flex justify-center'>
					<div className=' bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-xy text-6xl text-white inline-block align-middle p-1'>
						<div className='bg-black'>
							<h3 className='text-6xl'>Experiments</h3>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Experiments;