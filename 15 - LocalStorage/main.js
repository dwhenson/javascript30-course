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
					<input type="checkbox" data-index=${index} id="item${index}"
					${listItem.done ? "checked" : ""} />
        			<label for="item${index}">${listItem.text}</label>
				</li>`;
		})
		.join("");
}

/**
 * Updates localStorage with the user entered data
 * @param   {String}  itemValue  The text to add to localStorage
 */
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

/**
 * Handles the click event to toggle checkbox status (save to localStorage and render in HTML)
 * @param   {Object}  event  The event object
 * @return  {Object}         Calls renderHTML and passes user data and element to insert data
 */
function clickHandler(event) {
	if (!event.target.matches("input")) return;
	const { index } = event.target.dataset;
	let data = localStorage.getItem(storedPrefix);
	data = data ? JSON.parse(data) : [];
	data[index].done = !data[index].done;
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
