'use client';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppStore } from '@/app/Context/store';

const CartItemPage = () => {
	const { addToCart, cartItems } = useAppStore();
	const [cartItem, setCartItem] = useState(null);
	console.log(cartItems);

	const router = useRouter();
	console.log(router);

	useEffect(() => {
		const fetchCartItem = async () => {
			try {
				const response = await axios.get(`fakestoreapi.com/products/${id}`);
				setCartItem(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		if (id) {
			fetchCartItem();
		}
	}, [id]);

	console.log(router.query.id);
	return (
		<>
			<div>id</div>
		</>
	);
};

export default CartItemPage;
