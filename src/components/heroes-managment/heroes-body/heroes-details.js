import React from 'react';
import styled from 'styled-components';

const WrapperCardDetails = styled.h4`
	margin: 0;
	padding: 0;
	padding: 0.3em 0;
	padding-left: 5px;
	color: ${(props) => props.theme.colors.secondaryTextColor};
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	@media only screen and (min-width: 800px) {
		padding-left: 20px;
		justify-content: space-around;
	}
`;

const WrapperSpec = styled.div`
	width: 50%;
`;

const WrapperHeroSpec = styled.div`
	width: 30%;
`;

const HeroSpec = {
	gender: 'Gender',
	birth_year: 'Birth year',
	height: 'Height',
	mass: 'Mass',
	hair_color: 'Hair Color',
};

const HeroesDetails = ({ hero }) => {
	return Object.keys(HeroSpec).map((item, index) => {
		return (
			<WrapperCardDetails data-testid='heroes-details-item' key={index}>
				<WrapperSpec>
					<span>{HeroSpec[item]}</span>
				</WrapperSpec>
				<WrapperHeroSpec data-testid='heroes-details-item-gender'>
					<span>{hero[item]}</span>
				</WrapperHeroSpec>
			</WrapperCardDetails>
		);
	});
};

export default HeroesDetails;
