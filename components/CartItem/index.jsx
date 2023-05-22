'use client';

import styles from './CartItem.module.css';

const CartItem = ({ data: { image, title, price } }) => {
	return (
		<div className={styles.productCard}>
			<img className={styles.productImage} src={image} alt={title} />
			<h3 className={styles.productTitle}>{title}</h3>
			<p className={styles.productPrice}>{price} $</p>
			<button onClick={() => {}} className={styles.addButton}>
				До Кошика
			</button>
			{/* Add other details */}
		</div>
	);
};

export default CartItem;
