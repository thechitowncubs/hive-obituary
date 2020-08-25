"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_cache_1 = require("react-cache");
var Fetcher = react_cache_1.unstable_createResource(function () {
    return fetch("http://127.0.0.1:3001/").then(function (r) { return r.json(); });
});
var List = function () {
    var data = Fetcher.read();
    return (react_1["default"].createElement("ul", null, data.map(function (item) { return (react_1["default"].createElement("li", { style: { listStyle: "none" }, key: item.id }, item.title)); })));
};
var App = function () { return (react_1["default"].createElement(react_1.Fragment, null,
    react_1["default"].createElement("h2", { style: { textAlign: "center" } }, "React: " + react_1["default"].version + " Demo"),
    react_1["default"].createElement(react_1.Suspense, { fallback: react_1["default"].createElement("div", null, "Loading...") },
        react_1["default"].createElement(List, null)))); };
var HiveApp = react_1.memo(App);
exports["default"] = HiveApp;
