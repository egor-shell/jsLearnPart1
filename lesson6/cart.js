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
        let totalPrice = document.querySelector('.cartlist__totalprice')
        totalPrice.innerHTML = this.calcTotalPrice() + '₽'
    }
}
class Item {
    _name = '';
    _price = 0;
    _jpg = ''

    get price() {
        return this._price
    }

    constructor(name, price, img) {
        this._name = name;
        this._price = price;
        this._img = img;
        this.render()
    }

    render() {
    }
}

let CartInstance = new Cart();
let totalPrice = CartInstance.calcTotalPrice();
const amongUs = document.querySelector('#AmongUs');
const shark = document.querySelector('#Shark');
const penguins = document.querySelector('#Penguins')
const totalPriceHTML = document.querySelector('.cartlist__totalprice')
amongUs.addEventListener('click', () => {
    CartInstance.addItem(new Item('Among Us', 59));
    totalPrice = CartInstance.calcTotalPrice();
    totalPriceHTML.innerHTML = CartInstance.calcTotalPrice() + '₽';
})
shark.addEventListener('click', () => {
    CartInstance.addItem(new Item('San Jose Sharks', 799));
    totalPrice = CartInstance.calcTotalPrice();
    totalPriceHTML.innerHTML = CartInstance.calcTotalPrice() + '₽';
})
penguins.addEventListener('click', () => {
    CartInstance.addItem(new Item('Pittsburgh Penguins', 399));
    totalPrice = CartInstance.calcTotalPrice();
    totalPriceHTML.innerHTML = CartInstance.calcTotalPrice() + '₽';
})