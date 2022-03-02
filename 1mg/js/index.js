import { topHeader, searchBox, links } from "../components/header/navbar.js";
import showList from "../components/header/index.js";

// Navbar Import section
document.querySelector(".header-sec-1").innerHTML = await topHeader();
document.querySelector(".search-box").innerHTML = await searchBox();
document.querySelector(".links-box").innerHTML = await links();

window.hide = hide;

document.getElementById("location").addEventListener("click", showList);

function hide() {
  let container = document.querySelector(".location-selection ");
  document.addEventListener("mouseup", function (e) {
    if (!container.contains(e.target)) {
      container.style.visibility = "hidden";
    }
  });
}
let url = window.location.href;
console.log(url);

if (url == `./index.html`) {
  document.querySelector("#home-page").style.color = "#ff6f61";
} else if (url == `./labtest.html`) {
  document.querySelector("#labtest-page").style.color = "#ff6f61";
} else if (url == `./askdoctor.html`) {
  document.querySelector("#askdoctor-page").style.color = "#ff6f61";
} else if (url == `./covid-19.html`) {
  document.querySelector("#covid-page").style.color = "#ff6f61";
} else if (url == `.ayurveda.html`) {
  document.querySelector("#ayurveda-page").style.color = "#ff6f61";
} else if (url == `./careplan.html`) {
  document.querySelector("#careplan-page").style.color = "#ff6f61";
}
// Body section

// Footer section
