// resume to go here once it's done lol
import React from "react";
import "./Resume.css";
import headshot from "./headshot1.jpg";
import fakeResume from "./Resume.pdf";

const Resume = () => {

	return (
		<div className='resume parallax-resume'>
			<section className='resume-container'>
				<img src={headshot} className='resume-pic' alt='headshot'></img>
				<div className='buttonContainer'>
					<a href={fakeResume} target='_blank' rel='noreferrer'>
						<button className='resumeButton' alt='download resume'>
							Click for Resume
						</button>
					</a>
				</div>
			</section>
		</div>
	);
};

export default Resume;
