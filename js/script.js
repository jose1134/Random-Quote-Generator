// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//10 second reset timer
setInterval(printQuote, 10000);

//inporting the quote list from another file
var quoteList = quotes;

//Getting the quote
function getRandomQuote(){
	var math = Math.floor(Math.random() * 6);
	var randomQuote = quoteList[math];
	return randomQuote;
}

function printQuote(){
	var print = getRandomQuote();
	//Breaking down properties into variables 
	var quote = print.quote;
	var source = print.source;
	var citation = print.citation;
	var year = print.year;

	//Putting Everything together to send out to the HTML file
	var together =''
	together += '<p class="quote">' + quote + '</p>';
	together += '<p class="source">' + source ;
	together += '<span class="citation">' + citation + '</span>'
	together += '<span class="year">' + year + '</span>'
	together += '</p>'
	document.getElementById('quote-box').innerHTML = together;
	document.body.style.background = randomColor();
	
}

//random color break down
function randomColor(){
	var math = Math.floor(Math.random() * 255);
	var color = 'rgb(' + math +',' + math +','+ math +')';
	return color;
}


//calling the first function to make the page load with the quote
printQuote();


