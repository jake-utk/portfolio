import React from "react";
import styled from "styled-components";
import Project from "../Project";

const Container = styled.div`
	background-color: #1d2228;
	height: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	padding-bottom: 50px;

	@media screen and (max-width: 1000px) {
		height: 1200px;
	}

	@media screen and (max-width: 780px) {
		height: 1700px;
	}

	@media screen and (max-width: 480px) {
		height: 1700px;
	}
`;

const H1 = styled.h1`
	font-size: 2.5rem;
	color: #e1e2e2;

	@media screen and (max-width: 780px) {
		margin-bottom: -10px;
	}

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

const Wrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
		padding-bottom: 100px;
		padding-top: 20px;
	}

	@media screen and (max-width: 780px) {
		grid-template-columns: 1fr;
		padding: 30px 20px;
	}
`;

const Projects = ({ projects, toggle, setProject }) => {
	return (
		<Container id='projects'>
			<H1
				data-aos='zoom-out'
				data-aos-easing='ease-in-back'
				data-aos-delay='300'
				data-aos-offset='0'
				data-aos-anchor-placement='center bottom'>
				Projects
			</H1>
			<Wrapper>
				{projects.reverse().map((project, index) => {
					return (
						<Project
							toggle={toggle}
							project={project}
							setProject={setProject}
							key={index}
						/>
					);
				})}
			</Wrapper>
		</Container>
	);
};

export default Projects;
