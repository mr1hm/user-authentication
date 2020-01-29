const Pool = require('pg').Pool;
const conn = require('./db_conn');

const getUsers = (req, res) => {
  conn.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  })
}

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  conn.query('SELECT * FROM users WHERE id = $1', [id], (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  })
}

const createUser = (req, res) => {
  const { name, email } = req.body;
  conn.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (err, results) => {
    if (err) throw err;
    res.status(201).send(`User added with ID: ${results.insertId}`);
  })
}

const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  conn.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id], (err, results) => {
    if (err) throw err;
    res.status(200).send(`User modified with ID: ${id}`);
  })
}

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  conn.query('DELETE FROM users WHERE id = $1', [id], (err, results) => {
    if (err) throw err;
    res.status(200).send(`User deleted with ID: ${id}`);
  })
}

const googleAuthFail = (req, res) => res.redirect('/');

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  googleAuthFail
}
