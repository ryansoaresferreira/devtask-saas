# 🚀 DevTask SaaS

Backend de um sistema de gestão de tarefas e agendamentos com automação integrada via n8n.

---

## 💡 Sobre o projeto

O DevTask é um backend que simula um SaaS real utilizado por empresas para:

- organizar tarefas
- gerenciar agendamentos
- automatizar processos

---

## 🔥 Funcionalidades

- 🔐 Autenticação com JWT
- 📋 CRUD de tarefas por usuário
- 📅 Sistema de agendamentos
- 🔗 Integração com n8n (webhooks)
- 🗄️ Banco PostgreSQL (Neon)

---

## ⚙️ Automação com n8n

Sempre que um agendamento é criado, o sistema envia automaticamente os dados para o n8n:

```json
{
  "client": "Maria",
  "service": "Consulta",
  "date": "2026-04-10T22:00:00.000Z"
}


Isso permite criar automações como:

⏰ Lembretes automáticos
📲 Integração com WhatsApp
🔁 Fluxos personalizados
🧠 Tecnologias
Node.js
TypeScript
Express
Prisma ORM
PostgreSQL
Axios
n8n
📁 Estrutura
backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── services/
│   ├── routes/
│   ├── middlewares/
│   ├── app.ts
│   └── server.ts
├── prisma/
🚀 Como rodar
cd backend
npm install
npx prisma migrate dev
npm run dev
🚧 Próximos passos
🎨 Frontend em React
📲 Integração com WhatsApp
🤖 Automação com IA
☁️ Deploy
