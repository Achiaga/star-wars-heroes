import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { HeroesContext } from '../../App';
import { UPDATE_THEME } from '../../constants';

const ButtonToggler = styled.button`
	margin-top: 2em;
	padding: 1em;
`;

const TogglerButton = () => {
	const { state, dispatch } = useContext(HeroesContext);

	const isDarkMode = !state.isDarkMode;

	const getToggleButtonText = useCallback(() => {
		return `Toggle ${isDarkMode ? 'Dark' : 'Light'} Mode`;
	}, [isDarkMode]);

	const handleClick = () => {
		localStorage.setItem('isDarkMode', isDarkMode);
		dispatch({ type: UPDATE_THEME, payload: isDarkMode });
	};

	return <ButtonToggler onClick={handleClick}>{getToggleButtonText()}</ButtonToggler>;
};

export default TogglerButton;
