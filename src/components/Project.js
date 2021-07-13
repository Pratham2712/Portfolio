import React, { useState } from 'react';
import styled from 'styled-components';
import news1 from '../images/NewsApi -1.png';
import news2 from '../images/NewsApi -2.png';
import news3 from '../images/NewsApi -3.png';

const Project = () => {
	const [ current, setCurrent ] = useState(0);
	const newsApiImage = [ news1, news2, news3 ];

	const previous = () => {
		setCurrent(current === 0 ? newsApiImage.length - 1 : current - 1);
	};
	const next = () => {
		setCurrent(current === newsApiImage.length - 1 ? 0 : current + 1);
	};

	return (
		<StyledSection>
			<h1>Projects</h1>
			<Line />
			<h2>News Api Voice Search</h2>
			<Flex>
				<i class="fas fa-arrow-alt-circle-left" onClick={previous} />
				<Images>
					{newsApiImage.map((data, index) => (
						<div className={index === current ? 'slide active' : 'slide'} key={index}>
							{index === current && <img src={data} alt="" />}
						</div>
					))}
				</Images>
				<i class="fas fa-arrow-alt-circle-right" onClick={next} />
			</Flex>
		</StyledSection>
	);
};

const StyledSection = styled.div`
	padding-bottom: 5rem;

	h1 {
		padding-bottom: 1rem;
		font-weight: bold;
		color: #ff29f6;
		font-size: 2rem;
		@media (max-width: 600px) {
			font-size: 1.5rem;
		}
	}

	h2 {
		text-align: center;
		margin-bottom: 2rem;
		background-color: black;
		color: white;
		padding: 0.3rem 0.3rem;
	}
`;

const Line = styled.div`
	height: 0.3rem;
	background: #00b0ff;
	margin-bottom: 2.5rem;
`;

const Images = styled.div`
	display: flex;
	user-select: none;
	justify-content: center;
	align-items: center;

	div {
		width: 100%;
		box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
		height: inherit;
		/* @media (max-width: 800px) {
			height: 45vh;
		}
		@media (max-width: 700px) {
			height: 35vh;
		} */
	}
	img {
		object-fit: contain;
		width: 700px;
		height: 350px;
		@media (max-width: 800px) {
			height: 300px;
		}
		@media (max-width: 700px) {
			height: 250px;
		}
		@media (max-width: 600px) {
			height: 200px;
		}
		@media (max-width: 400px) {
			height: 150px;
		}
		max-width: 100%;
		max-height: 100%;
	}

	.slide {
		display: none;
		/* opacity: 0; */
		transition-duration: 1s ease;
	}

	.slide.active {
		display: block;
		opacity: 1;
		transition-duration: 1s;
		/* transform: scale(1.08); */
	}
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	i {
		cursor: pointer;
		z-index: 10;
		font-size: 2rem;
	}
`;

export default Project;
