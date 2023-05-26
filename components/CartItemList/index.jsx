'use client';
import Link from 'next/link';
import CartItem from '../CartItem';
import { useState, useEffect } from 'react';
import { fetchProducts } from '@/app/api/fetchProducts';
import styles from './CartItemList.module.css';
import { useAppStore } from '../../app/Context/store';

const CartItemList = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [filteredProducts, setFilteredProducts] = useState([]);

	const { searchValue, setSearchValue } = useAppStore();

	useEffect(() => {
		setIsLoading(true);
		const fetchProductsData = async () => {
			const fetchedProducts = await fetchProducts();
			setProducts(fetchedProducts);
			setIsLoading(false);
		};
		fetchProductsData();
	}, []);

	useEffect(() => {
		const filteredBySearch = searchValue
			? products.filter(product => product.title.toLowerCase().includes(searchValue.toLowerCase()))
			: products;

		setFilteredProducts(filteredBySearch);
	}, [searchValue, products]);

	return (
		<div className={styles.productWrapper}>
			{isLoading ? (
				<p className='text-center text-2xl font-bold color-dark mb-2'>Йде загрузка товарів...</p>
			) : filteredProducts.length ? (
				filteredProducts.map(product => (
					<div className={styles.productLink} key={product.id}>
						<CartItem data={product} />
					</div>
				))
			) : (
				<p className='text-center font-bold color-dark mb-2'>Такого товару немає</p>
			)}
		</div>
	);
};

export default CartItemList;
