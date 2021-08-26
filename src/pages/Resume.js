import React, { useState } from 'react';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';

const Resume = () => {
	return (
		<StyledMain>
			<Slide top>
				<iframe
					src="https://drive.google.com/file/d/1YSMRUdcgJgjxkFgym74ECk6kpwqb-DSe/preview"
					width="100%"
					height="100%"
					allow="autoplay"
				/>
			</Slide>
		</StyledMain>
	);
};

const StyledMain = styled.main`
	padding-top: 4.2rem;
	height: 100vh;
`;

export default Resume;
