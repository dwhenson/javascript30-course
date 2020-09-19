/* ==========  Variables  ========== */
const endpoint =
	// eslint-disable-next-line max-len
	"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

/* ==========  Functions  ========== */

function renderHTML(locations) {
	console.log(locations);
}

async function getData() {
	const data = await fetch(endpoint);
	const response = await data.json();
	renderHTML(response);
}

function handleError() {
	console.warn("Oh no, got an error!");
}
/* ==========  Inits nd Event Listeners  ========== */
getData().catch(handleError);
