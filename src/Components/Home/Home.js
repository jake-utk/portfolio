import Axios from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";

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
			<h1>Jake Addis | Software Engineer | Nashville</h1>
			<img src={image} className="headshot"></img>
		</div>
	);
};

export default Home;
