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
					<img
						src={image}
						className='headshot'
						alt='headshot'></img>
					<h1 id='beg'>Currently seeking full time position.</h1>
					<h2 id='title'>
						React | Node.js | Express | MongoDB | JavaScript | CSS
					</h2>
					<h3 id='quote'>
						"The road to success is always under construction."
					</h3>
					<p className='brand-statement'>Brand statement here Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum provident inventore sunt modi odit, quas aspernatur accusantium nesciunt minus delectus eum voluptatibus sit optio. Totam quibusdam dolore veniam tempora voluptates.</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
