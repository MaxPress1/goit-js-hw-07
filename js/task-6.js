const input = document.querySelector("input");
const number = Number(input);
console.log(number);

const button = document.querySelectorAll("button");

button.addEventListener("click", createBoxes);

const parent = document.querySelector("#boxes")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  
}

function destroyBoxes(){

};

