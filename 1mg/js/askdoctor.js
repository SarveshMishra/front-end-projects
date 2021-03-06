import { topHeader } from "../components/header/navbar.js";
import showList from "../components/header/index.js";
import changeLinkColor from "../scripts/changeLinkColor.js";
// Navbar Import section
document.querySelector(".header-sec-1").innerHTML = await topHeader();

window.hide = hide;
changeLinkColor();
document.getElementById("location").addEventListener("click", showList);

function hide() {
	let container = document.querySelector(".location-selection ");
	document.addEventListener("mouseup", function (e) {
		if (!container.contains(e.target)) {
			container.style.visibility = "hidden";
		}
	});
}

// Body section

// Footer section
