'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function NotFound() {
	const router = useRouter();

	useEffect(() => {
		const redirect = setTimeout(() => {
			router.push('/');
		}, 2000);

		return () => {
			clearTimeout(redirect);
		};
	}, []);

	return (
		<div>
			<h2>Не знайдено </h2>
			<p>Не можу знайти сторінку</p>
			<p>
				<Link href='/'>До головної сторінки</Link>
			</p>
		</div>
	);
}
