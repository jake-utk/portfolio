import React from "react";
import styled from "styled-components";
import Project from "../Project";

const Container = styled.div`
	background-color: #1d2228;
	height: 900px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1000px) {
		height: 1200px;
	}

	@media screen and (max-width: 780px) {
		height: 1800px;
	}

	@media screen and (max-width: 480px) {
		height: 2000px;
	}
`;

const H1 = styled.h1`
	font-size: 2.5rem;
	color: #e1e2e2;
	margin-bottom: 64px;

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
	}

	@media screen and (max-width: 780px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`;

const Projects = ({ projects }) => {
	return (
		<Container id='projects'>
			<H1>Projects</H1>
			<Wrapper>
				{projects.reverse().map((project, index) => {
					return <Project project={project} key={index} />;
				})}
			</Wrapper>
		</Container>
	);
};

export default Projects;