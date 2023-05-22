import axios from 'axios';

export const fetchProducts = async () => {
	try {
		const response = await axios.get('https://fakestoreapi.com/products?limit=4');
		return response.data;
	} catch (error) {
		console.error('Error fetching products:', error);
		return [];
	}
};
