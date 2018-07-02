/* 

	* Copyright Konjure 2018

*/

$(document).ready(function() {
	
	// Scroll to roadmap
	
	$("#roadmap-icon").click(function() {
		$("html, body").animate({scrollTop: $(".section.map").offset().top}, 1000);
	});
	
	// Quarter descriptions
	
	function resetQ() {
		$(this).parent().find(".cell-3").removeClass("active");
		$(this).parent().next().find(".q-cover").removeClass("shown");
		$(this).parent().next().find(".q-cover").css("opacity", "0");
		$(this).parent().next().find(".q-cover").css("marginTop", "-20px");
	}
	
	$(".cell-3").click(function() {
		if($(this).is(":nth-of-type(2)")) {
			if($(this).parent().next().find(".q-cover:nth-of-type(2)").hasClass("shown")) {
				$(this).parent().find(".cell-3").removeClass("active");
				$(this).parent().next().find(".q-cover").removeClass("shown");
				$(this).parent().next().find(".q-cover").css("opacity", "0");
				$(this).parent().next().find(".q-cover").css("marginTop", "-20px");
			} else {
				$(this).parent().find(".cell-3").removeClass("active");
				$(this).parent().next().find(".q-cover").removeClass("shown");
				$(this).parent().next().find(".q-cover").css("opacity", "0");
				$(this).parent().next().find(".q-cover").css("marginTop", "-20px");
				$(this).addClass("active");
				$(this).parent().next().find(".q-cover:nth-of-type(2)").addClass("shown");
				$(this).parent().next().find(".q-cover:nth-of-type(2)").animate({"opacity":"1.0","marginTop":"0"}, 250);
			}
		} else if($(this).is(":nth-of-type(3)")) {
			if($(this).parent().next().find(".q-cover:nth-of-type(3)").hasClass("shown")) {
				$(this).parent().find(".cell-3").removeClass("active");
				$(this).parent().next().find(".q-cover").removeClass("shown");
				$(this).parent().next().find(".q-cover").css("opacity", "0");
				$(this).parent().next().find(".q-cover").css("marginTop", "-20px");
			} else {
				$(this).parent().find(".cell-3").removeClass("active");
				$(this).parent().next().find(".q-cover").removeClass("shown");
				$(this).parent().next().find(".q-cover").css("opacity", "0");
				$(this).parent().next().find(".q-cover").css("marginTop", "-20px");
				$(this).addClass("active");
				$(this).parent().next().find(".q-cover:nth-of-type(3)").addClass("shown");
				$(this).parent().next().find(".q-cover:nth-of-type(3)").animate({"opacity":"1.0","marginTop":"0"}, 250);
			}
		} else if($(this).is(":nth-of-type(4)")) {
			if($(this).parent().next().find(".q-cover:nth-of-type(4)").hasClass("shown")) {
				$(this).parent().find(".cell-3").removeClass("active");
				$(this).parent().next().find(".q-cover").removeClass("shown");
				$(this).parent().next().find(".q-cover").css("opacity", "0");
				$(this).parent().next().find(".q-cover").css("marginTop", "-20px");
			} else {
				$(this).parent().find(".cell-3").removeClass("active");
				$(this).parent().next().find(".q-cover").removeClass("shown");
				$(this).parent().next().find(".q-cover").css("opacity", "0");
				$(this).parent().next().find(".q-cover").css("marginTop", "-20px");
				$(this).addClass("active");
				$(this).parent().next().find(".q-cover:nth-of-type(4)").addClass("shown");
				$(this).parent().next().find(".q-cover:nth-of-type(4)").animate({"opacity":"1.0","marginTop":"0"}, 250);
			}
		} else if($(this).is(":nth-of-type(5)")) {
			if($(this).parent().next().find(".q-cover:nth-of-type(5)").hasClass("shown")) {
				$(this).parent().find(".cell-3").removeClass("active");
				$(this).parent().next().find(".q-cover").removeClass("shown");
				$(this).parent().next().find(".q-cover").css("opacity", "0");
				$(this).parent().next().find(".q-cover").css("marginTop", "-20px");
			} else {
				$(this).parent().find(".cell-3").removeClass("active");
				$(this).parent().next().find(".q-cover").removeClass("shown");
				$(this).parent().next().find(".q-cover").css("opacity", "0");
				$(this).parent().next().find(".q-cover").css("marginTop", "-20px");
				$(this).addClass("active");
				$(this).parent().next().find(".q-cover:nth-of-type(5)").addClass("shown");
				$(this).parent().next().find(".q-cover:nth-of-type(5)").animate({"opacity":"1.0","marginTop":"0"}, 250);
			}
		}
	});
	
});