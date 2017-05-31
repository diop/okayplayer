const express = require('express')
const albums = require('./databases/albums.json')
const artists = require('./databases/artists.json')
const songs = require('./databases/songs.json')
const router = express.Router()
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index', {artists: artists, albums: albums})
})

app.get('/albums', function (req, res) {
  res.render('albums', {albums: albums, artists: artists, songs:songs})
})

app.get('/albums/:album_id', function (req, res) {
  res.render('albums', {albums: albums})
})

app.get('/artists', function (req, res) {
  res.render('artists', {artists: artists})
})

app.get('/artists/:artist_id', function (req, res) {
   res.send('artists', {artists: artists})
})

app.get('/songs', function (req, res) {
  res.render('songs', {songs: songs})
})

app.get('/songs/:id', function (req, res) {
  res.send('songs')
})

app.get('*', function (req, res) {
  res.send("You're lost homie!")
})

app.listen(3000, function () {
  console.log('Okayplayer listening on port 3000!')
})
