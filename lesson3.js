// Задание #1 - Цикл простых чисел
let number = 2;
const simpleNumbers = [];

while (number <= 100) {
    if (number == 2) {
        simpleNumbers.push(2)
    } else {
        let result = 2;
        let divider = 2;
        while (number % divider !== 0 && number > divider) {
            divider++;
            result++;
        }
        if (result == number) {
            simpleNumbers.push(number)
        }
    }
    number++
}

console.log(simpleNumbers);

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

// Задание #3 - for без тела;
for (let i = -1; i < 9; i++, console.log(i)) { }

// Задание #4 - XXX;
let xArr = [];
let end = 0;
while (end < 20) {
    end++;
    xArr.push('x');
    console.log(xArr);
}

