## Descrição
Projeto de exemplo mostrando como rodar uma API Node.js conectada a um PostgreSQL usando Docker e docker-compose. Ideal para portfólio, demonstrando conhecimentos em JavaScript, Linux e containerização.

## Tecnologias

Node.js / Express

PostgreSQL

Docker / Docker Compose

Linux (WSL 2 ou terminal)

## Estrutura do projeto
├─ backend/
│ ├─ package.json
│ ├─ index.js
│ └─ Dockerfile
└─ docker-compose.yml

## Como rodar
## Pré-requisitos

Docker Desktop instalado e WSL Integration ativa para sua distro.

Terminal Linux (WSL 2 ou similar).

## Passos

# Clone o repositório:
git clone https://github.com/SEU_USUARIO/docker-api-demo.git

cd docker-api-demo

# Suba os containers:
docker compose up --build

# Acesse a API:

Abra o navegador ou use curl: http://localhost:3000

Resposta esperada: API funcionando! Hora do servidor: 2025-08-26 18:00:00