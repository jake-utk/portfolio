import React from "react";
import styled, { css } from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";

const Container = styled.aside`
	align-items: center;
	background: #1d2228; // eerie black
	display: grid;
	height: 100%;
	/* left: 0; */
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	position: fixed;
	top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
	transition: 0.3s ease-in-out;
	width: 100%;
	z-index: 20;
`;

const Icon = styled.div`
	background: transparent;
	cursor: pointer;
	font-size: 2rem;
	outline: none;
	position: absolute;
	right: 1.5rem;
	top: 1.2rem;
`;

const CloseIcon = styled(FaRegTimesCircle)`
	color: #e1e2e2; // platinum
`;

const Wrapper = styled.div`
	color: #e1e2e2;
`;

const Content = styled.div`
	max-width: 100%;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, 80px) 160px;
	gap: 2vw;
	text-align: center;
	margin: 10vh;
	padding: 0;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(7, 60px);
	}
`;

const Box = css`
	height: 100%;
	width: 100%;
	background-color: #646c79;
	border-radius: 2.5%;
`;

const Box1 = styled.div`
	${Box}
	grid-row: 1;
	grid-column: 1 / span 2;
`;

const Box2 = styled.div`
	${Box}
	grid-row: 2 / span 2;
	grid-column: 1;
	padding: 5px;

	@media screen and (max-width: 780px) {
		grid-row: 2;
		grid-column: 1 / span 2;
	}
`;

const Box3 = styled.div`
	${Box}
	grid-row: 2;
	grid-column: 2;
	background: none;

	@media screen and (max-width: 780px) {
		grid-row: 3;
		grid-column: 1;
	}
`;

const Box4 = styled.div`
	${Box}
	grid-row: 3;
	grid-column: 2;
	background: none;

	/* @media screen and (max-width: 780px) {
        grid-row: 3;
        
	} */
`;

const Box5 = styled.div`
	${Box}
	grid-row: 4;
	grid-column: 1 / span 2;
`;

const Box6 = styled.div`
	${Box}
	grid-row: 5;
	grid-column: 1 / span 2;
`;

const Name = styled.h1``;

const Image = styled.img`
	/* max-height: 200px; */
	/* max-width: 225px; */
	height: 100%;
	width: 100%;
`;

const Button = styled.a`
	height: 100%;
	width: 100%;
	border-radius: 0px;
	background: #e1e2e2; //platinum
	white-space: nowrap;
	padding: 16px 50px;
	color: #1d2228; // eerie black
	font-size: 28px;
	outline: 5px solid #646c79; // black coral
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #646c79; // black coral
		color: #e1e2e2; // platinum
		outline: 5px solid #e1e2e2; // platinum
	}
`;

const SkillsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
`;

const SkillCard = styled.div``;

const Description = styled.p``;

const ProjectBar = ({ isOpen, toggle, project }) => {
	console.log("project object from projectbar.js", project);
	return (
		<Container isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<Wrapper>
				<Content>
					<Box1 row='1' col='1 / span 2'>
						<Name>{project.name}</Name>
					</Box1>
					<Box2 row='' col=''>
						<Image src={project.image} />
					</Box2>
					<Box3 row='' col=''>
						<Button src={project.url} target='_blank'>
							Visit Site
						</Button>
					</Box3>
					<Box4 row='' col=''>
						<Button src={project.repo} target='_blank'>
							Github Repo
						</Button>
					</Box4>
					<Box5 row='' col=''>
						<SkillsContainer>
							<SkillCard>Skill</SkillCard>
							<SkillCard>Skill</SkillCard>
							<SkillCard>Skill</SkillCard>
							<SkillCard>Skill</SkillCard>
						</SkillsContainer>
					</Box5>
					<Box6 row='' col=''>
						<Description>{project.description}</Description>
					</Box6>
				</Content>
			</Wrapper>
		</Container>
	);
};

export default ProjectBar;
