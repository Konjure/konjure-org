/* 

	* Copyright Konjure 2018

*/

$(document).ready(function() {
	
	particlesJS("particles-js", {
	  "particles": {
	    "number": {
	      "value": 24,
	      "density": {
		"enable": true,
		"value_area": 2018
	      }
	    },
	    "color": {
	      "value": "#ffffff"
	    },
	    "shape": {
	      "type": "image",
	      "stroke": {
		"width": 0,
		"color": "#000000"
	      },
	      "polygon": {
		"nb_sides": 3
	      },
	      "image": {
		"src": "../../assets/media/images/coin-small.png",
		"width": 10,
		"height": 10
	      }
	    },
	    "opacity": {
	      "value": 1,
	      "random": true,
	      "anim": {
		"enable": true,
		"speed": 1,
		"opacity_min": 0,
		"sync": false
	      }
	    },
	    "size": {
	      "value": 35,
	      "random": false,
	      "anim": {
		"enable": false,
		"speed": 4,
		"size_min": 0.3,
		"sync": false
	      }
	    },
	    "line_linked": {
	      "enable": true,
	      "distance": 400,
	      "color": "#7ec31e",
	      "opacity": 1,
	      "width": 2
	    },
	    "move": {
	      "enable": true,
	      "speed": 0.5,
	      "direction": "bottom",
	      "random": true,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": false,
	      "attract": {
		"enable": true,
		"rotateX": 2000,
		"rotateY": 2000
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "window",
	    "events": {
	      "onhover": {
		"enable": true,
		"mode": "grab"
	      },
	      "onclick": {
		"enable": false,
		"mode": "bubble"
	      },
	      "resize": true
	    },
	    "modes": {
	      "grab": {
		"distance": 400,
		"line_linked": {
		  "opacity": 1
		}
	      },
	      "bubble": {
		"distance": 250,
		"size": 0,
		"duration": 2,
		"opacity": 0,
		"speed": 3
	      },
	      "repulse": {
		"distance": 400,
		"duration": 0.4
	      },
	      "push": {
		"particles_nb": 4
	      },
	      "remove": {
		"particles_nb": 2
	      }
	    }
	  },
	  "retina_detect": true
	});
	
	$(".section.token i").click(function() {
		$("html, body").animate({scrollTop: $(".section.chart").offset().top}, 1000);
	});
	
	$(".pie:nth-child(1), .section.chart .cell-10 h3:nth-of-type(1)").hover(function() {
		$(".pie-hide h3:nth-child(1), .pie:nth-child(1)").addClass("pied");
	}, function() {
		$(".pie-hide h3:nth-child(1), .pie:nth-child(1)").removeClass("pied");
	});
	
	$(".pie:nth-child(2), .section.chart .cell-10 h3:nth-of-type(3)").hover(function() {
		$(".pie-hide h3:nth-child(2), .pie:nth-child(2)").addClass("pied");
	}, function() {
		$(".pie-hide h3:nth-child(2), .pie:nth-child(2)").removeClass("pied");
	});
	
	$(".pie:nth-child(3), .section.chart .cell-10 h3:nth-of-type(5)").hover(function() {
		$(".pie-hide h3:nth-child(3), .pie:nth-child(3)").addClass("pied");
	}, function() {
		$(".pie-hide h3:nth-child(3), .pie:nth-child(3)").removeClass("pied");
	});
	
	$(".pie:nth-child(4), .section.chart .cell-10 h3:nth-of-type(7)").hover(function() {
		$(".pie-hide h3:nth-child(4), .pie:nth-child(4)").addClass("pied");
	}, function() {
		$(".pie-hide h3:nth-child(4), .pie:nth-child(4)").removeClass("pied");
	});
	
	$(".pie:nth-child(5), .section.chart .cell-10 h3:nth-of-type(9)").hover(function() {
		$(".pie-hide h3:nth-child(5), .pie:nth-child(5)").addClass("pied");
	}, function() {
		$(".pie-hide h3:nth-child(5), .pie:nth-child(5)").removeClass("pied");
	});
	
	$(".pie:nth-child(6), .section.chart .cell-10 h3:nth-of-type(11)").hover(function() {
		$(".pie-hide h3:nth-child(6), .pie:nth-child(6)").addClass("pied");
	}, function() {
		$(".pie-hide h3:nth-child(6), .pie:nth-child(6)").removeClass("pied");
	});
	
	$(".pie:nth-child(7), .section.chart .cell-10 h3:nth-of-type(13)").hover(function() {
		$(".pie-hide h3:nth-child(7), .pie:nth-child(7)").addClass("pied");
	}, function() {
		$(".pie-hide h3:nth-child(7), .pie:nth-child(7)").removeClass("pied");
	});
	
});