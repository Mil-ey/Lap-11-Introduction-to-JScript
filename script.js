

// Part one//
class Products {
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
class PerishableProduct extends Products {
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
        str += `${product.name}: $${product.price} x ${product.quantity}, Expiration Date: ${product.expirationDate}\n`;

    });
    return str;



}
const yogurt = new PerishableProduct("Yogurt", 1.5, 10, "2025-10-01");
const milk = new PerishableProduct("Milk", 2.0, 5, "2025-09-15");
const cheese = new PerishableProduct("Cheese", 3.0, 2, "2025-08-20");
const perishableProducts = [yogurt, milk, cheese];

// Part three//
class productProperties {
    static applyDiscount(products, discount) {
        products.forEach(product => {
            product.price -= product.price * (discount);
        });
    }
}


// Part four//
class Store {
    constructor () {
        this.inventory = [];
    }
    addProduct(products) {
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
    getInventory() {
        return this.inventory;
    }
}

// Part five//
const store = new Store();
const apple = new Products("Apple", 0.5, 20);
const banana = new Products("Banana", 0.3, 30);
const orange = new Products("Orange", 0.8, 15);
const grapes = new Products("Grapes", 2.0, 10);
const watermelon = new Products("Watermelon", 3.0, 5);
const icecream = new PerishableProduct("Ice Cream", 5.0, 8, "2025-07-01");
const chocolate = new PerishableProduct("Chocolate", 2.5, 12, "2025-06-15");


store.addProduct(apple);
store.addProduct(banana);
store.addProduct(orange);
store.addProduct(grapes);
store.addProduct(watermelon);
store.addProduct(icecream);
store.addProduct(chocolate);
store.addProduct(yogurt);
store.addProduct(milk);
store.addProduct(cheese);

console.log("Total value of store inventory before discount: $" + store.getTotalValue());

productProperties.applyDiscount(store.inventory, 0.15);
console.log("Total value of store inventory after discount: $" + store.getTotalValue());


function displayProducts(products) {
    const tbody = document.getElementById("productBody");
    tbody.innerHTML = "";
    products.forEach((product, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${product.quantity}</td>
        `;
        tbody.appendChild(row);
    });
}

function displayTotalValue() {
    const totalValue = document.getElementById("totalValue");
    totalValue.textContent = "Total Value: $" + store.getTotalValue();
}

function searchProduct() {
    const searchInput = document.getElementById("searchInput").value.trim();
    const resultsDiv = document.getElementById("searchResults");
    const found = store.findProductByName(searchInput);

    if (found) {
        resultsDiv.innerHTML = `<p>Found: ${found.name}, $${found.price.toFixed(2)}, Quantity: ${found.quantity}</p>`;
        displayProducts([found]);
    } else {
        resultsDiv.innerHTML = `<p>Product not found.</p>`;
    }
}

function showAllProducts() {
    displayProducts(store.getInventory()); 
    document.getElementById("searchResults").innerHTML = "";
    document.getElementById("searchInput").value = "";
}


// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    displayProducts(store.getInventory());
    displayTotalValue();

    document.getElementById("searchButton").addEventListener("click", searchProduct);
    document.getElementById("showAllButton").addEventListener("click", showAllProducts);
});
