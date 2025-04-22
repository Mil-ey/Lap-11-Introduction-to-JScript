// Part one//
class product {
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

