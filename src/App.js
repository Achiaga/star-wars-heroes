import React, { useReducer, useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import darkTheme from './themes/dark';
import lightTheme from './themes/light';
import Home from './components/home';
import { getIsDarkMode } from './utils/helper';
import { STAR_WARS_HEROES, UPDATE_STAR_WARS_HEROES, UPDATE_API_CALL } from './constants';
import getActions from './actions';

export const HeroesContext = createContext({});

const initialState = {
	persons: [],
	nextPage: null,
	count: null,
	heroValue: '',
	lastAPIcall: '',
};

function reducer(state, { payload, type }) {
	console.log(state);
	switch (type) {
		case STAR_WARS_HEROES:
			const { next, count } = payload;
			return {
				...state,
				persons: [...state.persons, ...payload.results],
				nextPage: next,
				count: count,
			};
		case UPDATE_API_CALL:
			return {
				...state,
				lastAPIcall: payload,
			};
		case UPDATE_STAR_WARS_HEROES:
			const { hero, value } = payload;
			return {
				...state,
				persons: hero.results,
				nextPage: hero.next,
				count: hero.count,
				heroValue: value,
			};
		default:
			return state;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [isDarkMode, setIsDarkMode] = useState(getIsDarkMode);
	const actions = getActions(dispatch);

	return (
		<ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
			<HeroesContext.Provider value={{ state, actions, isDarkMode, setIsDarkMode }}>
				<Home />
			</HeroesContext.Provider>
		</ThemeProvider>
	);
}

export default App;
