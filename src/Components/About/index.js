import React from "react";
import styled from "styled-components";
import { Button } from '../Styles/index'
import Image from '../../images/DSC01950.jpeg'

const Container = styled.div`
	background: #1d2228; // eerie black
	color: #e1e2e2; // platinum

	@media screen and (max-width: 780px) {
		padding: 100px 0;
	}
`;

const Wrapper = styled.div`
	display: grid;
	height: 860px;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
	max-width: 1100px;
	padding: 0 24px;
	width: 100%auto;
	z-index: 1;
`;
const Row = styled.div`
	align-items: center;
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	grid-template-areas: "col2 col1";

	@media screen and (max-width: 780px) {
		grid-template-areas: "col1" "col2";
	}
`;

const ColumnOne = styled.div`
	grid-area: col1;
	margin-bottom: 15px;
	padding: 0 15px;
`;

const ColumnTwo = styled.div`
	grid-area: col2;
	margin-bottom: 15px;
	padding: 0 15px;
`;

const Content = styled.div`
	max-width: 540px;
	padding-bottom: 60px;
	padding-top: 0;
`;

const Intro = styled.p`
	color: #e1e2e2; // platinum
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 1.4px;
	line-height: 16px;
	margin-bottom: 16px;
	text-transform: uppercase;
`;

const Description = styled.p`
	color: #e1e2e2; // platinum
	font-size: 18px;
	line-height: 24px;
	margin-bottom: 35px;
	max-width: 440px;
`;

const H1 = styled.h1`
	color: #e1e2e2;
	font-size: 48px;
	font-weight: 700;
	line-height: 1.1;
	margin-bottom: 24px;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-start;
`;

const ImgContainer = styled.div`
	height: 100%;
	max-width: 555px;
`;

const Img = styled.img`
	margin: 0 0 10px 0;
	padding-right: 0;
	width: 100%;
`;

const About = () => {
	return (
		<Container>
			<Wrapper>
				<Row>
					<ColumnOne>
						<ImgContainer>
							<Img src={Image} alt='Picture of Jake' />
						</ImgContainer>
					</ColumnOne>
					<ColumnTwo>
						<Content>
							<Intro>Intro to this section...</Intro>
							<H1>About me</H1>
							<Description>
								Description here Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Voluptas ducimus, nemo aut animi quae quam
								consequatur, porro beatae provident quo ex. Aliquam, a harum
								perspiciatis dolore explicabo minima modi ullam.
							</Description>
							<ButtonContainer>
								<Button>IDK Button</Button>
							</ButtonContainer>
						</Content>
					</ColumnTwo>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default About;
