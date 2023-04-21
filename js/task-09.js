// Завдання 9
// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

// Розвязок
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onClickChangeColor = (event) => {
  textRef.textContent = bodyRef.style.backgroundColor = getRandomHexColor();
};

const textRef = document.querySelector(".color");
const buttonRef = document.querySelector(".change-color");
const bodyRef = document.body;

buttonRef.addEventListener("click", onClickChangeColor);

// Пояснення
// створимо ф - ю, в якій прирівняємо введений рандомний колір до фону сторінки
// поставимо слухача на кнопку
