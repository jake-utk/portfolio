// include email, github, linkedin, twitter (?), blog
import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<div className='contact parallax-contact'>
			<form id='form' className='topBefore'>
				<header>Contact Me</header>
				<input id='name' type='text' placeholder='Name'></input>
				<input id='name' type='text' placeholder='E-mail'></input>
				<textarea id='message' type='text' placeholder='Message'></textarea>
				<input id='submit' defaultValue='GO!'></input>
			</form>
		</div>
	);
};

export default Contact;