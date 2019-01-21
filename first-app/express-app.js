const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const rootPath = require("./utils/path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  //res.status(404).send("<h1>Not Found</h1>");
  res.sendFile(path.join(rootPath, "views", "404.html"));
});

app.listen(3000);
