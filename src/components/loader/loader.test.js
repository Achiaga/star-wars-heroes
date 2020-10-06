import React from 'react';
import { render, screen, within, fireEvent } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import dark from '../../themes/dark';

import Loader from '.';

const renderComponent = (props) => {
	return render(
		<ThemeProvider theme={dark}>
			<Loader {...props} />
		</ThemeProvider>
	);
};

const LOAD_MORE_BUTTON_TEXT = 'load-recipes-button';

const getLoadMoreButton = (conditionIndex = 0) => {
	return screen.getAllByTestId(LOAD_MORE_BUTTON_TEXT)[conditionIndex];
};

describe('loader', () => {
	it('should render a button component', () => {
		renderComponent();
		const loadButton = getLoadMoreButton();
		expect(loadButton).toBeInTheDocument();
	});
	it('should call the handleNextPage function when the button is clicked', () => {
		const handleNextPage = jest.fn();
		renderComponent({ handleNextPage });
		const loadButton = getLoadMoreButton();
		fireEvent.click(loadButton);
		expect(handleNextPage).toHaveBeenCalled();
	});
});
