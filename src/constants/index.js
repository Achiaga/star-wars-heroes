import PropTypes from 'prop-types';

export const STAR_WARS_HEROES = 'STAR_WARS_HEROES';
export const UPDATE_STAR_WARS_HEROES = 'UPDATE_STAR_WARS_HEROES';
export const UPDATE_THEME = 'UPDATE_THEME';

const heroeProptype = PropTypes.shape({
	birth_year: PropTypes.string,
	created: PropTypes.string,
	edited: PropTypes.string,
	eye_color: PropTypes.string,
	gender: PropTypes.string,
	hair_color: PropTypes.string,
	height: PropTypes.string,
	homeworld: PropTypes.string,
	mass: PropTypes.string,
	name: PropTypes.string.isRequired,
	skin_color: PropTypes.string,
	url: PropTypes.string,
	species: PropTypes.array,
	starships: PropTypes.array,
	vehicles: PropTypes.array,
	films: PropTypes.array,
});

export const heroesProptype = PropTypes.arrayOf(heroeProptype);
