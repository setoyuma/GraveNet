import React from 'react'
import Sidebar from '../components/Sidebar';

const Lifeforms = () => {
  return (
	  <div>
		  <Sidebar />
		  <ul>
			  <li className='flex justify-center'>
				  <div>
					  <div className=' bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-xy text-6xl text-white inline-blockalign-middle p-1'>
						  <h3 className=' h-20 overflow-clip bg-black text-center'>Lifeforms</h3>
					  </div>
				  </div>
			  </li>
		  </ul>
	</div>
  )
}

export default Lifeforms