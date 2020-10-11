// Задание #1 - Объяснение;
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 В данном случае используется префиксная форма инкремента, которая сначала увеличит на "1", а потом выведет результат
// d = b++; alert(d);           // 1 Здесь же используется постфиксная форма, которая сначала выведет результат, а затем увеличит на "1"
// c = (2 + ++a); alert(c);     // 5 Т.к. "a" уже была увеличена в переменной "c", то получается выражение (2 + 1 + 2) = 5
// d = (2 + b++); alert(d);     // 4 В переменной "d" "b" была увеличена постфиксной формой инкремента, следовательно она уже равна 2-м, получается выражение: (2 + 2) и затем снова постфиксная форма, которая увеличит значение "b" после выполнения скрипта
// alert(a);                    // 3 а была увеличена до "3-х" ранее с помощью префиксной формы инкремента
// alert(b);                    // 3 b была увеличена до "3-х" ранее с помощью постфиксной формы инкремента

// Задание #2 - Чему равно?;
// var a = 2;
// var x = 1 + (a *= 2);
// В переменной "x" a = 2*2, засчет оператора присваивания *=, который расшифровывается как a *= b -> a = a * b. "x" будет равен "5"

// Задание #3 - Скрипт;
let a = +prompt('Введите любое число:');
let b = +prompt('Введите любое число:');
if (a >= 0 && b >= 0) {
    let positive = a - b;
    alert(positive);
} else if (a < 0 && b < 0) {
    let negative = a * b;
    alert(negative);

} else {
    let various = a + b;
    alert(various);
}

// Задание #4 - Посчитать до 15-ти;
let count = +prompt('Давайте посчитаем до 15, введите любое число 15:')
switch (true) {
    case count <= 15 && count >= 0:
        while (count <= 15) {
            console.log(count)
            count++
        }
        break;
    case count > 15 || count < 0:
        console.log('Упс... Вы ввели неверное число.')
}

// Задание #5 - Функции для калькулятора;
function mathOperation(x, y, operation) {
    switch (operation) {
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        case '*':
            return firstValue * secondValue;
        case '/':
            return firstValue / secondValue;
    }
}

// Задание #6 - Калькулятор;
let firstValue = +prompt('Введите первое значение:')
let operation = prompt('Выберите арифметическое действие: +|-|*|/')
let secondValue = +prompt('Введите второе значение:')
let calculator = mathOperation(firstValue, secondValue, operation)
alert(calculator)

// Задание #7* - Сравнение null и 0;
// null > 0; // false
// null < 0; // false
// null == 0; // false
// null >= 0; // true
// null, скорее всего оператор >= не проверяет 2 равенства/неравестна (больше или равно), а проверяет не меньше ли x к y, для оптимизации просчетов.

// Задание #8* - Возведение в степень;
function powerFunction(val, pow) {
    if (pow == 1) {
        return val;
    } else {
        return val * powerFunction(val, pow - 1);
    }
}
let number = +prompt('Введите число:');
let power = +prompt('Введите степень:');
// let result = powerFunction(number, power);
alert(powerFunction(number, power));
// Конец
// alert("Спасибо за внимание! Обновите страницу, чтобы повторить.")