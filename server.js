var express = require("express");
// /usr/local/mysql/bin/mysql -uroot -p had to use this command instead of mysql

var expressHandlebars = require("express-handlebars");

var burgerapp = express();

var PORT = process.env.PORT || 8080;

burgerapp.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
burgerapp.set("view engine", "handlebars");

burgerapp.use(express.urlencoded({ extended: true }));
burgerapp.use(express.json());

burgerapp.use(express.static('public'))

var routes = require("./controllers/burgers_controller.js")
burgerapp.use(routes);

burgerapp.listen(PORT, function(err) {
    if (err) throw err;
    console.log("Server listening at http://localhost:" + PORT);
})