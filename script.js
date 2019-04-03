const quotes = [
	{
		quote: "The only thing to fear is fear itself.",
		source: "Franklin Delano Roosevelt",
		citation: "First Inaugural Address",
		year: 1932,
		tags: "Business"
	},
	{
		quote: "That's one small step for man, one giant leap for mankind.",
		source: "Neil Armstrong",
		citation: "The moon",
		year: 1969,
		tags: "Space Travel",
	},
	{
		quote: "It always seems impossible until it is done.",
		source: "Nelson Mandela",
		citation: "",
		year: "1918 - 2013",
		tags: "Politics",
	},
	{
		quote: "Not everything that can be counted counts, and not everything that counts can be counted.",
		source: "Albert Einstein",
		citation: "",
		year: "1879 - 1955",
		tags: "Engineering",
	},
	{
		quote: "What we think, we become",
		source: "Buddha",
		citation: "",
		year: "",
		tags: "Faith",
	},
	{
		quote: "Dream big and dare to fail",
		source: "Norman Vaughan",
		citation: "",
		year: "1905 - 2005",
		tags: "Business",
	},
];


postQuoteFields();
document.querySelector('#new-quote').addEventListener('click', postQuoteFields);


function postQuoteFields(){
    const quote = getRandomQuote(ignoreCurrentQuote(quotes));

    postQuote(quote);
    postAuthor(quote);
} 

function getRandomQuote (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function postAuthor(obj) {
    document.querySelector('#author').innerHTML = obj.source;
}
function postQuote(obj) {
    document.querySelector('#text').innerHTML = obj.quote;
}

function ignoreCurrentQuote (arr) {
    const currentQuote = document.querySelector('#text').innerHTML;
    console.log(currentQuote);

    return arr.reduce( (prevValue, curValue) => {
        if (curValue.quote !== currentQuote) {
            prevValue.push(curValue);
        } 
        return prevValue;
    }, [])
}