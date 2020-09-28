const nav = document.querySelector("#main");
const topOfNav = nav.offsetTop;
const logo = document.querySelector(".logo");

function fixNav() {
	window.scrollY >= topOfNav ? (logo.style.maxWidth = "500px") : (logo.style.maxWidth = "0px");
}

window.addEventListener("scroll", fixNav);
