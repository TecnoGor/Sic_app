const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'db_ipostel_2025',
  password: 'postgres',
  port: 5432,
});

// Ruta para obtener los datos de la base de datos
app.get('/api/data', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT codper, cedper, nomper, apeper, carantper FROM sno_personal');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al obtener los datos');
  }
});

app.get('/empleado/:ced', async (req, res) => {
  const { ced } = req.params;

  try {
    const result = await pool.query('SELECT * FROM sno_personal WHERE cedper = $1', [ced]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Empleado no encontrado');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al consultar la base de datos.');
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});