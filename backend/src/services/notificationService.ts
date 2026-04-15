import axios from "axios";

export const sendToN8n = async (data: any) => {
  try {
    await axios.post("http://localhost:5678/webhook-test/agendamento", data);
  } catch (error) {
    console.error("Erro ao enviar para n8n:", error);
  }
};