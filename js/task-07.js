// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// Розвязок
const inputRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

const onInput = (event) => {
  textRef.style.fontSize = event.currentTarget.value + "px";
};

inputRef.addEventListener("input", onInput);

// Пояснення
// достукатися достукатися до інпуту та тексту
// const inputRef = document.getElementById("font-size-control");
// // console.log(inputRef);
// const textRef = document.getElementById("text");
// // console.log(textRef);
// прирівняти розмір тексту до розміру інпуту
// event.currentTarget = inputRef, тому що слухач повішений саме на інпуті
// додати слухача події
// inputRef.addEventListener("input", onInput);
