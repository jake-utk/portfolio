import Axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Hero from "../Hero/Hero";
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
			<Hero />
			<div className='home'>
			<img src={image} className='headshot' alt='headshot image'></img>
				<h2 id='title'>Welcome to my website!</h2>
				<h3>Title here.</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut beatae dolorem aperiam culpa neque necessitatibus accusamus enim ad, nobis fuga voluptatem amet sequi laborum, dolorum quod, quia praesentium sint! Magnam!
				</p>
				<h3>Another title here.</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic sunt sint
					reprehenderit quibusdam, quasi ut maxime mollitia temporibus! Sequi
					dolor ut quia culpa magni. Nesciunt voluptatum autem facere numquam
					iure! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
					libero totam provident vitae aut, voluptates delectus recusandae,
					itaque dignissimos fugiat, animi tempora reiciendis mollitia nesciunt!
					Natus nisi nihil perferendis officia?
				</p>
			</div>
		</div>
	);
};

export default Home;
