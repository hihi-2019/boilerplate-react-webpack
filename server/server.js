const path = require('path')
const express = require('express')
const superagent = require('superagent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

server.get('/api/dogs', (req, res) => {
  superagent.get('http://shibe.online/api/shibes?count=10')
    .set('accept', 'json')
    .then(data => {
      res.json(JSON.parse(data.text))
    })
})

module.exports = server
