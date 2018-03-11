import lodash from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CardNasa from '../containers/card_nasa';

import {fetchNasa} from '../actions';
import SearchBar from './search_bar';
import './nasa_index.css';
class NASA extends Component {
	componentDidMount() {
		this.props.fetchNasa();
	}
	renderNasa(){
		return _.map(this.props.nasa, fact => {
			return (
				<li className="list-group-item" key={fact.date}>
						
						<CardNasa 
							title={fact.title}
							description={fact.explanation}
							image={fact.url}
							date={fact.date}
						/>
						 
					
				</li>
				)
		})
	}
	render() {
		console.log(this.props.nasa);
		return (
				<div>
					<div className="text-center text-t">
						<h3 className="title ">SearchBar API_NASA</h3>
					</div>
					<div>
						<SearchBar />
					</div>
					<ul className="list-group">
						{this.renderNasa()}
					</ul>
				</div>
			)
	}
}

function mapStateToProps(state) {
  return { nasa: state.nasa };
}


export default connect(mapStateToProps, {fetchNasa})(NASA);