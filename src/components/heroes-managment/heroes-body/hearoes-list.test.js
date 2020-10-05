import React from 'react';
import axios from 'axios';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import dark from '../../../themes/dark';

import HeroesList from './heroes-list';

const renderComponent = (props) => {
	return render(
		<ThemeProvider theme={dark}>
			<HeroesList {...props} />
		</ThemeProvider>
	);
};
const initialProps = {
	persons: [
		{
			name: 'Test1',
			gender: 'male1',
			birth_year: 'Birth year',
			height: 'Height',
			mass: 'Mass',
			hair_color: 'Hair Color',
		},
	],
};
const extendedProps = {
	persons: [
		...initialProps.persons,
		{
			name: 'Test3',
			gender: 'male3',
			birth_year: 'Birth year',
			height: 'Height',
			mass: 'Mass',
			hair_color: 'Hair Color',
		},
		{
			name: 'Test4',
			gender: 'female4',
			birth_year: 'Birth year',
			height: 'Height',
			mass: 'Mass',
			hair_color: 'Hair Color',
		},
	],
};

const HEROES_LIST_ITEM_ID = 'heroes-list-item';
const HEROES_LIST_ITEM_NAME = 'heroes-list-item-name';
const HEROES_LIST_ITEM_GENDER = 'heroes-list-item-gender';

const getHeroeItem = (conditionIndex = 0) => {
	return screen.getAllByTestId(HEROES_LIST_ITEM_ID)[conditionIndex];
};
const getAllHeroesItems = (conditionIndex = 0) => {
	return screen.getAllByTestId(HEROES_LIST_ITEM_ID);
};
// const getAllHeroesItems = (conditionIndex = 0) => {
// 	return screen.getAllByTestId(HEROES_LIST_ITEM_ID);
// };

describe('heroes-list', () => {
	it('should get a item with the heroes data', () => {
		renderComponent(initialProps);
		const { getByText } = within(getHeroeItem());
		const test1Heroe = getByText('Test1');
		expect(test1Heroe).toBeInTheDocument();
	});
	it('gets a list of all the heroes', () => {
		renderComponent(extendedProps);
		const allHeroesItems = getAllHeroesItems();
		expect(allHeroesItems).toHaveLength(3);
	});

	test.each([
		[0, 'Test1'],
		[1, 'Test3'],
		[2, 'Test4'],
	])('should get all the heroes names correctly', (itemPosition, heroName) => {
		renderComponent(extendedProps);
		const { getByTestId } = within(getHeroeItem(itemPosition));
		const getHeroeName = getByTestId(HEROES_LIST_ITEM_NAME);
		expect(getHeroeName.textContent).toBe(heroName);
	});

	test.each([
		[0, 'male1'],
		[1, 'male3'],
		[2, 'female4'],
	])("should get all the heroes' gender names correctly", (itemPosition, heroGender) => {
		renderComponent(extendedProps);
		const { getByTestId } = within(getHeroeItem(itemPosition));
		const getHeroeName = getByTestId(HEROES_LIST_ITEM_GENDER);
		expect(getHeroeName.textContent).toBe(heroGender);
	});
});
