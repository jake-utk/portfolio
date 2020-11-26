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
						A dynamic Full Stack Software Engineer with experience building
						projects in React.js, express, and node. I'm also comfortable in
						python/django. I am currently seeking a full time position. I am
						prepared to begin immediately. Contact me ASAP to add a tenacious
						problem solver who excels in a team environment to your project.
					</p>
					<h3>Another title here.</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt
						sint reprehenderit quibusdam, quasi ut maxime mollitia temporibus!
						Sequi dolor ut quia culpa magni. Nesciunt voluptatum autem facere
						numquam iure! Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Beatae libero totam provident vitae aut, voluptates delectus
						recusandae, itaque dignissimos fugiat, animi tempora reiciendis
						mollitia nesciunt! Natus nisi nihil perferendis officia?
					</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
