import prisma from "../config/prisma";

export const getTasks = async (userId: number) => {
  return await prisma.task.findMany({
    where: { userId },
    orderBy: { id: "desc" },
  });
};

export const createTask = async (title: string, userId: number) => {
  return await prisma.task.create({
    data: {
      title,
      userId,
    },
  });
};

export const updateTask = async (
  id: number,
  completed: boolean,
  userId: number
) => {
  return await prisma.task.update({
    where: { id },
    data: { completed },
  });
};

export const deleteTask = async (id: number, userId: number) => {
  return await prisma.task.delete({
    where: { id },
  });
};