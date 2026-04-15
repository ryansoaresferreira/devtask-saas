import { Router } from "express";
import {
  listSchedules,
  createScheduleController,
} from "../controllers/scheduleController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.get("/", authMiddleware, listSchedules);
router.post("/", authMiddleware, createScheduleController);

export default router;