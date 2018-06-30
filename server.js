const path = require('path');
const express = require('express');
const app = express();

const PORT = 8080;
const HOST = '0.0.0.0';

app.use(express.static('dist'));

app.get('/', (req, res) => {
  const indexFilePath = path.resolve(__dirname, 'dist', 'index.html');
  console.log(indexFilePath);
  res.sendfile(indexFilePath)
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);