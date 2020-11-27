import React from "react";
import HeroCarousel from "../HeroCarousel/HeroCarousel";
import "./Hero.css";

const Hero = () => {
	return (
		<div className='hero-container'>
			<HeroCarousel className='hero-box' />
			<div className='container center hero-box stack'>
				<div className='hero-text center'>
					<h1>Jake Addis</h1>
					<p>Software Engineer | Nashville</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
