import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

const Navbar = () => {
	const [ toggle, setToggle ] = useState(false);
	const { pathname } = useLocation();

	const clear = () => {
		const back = document.querySelector('.back');
		document.addEventListener('click', function(event) {
			if (event.target === back) {
				setToggle(false);
			}
		});
	};

	useEffect(() => {
		const back = document.querySelector('.back');
		document.addEventListener('click', function(event) {
			if (event.target === back) {
				setToggle(false);
			}
		});
	}, []);
	return (
		<div>
			<StyledNav>
				<div>
					<h2>
						<Link to="/" onClick={() => setToggle(false)}>
							pratham vaishya
						</Link>
					</h2>
				</div>

				<ul
					style={{
						transform: toggle ? 'translateX(0%)' : ''
					}}
					className="back"
				>
					<li>
						<Link to="/" onClick={() => setToggle(false)}>
							Home
						</Link>
						<Line
							transition={{ duration: 0.5 }}
							initial={{ width: '0%' }}
							animate={{ width: pathname === '/' ? '50%' : '0%' }}
						/>
					</li>
					<li>
						<Link to="/Project" onClick={() => setToggle(false)}>
							Project
						</Link>
						<Line
							transition={{ duration: 0.5 }}
							initial={{ width: '0%' }}
							animate={{ width: pathname === '/Project' ? '50%' : '0%' }}
						/>
					</li>
					<li>
						<Link to="/Resume" onClick={() => setToggle(false)}>
							Resume
						</Link>
						<Line
							transition={{ duration: 0.5 }}
							initial={{ width: '0%' }}
							animate={{ width: pathname === '/Resume' ? '50%' : '0%' }}
						/>
					</li>
					<li className="contact">
						<Link to="/Contact" onClick={() => setToggle(false)}>
							Contact
						</Link>
						<Line
							transition={{ duration: 0.5 }}
							initial={{ width: '0%' }}
							animate={{ width: pathname === '/Contact' ? '50%' : '0%' }}
						/>
					</li>
				</ul>
				<StyledBurger
					onClick={() => setToggle(!toggle)}
					style={{
						border: toggle ? '2px solid yellow' : ''
					}}
				>
					<i class="fas fa-bars" />
				</StyledBurger>
			</StyledNav>
		</div>
	);
};

const StyledNav = styled(motion.nav)`
	display: flex;
	-webkit-box-shadow: 0 8px 6px -6px grey;
	-moz-box-shadow: 0 8px 6px -6px grey;
	background-color: #282828;
	box-shadow: 0 8px 6px -6px grey;
	position: fixed;
	padding: 0rem 5rem;
	margin: auto;
	width: 100%;
	min-height: 10vh;
	z-index: 10;
	color: white;
	justify-content: space-between;
	align-items: center;
	a {
	    color: inherit;
		text-decoration: none;
	}
	@media (max-width: 1000px){
	    padding: 0rem 3rem;
			
	}
	@media (max-width: 600px){
	    padding: 0rem 1rem;
			
	}
	

	h2 {
		font-family: 'Lobster', cursive;
		font-weight: lighter;
		cursor: pointer;
		font-size: 1.8rem;
		@media (max-width: 600px){
	        font-size: 1.5rem;
			
	}
	}
	
	ul {
		display: flex;
		@media (max-width: 1000px){
			position: absolute;
			top: 100%;
			flex-direction: column;
			width: 100%;
			height: 100vh;
			background-color: rgba(0,0,0,0.5);
			left: 0;
			align-items: flex-end;
			transform: translateX(100%);
            transition: transform .3s ease;
		}
		li {
			list-style-type: none;
			padding-left: 7rem;
			font-family: Montserrat;
			font-size: 1.2rem;
			font-weight: 500;
			position: relative;
			a {
				cursor: pointer;
			}
			@media (max-width: 1000px){
				padding-left: 2rem;
				padding-top: 2rem;
				width: 60%;
				background-color: #282828;
			}
		}
			@media (max-width: 1000px){
				li.contact {
                    height: 100vh;
					/* padding-bottom: 44rem; */
				}

			}
	}
`;

const Line = styled(motion.div)`
    height: 0.2rem;
    width: 0%;
    background: #00B0FF;
    bottom: -50%;
    position: absolute;
    left: 58%;
	@media (max-width: 1000px){
		display: none;
	}
`;

const StyledBurger = styled(motion.div)`
    display: none;
	font-size: 1.5rem;
	cursor: pointer;
	padding: 0.3rem 0.3rem;
	transition: all .3s ease;
	@media (max-width: 1000px) {
		display: block;
	}
`;

export default Navbar;
