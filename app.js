const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const rootDir = require("./util/path");
const routes = require("./routes/routes");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, "public")));

app.use(routes);
app.use(adminRoutes.routes);
app.use(shopRoutes.routes);

app.use((req, res, next) => {
  res.send("<h1>Not found!</h1>");
});

app.listen(3000);
