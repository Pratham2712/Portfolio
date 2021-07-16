import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { pageAnimation, sliderContainer, slider, formAnim } from '../Animation';
//Emailjs
import emailjs from 'emailjs-com';
import ScrollTop from '../ScrollTop';
import Fade from 'react-reveal/Fade';

const Contact = () => {
	const [ notify, setNotify ] = useState(false);

	function showerror(input, message) {
		const border = input.parentElement;
		border.className = 'form-common error';
		const small = border.querySelector('small');
		small.innerText = message;
	}

	function showsucess(input) {
		const border = input.parentElement;
		border.className = 'form-common sucess';
		const small = border.querySelector('small');
		small.innerText = '';
	}

	const checkUsername = (input) => {
		if (input.value === '') {
			showerror(input, 'Name is required*');
		} else {
			showsucess(input);

			return true;
		}
	};
	const checkEmail = (input) => {
		const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
		if (input.value === '') {
			showerror(input, 'Email is required*');
		} else if (reg.test(input.value.trim()) == false) {
			showerror(input, 'Email is invalid');
		} else {
			showsucess(input);
			return true;
		}
	};
	const checkMessage = (input) => {
		if (input.value === '') {
			showerror(input, 'Message is required*');
		} else {
			showsucess(input);
			return true;
		}
	};

	/* const checkSubject = (input) => {
		if (input.value === '') {
			showerror(input, 'Subject is required*');
		} else {
			showsucess(input);
			return true;
		}
	}; */

	function sendEmail(e) {
		e.preventDefault();
		const username = document.querySelector('.username');
		const email = document.querySelector('.email');
		/* const subject = document.querySelector('.subject'); */
		const message = document.querySelector('.message');

		checkUsername(username);
		checkEmail(email);
		/* checkSubject(subject); */
		checkMessage(message);

		if (checkUsername(username) && checkEmail(email) && checkMessage(message)) {
			emailjs.sendForm('service_ycok5t9', 'template_nyix8c6', e.target, 'user_qt0fEolG4MNAUZOK9QL5X').then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
			e.target.reset();

			setNotify(true);
			setTimeout(() => {
				setNotify(false);
			}, 1500);
		}
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
						<a href="https://github.com/Pratham2712" target="_blank">
							<i class="fab fa-github" />
						</a>
						<a href="https://www.linkedin.com/in/pratham-vaishya-b40b49212/" target="_blank">
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
					<form onSubmit={sendEmail}>
						<div className="form-common">
							<label>Name</label>
							<input className="username" type="text" name="from_name" />

							<small />
						</div>
						<div className="form-common">
							<label>Email</label>
							<input className="email" type="text" name="from_email" />

							<small />
						</div>

						<div className="form-common">
							<label>Message</label>
							<textarea className="message" name="message" rows="5" />

							<small />
						</div>
						<button>send</button>
					</form>
				</Container>
				{notify ? <Notify>Message send successfully</Notify> : ''}
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
		margin-bottom: 1rem;
		@media (max-width: 750px){
			width: 100%;
		}
		@media (max-width: 450px){
			width: 100%;
			/* flex-direction: column; */
			
		}
		a {
			font-size: 1.6rem;
	        padding: 0px 15px;
			
		}
	a:nth-child(1) {
color: #4267b2;
}
a:nth-child(2) {
color: black;
}
a:nth-child(3) {
color: #1da1f2;
}
		h1 {
			color: #FF29F6;
			font-weight: bold;
			font-size: 1.7rem;
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
	@media (max-width: 1000px){
		padding: 6rem 3rem;
		/* padding-top: 6rem; */
	}
	@media (max-width: 600px){
		padding: 6rem 1rem;
		/* padding-top: 6rem; */
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
    max-width: 100%;
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
	  @media (max-width: 600px){
		  padding: 1rem 1rem;
	  }
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
	  @media (max-width: 600px){
		  padding: 0.5rem 1rem;
	  }
	  small {
		  color: red;
		  /* margin-bottom: 0.5rem; */
	  }
	  .form-common {
		  display: flex;
		  flex-direction: column;
		  label {
			  padding-top: 1rem;
			  color: #00B0FF;
			  margin-bottom: 0.3rem;
			}

			input {
				padding: 0.3rem 0.4rem;
				outline: none;
			}
			textarea {
				outline: none;
				padding: 0.3rem 0.4rem;
			}
		}
		.form-common .error input {
		border-color: red;
	}
	.form-common .sucess input {
		border-color: greenyellow;
	}
	  button {
		  margin-top: 1rem;
	  }
	  button {
		  padding: 0.3rem 0rem;
		  cursor: pointer;
		  font-weight: bold;
		  font-size: 1rem;
		  background: #00B0FF;
		  transition: all .5s ease;
		  color: white;
		  width: 100%;
		  text-transform: uppercase;
		  letter-spacing: 3px;
          border: none;
		  &:hover {
			  background-color: #FF29F6;
			  color: white;
			}
		}
	}
	`;

const Notify = styled.div`
	background-color: grey;
	color: white;
	position: absolute;
	padding: 0.4rem 0.4rem;
	bottom: 7rem;
	border-radius: 0.3rem;
`;

export default Contact;
