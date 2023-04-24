// Завдання 2
// HTML містить порожній список ul#ingredients.
// JavaScript містить масив рядків.
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// Напиши скрипт, який для кожного елемента масиву ingredients:
// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// Розвязок
const ingredientsList = document.querySelector("#ingredients");

const ingredientsItems = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});
ingredientsList.append(...ingredientsItems);

// Пояснення
// ingredients.forEach((element) => {
//   const ingredient = document.createElement("li"); //  <li></li>
//   ingredient.textContent = element; //<li>Potatoes</li>
//   ingredient.classList.add("item"); // <li class="item">Potatoes</li>
//   const ingredientsList = document.querySelector("#ingredients"); // знаходимо в хтмл <ul id="ingredients"></ul>
//   ingredientsList.append(ingredient); // вставляємо <li>Potatoes</li>
// });
