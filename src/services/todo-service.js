"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoById = exports.deleteTodo = exports.createTodo = exports.getAllTodos = void 0;
var prisma_1 = require("../config/prisma");
var createError_1 = require("../utils/createError");
var getAllTodos = function () {
    return prisma_1.default.todo.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
};
exports.getAllTodos = getAllTodos;
var createTodo = function (todo) {
    return prisma_1.default.todo.create({
        data: todo,
    });
};
exports.createTodo = createTodo;
var deleteTodo = function (id) {
    if (isNaN(Number(id))) {
        return (0, createError_1.default)("Id should be number", 400);
    }
    return prisma_1.default.todo.delete({
        where: {
            id: Number(id),
        },
    });
};
exports.deleteTodo = deleteTodo;
var getTodoById = function (id) {
    if (isNaN(Number(id))) {
        return (0, createError_1.default)("Id should be number", 400);
    }
    return prisma_1.default.todo.findUnique({
        where: {
            id: Number(id),
        },
    });
};
exports.getTodoById = getTodoById;
