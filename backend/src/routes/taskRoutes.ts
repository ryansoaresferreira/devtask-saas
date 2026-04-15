import { Router } from "express";
import {
  listTasks,
  createTaskController,
  updateTaskController,
  deleteTaskController,
} from "../controllers/taskController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", authMiddleware, listTasks);
router.post("/", authMiddleware, createTaskController);
router.put("/:id", authMiddleware, updateTaskController);
router.delete("/:id", authMiddleware, deleteTaskController);

export default router;