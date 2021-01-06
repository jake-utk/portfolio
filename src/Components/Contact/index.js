import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../../Components/Styles";

const Container = styled.div`
	background: #e1e2e2; // platinum
	bottom: 0;
	left: 0;
	min-height: 700px;
	overflow: hidden;
	right: 0;
	top: 0;
	z-index: 0;
	padding: 100px 0;

	/* @media screen and (max-width: 780px) {
		padding: 100px 0;
	} */
`;

const Wrapper = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 1100px;
	padding: 0 24px;
	width: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;

	@media screen and (max-width: 400px) {
		height: 80%;
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: center;

	@media screen and (max-width: 480px) {
		padding: 10px;
	}
`;

const Form = styled.form`
	background: #1d2228; // eerie black
	border-radius: 4px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
	display: grid;
	height: auto;
	margin: 0 auto;
	max-width: 400px;
	padding: 40px 32px;
	width: 100%;
	z-index: 1;

	@media screen and (max-width: 400px) {
		padding: 32px 32px;
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

const FormButton = styled(Button)`
	margin-top: 10px;
	outline: 0px;
`;

const InputTextArea = styled.textarea`
	width: 100%;
	resize: none;
`;

const Contact = () => {
	const [contact, setContact] = useState();
	const [name, setName] = useState();
	const [email, setEmail] = useState();

	return (
		<Container id='contact'>
			<Wrapper>
				<Content>
					<Form>
						<H1>Contact Me</H1>
						<Label htmlFor='name'>Name:</Label>
						<InputTextArea
							type='text'
							rows='3'
							id='name'
							form='nameform'
							onChange={(event) => setName(event.target.value)}
							value={name}
						/>
						<Label htmlFor='email'>Email:</Label>
						<InputTextArea
							type='text'
							rows='3'
							name='email'
							id='email'
							form='emailform'
							onChange={(event) => setEmail(event.target.value)}
							value={email}
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
						/>
						<FormButton to=''>Send</FormButton>
					</Form>
				</Content>
			</Wrapper>
		</Container>
	);
};

export default Contact;
