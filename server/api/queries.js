const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'dev',
  host: 'localhost',
  database: 'test',
  password: 'lfz',
  port: 5432
});

const getUsers = (req, res) => {
  debugger;
  pool.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
    console.log(results);
    if (err) throw err;
    res.status(200).json(results.rows);
  })
}

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM users WHERE id = $1', [id], (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  })
}

module.exports = {
  getActors,
  getActorById
}
