import React, { useEffect, useState } from "react";
import "./Projects.css";
import Project from "../Project/Project";
import axios from "axios";

const Projects = ({ setImage }) => {
	const [projects, setProjects] = useState([]);
	const [profile, setProfile] = useState({});

	useEffect(() => {
		axios
			.all([
				axios.get("https://api.github.com/users/jake-utk"),
				axios.get("https://api.github.com/users/jake-utk/repos"),
				axios.get("https://api.github.com/orgs/davinki-coders/repos"),
			])
			.then(
				axios.spread((profile, projects, orgs) => {
					setImage(profile.data.avatar_url);
					setProfile(profile.data);
					let combinedArray = projects.data
					orgs.data.map((element) => {
						combinedArray.push(element)
					})
					setProjects(combinedArray);
				})
			)
			.catch(console.error);
	}, []);

	console.log("projects:", projects);

	if (!projects || !profile) {
		return <p className='lazy-loader'>Loading...</p>;
	}

	return (
		<div className='projects parallax-projects'>
			<h2>
				<span id='projects-author'>
					{profile.login}/{profile.name}
				</span>
				's Github Repositories
			</h2>
			{projects.map((project, index) => {
				return <Project project={project} key={index} />;
			})}
		</div>
	);
};

export default Projects;
