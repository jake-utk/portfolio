import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
	const [image, setImage] = useState();

	useEffect(() => {
		axios.get(`https://api.github.com/users/jake-utk`).then((res) => {
			setImage(res.data.avatar_url);
		});
	}, []);

	if (!image) {
		return <p className='lazy-loader'>Loading...</p>;
	}

	return (
		<div>
			<div className='home'>
				<div className='home-text'>
					<img src={image} className='headshot' alt='headshot image'></img>
					<h1 id='beg'>Currently seeking full time position.</h1>
					<h2 id='title'>
						React | Node.js | Express | MongoDB | JavaScript | CSS
					</h2>
					<h3>Thanks for checking out my profile.</h3>
					<h3>Who I Am:</h3>
					<p>
						I view software engineering as a lifelong journey of learning and challenge that allows those who practice this art the daily opportunity to improve oneself.  I believe that through this medium, dreams and ideas can be brought to life and shared with the widest of audiences.  This mindset of a constant drive to improve and a proven ability to create, along with a history of success within a team environment as well as a tenacious approach to problem solving is what I am able to bring to your team.
					</p>
					<h3>What I Do:</h3>
					<p>
						I am a dynamic Full Stack Software Engineer with experience building projects and developing solutions in React.js/Express/Node.js and Python/Django.  
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
