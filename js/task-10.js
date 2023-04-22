function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('[type="number"]'),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.getElementById("boxes"),
};

const createBoxes = () => {
  let size = 30;
  const boxesArray = [];
  for (let index = 0; index < refs.input.value; index += 1) {
    size += 10 * index;
    const div = `<div class="boxes-item" style="background-color: ${getRandomHexColor()}; width: ${size}px; height:${size}px"></div>`;
    boxesArray.push(div);
  }
  refs.boxes.insertAdjacentHTML("beforeend", boxesArray.join(""));
};

refs.create.addEventListener("click", createBoxes);

const destroyBoxes = () => {
  refs.input.value = "";
  refs.boxes.innerHTML = "";
};

refs.destroy.addEventListener("click", destroyBoxes);
