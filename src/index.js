import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import './index.css';
import Quiz from './Quiz';
import AddCharacterForm from './AddCharacterForm';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore';

const characters = [
	{
		name: 'Homer Simpson',
		imageUrl: 'https://www.elcomercio.com/files/article_main/uploads/2017/05/12/5916775bc3359.jpeg',
		imageSource: 'Somewhere',
		quotes: [
			"D'oh!",
			'Mmmmmm',
			'Bart, a woman is like beer. ...'
		]
	},
	{
		name: 'Bart Simpson',
		imageUrl: 'https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png',
		imageSource: 'Someotherwhere',
		quotes: [
			"I Didn't Do It. Nobody Saw Me Do It. You Can't Prove Anything.",
			'Oh! My Ovaries!',
			"Don't Have a Cow, Man."
		]
	}
];

const getTurnData = characters => {
	const allQuotes = characters.reduce( (p, c, i) => p.concat(c.quotes), [] );
	const fourRandomQuotes = shuffle(allQuotes).slice(0,4);
	const answer = sample(fourRandomQuotes);
	return {
		character: characters.find( (character) => character.quotes.some( (quote) => quote === answer ) ),
		quotes: fourRandomQuotes
	}
};

const resetState = () => {
	return {
		turnData: getTurnData(characters),
		highlight: 'none'
	};
};

let state = resetState();

const onAnswerSelected = answer => {
	const isCorrect = state.turnData.character.quotes.some(quote => quote === answer);
	state.highlight = isCorrect ? 'correct' : 'wrong';
	render();
};

const App = () => { return <Quiz {...state}
	onAnswerSelected={onAnswerSelected}
	onContinue={ () => {
			state = resetState();
			render();
		}
	} />
};

const characterWrapper = withRouter( ({ history }) => 
	<AddCharacterForm onAddCharacter={ character => {
		characters.push(character);
		console.log(characters);
		history.push('/');
	} }/>
);

const render = () => {
	ReactDOM.render(
		<BrowserRouter>
			<React.Fragment>
				<Route exact path='/' component={App} />
				<Route path='/add' component={characterWrapper} />
			</React.Fragment>
		</BrowserRouter>, document.getElementById('root')
	);
};
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
