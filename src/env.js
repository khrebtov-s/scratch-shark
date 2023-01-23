const isDevelopment = process.env.NODE_ENV === 'development';

const ROOT_URL = isDevelopment ? 'http://api.scratchshark.com' : 'http://beta-api.scratchshark.com';

const API_URL = `${ROOT_URL}/api/`;

const oauth2 = {
	client_id: '',
	client_secret: '',
};

export default API_URL;

export { ROOT_URL, API_URL, oauth2 };
