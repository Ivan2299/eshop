'use client';

import Nav from '../Nav';
import s from './Header.module.css';

const Header = () => {
	return (
		<header className={`${s.header_fixed}`}>
			<div className='container mx-auto'>
				<Nav />
			</div>
		</header>
	);
};

export default Header;
