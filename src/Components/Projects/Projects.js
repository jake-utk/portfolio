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
			])
			.then(
				axios.spread((profile, projects) => {
					setImage(profile.data.avatar_url);
					setProfile(profile.data);
					setProjects(projects.data);
				})
			)
			.catch(console.error);
	}, []);

	if (!projects || !profile) {
		return <p className='lazy-loader'>Loading...</p>;
    }

	return (
		<div className='projects parallax-projects'>
			<h2><span id="projects-author">{profile.login}/{profile.name}</span>'s Github Repositories</h2>

			{projects.map((project) => {
                console.log('project component being sent: ', project);
				<Project project={project} />;
			})}
		</div>
	);
};

export default Projects;
