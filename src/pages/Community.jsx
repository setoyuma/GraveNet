import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Entry from '../components/Entry';

const Community = () => {
	const [value, setValue] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(`You Typed ${value}`)
	}
	return (
		<div>
			<Sidebar />
			<ul>
				<li className='flex justify-center'>
					<div className=' bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-xy text-6xl text-white inline-block relative p-1'>
						<div className='bg-black h-20'>
							<h3>Community</h3>
						</div>
					</div>
				</li>
				<li className='text-center'>
					<div className=' inline-block'>
						<div>
							<ul className=' my-52 p-1'>
								<li>
									<form onSubmit={handleSubmit} className=' bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-xy p-2'>
										<div className=' p-1'>
											<Entry>
												<form className='text-black'>
													<textarea value={value} onChange={(e) => setValue(e.target.value)} cols="30" rows="10"></textarea>
												</form>
												<input className='text-white cursor-pointer' type="submit" value="Enter" />
											</Entry>
										</div>
									</form>
								</li>
							</ul>
						</div>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default Community;