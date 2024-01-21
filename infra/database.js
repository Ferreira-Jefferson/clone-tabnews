import { Client } from "pg";

async function connect() {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
  });
  await client.connect();
  return client;
}

async function query(queryObject) {
  const client = await connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

export default {
  query,
};
