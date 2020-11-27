import React from "react";
import './AboutMe.css'

const AboutMe = () => {
	return (
		<div className='about-me parallax-aboutMe'>
			<section>
				<h2>About Me Component</h2>
				<h3>Who I Am:</h3>
				<p>
					I view software engineering as a lifelong journey of learning and
					challenge that allows those who practice this art the daily
					opportunity to improve oneself. I believe that through this medium,
					dreams and ideas can be brought to life and shared with the widest of
					audiences. This mindset of a constant drive to improve and a proven
					ability to create, along with a history of success within a team
					environment as well as a tenacious approach to problem solving is what
					I am able to bring to your team. I'm a self-starter who always has to
					be doing something, and I'm passionate about the quality of my work.
				</p>
			</section>
			<section>
				<h3>What I Do:</h3>
				<p>
					I am a dynamic Full Stack Software Engineer with experience building
					projects and developing solutions in React.js/Express/Node.js and
					Python/Django.
				</p>
			</section>
		</div>
	);
};

export default AboutMe;
