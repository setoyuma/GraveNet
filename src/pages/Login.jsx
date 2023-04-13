import React from 'react';
import LFSlider from '../components/life_forms/LifeformSlider';
import Entry from '../components/Entry';
import Showcase from '../components/Showcase';

const Login = () => {
	return (
		<div className='text-white'>
			<div className=' bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-xy text-6xl text-white inline-blockalign-middle p-1'>
				<div className='bg-black'>
					<h3>LOGIN</h3>
				</div>
			</div>
			<ul className='flex space-between'>
				<li className='bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-x w-96 my-32 h-1/2 flex justify-center rounded-2xl'>
					<div className='h-96 w-72 p-1 my-16 bg-black rounded-lg'>
						<h3 className='text-white'>Gravenet</h3>
						<hr />
						<form className=' my-10 inline-block p-1'>
							<div className='flex-col'>
								<ul className='text-black'>
									<li className=' border-2 border-white'>
										<input className='w-60' type="text" name="username" placeholder='username' />
									</li>
									<li className=' border-2 border-white my-6'>
										<input className='w-60' type="text" name="password" placeholder='password' />
									</li>
								</ul>
							</div>
							<input className='hover:shadow-lg hover:shadow-white transition-shadow duration-700 delay-75 ease-in-out cursor-pointer border-2 p-2 w-32 my-32 float-right rounded-lg' type="submit" value="Login" />
						</form>
					</div>
				</li>
				<li className='mt-20 ml-80'>
					<Entry title={""}>
						<div className='flex justify-center '>
							<LFSlider />
						</div>
					</Entry>
				</li>
			</ul>
		</div>
	);
};

export default Login;