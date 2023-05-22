import Image from 'next/image';
import Link from 'next/link';
import SearchInput from './SearchInput/page';

function Nav() {
	return (
		<nav className='flex items-center justify-between gap-3 flex-wrap bg-[#000000]  p-6 sm:height-40 height-60  container mx-auto'>
			<Link href={'/'}>
				<div className='flex items-center flex-shrink-1 mr-6 cursor-pointer'>
					<Image src='/icons/eshop.svg' width={167} height={38} alt='eshop' />
				</div>
			</Link>
			<SearchInput />
			<div className='flex items-center justify-start font-normal text-[16px] text-white lg:gap-[34px] gap-[10px] lg:mr-[20px] mr-[48px]'>
				<Link
					href={'/catalog'}
					className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4'
				>
					Каталог
				</Link>
				<Link
					href={'/payment'}
					className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4'
				>
					Оплата
				</Link>
				<Link
					href={'/delivery'}
					className='block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4'
				>
					Доставка
				</Link>
				<Link href={'/cart'}>
					<button type='button' className='relative'>
						<Image src='/icons/cartIcon.svg' width={44} height={36} alt='cartIcon' />
						<span className='absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full'>
							1
						</span>
					</button>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
