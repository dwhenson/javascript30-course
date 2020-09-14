// Avoid global scope
(function () {
	/* ==========  Variables  ========== */
	const keys = [...document.querySelectorAll("div[data-key]")];

	/* ==========  Functions  ========== */
	function keyHandler(event) {
		keys.forEach((key) => {
			if (event.which === parseInt(key.getAttribute("data-key"), 10)) {
				document.querySelector([`audio[data-key="${event.which}"]`]).play();
			}
		});
	}

	/* ==========  Inits and Event Listeners  ========== */
	document.addEventListener("keydown", keyHandler);
})();
