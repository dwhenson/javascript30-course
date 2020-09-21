/* ==========  Variables  ========== */
const inputs = Array.from(document.querySelectorAll("input"));
const inbox = document.querySelector(".inbox");
let lastClicked;

/* ==========  Functions  ========== */
function setLastClicked(event) {
	if (!event.target === "input") return;
	console.log(event.target);
	inputs.forEach((element, index) => {
		if (element === event.target) {
			lastClicked = index;
		}
	});
}

function mouseClickHandler(event) {
	if (!event.target === "input") return;
	console.log(event.target);
	inputs.forEach((element, index) => {
		if (element === event.target) {
			const checked = inputs.slice(lastClicked, index);
			checked.forEach((checkbox) => {
				if (!checkbox.checked) {
					checkbox.click();
				}
			});
		}
	});
}

/* ==========  Inits and Event Listeners  ========== */
inbox.addEventListener("click", function (event) {
	if (!event.shiftKey) {
		setLastClicked(event);
	} else {
		mouseClickHandler(event);
	}
});
