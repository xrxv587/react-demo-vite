import http from "../http";

export const getTodo = async () => {
	const res = await http.get('/getTodo');
	return res;
}