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
const handleHeroInput = jest.fn();
const initialProps = {
	handleHeroInput,
	heroValue: '',
};

const SEARCH_INPUT_LABEL = 'search-input';

const getHeroInput = () => {
	return screen.getByLabelText(SEARCH_INPUT_LABEL);
};

describe('search input', () => {
	beforeEach(() => {
		renderComponent(initialProps);
	});
	it('should render a input component', () => {
		const searchInput = getHeroInput();
		expect(searchInput).toBeInTheDocument();
	});
	it('should call the handleHeroInput function when the input is changed', () => {
		const searchInput = getHeroInput();
		fireEvent.change(searchInput, { target: { value: '23' } });
		expect(handleHeroInput).toHaveBeenCalledWith('23');
	});
});
