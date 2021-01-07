import React from "react";
import styled, { css } from "styled-components/macro";
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

const Skill = ({ skill, index }) => {
	let icons = [
		{ react: ReactIcon },
		{ js: JsIcon },
		{ css: CssIcon },
		{ node: NodeIcon },
		{ express: ExpressIcon },
		{ html: HtmlIcon },
		{ git: GitIcon },
		{ python: PythonIcon },
		{ django: DjangoIcon },
		{ mongo: MongoIcon },
		{ postgres: PostgresIcon },
		{ regex: RegexIcon },
	];

	return (
		<Card
			data-aos='zoom-in'
			data-aos-easing='ease-in-back'
			data-aos-delay='500'
			data-aos-offset='0'
			data-aos-anchor-placement='center bottom'>
			{icons[index].value}
		</Card>
	);
};

export default Skill;
