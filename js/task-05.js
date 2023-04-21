// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// Розвязок
const inputRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");

const placeholderRef = (event) => {
  outputRef.textContent =
    inputRef.value !== "" ? event.currentTarget.value : "Anonymous";
};

inputRef.addEventListener("input", placeholderRef);

// Пояснення
// достукатися до інпуту та тексту
// написати ф - ю, де тернарним методом перевірити чи рядок заповнений
// додати подію, яка додасть слухача і покаже що ввів користувач
