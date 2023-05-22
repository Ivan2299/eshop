'use client';
import axios from 'axios';
import Link from 'next/link';
import CartItem from '../CartItem';
import { useState, useEffect } from 'react';
import { fetchProducts } from '@/app/utils/fetchProducts';
import styles from './CartItemList.module.css';

const CartItemList = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchProductsData = async () => {
			const fetchedProducts = await fetchProducts();
			setProducts(fetchedProducts);
			setIsLoading(false);
		};
		fetchProductsData();
	}, []);

	return (
		<div className={styles.productWrapper}>
			{isLoading ? (
				<p className='text-center text-2xl font-bold color-dark mb-2'>Йде загрузка товарів...</p>
			) : (
				products?.map(product => (
					<Link className={styles.productLink} key={product.id} href={`/cartItemPage`}>
						<CartItem data={product} />
					</Link>
				))
			)}
		</div>
	);
};

export default CartItemList;
