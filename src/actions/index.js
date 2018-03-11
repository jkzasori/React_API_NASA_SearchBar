import axios from 'axios';

export const FETCH_NASA = 'fetch_nasa';
export const SEARCH_NASA = 'search_nasa';
export const SHOW_NASA = 'show_nasa';

const URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = '?api_key=sIxvZGy4zfmHD4OBX0p3UVyvWhARG7Ouqn2vNOHC';

export function fetchNasa(){
	const request = axios.get(`${URL}${API_KEY}&count=1`);
	return {
		type: FETCH_NASA,
		payload: request
	}
}

export function searchNasa(date){
	const url = `${URL}${API_KEY}&date=${date}`;
	const request = axios.get(url);
	return {
		type: SEARCH_NASA,
		payload: request
	}
}

export function showNasa(date){
	const url = `${URL}${API_KEY}&date=${date}`;
	const request = axios.get(url);
	return {
		type: SHOW_NASA,
		payload: request
	}
}