const button = document.querySelector(".change-color");
button.addEventListener("mouseenter", function () {
    button.style.backgroundColor = "#6c8cff";
})

button.addEventListener("mouseleave", function () {
    button.style.backgroundColor = "";
})

const body = document.querySelector("body");

const textSpan = document.querySelector(".color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

button.addEventListener("click", function () {
  body.style.backgroundColor = getRandomHexColor();
  textSpan.textContent = getRandomHexColor();
});





