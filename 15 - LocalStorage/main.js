// TODO
// add button to clear all and set local storage
// add button to check all and add to local storage
// add button to delete all and clear local storage

/* ==========  Variables  ========== */
const itemsList = document.querySelector(".plates");
const item = document.querySelector("[name = 'item']");
const addItems = document.querySelector(".add-items");
const storedPrefix = "storedItems";

/* ==========  Functions  ========== */
/**
 * Renders the user entered data to HTML
 * @param   {Array}  itemsToRender   An array of objects containing user entered data
 * @param   {Object} insertLocation  The element to insert the user entered data
 * @return  {String}                  The HTML to render
 */
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

/**
 * Handles the submit event
 * @param   {Object}  event  The event object
 * @return  {Object}         Calls updateStorage and passes the user inputted data
 */
function submitHandler(event) {
	event.preventDefault();
	if (!event.target.closest(".add-items")) return;
	if (!item.value) return;
	updateStorage(item.value);
	addItems.reset();
}

/**
 * Gets items from localStorage
 * @return  {Object}  Calls renderHTML with items from localStorage and the element to insert them
 */
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
