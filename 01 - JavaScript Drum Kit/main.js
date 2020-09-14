// Avoid global scope
(function () {
	/* ==========  Variables  ========== */
	const keys = [...document.querySelectorAll("div[data-key]")];

	/* ==========  Functions  ========== */
	function keyDownHandler(event) {
		keys.forEach((key) => {
			if (!event.which === parseInt(key.getAttribute("data-key"), 10)) return;
			document.querySelector([`audio[data-key="${event.which}"]`]).play();
			const drum = document.querySelector([`div[data-key="${event.which}"]`]);
			drum.classList.add("playing");
			setTimeout(() => {
				drum.classList.remove("playing");
			}, 70);
		});
	}

	/* ==========  Inits and Event Listeners  ========== */
	document.addEventListener("keydown", keyDownHandler);
})();
