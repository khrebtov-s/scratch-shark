export function authHeader() {
	// return authorization header with jwt token
	const user = JSON.parse(localStorage.getItem('USER'));
	if (user && user.token) {
		return 'Bearer ' + user.token;
	} else {
		return '';
	}
}
