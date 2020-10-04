import PropTypes from 'prop-types';

export const STAR_WARS_HEROES = 'STAR_WARS_HEROES';
export const UPDATE_STAR_WARS_HEROES = 'UPDATE_STAR_WARS_HEROES';
export const UPDATE_API_CALL = 'UPDATE_API_CALL';

const heroeProptype = PropTypes.shape({
	birth_year: PropTypes.string.isRequired,
	created: PropTypes.string.isRequired,
	edited: PropTypes.string.isRequired,
	eye_color: PropTypes.string.isRequired,
	gender: PropTypes.string.isRequired,
	hair_color: PropTypes.string.isRequired,
	height: PropTypes.string.isRequired,
	homeworld: PropTypes.string.isRequired,
	mass: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	skin_color: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	species: PropTypes.array.isRequired,
	starships: PropTypes.array.isRequired,
	vehicles: PropTypes.array.isRequired,
	films: PropTypes.array.isRequired,
});

export const heroesProptype = PropTypes.arrayOf(heroeProptype);
