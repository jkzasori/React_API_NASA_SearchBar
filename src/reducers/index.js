import { combineReducers } from 'redux';
import PostReducer from './reducer_nasa';

const rootReducer = combineReducers({
	nasa: PostReducer
});
export default rootReducer;