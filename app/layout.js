import './globals.css';
import { Roboto } from 'next/font/google';
import '@fontsource/roboto';

import styles from './layout.module.css';

import AppStore from './Context/store';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const roboto = Roboto({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	title: 'eShop',
	description: 'the best marketplace for e-commerce',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<AppStore>
				<body className={`${roboto.className}`}>
					<Header />
					<div className={`${styles.container}`}>{children}</div>
					<Footer />
				</body>
			</AppStore>
		</html>
	);
}
