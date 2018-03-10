import _ from 'lodash';
import { FETCH_NASA } from '../actions';

export default function( state = {}, action) {
	switch (action.type) {
		case FETCH_NASA:
			return _.mapKeys(action.payload.data, 'date');
		default:
			return state;
	}
}
