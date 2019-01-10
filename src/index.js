import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Quote extends React.Component {
	render() {
		return(
			<div>

			</div>
		)
	}
}

class QuoteBox extends React.Component {
	render() {
		return(
			<div id="quote-box">
				<Quote />
				<div id='buttons'>
					<div id="tweet-quote">
						Tweet
					</div>
					<div id="new-quote">
						New Quote
					</div>
			</div>
		)
	}
}


ReactDOM.render(<QuoteBox />, document.getElementById('root'));
