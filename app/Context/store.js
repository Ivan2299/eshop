'use client';
import { createContext, useContext, Dispatch, SetStateAction, useState } from 'react';
// Creating the user context
const Context = createContext();

// Making the function which will wrap the whole app using Context Provider
export default function AppStore({ children }) {
	const [searchValue, setSearchValue] = useState('');
	const [cartItems, setCartItems] = useState([]);

	function addToCart(item) {
		setCartItems([...cartItems, item]);
	}

	function removeFromCart(item) {
		const index = cartItems.indexOf(item);
		if (index > -1) {
			const newCartItems = [...cartItems];
			newCartItems.splice(index, 1);
			setCartItems(newCartItems);
		}
	}

	return (
		<Context.Provider value={{ searchValue, setSearchValue, cartItems, addToCart, removeFromCart }}>
			{children}
		</Context.Provider>
	);
}

// Make useContext Hook to easily use our context throughout the application
// Create a custom useContext hook to easily access our context
export function useAppStore() {
	return useContext(Context);
}
