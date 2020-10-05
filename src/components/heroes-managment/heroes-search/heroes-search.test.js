import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import darkTheme from '../../../themes/dark';
import HeroesSearch from './heroes-search';

const renderComponent = (props) => {
	return render(
		<ThemeProvider theme={darkTheme}>
			<HeroesSearch {...props} />
		</ThemeProvider>
	);
};

const initialprops = {
	heroValue: '',
};

const SEARCH_INPUT_LABEL = 'search-input';

const getLoadMoreButton = () => {
	return screen.getByLabelText(SEARCH_INPUT_LABEL);
};

describe('search input', () => {
	it('should render a input component', () => {
		const handleHeroInput = jest.fn();
		renderComponent(initialprops, handleHeroInput);
		const searchInput = getLoadMoreButton();
		expect(searchInput).toBeInTheDocument();
	});
	// it('should call the handleHeroInput function when the input is changed', () => {
	// 	renderComponent(handleHeroInput);
	// 	const searchInput = getLoadMoreButton();
	// 	fireEvent.change(searchInput, { target: { value: '23' } });
	// 	expect(searchInput.value).toBe('$23');
	// });
});
