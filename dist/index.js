"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Use ES6+ syntax such as arrow functions

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('Hello, Babel!');
});
app.listen(port, function () {
  return console.log("Server listening on port ".concat(port, "!"));
});