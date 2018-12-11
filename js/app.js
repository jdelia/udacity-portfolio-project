"use strict";
// Run SmoothScroll once page has loaded.
window.onload = function () {
	var scroll = new SmoothScroll('a[href*="#"]', {
		speed: 800,
		speedAsDuration: true
	});
}
