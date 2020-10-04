import React from 'react';
import styled from 'styled-components';

import { heroesProptype } from '../../../constants';

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

const CardDetails = styled(CardText)`
	padding: 0.3em 0;
	color: ${(props) => props.theme.colors.secondaryTextColor};
`;

const HeroesList = ({ persons }) => {
	return (
		<Wrapper>
			{persons.map((heroe, index) => {
				return (
					<Card id={heroe.name} key={index}>
						<CardName>{heroe.name}</CardName>
						<hr></hr>
						<CardDetails>Gender: {heroe.gender}</CardDetails>
						<CardDetails>Birth year: {heroe.birth_year}</CardDetails>
						<CardDetails>Hair: {heroe.hair_color}</CardDetails>
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
