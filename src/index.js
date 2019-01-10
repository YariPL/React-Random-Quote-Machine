import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Quote extends React.Component {
	
	render() {
		return(
			<div id='quotePart'>
				<div id="text">
				</div>
				<div id="author">
				</div>
			</div>
		)
	}
}

class QuoteBox extends React.Component {
	constructor() {
		super();
	}
	render() {
		return(
			<div id="quote-box">
				<Quote />
				<div id='buttons'>
					<div id="tweet-quote">
						<div class='button'>Tweet</div>
					</div>
					<div id="new-quote">
						<div class='button'>New Quote</div>
					</div>
				</div>
			</div>
		)
	}
}


ReactDOM.render(<QuoteBox />, document.getElementById('root'));
