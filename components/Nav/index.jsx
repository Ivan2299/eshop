import Image from 'next/image';
import Link from 'next/link';
import styles from './Nav.module.css';
import SearchInput from '../SearchInput/page';
import { useAppStore } from '@/app/Context/store';

function Nav() {
	const { cartItems } = useAppStore();
	return (
		<nav className={styles.nav}>
			<div className={styles.nav_container}>
				<Link href={'/'}>
					<div className={styles.logo}>
						<Image src='/icons/eshop.svg' width={167} height={38} alt='eshop' />
					</div>
				</Link>
				<SearchInput />
				<div className={styles.links}>
					<Link
						href={'/catalog'}
						className={`${styles.link} lg:inline-block lg:mt-0 hover:text-white mr-4`}
					>
						Каталог
					</Link>
					<Link
						href={'/payment'}
						className={`${styles.link} lg:inline-block lg:mt-0 hover:text-white mr-4`}
					>
						Оплата
					</Link>
					<Link
						href={'/delivery'}
						className={`${styles.link} lg:inline-block lg:mt-0 hover:text-white mr-4`}
					>
						Доставка
					</Link>
					<Link href={'/cart'}>
						<button type='button' className={`${styles.cartButton} relative`}>
							<Image src='/icons/cartIcon.svg' width={44} height={36} alt='cartIcon' />
							<span
								className={`${styles.cartCount} absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full`}
							>
								{cartItems.length}
							</span>
						</button>
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Nav;
