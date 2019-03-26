// #require: dotdotdot/jquery.dotdotdot.js
$(document).ready(function(){

	$(".dot-wrapper").dotdotdot({
		ellipsis: "\u2026 ",
		/* The text to add as ellipsis. */
		height: 126,
		/* The (max-)height for the wrapper:
		null: measure the CSS (max-)height ones;
		a number: sets a specific height in pixels;
		"watch": re-measures the CSS (max-)height in the "watch". */

		keep: null,
		/* jQuery-selector for elements to keep after the ellipsis. */

		tolerance: 0,
		/* Deviation for the measured wrapper height. */

		truncate: "word",
		/* How to truncate the text: By "node", "word" or "letter". */

		watch: true,
		/* Whether to update the ellipsis:
		true: Monitors the wrapper width and height;
		"window": Monitors the window width and height. */

	});

	$(".dot-showcase-wrapper").dotdotdot({
		ellipsis: "\u2026 ",
		/* The text to add as ellipsis. */
		height: 80,
		/* The (max-)height for the wrapper:
		null: measure the CSS (max-)height ones;
		a number: sets a specific height in pixels;
		"watch": re-measures the CSS (max-)height in the "watch". */

		keep: null,
		/* jQuery-selector for elements to keep after the ellipsis. */

		tolerance: 0,
		/* Deviation for the measured wrapper height. */

		truncate: "word",
		/* How to truncate the text: By "node", "word" or "letter". */

		watch: true,
		/* Whether to update the ellipsis:
		true: Monitors the wrapper width and height;
		"window": Monitors the window width and height. */

	});

	$(".dot-tailored").dotdotdot({
		ellipsis: "\u2026 ",
		/* The text to add as ellipsis. */
		height: 90,
		/* The (max-)height for the wrapper:
		null: measure the CSS (max-)height ones;
		a number: sets a specific height in pixels;
		"watch": re-measures the CSS (max-)height in the "watch". */

		keep: null,
		/* jQuery-selector for elements to keep after the ellipsis. */

		tolerance: 0,
		/* Deviation for the measured wrapper height. */

		truncate: "word",
		/* How to truncate the text: By "node", "word" or "letter". */

		watch: true,
		/* Whether to update the ellipsis:
		true: Monitors the wrapper width and height;
		"window": Monitors the window width and height. */

	});

	$(".dot-showcase-wrapper-featured").dotdotdot({
		ellipsis: "\u2026 ",
		/* The text to add as ellipsis. */
		height: 120,
		/* The (max-)height for the wrapper:
		null: measure the CSS (max-)height ones;
		a number: sets a specific height in pixels;
		"watch": re-measures the CSS (max-)height in the "watch". */

		keep: null,
		/* jQuery-selector for elements to keep after the ellipsis. */

		tolerance: 0,
		/* Deviation for the measured wrapper height. */

		truncate: "word",
		/* How to truncate the text: By "node", "word" or "letter". */

		watch: true,
		/* Whether to update the ellipsis:
		true: Monitors the wrapper width and height;
		"window": Monitors the window width and height. */

	});

	$(".navigator-item").dotdotdot({
		ellipsis: "\u2026 ",
		/* The text to add as ellipsis. */
		height: 90,
		/* The (max-)height for the wrapper:
		null: measure the CSS (max-)height ones;
		a number: sets a specific height in pixels;
		"watch": re-measures the CSS (max-)height in the "watch". */

		keep: null,
		/* jQuery-selector for elements to keep after the ellipsis. */

		tolerance: 0,
		/* Deviation for the measured wrapper height. */

		truncate: "word",
		/* How to truncate the text: By "node", "word" or "letter". */

		watch: true,
		/* Whether to update the ellipsis:
		true: Monitors the wrapper width and height;
		"window": Monitors the window width and height. */

	});

	$(".side-dot").dotdotdot({
		ellipsis: "\u2026 ",
		/* The text to add as ellipsis. */
		height: 90,
		/* The (max-)height for the wrapper:
		null: measure the CSS (max-)height ones;
		a number: sets a specific height in pixels;
		"watch": re-measures the CSS (max-)height in the "watch". */

		keep: null,
		/* jQuery-selector for elements to keep after the ellipsis. */

		tolerance: 0,
		/* Deviation for the measured wrapper height. */

		truncate: "word",
		/* How to truncate the text: By "node", "word" or "letter". */

		watch: true,
		/* Whether to update the ellipsis:
		true: Monitors the wrapper width and height;
		"window": Monitors the window width and height. */

	});

});
