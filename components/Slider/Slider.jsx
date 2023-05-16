'use client';
// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

export default () => {
	return (
		<Swiper
			// install Swiper modules
			modules={[Pagination, Autoplay]}
			spaceBetween={20}
			slidesPerView={1}
			// autoplay={{
			// 	delay: 2500,
			// 	disableOnInteraction: false,
			// }}
			loop={true}
			pagination={{ clickable: true }}
		>
			<SwiperSlide>
				<Image src='/images/Slide.jpg' alt='Slide 1' width={1168} height={400} />
			</SwiperSlide>
			<SwiperSlide>
				<Image src='/images/Slide.jpg' alt='Slide 1' width={1168} height={400} />
			</SwiperSlide>
			<SwiperSlide>
				<Image src='/images/Slide.jpg' alt='Slide 1' width={1168} height={400} />
			</SwiperSlide>
		</Swiper>
	);
};
