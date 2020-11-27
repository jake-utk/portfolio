import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "nuka-carousel";
import "./HeroCarousel.css";

const HeroCarousel = () => {
	const [backgrounds, setBackgrounds] = useState([]);

	useEffect(() => {
		const url = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=1&query=nashville`;

		axios
			.get(url)
			.then((res) => {
				return res.data.results.slice(0, 7).map((image) => {
					return image.urls.raw;
				});
			})
			.then((images) => setBackgrounds(images))
			.catch(console.error);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!backgrounds) {
		return <p className='lazy-loader'>Loading...</p>;
	}

	return (
		<div>
			<Carousel
				withoutControls={true}
				autoplay={true}
				autoplayInterval={5000}
				wrapAround={true}>
				{backgrounds.map((background, index) => {
					return (
						<img
							src={background}
							className='hero-image'
							key={index}
							alt={"Carousel of Nashville images"}
						/>
					);
				})}
			</Carousel>
		</div>
	);
};

export default HeroCarousel;
