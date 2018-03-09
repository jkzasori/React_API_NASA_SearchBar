import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import Home from './containers/home';
import reducers from './reducers';

const app = document.getElementById('app');
const createStoreWithMidawere = applyMiddleware()(createStore);

render(
	<Provider store={ createStoreWithMidawere(reducers)}>
		<Home />
	</Provider>,
	app
	);

