import React from "react";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
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
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0 50px; // not sure

	@media screen and (max-width: 1000px) {
		/* grid-template-columns: 1fr 1fr; */
	}

	@media screen and (max-width: 780px) {
		/* grid-template-columns: 1fr; */
		padding: 0 20px;
	}
`;

const Card = styled.div`
	background: #646c79; // black coral
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	height: 200px;
	width: 200px;
	padding: 35px;

	&:hover {
		transform: scale(1.1);
		transition: all 0.4s ease-in-out;
		cursor: pointer;
	}
`;

const Icon = css`
	color: #e1e2e2; // platinum
	height: 100px;
	width: 100px;
	top: 50%;
	bottom: 50%;
	left: 50%;
	right: 50%;
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
				<Card>Icon</Card>
				<Card>Icon</Card>
				<Card>Icon</Card>
				<Card>Icon</Card>
				<Card>Icon</Card>
				<Card>Icon</Card>
				<Card>Icon</Card>
			</Wrapper>
		</Container>
	);
};

export default Skills;
