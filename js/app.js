
function sliceQuote(quote) {
	if (quote.length > 160) {return quote.slice(0,160);}
}

var colors = ['#42A5F5','#66BB6A','#f44336','#9C27B0','#673AB7','#3F51B5','#2196F3','#FF5722','#BF360C']

function randColor() {
	return colors[Math.floor(Math.random() * colors.length)];
}

function changeColor() {
		$('body').animate({backgroundColor: randColor()});
		$('.colored').animate({color: randColor()});
		$('.quote').animate({borderLeftColor: randColor()})
		$('.quote-text').animate({color: randColor()});
}

$('.get-quote').click(function() {
	changeColor();
});
