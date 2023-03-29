import { LoginType } from './types';
import http from '../http';

export const login = async ({ username, password }: LoginType) => {
	try {
		const res = await http.post('/test', {
			username,
			password
		});
		console.log(res);
	} catch (error) {
		console.error('request error');
	}
}