const express = require("express");
const router = express.Router();
const path = require("path");
const rootPath = require('../utils/path');

router.get("/", (req, res, next) => {
//   res.send("<h1>Hello world from Express</h1>");
  res.sendFile(path.join(rootPath, "views", "shop.html"));
});

module.exports = router;
