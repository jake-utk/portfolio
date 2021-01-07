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
	padding: 0 28px;
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
	/* overflow: hidden; */
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
	padding: 8px 24px;
	position: absolute;
	z-index: 3;
`;

const H1 = styled.h1`
	color: #e1e2e2; // platinum
	font-size: 92px;
	text-align: center;
	font-family: "Teko";

	@media screen and (max-width: 780px) {
		font-size: 80px;
	}

	@media screen and (max-width: 480px) {
		font-size: 60px;
	}
`;

const P = styled.p`
	color: #e1e2e2; // platinum
	font-size: 40px;
	margin-top: 20px;
	max-width: 600px;
	text-align: center;

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
	transition: opacity 200ms;

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
				<Typist avgTypingDelay={80} startDelay={500} onTypingDone={showArrow}>
					<H1>JAKE ADDIS</H1>
					<Typist.Delay ms={300} />
					<P>Software Engineer</P>
					<Typist.Delay ms={300} />
					<P>Nashville, TN</P>
					<Typist.Backspace count={13} delay={300} />
					<P>Remote</P>
				</Typist>
			</Content>
			<ArrowScroll to='about' exact='true' smooth={true} duration={500}>
				<Arrow visibility={arrowVisibility} />
			</ArrowScroll>
		</Container>
	);
};

export default Hero;
