const express = require('express');

const path = require('path');

const app = express();

app.get('/test', (req, res) => {
  res.send('Backend is here at your disposal!')
})

const port = process.env.PORT || 8080;

app.listen(port);

console.log('App is listening on port: ' + port);