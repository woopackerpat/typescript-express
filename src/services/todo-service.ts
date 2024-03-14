import { Prisma } from "@prisma/client";
import prisma from "../config/prisma";
import createError from "../utils/createError";

export const getAllTodos = () => {
  return prisma.todo.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTodo = (todo: Prisma.TodoCreateInput) => {
  return prisma.todo.create({
    data: todo,
  });
};

export const deleteTodo = (id: string) => {
  if (isNaN(Number(id))) {
    return createError("Id should be number", 400);
  }

  return prisma.todo.delete({
    where: {
      id: Number(id),
    },
  });
};

export const getTodoById = (id: string) => {
  if (isNaN(Number(id))) {
    return createError("Id should be number", 400);
  }

  return prisma.todo.findUnique({
    where: {
      id: Number(id),
    },
  });
};
