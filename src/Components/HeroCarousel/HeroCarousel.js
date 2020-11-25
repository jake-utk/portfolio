import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "nuka-carousel";

const HeroCarousel = () => {
	const [backgrounds, setBackgrounds] = useState([]);

	useEffect(() => {
        const url = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&page=1&query=nashville`;
        

        console.log(process.env.REACT_APP_UNSPLASH_KEY);

		axios
			.get(url)
			.then((res) => {
				res.results.map((image) => {
					console.log(image.description);
				});
			})
			.catch(console.error);
    }, []);
    
    if (!backgrounds) {
        return <p className='lazy-loader'>Loading...</p>
    }

	return (
		<div>
			<Carousel withoutControls={true} autoplay={true} autoplayInterval={5000}>
				<img className='hero-image' src='' alt='' />
				{backgrounds.map((background, index) => {
					<img
						src={background}
						className='hero-image'
						key={index}
						alt={"Carousel of Nashville images"}
					/>;
				})}
			</Carousel>
		</div>
	);
};

export default HeroCarousel;
