/* ==========  Variables  ========== */
const inputs = Array.from(document.querySelectorAll("input"));
const inbox = document.querySelector(".inbox");
// Store index of last clicked checkbox
let lastClicked;

/* ==========  Functions  ========== */

/**
 * Set last clicked variable as index of checked checkbox
 * @param   {Object}  event  The event object
 * @return  {Number}         The index of the checkbox checked
 */
function setLastClicked(event) {
	if (!event.target.type === "checkbox") return;
	inputs.forEach((element, index) => {
		if (element === event.target) {
			lastClicked = index;
		}
	});
}

/**
 * Checks the checkboxes required
 * @param   {Array}  toCheck  The sliced input array
 */
function checkInputs(toCheck) {
	toCheck.forEach((checkbox) => {
		if (!checkbox.checked) {
			checkbox.click();
		}
	});
}

/**
 * Selects the checkboxes to be checked
 * @param   {Object}  event  The event object
 * @return  {Object}         Passes the sliced array of checkboxes to checkInputs
 */
function mouseClickHandler(event) {
	if (!event.target.type === "checkbox") return;

	inputs.forEach((element, index) => {
		if (element === event.target) {
			// creates array based on indexes of lastClicked and 'element'
			const checked =
				// allows selection to work in both directions
				index > lastClicked
					? inputs.slice(lastClicked, index)
					: inputs.slice(index, lastClicked);
			checkInputs(checked);
		}
	});
}

/* ==========  Inits and Event Listeners  ========== */
inbox.addEventListener("click", function (event) {
	// if shift key is not pressed run
	if (!event.shiftKey) {
		setLastClicked(event);
		// if shift key is pressed then run
	} else {
		mouseClickHandler(event);
	}
});
