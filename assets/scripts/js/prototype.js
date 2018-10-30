/* 

	* Copyright Konjure 2018

*/

$(document).ready(function() {

	$(".overview-down").click(function() {
		$("html, body").animate({scrollTop: $(".section.downloads").offset().top}, 1000);
	});
	
});