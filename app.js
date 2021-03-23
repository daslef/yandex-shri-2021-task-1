const path = require('path');
const fs = require('fs');

const f = fs.readFileSync(path.resolve(__dirname, 'data.json'));
const data = JSON.parse(f);

const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/data/:id', (req, res) => {
  const id = req.params.id;
  res.json(data[id]);
})

app.listen(8080, () => {
  console.log(`Example app listening at http://localhost:8080`)
})
