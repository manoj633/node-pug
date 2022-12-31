const express = require("express");

const router = express.Router();

router.post("/product", (req, res, next) => {
  console.log("Request body:", req.body);
  res.send("<h1>Data sent</h1>");
});

router.get("/product", (req, res, next) => {
  res.send("<h1>Get entered</h1>");
});

router.get("/", (req, res, next) => {
  res.send(
    '<form action="/product" method="post"> <input type="text" name="title"/><button type="submit">Submit</button></form>'
  );
});

module.exports = router;
