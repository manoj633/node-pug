const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const adminRoutes = require("../routes/admin");

const router = express.Router();
const products = adminRoutes.products;

router.get("/", (req, res, next) => {
  console.log(products);
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

exports.routes = router;
