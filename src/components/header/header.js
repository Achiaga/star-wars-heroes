import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	padding: 2em 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Title = styled.h4`
	font-size: 40px;
	font-family: 'Londrina Shadow', cursive;
	color: ${(props) => props.theme.colors.textColor};
	letter-spacing: 4px;
	word-spacing: 5px;
	padding: 0;
	margin: 0;
	@media only screen and (min-width: 800px) {
		font-size: 60px;
	}
`;

const Header = () => {
	return (
		<Wrapper>
			<Title>STAR WARS HEROES</Title>
		</Wrapper>
	);
};

export default Header;
