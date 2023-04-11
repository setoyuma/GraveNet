import React from 'react';
import Sidebar from '../components/Sidebar';
import Entry from '../components/Entry';

const Logs = () => {
	return (
		<div>
			<Sidebar className=" py-96"/>
			<ul>
				<li className='flex justify-center'>
					<div >
						<div className=' bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-xy text-6xl text-white inline-blockalign-middle p-1'>
							<h3 className=' h-20 overflow-clip bg-black text-center'>Logs</h3>
						</div>
					</div >
				</li>
				<li className='py-20 float-right'>
					<ul className='flex-col'>
						<li className=' my-6'>
							<Entry>Your Momma</Entry>
						</li>
						<li className=' my-6'>
							<Entry>Your Mom</Entry>
						</li>
						<li className=' my-6'>
							<Entry>Your Unlce</Entry>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	);
};

export default Logs;