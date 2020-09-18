/* ==========  Variables  ========== */
const panels = [...document.querySelectorAll(".panel")];

/* ==========  Functions  ========== */
function resetPanels() {
	panels.forEach((panel) => {
		panel.classList.remove("open");
		panel.classList.remove("open-active");
	});
}

function transitionHandler(event) {
	if (!event.propertyName.includes("flex")) return;
	const panel = event.target.closest(".panel");
	panel.classList.toggle("open-active");
}

function clickHandler(event) {
	resetPanels();
	const panel = event.target.closest(".panel");
	panel.classList.toggle("open");
}

/* ==========  Inits and Event Listeners  ========== */
document.addEventListener("click", clickHandler);
document.addEventListener("transitionend", transitionHandler);
