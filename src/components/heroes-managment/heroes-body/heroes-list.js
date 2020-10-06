import React from 'react';
import styled from 'styled-components';

import { heroesProptype } from '../../../constants';
import HeroDetails from './heroes-details';

const Wrapper = styled.div`
	padding: 1em 0;
	padding-bottom: 7em;
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
`;

const HeroesList = ({ persons }) => {
	return (
		<Wrapper data-testid='resolved'>
			{persons.map((hero, index) => {
				return (
					<Card data-testid='heroes-list-item' id={hero.name} key={index}>
						<CardName data-testid='heroes-list-item-name'>{hero.name}</CardName>
						<hr />
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
