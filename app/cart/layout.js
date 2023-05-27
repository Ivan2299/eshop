'use client';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import s from './layout.module.css';
export default function Layout({ children }) {
	return (
		<div>
			{/* <Header /> */}
			<main className={s.main}>{children}</main>
			{/* <Footer /> */}
			{/* Include any cart-specific footer content */}
		</div>
	);
}
