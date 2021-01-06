import React from "react";
import styled from "styled-components";

const Card = styled.div`
	background: #646c79;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	max-height: 340px;
	padding: 30px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

const Icon = styled.img`
	height: 160px;
	width: 160px;
	margin-bottom: 10px;
`;

const H2 = styled.h2`
	color: #e1e2e2;
	font-size: 1rem;
	margin-bottom: 10px;
`;

const P = styled.p`
	color: #e1e2e2;
	font-size: 1rem;
	text-align: center;
`;

const Project = ({ project }) => {
	console.log(project);

	return (
		<Card>
			<Icon src={project.image} />
			<H2>{project.name}</H2>
			<P>{project.description}</P>
		</Card>
	);
};

export default Project;
