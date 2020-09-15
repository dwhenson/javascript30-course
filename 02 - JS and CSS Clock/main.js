/* ==========  Variables  ========== */
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

/* ==========  Functions  ========== */
function setDate() {
	const now = new Date();
	// second hand
	const seconds = now.getSeconds();
	const secondDegrees = (seconds / 60) * 360 + 90;
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;
	// minute hand
	const minutes = now.getMinutes();
	const minuteDegrees = (minutes / 60) * 360 + 90;
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
}

setInterval(setDate, 1000);
