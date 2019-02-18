const products = [];

module.exports = class Product {
    constructor(title, imageUrl, price, description) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.description = description;
    }

    save() {
        this.id = Math.random().toString();
        products.push(this);
    }

    static fetchAll() {
        return products;
    }

    static getProductById(productId) {
        return products.find(product => product.id === productId);
    }
}