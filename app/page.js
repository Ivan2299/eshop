import CartItemList from '@/components/CartItemList';
import Slider from '@/components/Slider';
export default function Home() {
	return (
		<main className='container mx-auto mt-[20px] lg:mt-[31px] mb-[20px] lg:mb-[49px]'>
			<Slider />
			<CartItemList />
		</main>
	);
}
