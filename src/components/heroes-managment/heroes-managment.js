import React, { useEffect, useContext, useState, useRef, useCallback } from 'react';

import { HeroesContext } from '../../App';
import { isSameRequest, intersectionObserve } from '../../utils/helper';

import HeroesSearch from './heroes-search';
import HeroesList from './heroes-body';
import Loader from '../loader';

function HeroesManagement() {
	const { state, actions } = useContext(HeroesContext);
	const [isInView, setIsInView] = useState(false);
	const loaderRef = useRef(null);

	const { nextPage, lastAPIcall, heroValue, persons } = state;

	useEffect(() => {
		actions.getHeroes();
	}, []);

	useEffect(() => {
		intersectionObserve(loaderRef, updateObeserverStatus);
	});

	useEffect(() => {
		handleNextPage();
	}, [isInView]);

	const updateObeserverStatus = function (entities) {
		setIsInView(entities[0].isIntersecting);
	};

	const handleNextPage = function () {
		if (nextPage && !isSameRequest(lastAPIcall, nextPage)) {
			actions.getHeroesNextPage(nextPage);
		}
	};

	const handleHeroeInput = useCallback(
		(e) => {
			const { value } = e.target;
			actions.searchHeroe(value);
		},
		[actions]
	);

	return (
		<>
			<HeroesSearch
				handleHeroeInput={handleHeroeInput}
				handleNextPage={handleNextPage}
				heroValue={heroValue}
			/>
			<HeroesList persons={persons} />
			<Loader ref={loaderRef} />
		</>
	);
}

export default HeroesManagement;
