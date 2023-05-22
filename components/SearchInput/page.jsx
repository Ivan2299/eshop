import Image from 'next/image';
import React, { useState } from 'react';

const SearchInput = () => {
	const [searchQuery, setSearchQuery] = useState('');

	const handleInputChange = e => {
		setSearchQuery(e.target.value);
	};

	const handleSearch = () => {
		// perform search operation here
	};

	return (
		<div className='flex items-center relative w-full lg:w-[372px]'>
			<Image
				className='rounded-full absolute left-3 top-50% color-[#CCCCCC]'
				src='/icons/searchIcon.svg'
				width={16}
				height={16}
				alt='searchIcon'
			/>
			<input
				className='appearance-none bg-[#fff] border-none w-full text-gray-700 py-3 px-10 focus:outline-none h-10 rounded-lg'
				type='text'
				value={searchQuery}
				onChange={handleInputChange}
				placeholder='Пошук'
				aria-label='Search'
			/>
			<button
				className='transition ease-in-out bg-orange-500 absolute right-0 top-0 hover:bg-[red] text-sm text-white py-1 px-2 rounded h-10 w-[78px]'
				onClick={handleSearch}
				type='button'
			>
				Шукати
			</button>
		</div>
	);
};

export default SearchInput;
