import React from 'react';
import './AddCharacterForm.css';

class CharacterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			imageUrl: '',
			imageSource: '',
			quotes: [],
			quoteTemp: ''
		};
		// Makes sure the value of 'this' in the constructor will be the same as the value of 'this' in the method, no matter how 'this' is called
		this.onFieldChange = this.onFieldChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleAddQuote = this.handleAddQuote.bind(this);
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.onAddCharacter(this.state);
	}
	onFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	handleAddQuote(event) {
		this.setState({
			quotes: this.state.quotes.concat(this.state.quoteTemp),
			quoteTemp: ''
		});
	}
	render() {
		return(
			<form onSubmit={this.handleSubmit}>
				<div className="add-character-form__input">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" value={this.state.name} onChange={this.onFieldChange} />
				</div>
				<div className="add-character-form__input">
					<label htmlFor="imageUrl">Image URL</label>
					<input type="text" name="imageUrl" value={this.state.imageUrl} onChange={this.onFieldChange} />
				</div>
				<div className="add-character-form__input">
					{this.state.quotes.map( quote => <p key={quote}>{quote}</p> )}
					<label htmlFor="quoteTemp">New Quote</label>
					<input type="text" name="quoteTemp" value={this.state.quoteTemp} onChange={this.onFieldChange} />
					<input type="button" value="+" onClick={this.handleAddQuote} />
				</div>
				<div className="add-character-form__input">
					<label htmlFor="imageSource">Image Source</label>
					<input type="text" name="imageSource" value={this.state.imageSource} onChange={this.onFieldChange} />
				</div>
				<input type="submit" value="Add" />
			</form>
		);
	}
}

const AddCharacterForm = ({match, onAddCharacter}) => {
	return(
		<div className="add-character-form">
			<h1>Add Character</h1>
			<CharacterForm onAddCharacter={onAddCharacter} />
		</div>
	);
};

export default AddCharacterForm;