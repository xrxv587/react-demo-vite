import axios from 'axios';

const http = axios.create({
	baseURL: '/request'
});

http.interceptors.request.use(config => {
	console.log('req');
	return config;
});

http.interceptors.response.use(response => {
	console.log('res');
	return response.data;
});

export default http;