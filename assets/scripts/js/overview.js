/* 

	* Copyright Konjure 2018

*/

$(document).ready(function() {

	$(".overview-down").click(function() {
		$("html, body").animate({scrollTop: $(".section.ai").offset().top}, 1000);
	});
	
	setInterval(function() {
		$(".platform:last-child").prependTo($(".platforms"));
	}, 2500);
	
});