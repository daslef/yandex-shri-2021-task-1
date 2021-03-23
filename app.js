const path = require('path')
const fs = require('fs');

const f = fs.readFileSync(path.resolve(__dirname, 'data.json'));
const data = JSON.parse(f);

const express = require('express')
const app = express()

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/api/data/:id', (req, res) => {
  const id = req.params.id
  console.log(data[id])
  res.json(data[id]);
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})



// ?slide=1 — переключение слайдов с 1 по 11, 1 соответствует индексу 0 в массиве слайдов в файле data.json;
// &theme=light — тема, light или dark, без параметра шаблоны должны рендериться в тёмной теме.