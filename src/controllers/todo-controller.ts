import { Request, Response, NextFunction } from "express";
import * as todoService from "../services/todo-service";
import createError from "../utils/createError";

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title } = req.body;

    if (!title || typeof title !== "string") {
      return createError("Incorrect title", 400);
    }

    await todoService.createTodo({ title });

    res.json({ message: "Todo created" });
  } catch (err) {
    next(err);
  }
};

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json({ todos });
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { todoId } = req.params;

    const todo = await todoService.getTodoById(todoId);

    if (!todo) {
      return createError("Todo not found", 400);
    }

    await todoService.deleteTodo(todoId);

    res.json({ message: "Delete Todo" });
  } catch (err) {
    next(err);
  }
};
