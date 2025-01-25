<script lang="ts">
	import 'swiper/swiper-bundle.css';
	import Swiper from 'swiper';
	import { Navigation, Pagination } from 'swiper/modules';
	import { onMount } from 'svelte';
	import SlideImg1 from '@/assets/slider/1.png';
	import SlideImg2 from '@/assets/slider/2.png';
	import SlideImg3 from '@/assets/slider/3.png';
	import SlideImg4 from '@/assets/slider/4.png';
	import SlideImg5 from '@/assets/slider/5.png';
	import SlideImg6 from '@/assets/slider/6.png';

	// Import Swiper and modules styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';

	let swiper: Swiper | null = null;

	let slides = [
		{ img: SlideImg1, link: '/promo_1' },
		{ img: SlideImg2, link: '/promo_2' },
		{ img: SlideImg3, link: '/promo_3' },
		{ img: SlideImg4, link: '/promo_4' },
		{ img: SlideImg5, link: '/promo_5' },
		{ img: SlideImg6, link: '/promo_6' }
	];

	onMount(() => {
		swiper = new Swiper('.swiper', {
			modules: [Navigation, Pagination],
			loop: true,
			spaceBetween: 20,
			slidesPerView: 1,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			pagination: {
				el: '.swiper-pagination',
				clickable: true
			}
		});
	});
</script>

<div class="slider-wrapper">
	<div class="swiper">
		<div class="swiper-wrapper">
			{#each slides as slide}
				<div class="swiper-slide">
					<a href={slide.link}>
						<img src={slide.img} alt="Slide" class="slide-image" />
					</a>
				</div>
			{/each}
		</div>

		<!-- Pagination -->
		<div class="swiper-pagination"></div>

		<!-- Navigation buttons -->
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
</div>

<style>
	.swiper-button-prev::after,
	.swiper-button-next::after {
		font-size: 28px;
		font-weight: 800;
		color: var(bg-blue-300);
	}

	.slider-wrapper {
		width: 100%;
		max-width: 1200px;
		margin: 0 auto;
		overflow: hidden;
	}

	.swiper-slide {
		text-align: center;
	}

	.slide-image {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	/* Optional: Add media queries for extra control */
	@media (max-width: 768px) {
		.slider-wrapper {
			max-width: 736px;
			padding: 0 10px;
		}

		.swiper-button-prev::after,
		.swiper-button-next::after {
			font-size: 20px;
		}
	}

	@media (max-width: 480px) {
		.slider-wrapper {
			padding: 0 5px;
			max-width: 343px;
		}

		.swiper-button-prev::after,
		.swiper-button-next::after {
			font-size: 18px;
		}
	}
</style>
