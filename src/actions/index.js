import axios from 'axios';

export const FETCH_NASA = 'fetch_nasa';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = '?api_key=sIxvZGy4zfmHD4OBX0p3UVyvWhARG7Ouqn2vNOHC&count=4';

export function fetchNasa(){
	const request = axios.get(`${URL}${API_KEY}`);
	return {
		type: FETCH_NASA,
		payload: request
	}
}