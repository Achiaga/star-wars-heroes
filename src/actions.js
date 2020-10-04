import { STAR_WARS_HEROES, UPDATE_STAR_WARS_HEROES, UPDATE_API_CALL } from './constants';

import { getStarWarsHeroes, getNextPage, searchStarWarsHeroes } from './utils/transporter';

const getHeroes = () => async (dispatch) => {
	const result = await getStarWarsHeroes();
	dispatch({ type: STAR_WARS_HEROES, payload: result });
};

const getHeroesNextPage = (nextPage) => async (dispatch) => {
	const results = await getNextPage(nextPage);
	dispatch({ type: UPDATE_API_CALL, payload: nextPage });
	dispatch({ type: STAR_WARS_HEROES, payload: results });
};
const searchHeroe = (value) => async (dispatch) => {
	const hero = await searchStarWarsHeroes(value);
	dispatch({
		type: UPDATE_STAR_WARS_HEROES,
		payload: { hero, value },
	});
};

const getActions = (dispatch) => {
	return {
		getHeroes: (props) => getHeroes(props)(dispatch),
		getHeroesNextPage: (props) => getHeroesNextPage(props)(dispatch),
		searchHeroe: (props) => searchHeroe(props)(dispatch),
	};
};

export default getActions;
