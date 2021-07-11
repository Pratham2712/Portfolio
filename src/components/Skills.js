import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';

const Skills = () => {
	return (
		<StyledSection>
			<motion.h1>Skills</motion.h1>
			<Fade left cascade>
				<Line />
			</Fade>
			<Zoom left cascade>
				<div className="Flex">
					<Parts>
						<h3>Languages</h3>
						<ul>
							<li>Javascript</li>
							<li>Python</li>
							<li>Node.JS</li>
						</ul>
					</Parts>
					<Parts>
						<h3>Frontend Frameworks</h3>
						<ul>
							<li>ReactJS</li>
						</ul>
					</Parts>
					<Parts>
						<h3>Web Design</h3>
						<ul>
							<li>Figma</li>
						</ul>
					</Parts>
					<Parts>
						<h3>UI</h3>
						<ul>
							<li>HTML5</li>
							<li>CSS3</li>
							<li>SASS</li>
							<li>Bootstrap</li>
						</ul>
					</Parts>
					<Parts>
						<h3>Javascript Library</h3>
						<ul>
							<li>Redux</li>
							<li>framer-motion</li>
							<li>styled-components</li>
						</ul>
					</Parts>
					<Parts>
						<h3>Backend Framework</h3>
						<ul>
							<li>Express</li>
						</ul>
					</Parts>
					<Parts>
						<h3>Database</h3>
						<ul>
							<li>MongoDB</li>
						</ul>
					</Parts>
					<Parts>
						<h3>Version Control</h3>
						<ul>
							<li>Git</li>
							<li>Github</li>
						</ul>
					</Parts>
					<Parts>
						<h3>Package Manager</h3>
						<ul>
							<li>npm</li>
						</ul>
					</Parts>
				</div>
			</Zoom>
		</StyledSection>
	);
};

const StyledSection = styled(motion.section)`
    padding-bottom: 5rem;
	h1 {
		padding-bottom: 1rem;
		font-weight: bold;
		color: #FF29F6;
		font-size: 2rem;
		@media (max-width: 600px) {
			font-size: 1.5rem;
		}
	}
	.Flex {
		display: flex;
    flex-wrap: wrap;
    align-items: baseline;
	justify-content: flex-start;
	}
`;

const Line = styled(motion.div)`
	height: 0.3rem;
	background: #00b0ff;
	margin-bottom: 2.5rem;
`;

const Flex = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
	justify-content: center;
`;

const Parts = styled(motion.div)`
    width: 33%;
	padding-bottom: 2rem;
	h3 {
		padding-bottom: 0.7rem;
		text-decoration: underline;
		color: #282828;
	}
	
	
	li {
		list-style-type: none;
		padding-bottom: 0.3rem;
		background-color: #008dcc;
		width: fit-content;
		padding: 0.4rem 0.4rem;
		border-radius: 0.5rem;
		color: white;
		margin-bottom: 0.3rem;
	}
	@media (max-width: 1000px) {
		width: 100%;
	}

`;

export default Skills;
