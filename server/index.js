const express = require('express');
const app = express();
const path = require('path');
const staticPath = path.join(__dirname, 'public');
const db = require('./api/queries');
const port = 3001;

app.use(express.static(staticPath));
app.use(express.json());

app.get('/', (req, res) => {
  console.log(staticPath);
});

app.get('/api/users', db.getUsers);
app.get('/api/users/:id', db.getUserById);
app.post('/api/users', db.createUser);
app.put('/api/users/:id', db.updateUser);
app.delete('/api/users/:id', db.deleteUser);

app.listen(port, () => console.log(`Listening on port ${port}`));
