import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Header from './components/header/header';

test('renders learn react link', () => {
	const { getByText } = render(<Header />);
	const linkElement = getByText(/star/i);
	expect(linkElement).toBeInTheDocument();
});
