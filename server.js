const express = require('express')
const router = express.Router()
const app = express()

app.get('/', function (req, res) {
  res.send("Okayplayer!")
  res.send("Main view is rendered at route /")
  res.send("Main view shows a list of all artists")
  res.send("Okayplayer!")
})

app.get('/albums', function (req, res) {
  res.send('Albums view is rendered at route /albums')
  res.send('Albums view shows a list of all albums')
})

app.get('/albums/:album_id', function (req, res) {
  res.send('Individual album view file is called views/album.ejs')
  res.send('Individual album view shows a list of the album’s songs ')
})

app.get('/artists', function (req, res) {
  res.send('renders artists page')
})

app.get('/artists/:artist_id', function (req, res) {
  res.send('Individual artist view is rendered at route /artists/:artist_id')
  res.send('Individual artist view shows a list of the artist’s albums')

})

app.get('/songs', function (req, res) {
  res.send('Songs view is rendered at route /songs')
})

app.get('/songs/:id', function (req, res) {
  res.send('renders songs page')
})

app.get('*', function (req, res) {
  res.send("You're lost homie!")
})

app.listen(3000, function () {
  console.log('Okayplayer listening on port 3000!')
})
