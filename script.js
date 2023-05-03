
function newQuote(){
var val = Math.floor(Math.random()*quotes.length);
document.getElementById('displayQuote').innerHTML = quotes[val];
 };

// $('a[data-text]').each(function(){
//   $(this).html('data-text', this) ;
// });

$('twitter-share-button').change(function(){
	var current_quote = document.getElementById('displayQuote').innerHTML.value
	document.getElementsByTagName("a")[0].setAttribute("data-text", current_quote);
});

$.getScript('https://platform.twitter.com/widgets.js');