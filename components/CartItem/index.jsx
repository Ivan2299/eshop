'use client';
import styles from './CartItem.module.css';
import { useState, useEffect } from 'react';
import { useAppStore } from '../../app/Context/store';

const CartItem = ({ data }) => {
	const [addedToCart, setAddedToCart] = useState(false);

	const { addToCart, cartItems } = useAppStore();

	useEffect(() => {
		if (cartItems.some(cartItem => cartItem.id === data.id)) {
			setAddedToCart(true);
		} else {
			setAddedToCart(false);
		}
	}, [cartItems]);

	const handleAddToCart = data => {
		if (cartItems.some(cartItem => cartItem.title === data.title)) {
			setAddedToCart(true);
		} else {
			addToCart(data);
			setAddedToCart(true);
			console.log(data);
			console.log(cartItems);
		}
	};

	return (
		<div className={styles.productCard}>
			<img className={styles.productImage} src={data.image} alt={data.title} />
			<h3 className={styles.productTitle}>{data.title}</h3>
			<p className={styles.productPrice}>{data.price} $</p>
			<button
				onClick={() => {
					handleAddToCart(data);
				}}
				className={addedToCart ? styles.addedButton : styles.addButton}
			>
				{addedToCart ? 'У кошику' : 'До кошику'}
			</button>
			{/* Add other details */}
		</div>
	);
};

export default CartItem;
