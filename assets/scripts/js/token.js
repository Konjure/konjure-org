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
	
});