/* 

	* Copyright Konjure 2018

*/

$(document).ready(function() {

	// Vertical nav
	
	window.navIsOpen = false;
	
	$(".menu-button").click(function() {
		if(window.navIsOpen === false) {
			$(".dim").fadeIn("fast");
			$(".vertical-nav").addClass("sticky");
			$(".header-content").addClass("sticky");
			if($(window).scrollTop() > $("#header-trigger").offset().top) {
				$(".header").addClass("sticky");
			}
			window.navIsOpen = true;
		} else {
			$(".vertical-nav").removeClass("sticky");
			$(".dim").fadeOut("fast");
			if($(window).scrollTop() < $("#header-trigger").offset().top) {
				$(".header-content").removeClass("sticky");
			}
			window.navIsOpen = false;
		}
	});
	
	$(".dim").click(function() {
		if(window.navIsOpen === true) {
			$(".vertical-nav").removeClass("sticky");
			$(".dim").fadeOut("fast");
			if($(window).scrollTop() < $("#header-trigger").offset().top) {
				$(".header-content").removeClass("sticky");
			}
			window.navIsOpen = false;
		}
	});
	
	$(document).keyup(function(e) {
		if (e.keyCode == 27) {
			if(window.navIsOpen === true) {
				$(".vertical-nav").removeClass("sticky");
				$(".dim").fadeOut("fast");
				if($(window).scrollTop() < $("#header-trigger").offset().top) {
					$(".header-content").removeClass("sticky");
				}
				window.navIsOpen = false;
			}
			if(window.langIsOpen === true) {
				$(".languages").removeClass("open");
				window.langIsOpen = false;
			}
		}
	});

	// Sticky header
	
	var header = $(".header-outer"),
	    didScroll = false;
	 
	$(window).scroll(function() {
	    didScroll = true;
	});
	
	window.headerIsSticky = false;
	 
	setInterval(function() {
		if(didScroll) {
			didScroll = false;
			if($(this).scrollTop() > $("#header-trigger").offset().top) {
				if(window.navIsOpen === false && window.headerIsSticky === false) {
					$(".header-content").addClass("sticky");
					$(".header-content").css("marginTop", "-85px");
					$(".header-content").animate({"marginTop":"0"}, 150);
				}
				if(window.headerIsSticky === false) {
					$(".header").addClass("sticky");
					$(".header").css("marginTop", "-85px");
					$(".header").animate({"marginTop":"0"}, 150);
					window.headerIsSticky = true;
				}
			} else {
				$(".header").removeClass("sticky");
				if(window.navIsOpen === false) {
					$(".header-content").removeClass("sticky");
				}
				window.headerIsSticky = false;
			}
		}
	}, 2);
	
	if($(this).scrollTop() > $("#header-trigger").offset().top) {
		$(".header").addClass("sticky");
		$(".header-content").addClass("sticky");
		window.headerIsSticky = true;
	} else {
		$(".header-content").removeClass("sticky");
		$(".header").removeClass("sticky");
		window.headerIsSticky = false;
	}
	
	// Lang
	
	window.langIsOpen = false;
	
	$(document).mouseup(function(e) {
		var container = $(".languages");
		if($(".lang").is(e.target)) {
			if(window.langIsOpen === false) {
				$(".languages").addClass("open");
				window.langIsOpen = true;
			} else {
				$(".languages").removeClass("open");
				window.langIsOpen = false;
			}
		} else if(!container.is(e.target) && container.has(e.target).length === 0) {
			$(".languages").removeClass("open");
			window.langIsOpen = false;
		}
	});
	
	// Whitepaper coming soon
	
	$("#whitepaper").hover(function() {
		$(".links a div").toggleClass("paper-shown");
	});
	
	// Active page
	
	if (window.location.href.indexOf("what-is-konjure") > -1) {
		$(".vertical-nav a:nth-of-type(1)").addClass("active");
	} else if (window.location.href.indexOf("token") > -1) {
		$(".vertical-nav a:nth-of-type(2)").addClass("active");
	} else if (window.location.href.indexOf("roadmap") > -1) {
		$(".vertical-nav a:nth-of-type(3)").addClass("active");
	} else if(window.location.href.indexOf("prototype") > -1) {
		$(".vertical-nav a:nth-of-type(4)").addClass("active");
	} else if (window.location.href.indexOf("meet-the-team") > -1) {
		$(".vertical-nav a:nth-of-type(5)").addClass("active");
	} else if (window.location.href.indexOf("get-in-touch") > -1) {
		$(".vertical-nav a:nth-of-type(6)").addClass("active");
	} else if (window.location.href.indexOf("faqs") > -1) {
		$(".vertical-nav a:nth-of-type(7)").addClass("active");
	} else if (window.location.href.indexOf("overview") > -1) {
		$(".vertical-nav a:nth-of-type(9)").addClass("active");
	} else if (window.location.href.indexOf("decentralization") > -1) {
		$(".vertical-nav a:nth-of-type(10)").addClass("active");
	}
	
});