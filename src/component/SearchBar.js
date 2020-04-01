import React from 'react';

class SearchBar extends React.Component {
	state = {term : ''};

	onInputType = (e) => {
		this.setState({term : e.target.value});
	} 

	onFormSubmit = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className = "ui segment">
				<form className = "ui form" onSubmit = {this.onFormSubmit}>
					<div className = "field">
						<p>Search</p>
						<input type = "text" value = {this.state.term} onChange = {this.onInputType} />
					</div>
				</form>

			</div>

		);
	}
}

export default SearchBar;