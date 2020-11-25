import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "nuka-carousel";
import "./HeroCarousel.css";

const HeroCarousel = () => {
	const [backgrounds, setBackgrounds] = useState([]);

	const testImages = [
		"https://images.unsplash.com/photo-1556033681-83abea291a96?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE4NTk0NH0",
		"https://images.unsplash.com/photo-1537889230356-e49d1df471b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE4NTk0NH0",
	];

	useEffect(() => {
		const url = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&page=1&query=nashville`;

		axios
			.get(url)
			.then((res) => {
				console.log(res);
				return res.data.results.map((image) => {
					return image.urls.full;
				});
			})
			// .then((images) => setBackgrounds(images))
			.catch(console.error);
	}, []);

	if (!backgrounds) {
		return <p className='lazy-loader'>Loading...</p>;
	}
	console.log("backgrounds", backgrounds);

	return (
		<div>
			<Carousel
				withoutControls={true}
				autoplay={true}
				autoplayInterval={5000}
				wrapAround={true}>
				{/* <img className='hero-image' src='' alt='' /> */}
				{testImages.map((background, index) => {
					console.log("background", background);
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
