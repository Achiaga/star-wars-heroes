import React, { useReducer, createContext } from 'react';
import { ThemeProvider } from 'styled-components';
import darkTheme from './themes/dark';
import lightTheme from './themes/light';

import { STAR_WARS_HEROES, UPDATE_STAR_WARS_HEROES, UPDATE_THEME } from './constants';

import Home from './components/home';

export const HeroesContext = createContext({});

const initialState = {
	persons: [],
	nextPage: null,
	count: null,
	heroValue: '',
	isDarkMode: localStorage.getItem('isDarkMode') === 'true' ? true : false,
};

function reducer(state, action) {
	const { results, next, count, value } = action.payload;
	switch (action.type) {
		case STAR_WARS_HEROES:
			return {
				...state,
				persons: [...state.persons, ...action.payload.results],
				nextPage: next,
				count: count,
			};
		case UPDATE_STAR_WARS_HEROES:
			return {
				...state,
				persons: results.results,
				nextPage: results.next,
				count: results.count,
				heroValue: value,
			};
		case UPDATE_THEME:
			return {
				...state,
				isDarkMode: action.payload,
			};
		default:
			return state;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	console.log(state);

	return (
		<ThemeProvider theme={state.isDarkMode ? darkTheme : lightTheme}>
			<HeroesContext.Provider value={{ state, dispatch }}>
				<Home />
			</HeroesContext.Provider>
		</ThemeProvider>
	);
}

export default App;
