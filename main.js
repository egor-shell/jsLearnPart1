class List {
    items = []

    constructor(items = []) {
        this.items = items
    }

    findGun(gun) {
        return this.items.filter(item => item.name === gun.name)[0]
    }

    add(item) {
        const exists = this.findGun(item)
        if (exists) {
            exists.inc()
        } else {
            this.items.push(item)
        }
        this.render()
    }
    remove(item) {
        const exists = this.findGood(item)
        if (!exists) {
            return
        }

        if (exists.count > 1) {
            exists.dec()
        } else {
            this.items = this.items.filter(good => item.name !== good.name)
        }
        this.render()
    }
    render() {
    }
}
class Cart extends List {
    constructor(items) {
        if (Cart._instance) {
            return Cart._instance
        }

        super(items)
        this.init()

        Cart._instance = this
        // this._cart.push(...items)
        // this.render()
    }

    init() {
        const basket = document.querySelector('.header-block__basket')
        const placeToRenderBasket = document.querySelector('.main')
        const cartBlock = document.createElement('div')
        cartBlock.classList.add('basket-block')
        cartBlock.innerHTML = `
        <div class="basket-block__block">
                    <div class="basket-block__header">Ваша корзина:</div>
                    <div class="basket-block__item-empty">Пуста</div>
                    <button class="basket-block__buy">
                        <p class="basket-block__buy-text">Оплатить</p>
                    </button>
                </div>
        `
        placeToRenderBasket.appendChild(cartBlock)
        basket.addEventListener('click', () => {
            cartBlock.classList.toggle('disable')
        })

        this.render()
    }

    // addItem(item) {
    //     this._cart.push(item)
    // }


    getSumTemplate() {
        const sum = this.items.reduce((sum, gun) => {
            return sum + gun.price * gun.count
        }, 0)

        const block = document.createElement('div')
        block.classList.add('basket__sum-price')
        block.innerHTML = `Сумма: ${sum}`

        return block
    }

    render() {
        const placeToRender = document.querySelector('.basket-block__block')
        if (!placeToRender) {
            return
        }

        placeToRender.innerHTML = ''

        this.items.forEach(item => {
            const template = item.getCartTemplate()
            placeToRender.appendChild(template)
        })
    }
}
class Item {
    tag = ''
    name = ''
    price = 0
    img = ''
    count = 1

    constructor(tag, name, price, img) {
        this.tag = tag
        this.name = name
        this.price = price
        this.img = img
    }

    getPrice() {
        return this.price
    }
    inc() {
        this.count++
    }
    dec() {
        this.count--
    }
    getMainTemplate() {
        const { tag, name, price, img } = this
        const mainBlock = document.querySelector('.main__line')
        const wrapper = document.createElement('div')
        wrapper.classList.add('main__line-item')
        wrapper.innerHTML = `
        <h2 class="main__line-item-header">${tag}</h2>
        <div class="main__line-item-gun">
            <img src='${img}' alt="item" class="main__line-item-small">
            <div class="main__line-item-round"></div>
         </div>
         <h3 class="main__line-item-name">${name}</h3>
         <h3 class="main__line-item-price">${price} руб.</h3>
         <button class="main__line-item-buy" id="blaze">
                            <p class="main__line-item-buy__text">Купить</p>
                        </button>
        `
        mainBlock.appendChild(wrapper)
        return wrapper
    }
    getAddInCartBtn() {
        const btn = document.querySelector('.main__line-item-buy')
        // const btn = document.createElement('button')
        // btn.classList.add('main__line-item-buy')
        const basketPlace = document.createElement('div')
        basketPlace.classList.add('basket-block')
        basketPlace.innerHTML = `
            <div class="basket-block__block">
                <div class="basket-block__header">Ваша корзина:</div>
                <div class="basket-block__item-empty">Пуста</div>
                <div class="basket-block__item">Пуста</div>
                <button class="basket-block__buy">
                    <p class="basket-block__buy-text">Оплатить</p>
                </button>
            </div>
        `

        btn.addEventListener('click', () => {
            const CartInstance = new Cart()
            CartInstance.add(this)
            console.log(CartInstance)
        })
        return btn
    }
    getCartTemplate() {
        const { tag, name, price, count } = this
        const wrapper = document.createElement('div')
        wrapper.classList.add('basket-block__item')
        wrapper.innerHTML = `
        <p>${tag} ${name}</p> <p>${count}</p> <p>${count * price}</p>
        `
        return wrapper
    }

    render() {
        console.log(this)
    }
}
class GunList extends List {
    constructor(items) {
        super(items)
    }

    render() {
        const placeToRender = document.querySelector('.basket-block')
        if (!placeToRender) {
            return
        }

        placeToRender.innerHTML = ''

        this.items.forEach(item => {
            const template = item.getMainTemplate()
            placeToRender.appendChild(template)
        })
    }
}
const Blaze = new Item('Desert Eagle', 'Пламя', 23325, 'img/Blaze_1.png')
const Skeleton = new Item('Скелетный Нож', 'Кровавая паутина', 198000, 'img/skeletonKnife_1.png')
const HotRod = new Item('M4A1-S', 'Хот-Род', 10430, 'img/hotRot_1.png')
const Howl = new Item('M4A4', 'Вой', 153899, 'img/howl_1.png')
const Glock = new Item('Glock-18', 'Градиент', 69800, 'img/gradient_1.png')
const Dlore = new Item('AWP', 'История о Драконе', 303074, 'img/dragonLore_1.png')
const Gungnir = new Item('AWP', 'Гунгнир', 488800, 'img/gungnir_1.png')
const Lotus = new Item('AK-47', 'Дикий лотос', 290000, 'img/wildLotus_1.png')

const cartBag = new GunList()
cartBag.add(Blaze)
cartBag.render()

// Blaze.getMainTemplate()
// Blaze.getAddInCartBtn()
// Skeleton.getMainTemplate()
// Skeleton.getAddInCartBtn()
// HotRod.getMainTemplate()
// HotRod.getAddInCartBtn()
// Howl.getMainTemplate()
// Howl.getAddInCartBtn()
// Glock.getMainTemplate()
// Glock.getAddInCartBtn()
// Dlore.getMainTemplate()
// Dlore.getAddInCartBtn()
// Gungnir.getMainTemplate()
// Gungnir.getAddInCartBtn()
// Lotus.getMainTemplate()
// Lotus.getAddInCartBtn()