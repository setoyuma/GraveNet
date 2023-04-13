import React from 'react';

const Showcase = ({ what_to_showcase, footer_info, children }) => {
	return (
		<div id='outer container' className='m-0 h-96 w-96 bg-gradient-to-r from-teal-700 via-fuchsia-500 to-black animate-gradient-y p-1 '>
			<div id='container' className='bg-black h-full p-2 '>
				<div id='bg' className='bg-white p-1 inline-block w-full'>
					<div className='text-white bg-black text-center flex space-between gap-10'>
						<p className='px-1'>{ what_to_showcase }</p>
					</div>
				</div>
				<hr />
				<div>
					{children}
				</div>
			</div>
			<div className='text-white text-center flex space-between gap-10'>
				<h3> { footer_info } </h3>
			</div>
		</div>
	);
};

export default Showcase;