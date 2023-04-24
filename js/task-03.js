// Завдання 3
// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.
// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Розвязок
const imagesList = images
  .map(
    (image) =>
      `<li class="gallery-items"><img src="${image.url}" alt="${image.alt}"></li>`
  )
  .join("");

console.log(imagesList);

const galleryRef = document.querySelector(".gallery");
galleryRef.insertAdjacentHTML("afterbegin", imagesList);

//Пояснення
// створимо ф-ю imagesList з перебираючим методом масиву map(), який перебере img і створить за рахунок шаблонноого рядка  li і вставить значення  src і alt та перетворить масив в рядок - join()
// const imagesList = images
//   .map(
//     (element) =>
//       `<li class="gallery-items"><img src="${element.url}" alt="${element.alt}"></li>`
//   )
//   .join("");

// console.log(imagesList);          достукаємося до ul.gallery і додамо значення imagesList

// const galleryRef = document.querySelector(".gallery");
// galleryRef.insertAdjacentHTML("afterbegin", imagesList);
