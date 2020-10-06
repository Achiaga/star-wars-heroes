import React, { useEffect, useContext } from 'react';

import { HeroesContext } from '../../App';

import { STAR_WARS_HEROES, UPDATE_STAR_WARS_HEROES, UPDATE_THEME } from '../../constants';
import { getStarWarsHeroes, getNextPage, searchStarWarsHeroes } from '../../utils/transporter';

import SwitchThemeButton from '../buttons/switch-theme-button';
import HeroesSearch from './heroes-search';
import HeroesList from './heroes-body';
import Loader from '../loader';

function HeroesManagement() {
	const { state, dispatch } = useContext(HeroesContext);
	const { nextPage, heroValue, persons } = state;

	useEffect(() => {
		getStarWarsHeroes().then((results) => {
			dispatch({ type: STAR_WARS_HEROES, payload: results });
		});
	}, []);

	const handleNextPage = () => {
		nextPage &&
			getNextPage(nextPage).then((results) => {
				dispatch({ type: STAR_WARS_HEROES, payload: results });
			});
	};

	const handleHeroInput = (value) => {
		searchStarWarsHeroes(value).then((results) => {
			dispatch({ type: UPDATE_STAR_WARS_HEROES, payload: { results, value } });
		});
	};

	return (
		<>
			<HeroesSearch handleHeroInput={handleHeroInput} handleNextPage={handleNextPage} heroValue={heroValue} />
			<SwitchThemeButton />
			<HeroesList persons={persons} />
			<Loader handleNextPage={handleNextPage} />
		</>
	);
}

export default HeroesManagement;
