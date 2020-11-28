import React, { Profiler } from "react";
import "./Project.css";

const Project = ({ project }) => {
	return (
		<div className='project'>
			<section>
				<h3>
					<a href={project.html_url} target='_blank'>
						{project.full_name}
					</a>
				</h3>
				{!project.homepage ? null : (
					<h4>
						<a href={project.homepage} target='_blank'>
							Link to Website
						</a>
					</h4>
				)}
				<h3>Language: {project.language}</h3>
				<p>{project.description}</p>
				<p>Project Created: {project.created_at}</p>
				<p>Last Updated at: {project.updated_at}</p>
			</section>
		</div>
	);
};

export default Project;
