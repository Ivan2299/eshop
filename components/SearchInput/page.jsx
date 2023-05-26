import Image from 'next/image';
import React, { useState } from 'react';

import { MdClear } from 'react-icons/md';

import { useAppStore } from '../../app/Context/store';

import styles from './SearchInput.module.css';

const SearchInput = () => {
	const { searchValue, setSearchValue } = useAppStore();

	const handleInputChange = e => {
		setSearchValue(e.target.value);
	};

	const handleSearch = searchValue => {
		setSearchValue('');
	};

	return (
		<div className={styles.searchInput}>
			<Image
				className={styles.searchIcon}
				src='/icons/searchIcon.svg'
				width={16}
				height={16}
				alt='searchIcon'
			/>
			<input
				className={styles.searchBox}
				type='text'
				value={searchValue}
				onChange={handleInputChange}
				placeholder='Пошук'
				aria-label='Search'
			/>

			{searchValue ? <MdClear onClick={handleSearch} className={styles.clearButton} /> : ''}

			<button className={styles.searchButton} onClick={handleSearch} type='button'>
				Шукати
			</button>
		</div>
	);
};

export default SearchInput;
