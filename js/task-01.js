// Завдання 1
// HTML містить список категорій ul#categories.
// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

// Розвязок
const categoriesList = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach((category) => {
  console.log(`Category:${category.firstElementChild.textContent}`);
  console.log(`Elements:${category.lastElementChild.children.length}`);
});

// variant 2
// categoriesList.forEach((category) => {
//   console.log(`Category:${category.children[0].textContent}`);
//   console.log(`Elements:${category.children[1].children.length}`);
// });

// Пояснення
// const categoriesList = document.querySelectorAll(".item"); //  <li class="item">
// console.log(`Number of categories: ${categoriesList.length}`); // 3
// categoriesList.forEach((category) => {
//   console.log(`Category:${category.firstElementChild.textContent}`); //  <h2>Animals</h2>
//   console.log(`Elements:${category.querySelectorAll("li").length}`); // 4
// });
