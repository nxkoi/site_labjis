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
```

## Publicação no GitHub
```bash
git remote add origin <SEU_REPO_GITHUB>
git add .
git commit -m "chore: bootstrap projeto labjis"
git push -u origin main
```

## Estrutura
- `src/app`: páginas (App Router)
- `src/components`: componentes
- `src/content`: conteúdo (mdx/json/bib)
- `src/lib`: utilidades
- `public`: estáticos (imagens, PDFs)
- `scripts`: automações
