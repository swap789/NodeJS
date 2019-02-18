const Product = require('../models/products');
const Cart = require('../models/cart');

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('views/shop/product-list', {
        prods: products,
        pageTitle: 'All Product List',
        path: '/products'
    });
}

exports.getProductId = (req, res, next) => {
    const productId = req.params.productId;
    const product = Product.getProductById(productId);
    console.log(product);
    res.render('views/shop/product-details', {
        product: product,
        pageTitle: 'Product Details',
        path: '/products'
    })
}

exports.getIndex = (req, res, next) => {
    const products = Product.fetchAll();
    res.render('views/shop/index', {
        prods: products,
        pageTitle: 'Shop',
        path: '/'
    });
}

exports.getCart = (req, res, next) => {
    res.render('views/shop/cart', {
        path: '/cart',
        pageTitle: 'Your Cart',
    })
}

exports.postCart = (req, res, next) => {
    const productId = req.body.productId;
    console.log(productId, "From Post cart");
    const product =Product.getProductById(productId);
    Cart.addProduct(productId, product.price);
  /*   Product.getProductById(productId, (product) => {
        console.log('inside getproduct by id');
    }); */
    res.redirect('/cart');
}

exports.getCheckout = (req, res, next) => {
    res.render('views/shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout',
    })
}

exports.getOrders = (req, res, next) => {
    res.render('views/shop/orders', {
        path: '/orders',
        pageTitle: 'Orders',
    })
}