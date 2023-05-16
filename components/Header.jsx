'use client';

import Nav from './Nav';

const Header = () => {
	return (
		<header className='sm:height-40 height-60 bg-[#000000]'>
			<div className='container mx-auto'>
				<Nav />
			</div>
		</header>
	);
};

export default Header;
