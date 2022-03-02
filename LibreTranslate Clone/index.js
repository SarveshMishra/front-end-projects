import navbar from "./components/navbar.js";

document.querySelector(".navbar").innerHTML = navbar();
let url = `https://libretranslate.de/translate`;

const convert = () => {
  if (event.key == "Enter" || event.type == "click") {
    let text = document.querySelector("#input").value;

    fetchData(url, text);
  }
};

const showData = (data) => {
//   console.log(data.translatedText);
  let text = document.querySelector("#output");

  text.innerHTML = data.translatedText;
};
const fetchData = async (url, text) => {
  try {
    let data = await (
      await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          q: text,
          source: "en",
          target: "hi",
          format: "text",
        }),
        headers: { "Content-Type": "application/json" },
      })
    ).json();

    showData(data);
  } catch (error) {
    console.log(error);
  }
};

document.querySelector(".translateText").addEventListener("click", convert);
document.querySelector("#input").addEventListener("keypress", convert);
