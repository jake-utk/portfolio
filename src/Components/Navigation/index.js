import React, { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
import { animateScroll as Scroll } from "react-scroll";

const NavWrapper = styled.nav`
	align-items: center;
	background: ${(p) =>
		p.scrollvalue ? "#1d2228" : "transparent"}; // eerie black
	display: flex;
	font-size: 1rem;
	height: 80px;
	margin-top: -80px;
	justify-content: center;
	position: sticky;
	top: 0;
	z-index: 10;
	/* border-bottom: ${(p) =>
		p.scrollvalue ? "2.5px solid #F58549" : "transparent"}; */
	transition: 0.8s all ease;

	@media screen and (max-width: 960px) {
	}
`;

const Container = styled.div`
	display: flex;
	height: 80px;
	justify-content: space-between;
	max-width: 1100px;
	padding: 0 24px;
	width: 100%;
	z-index: 1;
`;

const LogoRouter = styled(LinkRouter)`
	color: ${(p) => (p.scrollvalue ? "#E1E2E2" : "transparent")}; // platinum
	justify-self: flex-start;
	cursor: pointer;
	font-size: 42px;
	display: flex;
	align-items: center;
	margin-left: 24px;
	font-weight: bold;
	text-decoration: none;
	transition: 0.8s all ease;

	@media screen and (max-width: 780px) {
		margin-top: -10px;
		font-size: 24px;
	}
`;

const BurgerButton = styled.div`
	display: none;

	@media screen and (max-width: 780px) {
		color: #e1e2e2; // platinum
		cursor: pointer;
		display: block;
		font-size: 1.8rem;
		position: absolute;
		right: 0;
		top: 0;
		transform: translate(-100%, 60%);
	}
`;

const BurgerMenu = styled.ul`
	align-items: center;
	display: flex;
	list-style: none;
	margin-right: -24px;
	text-align: center;

	@media screen and (max-width: 780px) {
		display: none;
	}
`;

const BurgerItem = styled.li`
	height: 80px;
`;

const BurgerLinkScroll = styled(LinkScroll)`
	align-items: center;
	color: #e1e2e2; // platinum
	cursor: pointer;
	display: flex;
	height: 100%;
	padding: 0 1rem;
	text-decoration: none;

	&.active {
		border-bottom: 3px solid #e1e2e2; // platinum
	}
`;

const Nav = ({ toggle }) => {
	const [scrollValue, setScrollValue] = useState(0);
	const pages = ["Home", "About", "Skills", "Projects", "Contact"];

	const changeScroll = () => {
		if (window.scrollY >= 80) {
			setScrollValue(1);
		} else {
			setScrollValue(0);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeScroll);
	}, []);

	const scrollHome = () => {
		Scroll.scrollToTop();
	};

	return (
		<IconContext.Provider value={{ color: "#E1E2E2" }}>
			<NavWrapper scrollvalue={scrollValue}>
				<Container>
					<LogoRouter scrollvalue={scrollValue} to='/' onClick={scrollHome}>
						J/A
					</LogoRouter>
					<BurgerButton onClick={toggle}>
						<CgMenuRight />
					</BurgerButton>
					<BurgerMenu>
						{pages.map((page, i) => (
							<BurgerItem key={i}>
								<BurgerLinkScroll
									to={page.toLowerCase()}
									exact='true'
									smooth={true}
									duration={500}
									key={i}>
									{page}
								</BurgerLinkScroll>
							</BurgerItem>
						))}
					</BurgerMenu>
				</Container>
			</NavWrapper>
		</IconContext.Provider>
	);
};

export default Nav;
