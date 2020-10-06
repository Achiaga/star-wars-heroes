import React from 'react';
import styled from 'styled-components';

import HeroesManagement from '../heroes-managment';
import Header from '../header';

const Wrapper = styled.div`
	background-image: url(${(props) => props.theme.colors.image});
	background-repeat: repeat;
	background-attachment: fixed;
	background-position: center;
	background-size: ${(props) => props.theme.colors.imageSize};
	color: ${(props) => props.theme.colors.textColor};
	min-height: 100vh;
	@media only screen and (min-width: 800px) {
		background-image: url(${(props) => props.theme.colors.desktopImage});
		background-repeat: repeat;
		background-attachment: fixed;
		background-position: center;
	}
`;

function Home() {
	return (
		<Wrapper>
			<Header />
			<HeroesManagement />
		</Wrapper>
	);
}

export default Home;
