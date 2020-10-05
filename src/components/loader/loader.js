import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 2em;
`;

const Button = styled.button`
	padding: 1em;
`;

const Loader = ({ handleNextPage }) => {
	return (
		<Wrapper>
			<Button data-testid='load-recipes-button' onClick={handleNextPage}>
				Load more
			</Button>
		</Wrapper>
	);
};

export default Loader;
