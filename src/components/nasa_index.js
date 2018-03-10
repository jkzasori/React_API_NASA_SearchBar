import lodash from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import {fetchNasa} from '../actions';

class NASA extends Component {
	componentDidMount() {
		this.props.fetchNasa();
	}
	renderNasa(){
		return _.map(this.props.nasa, fact => {
			return (
				<li className="list-group-item" key={fact.date}>
					{fact.title}
				</li>
				)
		})
	}
	render() {
		console.log(this.props.nasa);
		return (
				<div>
					HI! rrrThis is working!
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