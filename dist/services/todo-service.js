"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodoById = exports.deleteTodo = exports.createTodo = exports.getAllTodos = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const createError_1 = __importDefault(require("../utils/createError"));
const getAllTodos = () => {
    return prisma_1.default.todo.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
};
exports.getAllTodos = getAllTodos;
const createTodo = (todo) => {
    return prisma_1.default.todo.create({
        data: todo,
    });
};
exports.createTodo = createTodo;
const deleteTodo = (id) => {
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
const getTodoById = (id) => {
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
