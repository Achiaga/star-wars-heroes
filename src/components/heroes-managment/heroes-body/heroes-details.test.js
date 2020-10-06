import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../../../themes/dark';
import HeroesDetails from './heroes-details';

const renderComponent = (props) => {
	return render(
		<ThemeProvider theme={darkTheme}>
			<HeroesDetails {...props} />
		</ThemeProvider>
	);
};

const initialProps = {
	hero: {
		name: 'Test1',
		gender: 'male1',
		birth_year: '1996',
		height: '180',
		mass: '70',
		hair_color: 'blonde',
	},
};

const HEROES_LIST_ITEM_ID = 'heroes-details-item';
const HEROES_LIST_ITEM_GENDER = 'heroes-details-item-gender';

const getHeroItem = (conditionIndex = 0) => {
	return screen.getAllByTestId(HEROES_LIST_ITEM_ID)[conditionIndex];
};
const getAllHeroesItems = (conditionIndex = 0) => {
	return screen.getAllByTestId(HEROES_LIST_ITEM_GENDER);
};

describe('heroes-details', () => {
	it('should get a item with the heroes data', () => {
		renderComponent(initialProps);
		const { getByText } = within(getHeroItem());
		const test1Hero = getByText('male1');
		expect(test1Hero).toBeInTheDocument();
	});

	it('gets all the heroes Details quantity', () => {
		renderComponent(initialProps);
		const allHeroesItems = getAllHeroesItems();
		expect(allHeroesItems).toHaveLength(5);
	});

	// test("should get each heroes' details correctly", () => {
	// 	renderComponent(initialProps);
	// 	const { getByTestId } = within(getHeroItem());
	// 	const getDetails = getByTestId('heroes-details-item-gender');
	// 	expect(getDetails).toBeInTheDocument();
	// });

	test.each([
		[0, 'male1'],
		[1, '1996'],
		[2, '180'],
		[3, '70'],
		[4, 'blonde'],
	])("should get all the heroes' gender correctly", (itemPosition, heroGender) => {
		renderComponent(initialProps);
		const { getByText } = within(getHeroItem(itemPosition));
		const getDetails = getByText(heroGender);
		expect(getDetails).toBeInTheDocument();
	});
});
