import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { HeroesContext } from '../../App';
import { UPDATE_THEME } from '../../constants';

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ButtonToggler = styled.button`
	margin-top: 2em;
	padding: 1em;
`;

const SwitchThemeButton = () => {
	const { state, dispatch } = useContext(HeroesContext);

	const isDarkMode = !state.isDarkMode;

	const getToggleButtonText = useCallback(() => {
		return `Switch ${isDarkMode ? 'Dark' : 'Light'} Mode`;
	}, [isDarkMode]);

	const handleClick = () => {
		localStorage.setItem('isDarkMode', isDarkMode);
		dispatch({ type: UPDATE_THEME, payload: isDarkMode });
	};

	return (
		<Wrapper>
			<ButtonToggler onClick={handleClick}>{getToggleButtonText()}</ButtonToggler>
		</Wrapper>
	);
};

export default SwitchThemeButton;
