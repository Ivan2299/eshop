import './globals.css';
import { Inter } from 'next/font/google';
import '@fontsource/roboto';

import styles from './layout.module.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'eShop',
	description: 'the best marketplace for e-commerce',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className}`}>
				<Header />
				<div className={`${styles.container}`}>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
