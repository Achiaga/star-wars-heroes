export const isSameRequest = (prevCall, actualCall) => prevCall === actualCall;

export const intersectionObserve = (itemRef, updateObserverStatus) => {
	var options = {
		root: null,
		rootMargin: '50px',
		threshold: 1.0,
	};

	const observer = new IntersectionObserver(updateObserverStatus, options);
	if (itemRef.current) {
		observer.observe(itemRef.current);
	}
};

export const getIsDarkMode = JSON.parse(localStorage.getItem('isDarkMode') || {});
