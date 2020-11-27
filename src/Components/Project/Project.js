import React, { useEffect } from "react";
import "./Project.css";

const Project = ({ project }) => {

	useEffect(() => {
		console.log("PROJECT COMPONENT HAS RECEIVED: ", project);
	}, []);

	return (
		<div className='project'>
			<section>
				<h3>Project Name</h3>
				<p>
					Description of project Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. At, doloribus explicabo laudantium, quidem dolorum
					suscipit ratione enim consequuntur laborum error iste magnam
					dignissimos esse ea! Fuga ducimus pariatur quaerat quos.
				</p>
			</section>
		</div>
	);
};

export default Project;
