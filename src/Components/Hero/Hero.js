import React from 'react';
import HeroCarousel from '../HeroCarousel/HeroCarousel'

const Hero = () => {
    return (
			<div className='hero-container'>
				<HeroCarousel className='hero-box' />
				<div className='container center hero-box stack'>
					<div className='hero-text center'>
						Jake Addis | Software Engineer | Nashville
					</div>
				</div>
			</div>
		);
};

export default Hero;