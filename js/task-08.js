// Завдання 8
// Напиши скрипт управління формою логіна.
// Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

// Розвязок
const formRef = document.querySelector(".login-form");
const profile = {};

formRef.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = formRef.elements.email.value.trim();
  // console.log(formRef.elements);
  const passwordValue = formRef.elements.password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All fields must be filled in");
  } else {
    profile.email = emailValue;
    profile.password = passwordValue;
    console.log(profile);
  }

  formRef.reset(); //
});

// Пояснення
// const formRef = document.querySelector(".login-form");
// const profile = {};
// // console.log(formRef);
// formRef.addEventListener("submit", (event) => {
//   event.preventDefault(); // для скасування дії браузера - щодо перезавантаження сторінки
//   const emailValue = formRef.elements.email.value.trim();
//   const passwordValue = formRef.elements.password.value.trim();
//   // console.log(emailValue);// почта яку ввів користувач
//   if (emailValue === "" || passwordValue === "") {
//     alert("All fields must be filled in");
//   } else {
//     profile.email = emailValue;
//     profile.password = passwordValue;
//     console.log(profile);
//   }
//   // виводимо обєкт{email: qwe@qwe password: 12345;

//   formRef.reset(); // очищаємо інпут
// });
