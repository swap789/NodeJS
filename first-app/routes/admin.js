const express = require("express");
const path = require("path");
const adminController = require('../controllers/admin');

const router = express.Router();

const products = [];
//admin/add-products => GET
router.get("/add-product", adminController.getAddProducts);

//admin/products => GET
router.get("/products", adminController.getProducts);

//admin/add-product => POST
router.post("/add-product", adminController.getPostProducts);

router.get("/edit-product/:productId", adminController.getEditProduct);

module.exports = router;
