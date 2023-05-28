import s from './catalog.module.css';
import Sidebar from '@/components/Sidebar/page';

import { Metadata } from 'next';
export const metadata = {
	title: 'Catalog',
	description: 'Welcom to Catalog page',
};

const Catalog = () => {
	return (
		<main>
			<Sidebar />
		</main>
	);
};

export default Catalog;
