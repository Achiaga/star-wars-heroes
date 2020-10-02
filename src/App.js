import React, { useEffect, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getStarWarsHeroes, getNextPage } from './utils/transporter';

const STAR_WARS_HEROES = 'STAR_WARS_HEROES';

const initialState = { persons: [], nextPage: null, count: null };

function reducer(state, action) {
	switch (action.type) {
		case STAR_WARS_HEROES:
			return {
				persons: [...state.persons, ...action.payload.results],
				nextPage: action.payload.next,
				count: action.payload.count,
			};
		default:
			return state;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	const handleNextPage = () => {
		state.nextPage &&
			getNextPage(state.nextPage).then((results) => {
				dispatch({ type: STAR_WARS_HEROES, payload: results });
			});
	};

	useEffect(() => {
		getStarWarsHeroes().then((result) => {
			dispatch({ type: STAR_WARS_HEROES, payload: result });
		});
	}, []);

	console.log({ state });

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>Next Page</p>
				<button onClick={handleNextPage}>next</button>
			</header>
		</div>
	);
}

export default App;
