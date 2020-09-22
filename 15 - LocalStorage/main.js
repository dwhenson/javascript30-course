/* ==========  Variables  ========== */
const itemsList = document.querySelector(".plates");
const item = document.querySelector("[name = 'item']");
const addItems = document.querySelector(".add-items");
let items;
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
	items = existing;
	items.push(itemToAdd);
	renderHTML(items);
	localStorage.setItem(storedPrefix, items.toString());
}

function clickHandler(event) {
	event.preventDefault();
	if (!event.target.closest(".add-items")) return;
	if (!item.value) return;
	updateStorage(item.value);
	item.value = "";
}

function loadItems() {
	let savedItems = localStorage.getItem(storedPrefix);
	if (!savedItems) return;
	savedItems = savedItems ? savedItems.split(",") : [];
	renderHTML(savedItems);
}

/* ==========  Inits and Event Listeners  ========== */
loadItems();
addItems.addEventListener("submit", clickHandler);
