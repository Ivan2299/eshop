'use client';
import { useAppStore } from '../../app/Context/store';

import s from './cart.module.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const CartPage = () => {
	const { cartItems, searchValue, removeFromCart } = useAppStore();
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	useEffect(() => {
		const filteredBySearch = searchValue
			? cartItems.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
			: cartItems;

		const price = filteredBySearch.reduce((total, item) => total + item.price, 0);
		setTotalPrice(price.toFixed(2));

		setFilteredProducts(filteredBySearch);
	}, [searchValue, cartItems]);
	return (
		<div className={s.cart_section}>
			<h1 className={s.cart_title}>Кошик замовлень</h1>

			{cartItems.length === 0 ? (
				<>
					<div className={s.cart_empty}>На жаль, Ви ще нічого не додали до кошика</div>
					<Link href='/catalog' className={s.cart_back}>
						До каталогу
					</Link>
				</>
			) : (
				<div className={s.cart_products_container}>
					{filteredProducts?.map(item => (
						<div key={item.id} className={s.cart_product_container}>
							<Link className={s.cart_product_link_container} href={`/products/${item.id}`}>
								<img className={s.cart_product_image} src={item.image} alt={item.title} />
								<h3 className={s.cart_product_title}>{item.title}</h3>
								<p className={s.cart_product_price}>{item.price} $</p>
							</Link>
							<button
								className={s.cart_product_remove}
								onClick={() => {
									removeFromCart(item);
								}}
							>
								-
							</button>
						</div>
					))}
					<div className='flex items-center gap-4'>
						<button>
							<Link className={s.cart_product_order} href={'/'}>
								Оформити замовлення
							</Link>
						</button>
						<p className={s.cart_total_price}>Загальна сума: {totalPrice} $</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default CartPage;
