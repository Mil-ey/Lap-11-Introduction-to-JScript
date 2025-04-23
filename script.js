// Part one//
class products {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}
getTotalValue = (products) => {
    let totalValue = 0;
    products.forEach(product => {
        totalValue += product.price * product.quantity;
    });
    return totalValue;
}
toString = (products) => {
    let str = "Products:\n";
    products.forEach(product => {
        str += `${product.name}: $${product.price} x ${product.quantity}\n`;
    });
    return str;
}
// Part two//
class perishableProduct extends products {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }
}
getTotalValue = (perishableProducts) => {
    let totalValue = 0;
    perishableProducts.forEach(product => {
        totalValue += product.price * product.quantity;
    });
    return totalValue;
} 
toString = (perishableProducts) => {
    let str = "Perishable Products:\n";
    perishableProducts.forEach(product => {
        str += `${product.name}: $${product.price} x ${product.quantity} (Expires on: ${product.expirationDate})\n`;
    });
    return str;
}
const yogurt = new perishableProduct("Yogurt", 1.5, 10, "2025-10-01");
const milk = new perishableProduct("Milk", 2.0, 5, "2025-09-15");
const cheese = new perishableProduct("Cheese", 3.0, 2, "2025-08-20");
const perishableProducts = [yogurt, milk, cheese];

// Part three//
class productProperties {
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * (discount / 100);
        });
    }
}
products.forEach(product => {
    if (product instanceof perishableProduct) {
       product.price -= product.price * 0.1;
    } else if (product instanceof product) {
        product.price -= product.price * 0.05;
    }
});

// Part four//
class Store {
    constructor () {
        this.inventory = [];
    }
    products(products) {
        this.inventory.push(products);
    }

    getTotalValue() {
        let totalValue = 0;
        this.inventory.forEach(product => {
            totalValue += product.price * product.quantity;
        });
        return totalValue;
    }

    findProductByName(name) {
        return this.inventory.find(product => product.name === name) || null;
    }
}

// Part five//
const store = new Store();
const apple = new products("Apple", 0.5, 20);
const banana = new products("Banana", 0.3, 30);
const orange = new products("Orange", 0.8, 15);
const grapes = new products("Grapes", 2.0, 10);
const watermelon = new products("Watermelon", 3.0, 5);
const icecream = new perishableProduct("Ice Cream", 5.0, 8, "2025-07-01");
const chocolate = new perishableProduct("Chocolate", 2.5, 12, "2025-06-15");


store.products(apple);
store.products(banana);
store.products(orange);
store.products(grapes);
store.products(watermelon);
store.products(icecream);
store.products(chocolate);
store.products(yogurt);
store.products(milk);
store.products(cheese);