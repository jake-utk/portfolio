import React from 'react';
import HeroCarousel from '../HeroCarousel/HeroCarousel'
import "./Hero.css"

const Hero = () => {
    return (
			<div className='hero-container'>
				<HeroCarousel className='hero-box' />
				<div className='container center hero-box stack'>
					<div className='hero-text center'>
						<p id="quote" page-break-after='always'>
							"The road to success is always under construction."
						</p>
						- Lily Tomlin
					</div>
				</div>
			</div>
		);
};

export default Hero;