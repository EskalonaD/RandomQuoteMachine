let currentQuote = ``;

postQuoteFields();
document.querySelector('#new-quote').addEventListener('click', postQuoteFields);
document.querySelector('#tweet-quote').addEventListener('click', () => {
    window.location.href = `https://www.twitter.com/intent/tweet?text=${currentQuote}`;
})


function postQuoteFields() {
    fetch(`https://cors-anywhere.herokuapp.com/https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand`, {
        headers: { 'Content-Type': 'application/json' },
        method: 'GET'
    })
    .then(data => data.json())
    .then(data => {
        let random = Math.floor(Math.random() * data.length);

        postQuote(data[random]);
        postAuthor(data[random]);
        currentQuote = data[random].content.rendered.replace('<p>', '').replace('</p>', '');
    });
};

function postAuthor({ title: { rendered } }) {
    document.querySelector('#author').innerHTML = rendered;
}

function postQuote({ content: { rendered } }) {
    console.log(rendered)
    document.querySelector('#text').innerHTML = rendered;
};
