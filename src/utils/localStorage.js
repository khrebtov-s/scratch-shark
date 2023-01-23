export const loadUser = () => {
	try {
		const serializedState = localStorage.getItem('USER');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveUser = (user) => {
	try {
		const serializedState = JSON.stringify(user.get('user'));
		localStorage.setItem('USER', serializedState);
	} catch (err) {
		console.error(err);
	}
};

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('STATE', serializedState);
	} catch (err) {
		console.error(err);
	}
};

export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('STATE');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const loadGuide = () => {
	try {
		const serializedState = sessionStorage.getItem('GUIDE');
		if (serializedState === null) return undefined;
		return JSON.parse(serializedState);
	} catch (err) {
		return undefined;
	}
};

export const saveGuide = (guide) => {
	try {
		const serializedState = JSON.stringify(guide);
		localStorage.setItem('GUIDE', serializedState);
	} catch (err) {
		console.error(err);
	}
};
