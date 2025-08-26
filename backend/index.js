const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  host: 'db',
  user: 'postgres',
  password: 'postgres',
  database: 'postgres',
  port: 5432
});

app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Olá mundo! Hora do servidor: ${result.rows[0].now}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
