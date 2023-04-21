// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

// Розвязок
let counterValue = 0;
const valueRef = document.querySelector("#value");
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');

const onClickBtnDecrement = (event) => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
const onClickBtnIncrement = (event) => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};

btnDecrement.addEventListener("click", onClickBtnDecrement);
btnIncrement.addEventListener("click", onClickBtnIncrement);

// Пояснення
// достукатися до спану і кнопок
// записати дві ф - ї, які збільшують і зменшують лічильник
// додати подію
