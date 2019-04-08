let currentQuote =  ``;

postQuoteFields();
document.querySelector('#new-quote').addEventListener('click', postQuoteFields);


function postQuoteFields() {
	fetch(`https://cors-anywhere.herokuapp.com/http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=${Math.floor(Math.random() * 43)}`)
		.then(data => data.json()).then(data =>{
			
			let random = Math.floor(Math.random() * data.length);
			
			if(data[random].content === currentQuote){
				if(data.length === 1) {
					return postQuoteFields();
				}
				random = random === 0 ? data.length - 1 : random - 1;
			}

			postQuote(data[random]);
			postAuthor(data[random]);
			currentQuote = data[random].content;
		});
};

function postAuthor({title}) {
	document.querySelector('#author').innerHTML = title;
}

function postQuote({content}) {
	document.querySelector('#text').innerHTML = content;
};
		
			