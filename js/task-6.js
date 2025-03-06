function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const input = document.querySelector("#controls input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

createBtn.addEventListener("click", function () {
  const amound = Number(input.value);
  if (amound < 1 || amound > 100) {
    return;
  }
  boxesContainer.innerHTML = "";
  
  let size = 30;

for (let i = 0; i < amound; i++) {
  const box = document.createElement("div");
  box.style.width = size + "px";
  box.style.height = size + "px";
  box.style.backgroundColor = getRandomHexColor();
  box.style.margin = "5px";
  boxesContainer.appendChild(box);
  size += 10;
}
  input.value = "";
})

destroyBtn.addEventListener("click", function () {
    boxesContainer.innerHTML = "";
});
  
createBtn.addEventListener("mouseenter", function () {
    createBtn.style.backgroundColor = "#6c8cff";
})

createBtn.addEventListener("mouseleave", function () {
    createBtn.style.backgroundColor = "";
})

destroyBtn.addEventListener("mouseenter", function () {
    destroyBtn.style.backgroundColor = "#ff7070";
})

destroyBtn.addEventListener("mouseleave", function () {
    destroyBtn.style.backgroundColor = "";
})




