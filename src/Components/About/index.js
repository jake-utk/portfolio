import React from "react";
import styled from "styled-components";
import Image from "../../images/DSC01950.jpeg";
import Resume from "../../docs/Resume.pdf";

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
	width: 100%;
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

	@media screen and (max-width: 480px) {
		font-size: 15px;
	}
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

	@media screen and (max-width: 480px) {
		justify-content: center;
	}
`;

const Button = styled.a`
	border-radius: 0px;
	background: #e1e2e2; //platinum
	white-space: nowrap;
	padding: 16px 50px;
	color: #1d2228; // eerie black
	font-size: 28px;
	outline: 5px solid #646C79; // black coral
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	text-decoration: none;
	
	&:hover {
		transition: all 0.2s ease-in-out;
		background: #646C79; // black coral
		color: #e1e2e2; // platinum
		outline: 5px solid #e1e2e2; // platinum
	}
`;

const ImgContainer = styled.div`
	height: 100%;
	max-width: 555px;
`;

const Img = styled.img`
	margin: 0 0 10px 0;
	padding-right: 0;
	width: 100%;
	border-radius: 100%;
`;

const About = () => {
	return (
		<Container id='about'>
			<Wrapper>
				<Row>
					<ColumnOne>
						<ImgContainer>
							<Img src={Image} alt='Picture of Jake' />
						</ImgContainer>
					</ColumnOne>
					<ColumnTwo>
						<Content>
							<Intro>Learn more...</Intro>
							<H1>About me</H1>
							<Description>
								I’m a software developer who designs object-oriented,
								user-centric, and responsive applications that bring a
								business’s idea to life. I leverage my technical, analytical,
								and problem-solving skills to write functional application code
								that is modular and is ready to scale. I’m able to debug my
								issues independently and have experience with version control in
								a team environment.
							</Description>
							<ButtonContainer>
								<Button href={Resume} target='_blank' rel='noreferrer'>
									Resume
								</Button>
							</ButtonContainer>
						</Content>
					</ColumnTwo>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default About;