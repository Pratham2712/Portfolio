import React from 'react';
import Svg from '../components/Svg';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import { titleAnim, pageAnimation, fade } from '../Animation';

import Skills from '../components/Skills';

import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<Main variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{ backgroundColor: '#fff' }}>
			<StyledSection>
				<Text>
					<Hide>
						<motion.h1 variants={titleAnim} initial="hidden" animate="show">
							I'm <span>Pratham Vaishya</span>
						</motion.h1>
					</Hide>
					<div className="subtext">
						<Hide>
							<motion.h1 variants={titleAnim} initial="hidden" animate="show">
								I build things for the web
							</motion.h1>
						</Hide>
					</div>
					<Link to="/Contact">
						<motion.button variants={fade} initial="hidden" animate="show">
							Get in touch
						</motion.button>
					</Link>
				</Text>
				<Svg />
			</StyledSection>
			<Skills />
		</Main>
	);
};

const Main = styled(motion.main)`
    min-height: 100vh;
    padding: 0rem 5rem;
	@media (max-width: 1000px){
		padding: 0rem 3rem;
			
	}
	@media (max-width: 600px){
	    padding: 0rem 1rem;
			
	}
`;

const Hide = styled.div`overflow: hidden;`;

const StyledSection = styled(motion.section)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 50vh;
	@media (max-width: 600px){
			padding-top: 5rem;
			
		}
	@media (max-width: 1000px){
		padding-top: 5rem;
		flex-direction: column-reverse;
			
		}

`;

const Text = styled(motion.div)`
    flex: 1;

	h1 {
        font-size: 3rem;
        z-index: 4;
		line-height: 5rem;
		@media (max-width: 1300px){
			font-size: 2rem;
		}
		@media (max-width: 1000px){
			line-height: 3.3rem
		}
		@media (max-width: 600px){
			font-size: 1.5rem;
			line-height: 2.5rem;
			text-align: center;
		}
		@media (max-width: 500px){
			font-size: 1.5rem;
			text-align: center;
			
		}
    }
    span {
        color: #FF29F6;
    }
	.subtext {
		h1{
        font-size: 2.9rem;
        z-index: 4;
		color: #403e3e;
		@media (max-width: 1300px){
			font-size: 2rem;

		}
		@media (max-width: 600px){
			font-size: 1.5rem;
			text-align: center;
			
		}
		@media (max-width: 500px){
			font-size: 1.5rem;
			text-align: center;
			
		}
	}
	}

	button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #00B0FF;
    background: transparent;
	margin-top: 1.7rem;
    transition: all .5s ease;
    font-family: 'Inter',sans-serif;
    &:hover {
        background-color: #00B0FF;
        color: white;
    }
    @media (max-width: 600px){
	    padding: 0.6rem 1rem;
		margin-top: 1rem;
			
	}
    @media (max-width: 1000px){
	    margin-bottom: 2rem;
	}
	

}
	
`;

export default Home;
