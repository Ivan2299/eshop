'use client';
import image from 'next/image';
const CartItem = ({ item }) => {
	return (
		<div>
			<h3>{item.name}</h3>
			<p>{item.price}</p>
		</div>
	);
};

export default CartItem;
