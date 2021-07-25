import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<StyledFooter>
			<h3>© Copy right 2021</h3>
			<h3>Made by Pratham Vaishya✌️✌️</h3>
			<ul>
				<li>
					<a href="https://www.linkedin.com/in/pratham-vaishya-b40b49212/" target="_blank">
						Linkedin
					</a>
				</li>

				<li>
					<a href="https://codepen.io/pratham11" target="_blank">
						Codepen
					</a>
				</li>
				<li>
					<a href="https://github.com/Pratham2712" target="_blank">
						Github
					</a>
				</li>
			</ul>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	min-height: 25vh;
	background-color: #282828;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: column;
	color: white;
	width: 100%;
	ul {
		display: flex;
	}
	li {
		list-style-type: none;
		margin-left: 1rem;
		cursor: pointer;
		border-bottom: 2px solid #282828;

		transition: .3s all ease-out;
	}
	li:hover {
		border-bottom: 2px solid #ff29f6;
		border-width: 100%;
	}
	a {
		color: white;
		text-decoration: none;
	}
`;

export default Footer;
