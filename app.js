const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.post("/product", (req, res, next) => {
  console.log("Request body:", req.body);
  res.send("<h1>Data sent</h1>");
});

app.get("/product", (req, res, next) => {
  res.send("<h1>Get entered</h1>");
});

app.use("/", (req, res, next) => {
  res.send(
    '<form action="/product" method="post"> <input type="text" name="title"/><button type="submit">Submit</button></form>'
  );
});
app.listen(3000);
