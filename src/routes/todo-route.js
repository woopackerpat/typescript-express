"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var todo_controller_1 = require("../controllers/todo-controller");
var router = express_1.default.Router();
router.post("/", todo_controller_1.createTodo);
router.get("/", todo_controller_1.getTodos);
router.delete("/:todoId", todo_controller_1.deleteTodo);
exports.default = router;
