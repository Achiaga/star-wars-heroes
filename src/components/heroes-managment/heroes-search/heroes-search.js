import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
	padding-top: 1.5em;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const HeroInput = styled.input`
	color: ${(props) => props.theme.colors.secondaryTextColor};
	border: none;
	border-bottom: 2px solid ${(props) => props.theme.colors.textColor};
	background: none;
	font-size: 20px;
	width: 14em;
	height: 1.5em;
	padding: 2px 5px;
	&:focus {
		outline: none;
		box-shadow: 0px 0px 2px ${(props) => props.theme.colors.textColor};
	}
`;

const SearchInput = ({ handleHeroInput, heroValue = '' }) => {
	return (
		<Wrapper>
			<div>
				<HeroInput
					type='text'
					placeholder='Search a Star Wars Heroe'
					aria-label='search-input'
					onChange={handleHeroInput}
					value={heroValue}
				/>
			</div>
		</Wrapper>
	);
};

SearchInput.propTypes = {
	handleHeroInput: PropTypes.func.isRequired,
	heroValue: PropTypes.string,
};

export default SearchInput;
