import React from "react";
import {
	FaCss3Alt,
	FaHtml5,
	FaNode,
	FaReact,
	FaGit,
	FaPython,
} from "react-icons/fa";
import { SiJavascript, SiAmericanexpress } from "react-icons/si";
import { DiDjango, DiMongodb, DiPostgresql } from "react-icons/di";
import { VscRegex } from "react-icons/vsc";
import styled, { css } from "styled-components/macro";

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
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	/* padding: 0 50px; // not sure */

	@media screen and (max-width: 1200px) {
		grid-template-columns: 1fr 1fr 1fr 1fr;
	}

	@media screen and (max-width: 780px) {
		grid-template-columns: 1fr 1fr 1fr;
		padding: 0 20px;
	}
`;

const Card = styled.div`
	background: #646c79; // black coral
	position: relative;
	border-radius: 10px;
	height: 200px;
	width: 200px;
	padding: 35px;

	@media screen and (max-width: 1000px) {
		height: 150px;
		width: 150px;
	}

	@media screen and (max-width: 780px) {
		height: 100px;
		width: 100px;
	}

	&:hover {
		transform: scale(1.1);
		transition: all 0.4s ease-in-out;
		cursor: pointer;
		color: #f58549; // mango tango
	}
`;

const Icon = css`
	color: #e1e2e2; // platinum
	height: 100px;
	width: 100px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	@media screen and (max-width: 1000px) {
		height: 75px;
		width: 75px;
	}

	@media screen and (max-width: 780px) {
		height: 50px;
		width: 50px;
	}

	&:hover {
		/* color: #f58549; // mango tango */
	}
`;

const ReactIcon = styled(FaReact)`
	${Icon}
`;

const JsIcon = styled(SiJavascript)`
	${Icon}
`;

const CssIcon = styled(FaCss3Alt)`
	${Icon}
`;

const NodeIcon = styled(FaNode)`
	${Icon}
`;

const ExpressIcon = styled(SiAmericanexpress)`
	${Icon}
`;

const HtmlIcon = styled(FaHtml5)`
	${Icon}
`;
const GitIcon = styled(FaGit)`
	${Icon}
`;
const PythonIcon = styled(FaPython)`
	${Icon}
`;
const DjangoIcon = styled(DiDjango)`
	${Icon}
`;
const MongoIcon = styled(DiMongodb)`
	${Icon}
`;
const PostgresIcon = styled(DiPostgresql)`
	${Icon}
`;
const RegexIcon = styled(VscRegex)`
	${Icon}
`;

const Skills = () => {
	return (
		<Container id='skills'>
			<H1>Skills</H1>
			<Wrapper>
				<Card>
					<ReactIcon />
				</Card>
				<Card>
					<JsIcon />
				</Card>
				<Card>
					<CssIcon />
				</Card>
				<Card>
					<NodeIcon />
				</Card>
				<Card>
					<ExpressIcon />
				</Card>
				<Card>
					<HtmlIcon />
				</Card>
				<Card>
					<GitIcon />
				</Card>
				<Card>
					<PythonIcon />
				</Card>
				<Card>
					<DjangoIcon />
				</Card>
				<Card>
					<MongoIcon />
				</Card>
				<Card>
					<PostgresIcon />
				</Card>
				<Card>
					<RegexIcon />
				</Card>
			</Wrapper>
		</Container>
	);
};

export default Skills;
