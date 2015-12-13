// ==ClosureCompiler==
// @output_file_name Accordion.min.js
// @compilation_level ADVANCED_OPTIMIZATIONS
// ==/ClosureCompiler==

	var Accordion = (function(){
		"use strict";

		var accordions = document.querySelectorAll('.accordion');

		if (accordions.length > 0) {
			for (var i = 0; i < accordions.length; i++) {
				accordions[i].children[0].addEventListener('click', Toggle, false);
			}
			return { available: accordions };
		}

		function Toggle (evnt) {
			evnt.preventDefault();

			var accordion = this.parentNode;

			if (accordion.className.match(/accordion__active/)) {
				accordion.className = 'accordion';
			}
			else {
				accordion.className = 'accordion accordion__active';
			}
		}
	})();