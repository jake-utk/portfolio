import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link as LinkScroll } from "react-scroll";

const Container = styled.aside`
	align-items: center;
	background: #1d2228; // eerie black
	display: grid;
	height: 100%;
	left: 0;
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

const CloseIcon = styled(FaTimes)`
	color: #e1e2e2; // platinum
`;

const Wrapper = styled.div`
	color: #e1e2e2; // platinum
`;

const Menu = styled.ul`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(5, 80px); // number of menu items
	text-align: center;

	@media screen and (max-width: 480px) {
		grid-template-rows: repeat(5, 60px); // number of menu items
	}
`;

const MenuLinkScroll = styled(LinkScroll)`
	align-items: center;
	color: #e1e2e2; // platinum
	cursor: pointer;
	display: flex;
	font-size: 1.5rem;
	justify-content: center;
	list-style: none;
	text-decoration: none;
	transition: 0.2s ease-in-out;

	&:hover {
		color: #e1e2e2;
		transition: 0.2s ease-in-out;
	}
`;

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<Container isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<Wrapper>
				<Menu>
					<MenuLinkScroll to='home' onClick={toggle}>
						Home
					</MenuLinkScroll>
					<MenuLinkScroll to='about' onClick={toggle}>
						About
					</MenuLinkScroll>
					<MenuLinkScroll to='contact' onClick={toggle}>
						Contact
					</MenuLinkScroll>
					<MenuLinkScroll to='projects' onClick={toggle}>
						Projects
					</MenuLinkScroll>
					<MenuLinkScroll to='skills' onClick={toggle}>
						Skills
					</MenuLinkScroll>
				</Menu>
			</Wrapper>
		</Container>
	);
};

export default Sidebar;
