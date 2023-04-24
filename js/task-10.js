function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// перший етап - пошук елементів в <div>
const refs = {
  input: document.querySelector('[type="number"]'),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.getElementById("boxes"),
};
// другий етап - перевірка умови інпуту та додаємо подію по створенню числа

refs.create.addEventListener("click", () => {
  if (
    Number(refs.input.value) > Number(refs.input.max) ||
    Number(refs.input.value) < Number(refs.input.min)
  ) {
    alert("Please enter number from 1 to 100");
  } else {
    createBoxes();
  }
});

// третій етап - додаємо подію на створення боксів

const createBoxes = () => {
  refs.boxes.innerHTML = "";
  let size = 30;
  const boxesArray = [];

  for (let index = 0; index < refs.input.value; index += 1) {
    size += 10 * index;
    const div = `<div class="boxes-item" style="background-color: ${getRandomHexColor()}; width: ${size}px; height:${size}px"></div>`;
    boxesArray.push(div);
  }
  refs.boxes.insertAdjacentHTML("beforeend", boxesArray.join(""));
};

// четвертий етап - додаємо подію на видалення створених елементів

const destroyBoxes = () => {
  refs.input.value = "";
  refs.boxes.innerHTML = "";
};

refs.destroy.addEventListener("click", destroyBoxes);
