import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { animateScroll as Scroll } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from 'react-icons/ai'

const Container = styled.footer`
	background-color: #1d2228;
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

const LinksContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

const LinksWrapper = styled.div`
	display: flex;
	margin-bottom: 50px;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

const LinkItems = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	text-align: left;
	box-sizing: border-box;

	@media screen and (max-width: 420px) {
		margin: 0;
		width: 100%;
		align-items: center;
		flex-direction: column;
	}
`;

const FooterLink = styled(Link)`
	color: #e1e2e2; // ruby red
	text-decoration: none;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-bottom: 1rem;
	max-width: 100%;
	font-size: 14px;

	&:hover {
		color: #9b1d20; // ruby red
		transition: 0.3s ease-out;
	}
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
		transition: 0.3s ease-out;
	}
`;

const Copyright = styled.small`
	color: #e1e2e2; // platinum
	margin-bottom: 16px;
	display: flex;
	justify-content: space-between;
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
				<LinksContainer>
					<LinksWrapper>
						<LinkItems>
							<FooterLink to='/'>Link</FooterLink>
							<FooterLink to='/'>Link</FooterLink>
							<FooterLink to='/'>Link</FooterLink>
							<FooterLink to='/'>Link</FooterLink>
							<FooterLink to='/'>Link</FooterLink>
						</LinkItems>
					</LinksWrapper>
				</LinksContainer>
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
								href='https://linkedin.com'
								target='_blank'
								aria-label='LinkedIn'>
								<FaLinkedin />
							</SocialIconLink>
							<SocialIconLink
								href='gmail.google.com'
								target='_blank'
								aria-label='Email'>
								<AiOutlineMail />
							</SocialIconLink>
						</SocialIcons>
					</SocialWrapper>
				</SocialMedia>
			</Wrapper>
		</Container>
	);
};

export default Footer;
