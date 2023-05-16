'use client';

import CartItem from '../CartItem/CartItem';
import { useEffect, useState } from 'react';
const CartItemList = () => {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const fetchCartItems = async () => {
			try {
				const response = await fetch('https://fakeapi.com/cartitems');
				const data = await response.json();
				setCartItems(data);
			} catch (error) {
				console.error('Error fetching cart items:', error);
			}
		};

		fetchCartItems();
	}, []);

	return (
		<div>
			{cartItems.map(item => (
				<CartItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default CartItemList;
