import _ from 'lodash';
import { FETCH_NASA, SEARCH_NASA } from '../actions';

export default function( state = {}, action) {
	switch (action.type) {
		case SEARCH_NASA:
			return {...state, [action.payload.data.date]: action.payload.data};
		case FETCH_NASA: 
			return _.mapKeys(action.payload.data, 'date');
		default:
			return state;
	}
}
