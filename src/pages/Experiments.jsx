import React from 'react'
import Sidebar from '../components/Sidebar';

const Experiments = () => {
  return (
	  <div className='flex justify-center'>
		  <Sidebar />
		  <div className=' bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-xy text-6xl text-white inline-block align-middle p-1'>
			  <div className='bg-black'>
				  <ul className='text-3xl text-white '>
					  <li>
						  <h3 className='text-6xl'>Experiments</h3>
					  </li>
				  </ul>
			  </div>
		  </div>
	</div>
  )
}

export default Experiments