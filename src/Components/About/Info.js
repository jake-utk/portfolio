import React from "react";
import styled from "styled-components";
import Pic from "../../images/DSC01950.jpeg";
import Resume from "../../docs/Resume.pdf";

// GRID DEMONSTRATION
// First, define parent container element as grid with display: grid
// Then, set column and row sizes with grid-template-columns & grid-template-rows
// Place child elements into the grid with grid-column and grid-row

// container element
const Container = styled.div`
	// styling
	background: #e1e2e2; // platinum
	color: #1d2228; // eerie black
	min-height: 850px;
	// positioning
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1rem;

	@media screen and (max-width: 780px) {
		display: inline-grid;
		grid-template-columns: repeat(auto-fill, minmax(auto, 1fr));
	}
`;

// child Container
const Image = styled.div`
	//styling
	background: url(${Pic});
	background-position: 65% 0;
	background-size: cover;
	height: 500px;
	width: 300px;
	border-radius: 0px;
	outline: 5px solid #646c79; // black coral

	// positioning

	@media screen and (max-width: 780px) {
		height: 400px;
		width: 250px;
	}

	&:hover {
		transition: all 0.2s ease-in-out;
		outline: 5px solid #d12228; // eerie black
	}
`;

// child of grid container
const Title = styled.p`
	color: #1d2228;
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 1.4px;
	line-height: 16px;
	text-transform: uppercase;

	@media screen and (max-width: 780px) {
	}
`;

// child of grid container
const H1 = styled.h1`
	color: #1d2228; // eerie black
	font-size: 48px;
	font-weight: 700;
	line-height: 1.1;

	@media screen and (max-width: 780px) {
	}
`;

// child of grid container
const P = styled.p`
	white-space: normal;

	@media screen and (max-width: 780px) {
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 780px) {
	}
`;

const Button = styled.a`
	background: #1d2228; // eerie black
	color: #e1e2e2; // platinum
	font-size: 28px;
	cursor: pointer; // changes cursor to pointer on mouseover
	text-decoration: none; // removes link decoration from a tags
	border-radius: 0px; // determines roundness of corners
	transition: all 0.2s ease-in-out;
	white-space: nowrap; // defines how white space is handled inside this element
	padding: 16px 50px; // vertical | horizontal
	outline: 5px solid #646c79; // black coral

	// positioning

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #646c79; // black coral
		color: #e1e2e2; // platinum
		outline: 5px solid #d12228; // eerie black
	}
`;

const Info = () => {
	return (
		<Container>
			<Title
				data-aos='zoom-in'
				data-aos-duration='1000'
				data-aos-anchor-placement='center-bottom'>
				Learn more...
			</Title>
			<H1
				data-aos='zoom-in'
				data-aos-duration='1000'
				data-aos-anchor-placement='center-bottom'>
				About me
			</H1>
			<P
				data-aos='zoom-in'
				data-aos-duration='1000'
				data-aos-anchor-placement='center-bottom'>
				I’m a software developer who designs object-oriented, user-centric, and
				responsive applications that bring a business’s idea to life. I leverage
				my technical, analytical, and problem-solving skills to write functional
				application code that is modular and is ready to scale. I’m able to
				debug my issues independently and have experience with version control
				in a team environment.
			</P>

			<ButtonContainer>
				<Button
					href={Resume}
					target='_blank'
					rel='noreferrer'
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-anchor-placement='center-bottom'>
					Click
				</Button>
			</ButtonContainer>
			<Image
				alt='Picture of Jake'
				data-aos='zoom-in'
				data-aos-duration='1000'
				data-aos-anchor-placement='center bottom'></Image>
		</Container>
	);
};

export default Info;
