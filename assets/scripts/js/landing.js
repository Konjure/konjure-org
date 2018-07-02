/* 

	* Copyright Konjure 2018

*/

$(document).ready(function() {
	
	// Splash input
	
	$("#splash-input").on("keydown", function() {
		if($(this).val().length > -1) {
			$("#splash-icon").css("color", "var(--darker-color)");
		}
	}).on("keydown", function(e) {
		if (e.keyCode === 8) {
			if($(this).val().length <= 1) {
				$(this).trigger("keypress");
				$("#splash-icon").css("color", "var(--dark-color)");
			}
		}
	});
	
	$("#splash-input").on("keyup", function() {
		if($(this).val().length < 1) {
			$("#splash-icon").css("color", "var(--dark-color)");
		}
	});
	
	// Splash feature icon effect
	
	var $featureanimations = $("<div>", {"class": "featureanimations"});
	var $animatedtoken = $("<img>", {"class": "animatedtoken", "src": "assets/media/images/dark-ghost.svg"});
	
	window.setInterval(function() {
		$(".feature-animation-cover").children(".featureanimations:last-child").clone().prependTo(".feature-animation-cover");
		$(".featureanimations").first().css("transform", "rotate(" + (Math.floor(Math.random() * 360) + 1) + "deg)");
		$(".animatedtoken").first().animate({
			"opacity":"0", "marginTop":"-100px"
		}, {
			duration: 4000,
			complete: function() {
				$(this).parent().remove();
			}
		});
	}, 400);
	
	// Development code switch
	
	window.currentCode = 1;
	window.refreshInterval = setInterval(changeCode, 7000);
	
	function changeCode() {
		$(".code-content").removeClass("shown");
		$(".code-switch").removeClass("active");
		if(window.currentCode === 3) {
			$(".code-content.code-grid").addClass("shown");
			$(".code-switch:nth-child(1)").addClass("active");
			window.currentCode = 1;
		} else if(window.currentCode === 1) {
			$(".code-content.code-buttons").addClass("shown");
			$(".code-switch:nth-child(2)").addClass("active");
			window.currentCode = 2;
		} else if(window.currentCode === 2) {
			$(".code-content.code-attributes").addClass("shown");
			$(".code-switch:nth-child(3)").addClass("active");
			window.currentCode = 3;
		}
	}
	
	$(".code-switch:not(:last-child)").click(function() {
		$(".code-switch").removeClass("active");
		$(this).addClass("active");
		clearInterval(window.refreshInterval);
		window.refreshInterval = setInterval(changeCode, 7000);
	});
	
	$(".code").hover(function(ev){
		clearInterval(window.refreshInterval);
	}, function(ev){
		window.refreshInterval = setInterval(changeCode, 7000);
	});
	
	$(".code-switch:nth-child(1)").click(function() {
		$(".code-content.code-buttons").removeClass("shown");
		$(".code-content.code-attributes").removeClass("shown");
		$(".code-content.code-grid").addClass("shown");
		window.currentCode = 1;
	});
	
	$(".code-switch:nth-child(2)").click(function() {
		$(".code-content.code-grid").removeClass("shown");
		$(".code-content.code-attributes").removeClass("shown");
		$(".code-content.code-buttons").addClass("shown");
		window.currentCode = 2;
	});
	
	$(".code-switch:nth-child(3)").click(function() {
		$(".code-content.code-grid").removeClass("shown");
		$(".code-content.code-buttons").removeClass("shown");
		$(".code-content.code-attributes").addClass("shown");
		window.currentCode = 3;
	});
	
	$(".code-arrow").click(function() {
		$(".code-left").toggleClass("open");
		$(".code-right").toggleClass("closed");
		$(this).find("i").toggleClass("fa-angle-right fa-angle-left");
	});

});