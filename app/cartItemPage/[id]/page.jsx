'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppStore } from '@/app/Context/store';

import s from './CartItemPageId.module.css';
import CartItem from '@/components/CartItem';

const CartItemPageId = ({ params }) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const { addToCart, removeFromCart, cartItems } = useAppStore();
	const [cartItem, setCartItem] = useState(null);
	const [relatedProducts, setRelatedProducts] = useState([]);

	useEffect(() => {
		const fetchCartItem = async () => {
			try {
				const response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
				const data = await response.json(response.data);
				setCartItem(data);

				const relatedResponse = await fetch(
					`https://fakestoreapi.com/products/category/${data.category}`,
				);
				const relatedData = await relatedResponse.json(relatedResponse.data);
				setRelatedProducts(relatedData);
			} catch (error) {
				console.log(error);
			}
		};

		if (params.id) {
			fetchCartItem();
		}
	}, [params]);

	const isInCart = cartItems.some(item => item.id === cartItem?.id);

	const handleAddToCart = () => {
		addToCart(cartItem);
	};

	const handleRemoveFromCart = cartItem => {
		removeFromCart(cartItem);
	};

	return (
		<>
			{cartItem && (
				<>
					<div className={s.cart_products_container}>
						<div className={s.productCard}>
							<img className={s.productImage} src={cartItem.image} alt={cartItem.title} />
							<div className={s.productInfo}>
								<p className={s.productTitle}>{cartItem.title}</p>
								<p className={s.productPrice}>{cartItem.price} $</p>

								{isInCart ? (
									<button onClick={() => handleRemoveFromCart(cartItem)} className={s.addedButton}>
										Видалити з кошику
									</button>
								) : (
									<button onClick={handleAddToCart} className={s.addButton}>
										Додати до кошику
									</button>
								)}
							</div>
						</div>
						<div>
							<h2>Ще товари тієї ж категорії</h2>
							<div className={s.relatedProducts}>
								{relatedProducts?.map(item => (
									<CartItem key={item.id} data={item} />
								))}
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default CartItemPageId;
