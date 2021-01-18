import React from "react";
import styled from "styled-components";
import { FaRegTimesCircle } from "react-icons/fa";

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

const CloseIcon = styled(FaRegTimesCircle)`
	color: #e1e2e2; // platinum
`;

const ProjectBar = ({ isOpen, toggle }) => {
	return (
		<Container isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
		</Container>
	);
};

export default ProjectBar;
