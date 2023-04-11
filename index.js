const express = require('express');  
const app = express();
const server = require('http').Server(app);
const db = new (require('@replit/database'))();

app.use(express.static('public'));

app.get('/', res => {
  res.sendFile('index.html');
});

server.listen(3000);