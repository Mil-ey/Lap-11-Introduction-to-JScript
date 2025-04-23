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
class perishableProduct extends product {
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
    }
});
