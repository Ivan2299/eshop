'use client';
import React, { Component } from 'react';
import s from './Sidebar.module.css';
import { useState, useEffect } from 'react';
import CartItem from '../CartItem';

const Sidebar = () => {
	const [category, setCategory] = useState('all');
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [activeCategory, setActiveCategory] = useState('all');

	const categories = ['all', 'jewelery', "men's clothing", 'electronics'];

	useEffect(() => {
		setIsLoading(true);
		fetch('https://fakestoreapi.com/products')
			.then(res => res.json())
			.then(data => setProducts(data));
		setIsLoading(false);
	}, [category]);

	const filteredProducts =
		category === 'all' ? products : products.filter(product => product.category === category);

	const setCategoryFilter = prop => {
		setCategory(prop);
		setActiveCategory(prop);
	};

	return (
		<div className={s.container}>
			<ul className={s.list}>
				<h2 className={s.title}>Товари за категоріями</h2>

				{categories.map(category => (
					<li
						className={`${s.listItem} ${category === activeCategory ? s.active : ''}`}
						key={category}
					>
						<button onClick={() => setCategoryFilter(category)}>{category}</button>
					</li>
				))}
			</ul>
			<div>
				<h1 className='text-2xl font-bold color-dark mb-2'>Всі товари</h1>
				<div className={`grid grid-cols-4 gap-4 ${s.products}`}>
					{isLoading ? (
						<p className='text-center  font-bold color-dark mb-2'>Йде загрузка товарів...</p>
					) : (
						filteredProducts.map(product => <CartItem key={product.id} data={product} />)
					)}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
