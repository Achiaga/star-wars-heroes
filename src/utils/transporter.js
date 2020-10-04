import fetchApi from './api';

export const getStarWarsHeroes = () => {
	return fetchApi('/people/');
};

export const searchStarWarsHeroes = (heroe) => {
	return fetchApi(`/people/?search=${heroe}`);
};

export const getNextPage = (nextPage) => {
	return fetchApi(null, null, null, nextPage);
};
