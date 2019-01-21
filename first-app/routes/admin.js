const express = require("express");
const path = require("path");
const rootPath = require("../utils/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  /*  res.send(
    '<form action="/admin/add-product" method="POST"><input type="text" name="title"></input><button type="submit">Send</button></form>'
  ); */
  res.sendFile(path.join(rootPath, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
