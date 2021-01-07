import React from "react";
import styled from "styled-components";
import Skill from "../Skill";

const Container = styled.div`
	background-color: #e1e2e2; // platinum
	height: 800px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1000px) {
	}
	@media screen and (max-width: 780px) {
	}
	@media screen and (max-width: 480px) {
	}
`;

const H1 = styled.h1`
	font-size: 2.5rem;
	color: #1d2228; // eerie black
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`;

const Wrapper = styled.div`
	max-width: 1000px;
	justify-content: center;
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	align-items: center;
	grid-gap: 16px;
	/* padding: 0 50px; // not sure */

	@media screen and (max-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media screen and (max-width: 780px) {
		grid-template-columns: repeat(3, 1fr);
		padding: 0 20px;
	}
`;

const Skills = () => {
	let skills = [
		"react",
		"js",
		"css",
		"node",
		"express",
		"html",
		"git",
		"python",
		"django",
		"mongo",
		"postgres",
		"regex",
	];

	return (
		<Container id='skills'>
			<H1
				data-aos='fade-zoom-in'
				data-aos-easing='ease-in-back'
				data-aos-delay='300'
				data-aos-offset='0'
				data-aos-anchor-placement='center bottom'>
				Skills
			</H1>
			<Wrapper>
				{skills.map((skill, index) => {
					return <Skill skill={skill} index={index} key={index} />;
				})}
			</Wrapper>
		</Container>
	);
};

export default Skills;
