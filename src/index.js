import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import NASA from './components/nasa_index';
import SHOW from './components/Show_nasa';
import reducers from './reducers';

const app = document.getElementById('app');
const createStoreWithMidawere = applyMiddleware(promise)(createStore);

render(
	<Provider store={ createStoreWithMidawere(reducers)}>
		<BrowserRouter>
			<Switch>
				<Route path="/show/:date" component={SHOW} />
				<Route path="/" component={NASA} />
			</Switch>
		</BrowserRouter>
		
	</Provider>,
	app
	);

