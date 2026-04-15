import prisma from "../config/prisma";
import { sendToN8n } from "./notificationService"; // 👈 IMPORTANTE

export const getSchedules = async (userId: number) => {
  return await prisma.schedule.findMany({
    where: { userId },
    orderBy: { date: "asc" },
  });
};

export const createSchedule = async (
  client: string,
  service: string,
  date: Date,
  userId: number
) => {
  // ✅ salva no banco
  const schedule = await prisma.schedule.create({
    data: {
      client,
      service,
      date,
      userId,
    },
  });

  await sendToN8n({
    client,
    service,
    date,
    type: "new_schedule"
  });
};