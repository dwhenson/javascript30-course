/* ==========  Variables  ========== */
const endpoint =
	// eslint-disable-next-line max-len
	"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const input = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

let locations = [];

/* ==========  Functions  ========== */

function renderHTML(results) {
	suggestions.innerHTML = results
		.map(
			(result) => `
				<li>${result.city}, ${result.state}
				<span class="population">${parseInt(result.population, 10).toLocaleString()}</span>
				</li>`
		)
		.join("");
}

function filterResults() {
	const searchTerm = input.value.toLowerCase();
	const filtered = locations.filter(
		(location) =>
			location.city.toLowerCase().includes(searchTerm) ||
			location.state.toLowerCase().includes(searchTerm)
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
