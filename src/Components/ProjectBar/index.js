import React from "react";
import styled, { css } from "styled-components";
import {
	FaRegTimesCircle,
	FaNode,
	FaReact,
	FaPython,
	FaHtml5,
	FaCss3Alt,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { DiDjango, DiMongodb } from "react-icons/di";

const Container = styled.aside`
	align-items: center;
	background: #1d2228; // eerie black
	display: grid;
	height: 100%;
	opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
	position: fixed;
	bottom: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
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
	max-width: 1000px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-template-rows: repeat(4, 80px) 160px;
	gap: 2vw;
	text-align: center;
	margin: 0 auto;
	padding: 0;

	@media screen and (max-width: 480px) {
		gap: 4vw;
	}

	@media screen and (max-width: 1000px) {
		grid-template-rows: 80px 260px 80px 80px 240px;
		max-width: 100%;
	}
`;

const Box = css`
	height: 100%;
	width: 95%;
	background: #646c79;
	border-radius: 0;
	padding: 0 50px;
	text-align: center;
	align-self: center;
	justify-self: center;
`;

// name
const Box1 = styled.div`
	${Box}
	grid-row: 1;
	grid-column: 2;
	background: none;

	@media screen and (max-width: 1000px) {
		width: 90%;
		grid-column: 1 / span 2;
		/* margin-right: 10vw; */
	}

	@media screen and (max-width: 480px) {
	}
`;

// image
const Box2 = styled.div`
	${Box}
	grid-row: 1 / span 3;
	grid-column: 1;
	padding: 5px;
	width: 100%;
	background: none;
	justify-self: center;
	align-self: center;
	min-height: 250px;
	min-width: 450px;

	@media screen and (max-width: 1000px) {
		grid-row: 2;
		grid-column: 1 / span 2;
		width: 90%;
		min-width: 250px;
		min-height: 100px;
	}
`;

// site link
const Box3 = styled.div`
	${Box}
	grid-row: 2;
	grid-column: 2;
	background: none;

	@media screen and (max-width: 1000px) {
		grid-row: 3;
		grid-column: 1;
		padding: 0;
		width: 85%;
	}
`;

// repo link
const Box4 = styled.div`
	${Box}
	grid-row: 3;
	grid-column: 2;
	background: none;

	@media screen and (max-width: 1000px) {
		padding: 0;
		width: 85%;
	}
`;

// skills
const Box5 = styled.div`
	${Box}
	grid-row: 4;
	grid-column: 1 / span 2;
	border: 5px solid #e1e2e2;
`;

// description
const Box6 = styled.div`
	${Box}
	grid-row: 5;
	grid-column: 1 / span 2;
	border: 5px solid #e1e2e2;
	display: flex;
	flex-direction: column;
	justify-content: center;
	line-height: 1.5;
	letter-spacing: 2px;

	@media screen and (max-width: 480px) {
		padding: 0;
	}
`;

const Name = styled.h1`
	height: 100%;
	width: 100%;
	border-radius: 0px;
	color: #1d2228; //platinum
	white-space: nowrap;
	padding: 16px 50px;
	background: #646c79; // black coral
	font-size: 28px;
	outline: 5px solid #e1e2e2; // platinum
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	margin-block-start: 0;
	margin-block-end: 0;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #646c79; // black coral
		color: #e1e2e2; // platinum
		outline: 5px solid #e1e2e2; // platinum
	}
`;

const Image = styled.img`
	height: 100%;
	width: 100%;
	border: 5px solid #e1e2e2;
	border-radius: 0;
	margin-left: 2.5vw;

	@media screen and (max-width: 1000px) {
		margin-left: 0;
	}
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

	@media screen and (max-width: 1000px) {
		padding: 0;
	}

	@media screen and (max-width: 780px) {
		font-size: 24px;
	}

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

const Description = styled.p`
	font-size: 18px;

	@media screen and (max-width: 1000px) {
		font-size: 16px;
	}

	@media screen and (max-width: 780px) {
		font-size: 14px;
	}
`;

const SkillsIcon = css`
	color: #e1e2e2; // platinum
	height: 65px;
	width: 65px;
	padding: 1vh 0;
	/* position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%); */

	@media screen and (max-width: 1000px) {
		/* height: 75px;
		width: 75px; */
	}

	@media screen and (max-width: 300px) {
		height: 40px;
		width: 40px;
	}

	&:hover {
		/* color: #f58549; // mango tango */
	}
`;

const ReactIcon = styled(FaReact)`
	${SkillsIcon}
`;

const JsIcon = styled(SiJavascript)`
	${SkillsIcon}
`;

const CssIcon = styled(FaCss3Alt)`
	${SkillsIcon}
`;

const NodeIcon = styled(FaNode)`
	${SkillsIcon}
`;

const HtmlIcon = styled(FaHtml5)`
	${SkillsIcon}
`;

const PythonIcon = styled(FaPython)`
	${SkillsIcon}
`;
const DjangoIcon = styled(DiDjango)`
	${SkillsIcon}
`;
const MongoIcon = styled(DiMongodb)`
	${SkillsIcon}
`;

const ProjectBar = ({ isOpen, toggle, project }) => {
	return (
		<Container isOpen={isOpen}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<Wrapper>
				<Content>
					<Box1>
						<Name>{project.name}</Name>
					</Box1>
					<Box2>
						<Image src={project.image} />
					</Box2>
					<Box3>
						<Button href={project.url} target='_blank'>
							Visit Site
						</Button>
					</Box3>
					<Box4>
						<Button href={project.repo} target='_blank'>
							Github Repo
						</Button>
					</Box4>
					<Box5>
						{/* The below conditionally renders a SkillsContainer that will contain the icons related to the project.id.  A better way to do this would be to conditionally render just one SkillsContainer and dynamically update which icon each card displayed by mapping over the project.langauge array that contains these technologies.  However, I couldn't figure out how to string-interpolate / attach a variable into an actual component name (the associated react icon) in order to render anything from the results of the map.  This was my best solution, and the conditional enables the JSX returns needed to render. */}
						{project.id === 5 ? (
							<SkillsContainer>
								<SkillCard>
									<ReactIcon />
								</SkillCard>
								<SkillCard>
									<JsIcon />
								</SkillCard>
								<SkillCard>
									<CssIcon />
								</SkillCard>
								<SkillCard>
									<HtmlIcon />
								</SkillCard>
							</SkillsContainer>
						) : project.id === 4 ? (
							<SkillsContainer>
								<SkillCard>
									<ReactIcon />
								</SkillCard>
								<SkillCard>
									<JsIcon />
								</SkillCard>
								<SkillCard>
									<DjangoIcon />
								</SkillCard>
								<SkillCard>
									<PythonIcon />
								</SkillCard>
							</SkillsContainer>
						) : project.id === 3 ? (
							<SkillsContainer>
								<SkillCard>
									<ReactIcon />
								</SkillCard>
								<SkillCard>
									<JsIcon />
								</SkillCard>
								<SkillCard>
									<NodeIcon />
								</SkillCard>
								<SkillCard>
									<MongoIcon />
								</SkillCard>
							</SkillsContainer>
						) : project.id === 2 ? (
							<SkillsContainer>
								<SkillCard>
									<ReactIcon />
								</SkillCard>
								<SkillCard>
									<JsIcon />
								</SkillCard>
								<SkillCard>
									<CssIcon />
								</SkillCard>
								<SkillCard>
									<HtmlIcon />
								</SkillCard>
							</SkillsContainer>
						) : (
							<SkillsContainer>
								<SkillCard>
									<JsIcon />
								</SkillCard>
								<SkillCard>
									<CssIcon />
								</SkillCard>
								<SkillCard>
									<HtmlIcon />
								</SkillCard>
							</SkillsContainer>
						)}
					</Box5>
					<Box6>
						<Description>{project.description}</Description>
					</Box6>
				</Content>
			</Wrapper>
		</Container>
	);
};

export default ProjectBar;
