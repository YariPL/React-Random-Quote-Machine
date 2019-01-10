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
		let randomQuoteIndex = Math.floor(Math.random() * 4);

		console.log(randomQuoteIndex);
		console.log(this.state.quoteData[randomQuoteIndex].quote);
		console.log(this.state.quoteData[randomQuoteIndex].author);
		/*this.setState({
			currentQuote:this.state.quoteData[randomQuoteIndex].quote,
			currentAuthor:this.state.quoteData[randomQuoteIndex].author
		})*/
	}
	render() {
		return(
			<div id="quote-box">
				<Quote 
					currentQuote={this.state.currentQuote}
					currentAuthor={this.state.currentAuthor}
				/>
				<div id='buttons'>
					<div id="tweet-quote">
						<div className='button'>Tweet</div>
					</div>
					<div id="new-quote" onClick={this.randomQuote}>
						<div className='button'>New Quote</div>
					</div>
				</div>
			</div>
		)
	}
}


ReactDOM.render(<QuoteBox />, document.getElementById('root'));
