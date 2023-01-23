export const loadVisit = () => {
	try {
		const serializedState = sessionStorage.getItem('visited');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveVisit = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		sessionStorage.setItem('visited', serializedState);
	} catch (err) {
		console.error(err);
	}
};
