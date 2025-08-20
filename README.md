# Site do Grupo (Labjis)

Stack: Next.js (App Router) + TypeScript + Tailwind CSS.  
Empacotado com Docker (produção) e CI no GitHub Actions.

## Rodar local (sem Docker)
1. Instale dependências: `npm install`
2. Dev: `npm run dev` (http://localhost:3000)

## Produção com Docker
```bash
docker compose up --build
# App em http://localhost:3000
