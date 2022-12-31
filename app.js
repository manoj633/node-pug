const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./routes/admin");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", routes);

app.use((req, res, next) => {
  res.send("<h1>Not found!</h1>");
});

app.listen(3000);
