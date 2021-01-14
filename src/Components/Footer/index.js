import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { animateScroll as Scroll } from "react-scroll";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { ImMail } from "react-icons/im";

const Container = styled.footer`
	background-color: #1d2228;
	overflow: hidden;
`;

const Wrapper = styled.div`
	padding: 48px 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;

const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
	padding-top: 25px;
	border-top: 2px solid #e1e2e2;
`;

const SocialWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

const Logo = styled(Link)`
	color: #e1e2e2; // platinum
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;

	&:hover {
		color: #9b1d20; // ruby red
		transform: scale(1.2);
		transition: 0.3s ease-out;
	}
`;

const Copyright = styled.small`
	color: #e1e2e2; // platinum
	margin-bottom: 16px;
	display: flex;
	justify-content: space-between;
	padding-left: 10vw;

	@media screen and (max-width: 820px) {
		padding-left: 0;
	}

	@media screen and (max-width: 1000px) {
		/* padding-left: 15vw; */
	}
`;

const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

const SocialIconLink = styled.a`
	color: #e1e2e2; // platinum
	font-size: 24px;

	&:hover {
		color: #9b1d20;
		transform: scale(1.2);
		transition: 0.3s ease-out;
	}
`;

const Footer = () => {
	const scrollHome = () => {
		Scroll.scrollToTop();
	};

	return (
		<Container>
			<Wrapper>
				<SocialMedia>
					<SocialWrapper>
						<Logo to='/' onClick={scrollHome}>
							J/A
						</Logo>
						<Copyright>
							© {new Date().getFullYear()} All Rights Reserved
						</Copyright>
						<SocialIcons>
							<SocialIconLink
								href='https://www.linkedin.com/in/jakeaddis/'
								target='_blank'
								aria-label='LinkedIn'>
								<FaLinkedin />
							</SocialIconLink>
							<SocialIconLink
								href='mailto:hireme@jakeaddis.com'
								target='_blank'
								aria-label='Email'>
								<ImMail />
							</SocialIconLink>
							<SocialIconLink
								href='https://github.com/jake-utk'
								target='_blank'
								aria-label='github'>
								<FaGithubSquare />
							</SocialIconLink>
						</SocialIcons>
					</SocialWrapper>
				</SocialMedia>
			</Wrapper>
		</Container>
	);
};

export default Footer;
