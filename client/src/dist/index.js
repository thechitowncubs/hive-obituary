"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
require("./index.css");
var serviceWorker = require("./serviceWorker");
var Hive_1 = require("./Hive");
react_dom_1["default"].render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(Hive_1["default"], null)), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
