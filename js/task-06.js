// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті(подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// Розвязок
const inputRef = document.getElementById("validation-input");

const onBlur = (event) => {
  const inputDataLength = Number(event.currentTarget.dataset.length);

  const inputDataLengthUser = Number(event.currentTarget.value.trim().length);

  if (inputDataLength === inputDataLengthUser) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
};

inputRef.addEventListener("blur", onBlur);

// Пояснення
// const inputRef = document.getElementById("validation-input");
// // console.log(inputRef);//<input.../>
// const inputDataLength = Number(inputRef.dataset.length);
// // console.log(inputDataLength); // 6
// const inputDataLengthUser = Number(inputRef.value.trim().length);
// // console.log(inputDataLengthUser); // довжина користувача без пробілів - трім()
// прописуємо умову, і при доданні класу ін видаляємо, так як не має бути два класи на одному елементі
// inputRef.addEventListener("blur", onBlur); - додаємо слухача події onBlur, яка реагує на "blur"
