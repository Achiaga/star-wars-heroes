import fetchApi from './api';

export const getStarWarsHeroes = () => {
	return fetchApi('/people/?search=a');
};

export const getNextPage = (nextPage) => {
	return fetchApi(null, null, null, nextPage);
};
