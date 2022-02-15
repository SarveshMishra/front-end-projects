 let API_KEY = "870a98ec5b69454d800468e04b722dcf";



async function search() {
  let text = document.getElementById("search").value;
  var url = `https://newsapi.org/v2/everything?q=${text}&apiKey=${API_KEY}`;


  let data = await (await fetch(url)).json();


  //   console.log(data.articles);
  newsUI(data.articles);
}


function newsUI(data) {
  console.log(data);


  // Main Container
  let container = document.querySelector(".container");


  //
  container.innerHTML = "";


  for (let i = 0; i < data.length; i++) {
    let sub = document.createElement("div");
    sub.setAttribute("class", "sub-headline");
    let img = document.createElement("img");
    img.src = data[i].urlToImage;


    sub.append(img);


    let content = document.createElement("div");
    content.setAttribute("class", "content");


    let span = document.createElement("span");
    span.setAttribute("class", "sub-category");


    span.innerHTML = `<b>Title:</b> ${data[i].title} <br/><br/>`;


    let author = document.createElement("p");
    author.innerHTML = `<b>Author:</b> ${data[i].author}`;
    let link = document.createElement("p");


    link.innerHTML = `<b>News Link: </b><a href="${data[i].url}" target="_blank"  >Click Here</a>`;


    content.append(span, author, link);
    sub.append(content);
    container.append(sub);
  }
}
