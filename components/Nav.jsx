'use client';
import Image from 'next/image';
import Link from 'next/link';

function Nav() {
	return (
		<nav className='flex items-center justify-between flex-wrap bg-[#000000]  p-6 sm:height-40 height-60  container mx-auto'>
			<Link href={'/'}>
				<div className='flex items-center flex-shrink-1 mr-6 cursor-pointer'>
					<Image src='/icons/eshop.svg' width={167} height={38} alt='eshop' />
				</div>
			</Link>
			<div>
				<div className='flex items-center relative w-full lg:w-[372px] ml-[23px]'>
					<Image
						className='rounded-full absolute left-3 top-50% color-[#CCCCCC]'
						src='/icons/searchIcon.svg'
						width={16}
						height={16}
						alt='searchIcon'
					/>
					<input
						className='appearance-none bg-[#fff] border-none w-full text-gray-700  py-3 px-10 focus:outline-none h-10 rounded-lg'
						type='text'
						onClick={() => {}}
						placeholder='Search'
						aria-label='Search'
					/>
					<button
						className='flex-shrink-0 bg-orange-500 absolute right-0 top-0 hover:opacity-75 text-sm  text-white py-1 px-2 rounded h-10 w-[78px]'
						type='button'
					>
						Шукати
					</button>
				</div>
			</div>
			<div className=' flex items-center justify-start font-normal  text-[16px] text-white lg:gap-[34px] gap-[10px] lg:mr-[20px] mr-[48px]'>
				<Link
					href={'/catalog'}
					className='block mt-4 lg:inline-block lg:mt-0   hover:text-white mr-4'
				>
					Каталог
				</Link>
				<Link
					href={'/payment'}
					className='block mt-4 lg:inline-block lg:mt-0   hover:text-white mr-4'
				>
					Оплата
				</Link>
				<Link
					href={'/delivery'}
					className='block mt-4 lg:inline-block lg:mt-0   hover:text-white mr-4'
				>
					Доставка
				</Link>
				<Link href={'/cart'}>
					<button type='button' className='relative'>
						<Image src='/icons/cartIcon.svg' width={44} height={36} alt='cartIcon' />
						<span className='absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 py-1   text-xs font-bold leading-none text-white bg-red-600 rounded-full'>
							1
						</span>
					</button>
				</Link>
			</div>
		</nav>
	);
}

export default Nav;
