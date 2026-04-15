import express from "express";
import authRoutes from "./routes/authRoutes";
import scheduleRoutes from "./routes/scheduleRoutes";
import cors from "cors";
import taskRoutes from "./routes/taskRoutes";

const app = express();

// 🔥 PRIMEIRO: middlewares globais
app.use(cors());
app.use(express.json());

// 🔥 DEPOIS: rotas
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);
app.use("/schedules", scheduleRoutes);

export default app;