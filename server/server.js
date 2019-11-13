const path = require('path')
const express = require('express')
const request = require('superagent')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))


server.get('/cats', (req, res) => {
    request.get("https://cat-fact.herokuapp.com/facts")
    .then(apiRes => res.send(apiRes.body))
})

module.exports = server
