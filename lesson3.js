// Задание #1 - Цикл простых чисел
const simpleNumbers = [];
let number = 2;
let divider = 2;
while (number >= 2 && number <= 100) {
    if (number % divider == 0) {
        divider++
    } else {
        simpleNumbers.push(number);
        number++
        divider = 2;
    }
    console.log(simpleNumbers)

    // Задание #2 - Корзина
    const basket = ['100', '359', '585', '89'];
    function countBasketPrice(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i]);

        }
        console.log(sum);
    }
    countBasketPrice(basket)