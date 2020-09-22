/* ==========  Variables  ========== */
const itemsList = document.querySelector(".plates");
const item = document.querySelector("[name = 'item']");
const addItems = document.querySelector(".add-items");
const items = [];
const storedPrefix = "storedItems";

/* ==========  Functions  ========== */

function renderHTML(itemsToRender) {
	itemsList.innerHTML = itemsToRender
		.map((itemToRender) => {
			return `<li>${itemToRender}</li>`;
		})
		.join("");
}

function updateStorage(itemToAdd) {
	let existing = localStorage.getItem(storedPrefix);
	existing = existing ? existing.split(",") : [];
	existing.push(itemToAdd);
	localStorage.setItem(storedPrefix, existing.toString());
}

function clickHandler(event) {
	event.preventDefault();
	if (event.target.type !== "submit") return;
	if (!item.value) return;
	// items.push(item.value);
	renderHTML(items);
	updateStorage(item.value);
	item.value = "";
}

function loadItems() {
	const savedItems = localStorage.getItem(storedPrefix).split(",");
	renderHTML(savedItems);
}

/* ==========  Inits and Event Listeners  ========== */
loadItems();
addItems.addEventListener("click", clickHandler);
