"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var notFoundHandler = function (req, res) {
    res.status(404).json({ message: "Resource not found on this server" });
};
exports.default = notFoundHandler;
