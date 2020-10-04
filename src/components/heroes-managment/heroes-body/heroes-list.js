import React from 'react';
import styled from 'styled-components';

import { heroesProptype } from '../../../constants';
import HeroDetails from './heroes-details';

const Wrapper = styled.div`
	padding: 1em 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const Card = styled.div`
	width: 80%;
	border: 1px solid black;
	padding: 1em;
	margin: 1em 0;
	background-color: ${(props) => props.theme.colors.cardBg};
	border-radius: 5px;
	max-width: 500px;
`;

const CardText = styled.h4`
	margin: 0;
	padding: 0;
`;

const CardName = styled(CardText)`
	padding: 0.1em 0;
	font-size: 22px;
	color: ${(props) => props.theme.colors.nameHeroe};
`;

const HeroesList = ({ persons }) => {
	return (
		<Wrapper>
			{persons.map((hero, index) => {
				return (
					<Card id={hero.name} key={index}>
						<CardName>{hero.name}</CardName>
						<hr></hr>
						<HeroDetails hero={hero} />
					</Card>
				);
			})}
		</Wrapper>
	);
};

HeroesList.propTypes = {
	persons: heroesProptype,
};

export default HeroesList;
