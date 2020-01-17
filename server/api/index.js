const express = require('express');
const app = express();
const path = require('path');
const staticPath = path.join(__dirname, '../public/');
const db = require('./queries');
const port = 5000;

app.use(express.json());
app.use(express.static(staticPath));

app.get('/', (req, res) => console.log(staticPath));

app.listen(port, () => console.log(`Listening on port ${port}`));
