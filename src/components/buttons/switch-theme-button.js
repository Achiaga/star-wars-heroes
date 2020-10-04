import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { HeroesContext } from '../../App';

const ButtonToggler = styled.button`
	margin-top: 2em;
	padding: 1em;
`;

const TogglerButton = () => {
	const { isDarkMode, setIsDarkMode } = useContext(HeroesContext);

	const getToggleButtonText = useCallback(() => {
		return `Toggle ${!isDarkMode ? 'Dark' : 'Light'} Mode`;
	}, [isDarkMode]);

	const handleClick = useCallback(() => {
		setIsDarkMode(!isDarkMode);
		localStorage.setItem('isDarkMode', !isDarkMode);
	}, [isDarkMode, setIsDarkMode]);

	return <ButtonToggler onClick={handleClick}>{getToggleButtonText()}</ButtonToggler>;
};

export default TogglerButton;
