import axios from 'axios';

const MAIN_URL = 'https://swapi.dev/api';

const getPath = (path, fullPath) => {
	if (path) return `${MAIN_URL}${path}`;
	return fullPath.replace('http', 'https');
};

const fetchApi = (path, data = {}, method = 'get', fullPath) => {
	return axios({
		method,
		url: getPath(path, fullPath),
	}).then((response) => {
		return response.data;
	});
};

export default fetchApi;
