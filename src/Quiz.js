import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Quiz.css';
import './bootstrap.min.css';

// Main Component Quiz
const Quiz = ({turnData, highlight, onAnswerSelected}) => {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected}/>
      <Continue />
      <Footer {...turnData} />
    </div> ) };

// Hero component
const Hero = () => { return ( 
  <div className="row">
    <div className="jumbotron col-10 offset-1">
      <h1>Simpsons Quiz</h1>
      <p>Choose the correct character</p>
    </div>
  </div> ) };

// Quote component
const Quote = ({quote, onClick}) => { return(
  <div className="answer" onClick={() => {onClick(quote);}}>
    <span>{quote}</span>
  </div> ) };

// Turn component
const Turn = ({character, quotes, highlight, onAnswerSelected}) => {
  const highlightToBgColor = (highlight) => {
    const mapping = {
      'none': '',
      'correct': 'green',
      'wrong': 'red'
    };
    return mapping[highlight];
  };

  return (
  <div className="row turn" style={{backgroundColor: highlightToBgColor(highlight)}}>
    <div className="col-4 offset-1">
      <img src={character.imageUrl} className="character-image" alt={character.name}></img>
    </div>
    <div className="col-6">
      {quotes.map((quote) => <Quote quote={quote} key={quote} onClick={onAnswerSelected} />)}
    </div>
  </div> ) };

// Continue component
const Continue = (props) => { return ( <div>olakease</div> ) };

// Footer component
const Footer = ({character}) => { return ( 
  <footer id="footer" className="row">
    <div className="col-12">
      <p className="text-muted credit">
        Images from <a href={character.imageUrl}>{character.imageSource}</a>
      </p>
    </div>
  </footer> ) };

// Turn component validation with PropTypes
Turn.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageSource: PropTypes.string.isRequired,
    quotes: PropTypes.arrayOf(PropTypes.string).isRequired
  }),
  quotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  highlight: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
