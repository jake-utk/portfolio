import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import styled from "styled-components";
import Typist from "react-typist";
import { ImArrowDown } from "react-icons/im";
import { Link } from "react-scroll";

const Container = styled.div`
	align-items: center;
	background: #1d1228; // eerie black
	display: flex;
	height: 100vh;
	justify-content: center;
	padding: 0;
	position: relative;
	z-index: 1;

	:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0.2) 0%,
				rgba(0, 0, 0, 0.6) 100%
			),
			linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
		z-index: 2;
	}
`;

const Background = styled.div`
	bottom: 0;
	height: 100%;
	left: 0;
	overflow: hidden;
	position: absolute;
	right: 0;
	top: 0;
	width: 100%;
`;

const VideoImport = styled.video`
	--o-object-fit: cover;
	height: 100%;
	object-fit: cover;
	width: 100%;
	background: #1d2228; // eerie black
`;

const Content = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	max-width: 1200px;
	position: absolute;
	z-index: 3;
`;

const H1 = styled.h1`
	color: #e1e2e2; // platinum
	font-size: 92px;
	text-align: center;
	font-family: "Teko";
	display: none;

	@media screen and (max-width: 780px) {
		font-size: 80px;
	}

	@media screen and (max-width: 480px) {
		font-size: 60px;
	}

	@media screen and (max-height: 480px) {
		display: block;
	}
`;

const P = styled.p`
	color: #e1e2e2; // platinum
	font-size: 40px;
	margin-top: 20px;
	max-width: 600px;
	text-align: center;
	overflow-wrap: break-word;

	@media screen and (max-width: 780px) {
		font-size: 32px;
	}

	@media screen and (max-width: 480px) {
		font-size: 20px;
	}
`;

const P2 = styled.p`
	color: #e1e2e2; // platinum
	font-size: 40px;
	margin: -20px;
	max-width: 600px;
	text-align: center;
	overflow-wrap: break-word;

	@media screen and (max-width: 780px) {
		font-size: 32px;
	}

	@media screen and (max-width: 480px) {
		font-size: 20px;
	}
`;

const ArrowScroll = styled(Link)`
	text-decoration: none;
	cursor: pointer;
	position: absolute;
	bottom: 10%;
	z-index: 10;

	@media screen and (max-height: 780px) {
		bottom: 5%;
	}
`;

const Arrow = styled(ImArrowDown)`
	opacity: ${(p) => {
		return p.visibility ? "1" : "0";
	}};
	color: #e1e2e2;
	height: 40px;
	width: 40px;
	-moz-animation: bounce 1.25s infinite;
	-webkit-animation: bounce 1.25s infinite;
	animation: bounce 1.25s infinite;
	transition: opacity 200ms, color 2s, height 2s, width 2s;

	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-30px);
		}
		60% {
			transform: translateY(-15px);
		}
	}

	&:hover {
		color: #f58549;
		height: 60px;
		width: 60px;
	}
`;

const Logo = styled.img`
	height: 400px;
	width: 400px;
	margin-left: 2.5vw;

	@media screen and (max-width: 780px) {
		height: 300px;
		width: 300px;
		margin-left: 4vw;
	}

	@media screen and (max-width: 480px) {
		margin-left: 20px;
		height: 40vh;
		width: 85vw;
	}

	@media screen and (max-height: 780px) {
		height: 250px;
		width: 250px;
	}

	@media screen and (max-height: 480px) {
		display: none;
	}
`;

const Hero = () => {
	const [arrowVisibility, setArrowVisibility] = useState(0);

	let showArrow = () => {
		setArrowVisibility(1);
	};

	return (
		<Container id='home'>
			<Background>
				<VideoImport autoPlay loop muted src={Video} type='video/mp4' />
			</Background>
			<Content>
				<Logo
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-once='true'
					src={require("../../images/logo.png").default}></Logo>
				<Typist avgTypingDelay={60} startDelay={500} onTypingDone={showArrow}>
					<H1>JAKE ADDIS</H1>
					<Typist.Delay ms={300} />
					<P>Software Engineer</P>
					<Typist.Delay ms={300} />
					<P2>Nashville, TN</P2>
					<Typist.Backspace count={13} delay={300} />
					<P2>Remote</P2>
				</Typist>
			</Content>
			<ArrowScroll to='about' exact='true' smooth={true} duration={500}>
				<Arrow visibility={arrowVisibility} />
			</ArrowScroll>
		</Container>
	);
};

export default Hero;
