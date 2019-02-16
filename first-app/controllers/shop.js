const Product = require('../models/products');


exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    console.log(products);
    res.render('shop/product-list', {
        prods: products,
        pageTitle: 'All Product List',
        path: '/products'
    });
}

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll();
    console.log(products);
    res.render('shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
    })
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Orders',
    })
}