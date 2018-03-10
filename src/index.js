import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';

import NASA from './components/nasa_index';
import reducers from './reducers';

const app = document.getElementById('app');
const createStoreWithMidawere = applyMiddleware(promise)(createStore);

render(
	<Provider store={ createStoreWithMidawere(reducers)}>
		<NASA />
	</Provider>,
	app
	);

