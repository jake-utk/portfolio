import React from "react";
import styled from "styled-components";

const Card = styled.div`
	background: #646c79;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	height: 340px;
	padding: 30px;
	width: 100%;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

const Image = styled.img`
	max-height: 200px;
	max-width: 225px;
	margin-bottom: 10px;
`;

const Title = styled.h2`
	color: #e1e2e2;
	font-size: 1rem;
	margin-bottom: 10px;
	text-decoration: none;
`;

const P = styled.p`
	color: #e1e2e2;
	font-size: 1rem;
	text-align: center;
`;

const Project = ({ project }) => {
	let fadeDirection = (id) => {
		if (id % 2 === 0) {
			return "fade-zoom-in";
		} else {
			return "fade-zoom-in";
		}
	};

	return (
		<Card
			data-aos={fadeDirection(project.id)}
			data-aos-delay='500'
			data-aos-anchor-placement='center bottom'>
			<Image src={project.image} />
			<Title>{project.name}</Title>
			<P>{project.description}</P>
			<P></P>
		</Card>
	);
};

export default Project;
