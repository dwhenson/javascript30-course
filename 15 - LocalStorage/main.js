/* ==========  Variables  ========== */
const itemsList = document.querySelector(".plates");
const item = document.querySelector("[name = 'item']");
const addItems = document.querySelector(".add-items");
const storedPrefix = "storedItems";

/* ==========  Functions  ========== */
function renderHTML(itemsToRender) {
	itemsList.innerHTML = Object.entries(itemsToRender)
		.map(([key, value]) => {
			console.log([key, value]);
			return `<li>${key}</li>`;
		})
		.join("");
}

function updateStorage(itemToAdd) {
	let existing = localStorage.getItem(storedPrefix);
	existing = existing ? JSON.parse(existing) : {};
	existing[itemToAdd] = {
		type: itemToAdd,
		checkbox: false,
	};
	renderHTML(existing);
	localStorage.setItem(storedPrefix, JSON.stringify(existing));
}

function submitHandler(event) {
	event.preventDefault();
	if (!event.target.closest(".add-items")) return;
	if (!item.value) return;
	updateStorage(item.value);
	addItems.reset();
}

function loadItems() {
	let savedItems = localStorage.getItem(storedPrefix);
	if (!savedItems) return;
	savedItems = savedItems ? JSON.parse(savedItems) : {};
	renderHTML(savedItems);
}

/* ==========  Inits and Event Listeners  ========== */
loadItems();
addItems.addEventListener("submit", submitHandler);
