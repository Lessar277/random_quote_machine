var colors = ['#42A5F5','#66BB6A','#f44336','#9C27B0','#673AB7','#3F51B5','#2196F3','#FF5722','#BF360C','#FDD437'];
var url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous";
var tweetURL = ``;

function maxQuoteLength (author) {
	return 126 - author.length;
}

function sliceQuote(x, y) {
	if (x.length > y) {return x.slice(0,y);}
}


function loadQuote() {
	$.ajax(url, settings);
	changeColor();
}

function randColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor() {
		$('body').animate({backgroundColor: randColor()});
		$('.colored').animate({color: randColor()});
		$('.quote').animate({borderLeftColor: randColor()})
		$('.quote-text').animate({color: randColor()});
}

var	settings = {
	method: "POST",
	beforeSend: function (request) {
		request.setRequestHeader("X-Mashape-Key", "xWqLd0uYXVmshFgdaAwvRLrCdJnRp1Mpex1jsn6UmJXBTldbuk");
		request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		request.setRequestHeader("Accept", "application/json");
	},
	success: function (data) {
		var quote = JSON.parse(data);
		console.log(quote);
		var maxLength = maxQuoteLength(quote.author);
		var trimmedQuote = sliceQuote(quote.quote, maxLength);
		console.log(trimmedQuote);
		$('.quote-text').html(quote.quote);
		$('.author-text').html(quote.author);
		if (trimmedQuote) {
			tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&text=${trimmedQuote}... - ${quote.author}`
		} else {
			tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&text=${quote.quote} - ${quote.author}`
		}
		$('.tweetlink').attr('href', tweetURL);

	},
	error: function(error){
		console.log(e.message)
	}
};


loadQuote();
$('.get-quote').click(loadQuote);
