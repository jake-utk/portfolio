import React from "react";
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
				<p>{project.description}</p>
			</section>
		</div>
	);
};

export default Project;
