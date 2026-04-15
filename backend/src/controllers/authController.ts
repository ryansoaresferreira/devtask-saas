import { Request, Response } from "express";
import * as authService from "../services/authService";

export const registerController = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // 🔍 Validação
    if (!email || !password) {
      return res.status(400).json({
        error: "Email e senha são obrigatórios",
      });
    }

    const user = await authService.register(name, email, password);

    return res.status(201).json({
      message: "Usuário criado com sucesso",
      user,
    });
  } catch (err: any) {
    console.error("Erro no register:", err);

    return res.status(400).json({
      error: err.message || "Erro ao registrar usuário",
    });
  }
};

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // 🔍 Validação
    if (!email || !password) {
      return res.status(400).json({
        error: "Email e senha são obrigatórios",
      });
    }

    const { user, token } = await authService.login(email, password);

    return res.json({
      message: "Login realizado com sucesso",
      user,
      token,
    });
  } catch (err: any) {
    console.error("Erro no login:", err);

    return res.status(400).json({
      error: err.message || "Erro ao fazer login",
    });
  }
};