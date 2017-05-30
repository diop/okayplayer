const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send("Okayplayer!")
})

app.get('/albums', function (req, res) {
  res.send('albums')
})

app.get('/artists', function (req, res) {
  res.send('artists')
})

app.get('/songs', function (req, res) {
  res.send('songs')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
