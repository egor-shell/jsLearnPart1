class Cart {
    _cart = []

    constructor(...items) {
        this._cart.push(...items)
        this.render()
    }

    addItem(item) {
        this._cart.push(item)
    }

    calcTotalPrice() {
        return this._cart.reduce((result, curItem) => {
            return result + curItem.price
        }, 0)
    }
    viewTotalPrice(total) {
        document.querySelector('.cart__totalprice')
        total = document.createElement('p')
    }
    render() {
        const basket = document.createElement('div');
        basket.classList.add('cart');
        const basketTotalPrice = document.createElement('p');
        basketTotalPrice.classList.add('cart__totalprice')
        const totalPrice = document.createElement('p');
        totalPrice.classList.add('cart__totalprice');
        totalPrice.innerHTML = this.calcTotalPrice()
        document.body.append(basket);
        basket.appendChild(totalPrice)
        const placeToRender = document.querySelector('.cart')
        console.log(placeToRender)


    }
}
class Item {
    _name = '';
    _price = 0;
    _jpg = ''

    get price() {
        return this._price
    }

    constructor(name, price, jpg) {
        this._name = name;
        this._price = price;
        this._jpg = jpg;
        this.render()
    }

    render() {
        const placeToRender = document.querySelector('main')
        const nameItem = document.createElement('h2');
        nameItem.classList.add('cart__item-name');
        nameItem.innerHTML = this._name
        const priceItem = document.createElement('p');
        priceItem.classList.add('cart__item-price');
        priceItem.innerHTML = this._price
        const jpgItem = document.createElement('img')
        jpgItem.classList.add('cart__item-jpg');

        placeToRender.appendChild(nameItem);
        placeToRender.appendChild(priceItem)
    }
}

// class List {
//     _picture = '';
//     _amount = 0;

//     constructor(picture, amount, price) {

//     }
// }

const CartInstance = new Cart(new Item('Computer', 1000, 1), new Item('Phone', 500, 2), new Item('Apple', 5, 3));
const totalPrice = CartInstance.calcTotalPrice();
console.log(totalPrice);