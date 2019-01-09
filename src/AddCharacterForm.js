import React from 'react';
import './AddCharacterForm.css';

class CharacterForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'caca',
			imageUrl: 'culo'
		};
	}
	onFieldChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}
	render() {
		return(
			<form>
				<div className="add-character-form__input">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" value={this.state.name} onChange={event => this.onFieldChange(event)} />
				</div>
				<div className="add-character-form__input">
					<label htmlFor="imageUrl">Image URL</label>
					<input type="text" name="imageUrl" value={this.state.imageUrl} onChange={event => this.onFieldChange(event)} />
				</div>
			</form>
		);
	}
}

const AddCharacterForm = match => {
	return(
		<div className="add-character-form">
			<h1>Add Character</h1>
			<CharacterForm />
		</div>
	);
};

export default AddCharacterForm;