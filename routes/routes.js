const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const router = express.Router();

router.post("/product", (req, res, next) => {
  console.log("Request body:", req.body);
  res.send("<h1>Data sent</h1>");
});

router.get("/product", (req, res, next) => {
  res.send("<h1>Get entered</h1>");
});

module.exports = router;
