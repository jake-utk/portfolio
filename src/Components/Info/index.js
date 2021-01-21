import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Resume from "../../docs/Resume.pdf";

const Container = styled.div`
	background: ${({ darkBackground }) =>
		darkBackground ? "#1d2228" : "#e1e2e2"}; // eerie black or platinum
	color: ${({ darkBackground }) =>
		darkBackground ? "#e1e2e2" : "#1d2228"}; // platinum

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
	grid-template-areas: ${({ imageStart }) =>
		imageStart ? `'col2 col1'` : `'col1 col2'`};
	overflow: hidden;

	@media screen and (max-width: 780px) {
		grid-template-areas: ${({ imageStart }) =>
			imageStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
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
	color: ${({ lightIntroText }) => (lightIntroText ? "#E1e2e2" : "#1d2228")};
	font-size: 16px;
	font-weight: 500;
	letter-spacing: 1.4px;
	line-height: 16px;
	margin-bottom: 16px;
	text-transform: uppercase;
`;

const Description = styled.p`
	color: ${({ lightDescriptionText }) =>
		lightDescriptionText ? "#e1e2e2" : "#1d2228"};
	font-size: 18px;
	line-height: 24px;
	margin-bottom: 35px;
	max-width: 440px;

	@media screen and (max-width: 480px) {
		font-size: 15px;
	}
`;

const H1 = styled.h1`
	color: ${({ lightH1Text }) => (lightH1Text ? "#e1e2e2" : "#1d2228")};
	font-size: 48px;
	font-weight: 700;
	line-height: 1.1;
	margin-bottom: 24px;

	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`;

const ButtonContainer = styled.div`
	display: ${({ buttonHide }) => (buttonHide ? "none" : "flex")};
	justify-content: flex-start;
`;

const Button = styled.a`
	border-radius: 0px;
	background: ${({ lightButton }) => (lightButton ? "#e1e2e2" : "#1d2228")};
	white-space: nowrap;
	padding: 16px 50px;
	color: ${({ darkText }) => (darkText ? "#1D2228" : "#e1e2e2")};
	font-size: 28px;
	outline: 5px solid #646c79; // black coral
	border: none;
	cursor: pointer;
	display: ${({ buttonHide }) => (buttonHide ? "none" : "flex")};
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #646c79; // black coral
		color: #e1e2e2; // platinum
		outline: 5px solid #e1e2e2; // platinum
	}
`;

const ImgContainer = styled.div`
	height: 100%;
	max-width: 555px;
`;

const Img = styled.img`
	background-size: cover;
	max-height: ${({ portraitOrient }) => (portraitOrient ? "500px" : "350px")};
	max-width: ${({ portraitOrient }) => (portraitOrient ? "350px" : "500px")};
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;

const AltContainer = styled.a`
	text-decoration: none;
`;

const AltImg = styled.img``;

const Info = ({
	id,
	darkBackground,
	lightIntroText,
	lightH1Text,
	lightDescriptionText,
	introText,
	h1Text,
	descText,
	buttonText,
	imageStart,
	image,
	altText,
	lightButton,
	darkText,
	portraitOrient,
	buttonHide,
}) => {
	const [width, setWidth] = useState();

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	window.addEventListener("resize", () => {
		setWidth(window.innerWidth);
	});

	return (
		<Container darkBackground={darkBackground} id={id}>
			<Wrapper>
				<Row imageStart={imageStart}>
					<ColumnOne>
						<Content>
							<Intro
								lightIntroText={lightIntroText}
								data-aos='zoom-in'
								data-aos-duration='1000'
								data-aos-anchor-placement='center-bottom'>
								{introText}
							</Intro>
							<H1
								lightH1Text={lightH1Text}
								data-aos='zoom-in'
								data-aos-duration='1000'
								data-aos-anchor-placement='center-bottom'>
								{h1Text}
							</H1>
							<Description
								lightDescriptionText={lightDescriptionText}
								data-aos='zoom-in'
								data-aos-duration='1000'
								data-aos-anchor-placement='center-bottom'>
								{descText}
							</Description>
							{buttonHide ? (
								<AltContainer
									target='_blank'
									href='https://www.codewars.com/users/jake-utk'>
									<AltImg
										src={
											width > "600"
												? "https://www.codewars.com/users/jake-utk/badges/large"
												: width > "380"
												? "https://www.codewars.com/users/jake-utk/badges/small"
												: "https://www.codewars.com/users/jake-utk/badges/micro"
										}
										alt='codewars badge'
										data-aos='zoom-in'
										data-aos-duration='1000'
										data-aos-anchor-placement='center-bottom'
									/>
								</AltContainer>
							) : (
								<ButtonContainer>
									<Button
										buttonHide={buttonHide}
										lightButton={lightButton}
										darkText={darkText}
										href={Resume}
										target='_blank'
										rel='noreferrer'
										data-aos='zoom-in'
										data-aos-duration='1000'
										data-aos-anchor-placement='center-bottom'>
										{buttonText}
									</Button>
								</ButtonContainer>
							)}
						</Content>
					</ColumnOne>
					<ColumnTwo>
						<ImgContainer>
							<Img
								portraitOrient={portraitOrient}
								src={image}
								alt={altText}
								data-aos='zoom-in'
								data-aos-duration='1000'
								data-aos-anchor-placement='center bottom'
							/>
						</ImgContainer>
					</ColumnTwo>
				</Row>
			</Wrapper>
		</Container>
	);
};

export default Info;
