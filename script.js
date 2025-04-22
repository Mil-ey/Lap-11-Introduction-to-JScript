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



