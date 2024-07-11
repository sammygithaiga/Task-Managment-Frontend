export const SERVER_URL =
	process.env.NODE_ENV === 'development'
		? 'http://127.0.0.1:5555'
		: 'https://backend-okj0.onrender.com/login';