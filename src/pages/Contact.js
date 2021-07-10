import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { pageAnimation, sliderContainer, slider, formAnim } from '../Animation';
//Emailjs
import emailjs from 'emailjs-com';
import ScrollTop from '../ScrollTop';

const Contact = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('service_ycok5t9', 'template_nyix8c6', e.target, 'user_qt0fEolG4MNAUZOK9QL5X').then(
			(result) => {
				console.log(result.text);
			},
			(error) => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}

	return (
		<StyledMain variants={pageAnimation} initial="hidden" animate="show" exit="exit">
			<motion.div variants={sliderContainer}>
				<Frame1 variants={slider} />
				<Frame2 variants={slider} />
				<Frame3 variants={slider} />
				<Frame4 variants={slider} />
			</motion.div>
			<SectionBack>
				<nav>
					<h1>Get in touch</h1>
					<div>
						<a href="#">
							<i class="fab fa-facebook" />
						</a>
						<a href="#">
							<i class="fab fa-twitter-square" />
						</a>
						<a href="https://www.linkedin.com/in/pratham-vaishya-b40b49212/">
							<i class="fab fa-linkedin" />
						</a>
					</div>
				</nav>
				<Container variants={formAnim}>
					<div className="header">
						<h1>Email Me</h1>
						<h3>prathamvaishya123@gmail.com</h3>
						<h3>+91 9653111799</h3>
					</div>
					<form className="contact-form" onSubmit={sendEmail}>
						<label>Name</label>
						<input type="text" name="name" />
						<label>Email</label>
						<input type="email" name="email" />
						<label>Subject</label>
						<input type="text" name="subject" />
						<label>Message</label>
						<textarea name="message" />
						<button>send</button>
					</form>
				</Container>
			</SectionBack>
			<ScrollTop />
		</StyledMain>
	);
};

const SectionBack = styled(motion.section)`
    display: flex;
	align-items: center;
	flex-direction: column;
	nav {
		width: 50%;
		height: 8vh;
		display: flex;
		justify-content: space-between;
		@media (max-width: 750px){
			width: 100%;
		}
		@media (max-width: 450px){
			width: 100%;
			flex-direction: column;
			margin-bottom: 1rem;
		}
		a {
			font-size: 1.6rem;
	        padding: 0px 15px;
			
		}
	a:nth-child(1) {
color: #4267b2;
}
a:nth-child(2) {
color: #2867b2;
}
a:nth-child(3) {
color: #1da1f2;
}
		h1 {
			color: #FF29F6;
			font-weight: bold;
			font-size: 1.6rem;
		}
	}
`;

const StyledMain = styled(motion.main)`
    background: #fff;
	color: black;
    width: 100%;
	min-height: 100vh;
	padding: 6rem 5rem;
	/* padding-top: 6rem; */
	@media (max-width: 600px){
	    padding: 0rem 1rem;
			padding-top: 6rem;
	}
	@media (max-width: 1000px){
	    padding: 0rem 3rem;
			padding-top: 6rem;
	}
`;

const Frame1 = styled(motion.div)`
	position: fixed;
	width: 100%;
	height: 100vh;
	left: 0;
	top: 10%;
	z-index: 2;
	background: #fffebf;
`;

const Frame2 = styled(Frame1)`
    background: #8ed2ff;
`;
const Frame3 = styled(Frame1)`
    background: #ff8efb;
`;
const Frame4 = styled(Frame1)`
    background: #8effa0;
	`;

const Container = styled(motion.div)`
    display: flex;
	flex-direction: column;
    border-radius: 1rem;
    max-width: 410px;
	min-width: 280px;
	background-color: white;
	border: 1px solid lightgray; 
	border-bottom: 3px solid grey;
	.header {
		border-bottom: 1px solid grey; 
	  background: url('https://images2.imgbox.com/a5/2e/m3lRbCCA_o.jpg') left -98px;
	  color: white;
	  padding: 2rem 2rem;
	  border-top-right-radius: 1rem;
	  border-top-left-radius: 1rem;
	  h1 {
		  color: white;
		  font-size: 1.4rem;
	  }
	  h3 {
		  padding-top: 0.5rem;
	  }
	}
  form {
	  display: flex;
	  flex-direction: column;
	  padding: 1rem 2rem;
	  label {
		  padding-top: 1rem;
		  color: #00B0FF
		}
	  button {
		  margin-top: 1rem;
	  }
	  input {
		  padding: 0.3rem 0.4rem;
		  outline: none;
	  }
	  textarea {
		  outline: none;
		  padding: 0.3rem 0.4rem;
	  }
	  button {
		  padding: 0.4rem 0rem;
		  cursor: pointer;
		  font-weight: bold;
		  font-size: 1rem;
		  border: 2px solid #00B0FF;
		  background: transparent;
		  transition: all .5s ease;
		  color: #00B0FF;
		  width: 30%;
		  &:hover {
			  background-color: #00B0FF;
			  color: white;
			}
		}
	}
	`;

export default Contact;
