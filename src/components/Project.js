import React, { useState } from 'react';
import styled from 'styled-components';
import news1 from '../images/NewsApi -1.png';
import news2 from '../images/NewsApi -2.png';
import news3 from '../images/NewsApi -3.png';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import LazyLoad from 'react-lazyload';

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
			<Fade left cascade>
				<Line />
			</Fade>
			<Zoom clear cascade>
				<div className="head">1. News Api Voice Search </div>
				<Flex>
					<ContentImage>
						<i class="fas fa-arrow-alt-circle-left left-arrow" onClick={previous} />
						<Images>
							{newsApiImage.map((data, index) => (
								<div className={index === current ? 'slide active' : 'slide'} key={index}>
									<LazyLoad effect="blur">{index === current && <img src={data} alt="" />}</LazyLoad>
								</div>
							))}
						</Images>
						<i class="fas fa-arrow-alt-circle-right right-arrow" onClick={next} />
					</ContentImage>
					<div className="text">
						<h3>Created using Reactjs, Redux etc.</h3>
						<h3>News Api Voice Search is based on newsapi.org JSON API.</h3>
						<h3>Search with your voice and search by category.</h3>
						<h3>Its displays title, release date, source and provide link to the website</h3>
						<ul>
							<li>react</li>
							<li>redux</li>
							<li>react-speech-regcognition</li>
							<li>framer-motion</li>
							<li>styled-components</li>
							<li>axios</li>
						</ul>

						<a href="https://github.com/Pratham2712/News-Project" target="_blank">
							<i class="fab fa-github" />
						</a>
					</div>
				</Flex>
			</Zoom>
		</StyledSection>
	);
};

const StyledSection = styled.div`
	padding-bottom: 5rem;
	min-height: 50vh;

	h1 {
		padding-bottom: 1rem;
		font-weight: bold;
		color: #ff29f6;
		font-size: 2rem;
		@media (max-width: 600px) {
			font-size: 1.5rem;
		}
	}
	.head {
		margin-bottom: 2rem;
		font-size: 1.7rem;
		background-color: black;
		color: white;
		display: inline-block;
		border-radius: 0.5rem;
		padding: 0.4rem 0.4rem;
		text-align: center;
		font-weight: bold;
		@media (max-width: 1024px) {
			text-align: initial;
			font-size: 1.2rem;
			margin-bottom: 1rem;
		}
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

	@media (max-width: 1000px) {
		padding: 0rem 0rem;
	}

	div {
	}
	img {
		height: 270px;
		width: 508px;
		@media (max-width: 600px) {
			height: 158px;
			width: 100%;
		}
		max-width: 100%;
		max-height: 100%;
		border-radius: 1rem;
		box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
		object-fit: contain;
	}

	.slide {
		opacity: 0;
		transition-duration: 1s ease;
		scale: 0.5;
	}

	.slide.active {
		opacity: 1;
		scale: 1;
		transition-duration: 1s;
	}
`;

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0rem 0rem;
	@media (max-width: 1024px) {
		padding: 0rem 0rem;
		flex-direction: column;
	}

	.text {
		text-align: right;
		padding-left: 1rem;
		@media (max-width: 1024px) {
			text-align: justify;
			padding-left: 0rem;
		}
	}
	h3 {
		padding-bottom: 1rem;
		color: #282828;
		@media (max-width: 1024px) {
			font-size: 1rem;
			padding-bottom: 0.5rem;
		}
	}
	i {
		font-size: 2.5rem;
		cursor: pointer;
		padding-top: 0.5rem;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		@media (max-width: 1024px) {
			justify-content: flex-start;
		}

		li {
			list-style-type: none;
			margin-left: 0.3rem;

			margin-bottom: 0.3rem;
			background-color: #008dcc;
			width: fit-content;
			padding: 0.4rem 0.4rem;
			border-radius: 0.5rem;
			color: white;
		}
	}

	.right-arrow {
		cursor: pointer;
		z-index: 10;
		font-size: 2rem;
	}
	.left-arrow {
		cursor: pointer;
		z-index: 10;
		font-size: 2rem;
	}
	a {
		color: black;
	}
`;

const ContentImage = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media (max-width: 1024px) {
		margin-bottom: 1rem;
	}
`;

export default Project;
