import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Quote extends React.Component {
	
	
	
	render() {
		return(
			<div id='quotePart'>
				<div id="text">
					<p>{this.props.currentQuote}</p>
				</div>
				<div id="author">
					<p>-{this.props.currentAuthor}</p>
				</div>
			</div>
		)
	}
}

class QuoteBox extends React.Component {
	constructor() {
		super();
		this.state = {
			currentQuote:'Think of yourself as on the threshold of unparalleled success. A whole, clear, glorious life lies before you. Achieve! Achieve!',
			currentAuthor:'Andrew Carnegie',
			quoteData:[{
				author:'Andrew Carnegie',
				quote:'Think of yourself as on the threshold of unparalleled success. A whole, clear, glorious life lies before you. Achieve! Achieve!'
			},
			{
				author:'Dale Carnegie',
				quote:'Inaction breeds doubt and fear. Action breeds confidence and courage. If you want to conquer fear, do not sit home and think about it. Go out and get busy.'	
			},
			{
				author:'Napoleon Bonaparte',
				quote:'Impossible is a word to be found only in the dictionary of fools.'	
			},
			{
				author:'Julius Caesar',
				quote:'What we wish, we readily believe, and what we ourselves think, we imagine others think also.'	
			},
			{
				author:'Steve Jobs',
				quote:`Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me.`	
			},
			{
				author:'Bill Gates',
				quote:`If you can't make it good, at least make it look good.`
			},
			{
				author:'Sun Tzu',
				quote:'Know your enemy and know yourself and you can fight a hundred battles without disaster.'	
			},
			{
				author:'Edward Snowden',
				quote:'Under observation, we act less free, which means we effectively are less free.'	
			}],
			backgroundColors: ['cadetblue','darkgray','green','beige','olive', 'rosybrown', 'wheat','coral'],
			quotBackgroundColors: ['pink', 'cyan', 'wheat','antiquewhite'],
			buttonBackgroundColors: ['rosybrown','chocolate','darkmagenta','navy']
			
		}
		this.randomQuote = this.randomQuote.bind(this);
	}
	randomQuote() {
		let randomQuoteIndex = Math.floor(Math.random() * 8);

		this.setState({
			currentQuote:this.state.quoteData[randomQuoteIndex].quote,
			currentAuthor:this.state.quoteData[randomQuoteIndex].author
		})
		document.querySelector('body').style.background = this.state.backgroundColors[Math.floor(Math.random() * 8)];
		document.querySelector('#quote-box').style.background = this.state.quotBackgroundColors[Math.floor(Math.random() * 4)];
		document.querySelector('#tweet-quote').style.background = this.state.buttonBackgroundColors[Math.floor(Math.random() * 4)];
		document.querySelector('#new-quote').style.background = this.state.buttonBackgroundColors[Math.floor(Math.random() * 4)];

	}
	render() {
		return(
			<div id="quote-box">
				<Quote 
					currentQuote={this.state.currentQuote}
					currentAuthor={this.state.currentAuthor}
				/>
				<div id='buttons'>
					<div id="tweet-quoteDiv">
						<a id="tweet-quote"  href="twitter.com/intent/tweet" className='button'>Tweet</a>
					</div>
					<div id="new-quoteDiv">
						<div id="new-quote" className='button' onClick={this.randomQuote}>New Quote</div>
					</div>
				</div>
			</div>
		)
	}
}


ReactDOM.render(<QuoteBox />, document.getElementById('root'));
