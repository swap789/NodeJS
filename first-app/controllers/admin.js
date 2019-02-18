const Product = require('../models/products');

const products = [];

exports.getAddProducts = (req, res, next) => {
    res.render('views/admin/edit-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        editing: false,
    });
}

exports.getPostProducts = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;

    const product = new Product(title, imageUrl, price, description);

    product.save();
    res.redirect('/');
}

exports.getEditProduct = (req, res, next) => {
    const editMode = req.query.edit;
    console.log(editMode);
    if (!editMode) {
        return res.redirect('/');
    }
    const prodId = req.params.productId;
    const product = Product.getProductById(prodId);
    if (!product) {
        return res.redirect('/');
    }
    res.render('views/admin/edit-product', {
        pageTitle: 'Edit Product',
        path: '/admin/edit-product',
        editing: editMode,
        product: product
    });
}

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll();
    console.log(products);
    res.render('views/admin/products', {
        prods: products,
        pageTitle: 'Admin Products',
        path: '/admin/products'
    });
}