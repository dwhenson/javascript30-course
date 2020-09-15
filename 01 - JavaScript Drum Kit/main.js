// Avoid global scope
(function () {
	/* ==========  Functions  ========== */
	const keys = document.querySelector(".keys");
	function keyHandler(event) {
		const audio = document.querySelector([`audio[data-key="${event.which}"]`]);
		const key = document.querySelector([`div[data-key="${event.which}"]`]);
		if (!audio) return;
		audio.currentTime = 0;
		audio.play();
		key.classList.add("playing");
	}

	function removeTransition(event) {
		if (!event.propertyName === "transform") return;
		event.target.classList.remove("playing");
	}

	/*= =======  Inits and Event Listeners  ========== */
	document.addEventListener("keydown", keyHandler);
	keys.addEventListener("transitionend", removeTransition);
})();
