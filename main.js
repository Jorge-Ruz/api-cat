console.log(". . .");

const URL = "https://api.thecatapi.com/v1/images/search";

function loadCatImage() {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      const img = document.querySelector("img");
      img.src = data[0].url;
      img.style.maxWidth = "320px";
      img.style.maxHeight = "320px";
    });
}

loadCatImage();

const button = document.querySelector("button");
button.addEventListener("click", loadCatImage);