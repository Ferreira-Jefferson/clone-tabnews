# clone-tabnews

Projeto criado para estudos do curso.dev

# Docker Commands

- _docker ps_ - Lista os processos que estão rodando
- _docker ps --all_ | _docker ps -a_ - Lista todos os processos mesmo os que não estão rodando
- _docker logs [CONTAINER-NAME]_ - Retorna os logs atuais ou os últimos antes do container cair
- _docker compose up_ - Sobe o container do docker
- _docker compose down_ - Derruba o container do docker de maneira Graceful (graciosa)
- _docker compose up --detach_ | _docker compose up -d_ - Sobe o container em "segundo plano"
- _docker compose up --force-recreate_ - Recria a imagem docker, mas ainda assim pode ser necessário usar o _down_ e _up_
- _docker compose --file [PATH-DOCKER-FILE]_ | _docker compose -f [PATH-DOCKER-FILE]_ - Expecifica o caminho do docker file, necessário quando este não está na raiz do projeto
  - _docker compose -f infra/compose.yaml up -d_ | - _docker compose -f infra/compose.yaml down_ - Os comandos de ação devem ser expecificados após o caminho do arquivo docker

# Postgres

- _sudo apt install postgresql-client_ - Instala o client do postgres
- _psql_ - Comando para executar o client do postgress
  - _psql --host=localhost --username=postgres --port=5432_ - Comando completo para rodar o banco do projeto
- _\q_ - Sai da conexão do postgres (sai da linha de comando do postgres)
