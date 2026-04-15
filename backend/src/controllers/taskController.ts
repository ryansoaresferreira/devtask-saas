import { Response } from "express";
import * as taskService from "../services/taskService";
import { AuthRequest } from "../middlewares/authMiddleware";

// 📄 LISTAR
export const listTasks = async (req: AuthRequest, res: Response) => {
  const tasks = await taskService.getTasks(req.userId!);
  res.json(tasks);
};

// ➕ CRIAR
export const createTaskController = async (
  req: AuthRequest,
  res: Response
) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Título é obrigatório" });
  }

  const task = await taskService.createTask(title, req.userId!);
  res.status(201).json(task);
};

// ✏️ ATUALIZAR
export const updateTaskController = async (
  req: AuthRequest,
  res: Response
) => {
  const { id } = req.params;
  const { completed } = req.body;

  const task = await taskService.updateTask(
    Number(id),
    completed,
    req.userId!
  );

  res.json(task);
};

// ❌ DELETAR
export const deleteTaskController = async (
  req: AuthRequest,
  res: Response
) => {
  const { id } = req.params;

  await taskService.deleteTask(Number(id), req.userId!);

  res.json({ message: "Task deletada com sucesso" });
};