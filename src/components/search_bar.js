import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchNasa } from '../actions/index';

class SearchBar extends Component {
	constructor(){
		super();
		this.state = {
			searchQ: ''
		}
	}

	onInputChange = (event) => {
		this.setState({
			searchQ: event.target.value
		})
	}

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.searchNasa(this.state.searchQ);
		this.setState({
			searchQ: ''
		})
	}

	render() {
		return(
				<div>
					<form onSubmit={this.onFormSubmit} className="input-group">
						<input 
						placeholder="yyyy-mm-dd "
						className="form-control"
						value={this.state.searchQ}
						onChange={this.onInputChange}
						/>
						<span className="input-group-btn">
							<button type="submit" className="btn btn-secondary">
							Submit
							</button>
						</span>
					</form>
				</div>
			)
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({searchNasa}, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);