'use client';
import s from './cart.module.css';
import Link from 'next/link';

const CartPage = () => {
	return (
		<div className={s.cart_section}>
			<h1 className={s.cart_title}>Кошик замовлень</h1>
			<div className={s.cart_empty}>На жаль, Ви ще нічого не додали до кошика</div>
			<Link href='/' className={s.cart_back}>
				До каталогу
			</Link>
		</div>
	);
};

export default CartPage;
