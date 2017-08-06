const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require("path");

var PORT = process.env.PORT || 8000;

app.use(express.static(__dirname + '/app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
