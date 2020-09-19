// TODO
// Separate cities and states
// Results toLowerCase()
// Select desired result
// Show population

/* ==========  Variables  ========== */
const endpoint =
	// eslint-disable-next-line max-len
	"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const input = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");
const population = document.querySelector("span.population");

let locations = [];

/* ==========  Functions  ========== */

function renderHTML(results) {
	suggestions.innerHTML = results
		.map(
			(result) => `
		<li>${result.city}</li>
		<li>${result.state}</li>`
		)
		.join("");
}

function filterResults() {
	const searchTerm = input.value;
	const filtered = locations.filter(
		(location) => location.city.includes(searchTerm) || location.state.includes(searchTerm)
	);
	renderHTML(filtered);
}

async function getData() {
	const data = await fetch(endpoint);
	const response = await data.json();
	locations = response;
}

function handleError() {
	console.warn("Oh no, got an error!");
}
/* ==========  Inits and Event Listeners  ========== */
getData().catch(handleError);
input.addEventListener("input", filterResults);
