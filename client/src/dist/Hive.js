"use strict";
exports.__esModule = true;
// Let's import React, our styles and React Async
var react_1 = require("react");
require("./App.css");
var react_async_1 = require("react-async");
// We'll request user data from this API
var loadUsers = function () {
    return fetch("https://127.0.0.1:3001/users")
        .then(function (res) { return (res.ok ? res : Promise.reject(res)); })
        .then(function (res) { return res.json(); });
};
// Our component
function App() {
    return (react_1["default"].createElement("div", { className: "container" },
        react_1["default"].createElement(react_async_1["default"], { promiseFn: loadUsers }, function (_a) {
            var data = _a.data, err = _a.err, isLoading = _a.isLoading;
            if (isLoading)
                return "Loading...";
            if (err)
                return "Something went wrong: " + err.message;
            if (data)
                return (react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h2", null, "React Async - Random Users")),
                    data.map(function (user) { return (react_1["default"].createElement("div", { key: user.blockID, className: "row" })); })));
        })));
}
exports["default"] = App;
