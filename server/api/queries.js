const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'dev',
  host: 'localhost',
  database: 'pagila',
  password: 'dev',
  port: 5432
});

const getActors = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  })
}

const getActorById = (req, res) => {
  const id = parseInt(req.params.id);
}
