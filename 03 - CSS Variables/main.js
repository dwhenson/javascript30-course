/* ==========  Variables  ========== */
const control = document.querySelector(".controls");

/* ==========  Functions  ========== */
function handleUpdate(event) {
	const suffix = event.target.dataset.sizing ? event.target.dataset.sizing : "";
	document.documentElement.style.setProperty(
		`--${event.target.name}`,
		event.target.value + suffix
	);
}

/* ==========  Inits and Event Listeners  ========== */
control.addEventListener("change", handleUpdate);
control.addEventListener("mousemove", handleUpdate);
