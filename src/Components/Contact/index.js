import React, { useState } from "react";
import styled from "styled-components";
import Image from "../../images/undraw1.svg";

const Container = styled.div`
	background: #e1e2e2; // platinum
	min-height: 500px;
	overflow: hidden;
	z-index: 0;
	padding-top: 5vh;
	padding-bottom: 5vh;
`;

const Wrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 1100px;
	width: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;
`;

const Content = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	flex-direction: row;
`;

const Form = styled.form`
	background: #1d2228; // eerie black
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
	display: grid;
	height: auto;
	margin-right: 10vw;
	max-width: 400px;
	padding: 40px 32px;
	width: 100%;
	z-index: 1;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
	}

	@media screen and (max-width: 890px) {
		margin-right: 0;
	}
`;

const H1 = styled.h1`
	color: #e1e2e2; // platinum
	font-size: 36px;
	font-weight: 500;
	text-align: center;
`;

const Label = styled.label`
	color: #e1e2e2; // platinum
	font-size: 18px;
	margin-top: 8px;
	margin-bottom: 8px;
`;

const FormButton = styled.button`
	margin-top: 10px;
	border-radius: 0px;
	background: #e1e2e2; // platinum / conditional
	white-space: nowrap;
	padding: 16px 50px; // conditional
	color: #1d2228; // eerie black /  conditional
	font-size: 28px; // conditional
	outline: 5px solid #646c79; // black coral / conditional
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: all 0.2s ease-in-out;
	text-decoration: none;

	@media screen and (max-height: 800px) {
		padding: 5px 10px;
	}

	&:hover {
		transition: all 0.2s ease-in-out;
		background: #646c79; // black coral / conditional
		color: #e1e2e2; // platinum / conditional
		outline: 5px solid #e1e2e2; // platinum / conditional
	}
`;

const InputTextArea = styled.textarea`
	width: 100%;
	resize: none;
`;

const InputTextInput = styled.input`
	width: 100%;
	resize: none;
`;

const ImgContainer = styled.div`
	height: 100%;
	max-width: 555px;
	margin-left: 5vw;

	@media screen and (max-width: 890px) {
		display: none;
	}
`;

const Img = styled.img`
	background-size: cover;
	border-radius: 4px;
	height: 600px;
	width: 400px;
	margin: auto;
	max-width: 400px;
	z-index: 1;
	padding-top: -100px;
	padding-bottom: -100px;

	@media screen and (max-width: 890px) {
		display: none;
	}
`;

const Contact = () => {
	const [contact, setContact] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();

	return (
		<Container id='contact'>
			<Wrapper>
				<Content>
					<Form
						name='contact'
						action='/'
						method='POST'
						data-aos='zoom-in'
						data-aos-duration='1000'
						data-aos-anchor-placement='center bottom'>
						<input required type='hidden' name='form-name' value='contact' />
						<H1>Contact Me</H1>
						<Label htmlFor='name'>Name:</Label>
						<InputTextInput
							name='name'
							type='text'
							rows='3'
							id='name'
							form='nameform'
							onChange={(event) => setName(event.target.value)}
							value={name}
							// defaultValue='You'
						/>
						<Label htmlFor='email'>Email:</Label>
						<InputTextInput
							type='email'
							rows='3'
							name='email'
							id='email'
							form='emailform'
							onChange={(event) => setEmail(event.target.value)}
							value={email}
							// defaultValue='hiring@company.com'
						/>
						<Label htmlFor='message'>Message:</Label>
						<InputTextArea
							type='text'
							rows='8'
							name='details'
							id='details'
							form='detailsform'
							onChange={(event) => setContact(event.target.value)}
							value={contact}
							// defaultValue='We want to hire you!  When can you start?'
						/>
						<FormButton type='submit'>Send</FormButton>
					</Form>
					<ImgContainer>
						<Img
							src={Image}
							data-aos='zoom-in'
							data-aos-duration='1000'
							data-aos-anchor-placement='center bottom'
						/>
					</ImgContainer>
				</Content>
			</Wrapper>
		</Container>
	);
};

export default Contact;
