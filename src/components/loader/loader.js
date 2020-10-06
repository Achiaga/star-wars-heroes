import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
	position: fixed;
	bottom: 20px;
	left: 50%;
	transform: translate(-50%, 0%);
	padding: 0.4em 1em;
	border-radius: 5px;
	background: black;
	color: ${(props) => props.theme.colors.buttonColor};
	border: 2px solid ${(props) => props.theme.colors.buttonColor};
	font-family: monospace;
	font-size: 18px;
	font-weight: 900;
	cursor: pointer;
`;

const Loader = ({ handleNextPage }) => {
	return (
		<Button data-testid='load-recipes-button' onClick={handleNextPage}>
			LOAD MORE ⚙️
		</Button>
	);
};

export default Loader;
