// Задание #1 - Числа;
const digits = {
    numbers: prompt('Введите любое число до 9999999'),
    units: 0,
    tens: 0,
    hundreds: 0,
    thousand: 0,
    tensOfThousands: 0,
    hundredsOfThousands: 0,
    millions: 0,
}
if (digits.numbers <= 9) {
    digits.units = digits.numbers
} else if (digits.numbers <= 9999999) {
    digits.units = Math.floor(digits.numbers % 10);
    digits.tens = Math.floor(digits.numbers / 10 % 10);
    digits.hundreds = Math.floor(digits.numbers / 100 % 10);
    digits.thousand = Math.floor(digits.numbers / 1000 % 10);
    digits.tensOfThousands = Math.floor(digits.numbers / 10000 % 10);
    digits.hundredsOfThousands = Math.floor(digits.numbers / 100000 % 10);
    digits.millions = Math.floor(digits.numbers / 1000000 % 10);
} else {
    digits.numbers = 0;
    console.log('Вы ввели неверное число');
}
console.log(digits)

// Задание #2 - Корзина;
const basket = [{ name: 'БигМак ', price: 359 }, { name: 'Картофель Фри ', price: 100 }, { name: 'Кока-кола ', price: 89 }, { name: 'МакКомбо ', price: 585 }]
let initialValue = 0;
let string = 'Ваш заказ: ';
const sum = basket.reduce(function (acc, val) {
    return acc + val.price;
}, initialValue);
const order = basket.reduce(function (acc, val) {
    return acc + val.name;
}, string)
console.log(order);
console.log(`Сумма заказа составила: ${sum} рублей.`)