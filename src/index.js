import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Quote extends React.Component {
	constructor() {
		super();
		this.state = {
			currentQuote:null,
			currentAuthor:null,
			quoteData:[{
				author:'1ss',
				quote:'1xxxxxxxxxxx'				
			},
			{
				author:'2ss',
				quote:'2xxxxxxxxxxx'	
			},
			{
				author:'3ss',
				quote:'3xxxxxxxxxxx'	
			},
			{
				author:'4ss',
				quote:'4xxxxxxxxxxx'	
			}]
			
		}
	}
	
	randomQuote() {
		
	}
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
	
	render() {
		return(
			<div id="quote-box">
				<Quote />
				<div id='buttons'>
					<div id="tweet-quote">
						<div className='button'>Tweet</div>
					</div>
					<div id="new-quote">
						<div className='button'>New Quote</div>
					</div>
				</div>
			</div>
		)
	}
}


ReactDOM.render(<QuoteBox />, document.getElementById('root'));
