/* ==========  Variables  ========== */
const itemsList = document.querySelector(".plates");
const item = document.querySelector("[name = 'item']");
const addItems = document.querySelector(".add-items");
const storedPrefix = "storedItems";

/* ==========  Functions  ========== */
function renderHTML(itemsToRender, insertLocation) {
	insertLocation.innerHTML = itemsToRender
		.map((listItem, index) => {
			return `
				<li>
					<input type="checkbox" data-name=${index} id="item${index}"
					${listItem.done ? "checked" : ""} />
        			<label for="item${index}">${listItem.text}</label>
				</li>`;
		})
		.join("");
}

function updateStorage(itemValue) {
	let data = localStorage.getItem(storedPrefix);
	data = data ? JSON.parse(data) : [];
	const itemToAdd = {
		text: itemValue,
		done: false,
	};
	data.push(itemToAdd);
	renderHTML(data, itemsList);
	localStorage.setItem(storedPrefix, JSON.stringify(data));
}

function clickHandler(event) {
	let data = localStorage.getItem(storedPrefix);
	data = data ? JSON.parse(data) : [];
	const index = event.target.getAttribute("data-name");
	if (!data[index]) return;
	if (data[index].done) {
		data[index].done = false;
	} else {
		data[index].done = true;
	}
	renderHTML(data, itemsList);
	localStorage.setItem(storedPrefix, JSON.stringify(data));
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
	savedItems = savedItems ? JSON.parse(savedItems) : [];
	renderHTML(savedItems, itemsList);
}

/* ==========  Inits and Event Listeners  ========== */
loadItems();
addItems.addEventListener("submit", submitHandler);
itemsList.addEventListener("click", clickHandler);
