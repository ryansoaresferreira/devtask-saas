import { Response } from "express";
import * as scheduleService from "../services/scheduleService";
import { AuthRequest } from "../middlewares/authMiddleware";

export const listSchedules = async (req: AuthRequest, res: Response) => {
  const schedules = await scheduleService.getSchedules(req.userId!);
  res.json(schedules);
};

export const createScheduleController = async (
  req: AuthRequest,
  res: Response
) => {
  const { client, service, date } = req.body;

  if (!client || !service || !date) {
    return res.status(400).json({ error: "Dados obrigatórios faltando" });
  }

  const schedule = await scheduleService.createSchedule(
    client,
    service,
    new Date(date),
    req.userId!
  );

  res.status(201).json(schedule);
};