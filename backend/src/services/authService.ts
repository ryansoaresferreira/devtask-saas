import prisma from "../config/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;

// 📝 REGISTER
export const register = async (
  name: string,
  email: string,
  password: string
) => {
  // Verifica se já existe usuário
  const userExists = await prisma.user.findUnique({
    where: { email },
  });

  if (userExists) {
    throw new Error("Usuário já existe");
  }

  // Criptografa a senha
  const hashedPassword = await bcrypt.hash(password, 10);

  // Cria usuário
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // Remove senha da resposta
  const { password: _, ...userWithoutPassword } = user;

  return userWithoutPassword;
};

// 🔐 LOGIN
export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  // Verifica senha
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Senha inválida");
  }

  // Gera token
  const token = jwt.sign(
    { id: user.id },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  // Remove senha da resposta
  const { password: _, ...userWithoutPassword } = user;

  return {
    user: userWithoutPassword,
    token,
  };
};