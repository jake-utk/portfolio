import React from "react";
import styled from "styled-components";

const Card = styled.div`
	background: #646c79;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	border-radius: 10px;
	height: 300px;
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
`;

const Title = styled.h2`
	color: #e1e2e2;
	font-size: 2rem;
	margin-bottom: 10px;
	text-decoration: none;
	text-align: center;
	letter-spacing: 3px;

	@media screen and (max-width: 480px) {
		font-size: 1.5rem;
	}
`;

const Project = ({ project, setProject, toggle }) => {
	const fadeDirection = (id) =>
		id & (2 === 0) ? "fade-zoom-in" : "fade-zoom-out";
	const handleClick = () => {
		toggle();
		setProject(project);
	};

	return (
		<Card
			onClick={handleClick}
			data-aos={fadeDirection(project.id)}
			data-aos-delay='500'
			data-aos-anchor-placement='center bottom'>
			<Image src={project.image} />
			<Title>{project.name}</Title>
		</Card>
	);
};

export default Project;
