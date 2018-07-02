/* 

	* Copyright Konjure 2018

*/

$(document).ready(function() {
	
	particlesJS("particles-konjure", {
	  "particles": {
	    "number": {
	      "value": 15,
	      "density": {
		"enable": true,
		"value_area": 800
	      }
	    },
	    "color": {
	      "value": "#1b1e34"
	    },
	    "shape": {
	      "type": "image",
	      "stroke": {
		"width": 0,
		"color": "#000"
	      },
	      "polygon": {
		"nb_sides": 6
	      },
	      "image": {
		"src": "../../assets/media/images/bubble1.png",
		"width": 100,
		"height": 100
	      }
	    },
	    "opacity": {
	      "value": 0,
	      "random": false,
	      "anim": {
		"enable": false,
		"speed": 0,
		"opacity_min": 0.1,
		"sync": false
	      }
	    },
	    "size": {
	      "value": 15,
	      "random": true,
	      "anim": {
		"enable": false,
		"speed": 1,
		"size_min": 5,
		"sync": false
	      }
	    },
	    "line_linked": {
	      "enable": false,
	      "distance": 200,
	      "color": "#ffffff",
	      "opacity": 0.1,
	      "width": 2
	    },
	    "move": {
	      "enable": true,
	      "speed": 1,
	      "direction": "top",
	      "random": false,
	      "straight": false,
	      "out_mode": "out",
	      "bounce": false,
	      "attract": {
		"enable": false,
		"rotateX": 600,
		"rotateY": 1200
	      }
	    }
	  },
	  "interactivity": {
	    "detect_on": "canvas",
	    "events": {
	      "onhover": {
		"enable": false,
		"mode": "bubble"
	      },
	      "onclick": {
		"enable": false,
		"mode": "push"
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
		"distance": 400,
		"size": 5,
		"duration": 2,
		"opacity": 8,
		"speed": 3
	      },
	      "repulse": {
		"distance": 200,
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
	
	var scene = document.getElementById("parallax-scene");
	var content = document.getElementById("parallax-content");
	var parallaxInstance = new Parallax(scene);
	var parallaxInstance = new Parallax(content);
	
});