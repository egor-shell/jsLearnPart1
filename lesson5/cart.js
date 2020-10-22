// class Cart {
//     _cart = []

//     constructor(...items) {
//         console.log(items)
//         console.log(...items)
//         this._cart.push(...items)
//     }

//     addItem(item) {
//         this._cart.push(item)
//     }

//     calcTotalPrice() {
//         return this._cart.reduce((result, curItem) => {
//             return result + curItem.price
//         }, 0)
//     }
// }

// class Item {
//     _name = ''
//     _price = 0

//     get price() {
//         return this._price
//     }

//     set name(n) {
//         this._name = n
//     }

//     constructor(name, price) {
//         this._name = name
//         this._price = price
//     }
// }

// const CartInstance = new Cart(new Item('Computer', 1000), new Item('TV', 300))
// let totalPrice = CartInstance.calcTotalPrice()
// CartInstance.addItem(new Item('Apple', 5))
// CartInstance.addItem(new Item('1', 532))
// CartInstance.addItem(new Item('2', 511))

// totalPrice = CartInstance.calcTotalPrice()
// console.log(totalPrice)

// const cart = document.createElement('div');
// document.body.appendChild(cart)

// let list = document.createElement('ul');
// cart.appendChild(list)

// for (let i = 0; i <= ; i++) {
//     const li = document.createElement('li');

//     li.innerText = totalPrice
//     list.appendChild(li);
// }

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
console.log(`Сумма заказа составила: ${sum} рублей.`);

const cart = document.createElement('div');
cart.className = 'cart';
document.body.appendChild(cart);
const ul = document.createElement('ul');

const productFrag = document.createDocumentFragment();

for (let i = 0; i <= basket.length; i++) {
    let product = document.createElement('li');

    product.innerText = basket.forEach(function (val))
    //     basket.reduce(function (acc, val) {
    //     return val.name;
    // }, string)

    productFrag.appendChild(product);
}
cart.appendChild(ul);
ul.appendChild(productFrag);
