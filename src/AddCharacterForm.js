import React from 'react';
import './AddCharacterForm.css';

const AddCharacterForm = match => {
	return(
		<div className="add-character-form">
			<h1>Add Character</h1>
			<form>
				<div className="add-character-form__input">
					<label htmlFor="name">Name</label>
					<input type="text" name="name" />
				</div>
			</form>
		</div>
	);
};

export default AddCharacterForm;