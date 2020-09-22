/* ==========  Variables  ========== */
const itemsList = document.querySelector(".plates");
const item = document.querySelector("[name = 'item']");
const addItems = document.querySelector(".add-items");
const items = [];

/* ==========  Functions  ========== */

function renderHTML(tacos) {
	itemsList.innerHTML = tacos
		.map((taco) => {
			return `<li>${taco}</li>`;
		})
		.join("");
}

function clickHandler(event) {
	event.preventDefault();
	if (event.target.type !== "submit") return;
	if (!item.value) return;
	items.push(item.value);
	item.value = "";
	renderHTML(items);
}

/* ==========  Inits and Event Listeners  ========== */
addItems.addEventListener("click", clickHandler);
