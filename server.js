const express = require('express')
const helpers = require('express-helpers')
const albums = require('./databases/albums.json')
const artists = require('./databases/artists.json')
const songs = require('./databases/songs.json')
const router = express.Router()
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
helpers(app)

app.get('/', function (req, res) {
  res.render('index', {artists: artists, albums: albums, songs: songs})
})

app.get('/albums', function (req, res) {
  res.render('albums', {albums: albums, artists: artists, songs: songs})
})

app.get('/albums/:id', function (req, res) {
    const album = albums.filter((obj) => {
        return obj.id == req.params.id
    })[0]

  res.render('album-view', {album: album.title, year: album.year})
})

app.get('/artists', function (req, res) {
  res.render('index', {artists: artists})
})

app.get('/artists/:id', function (req, res) {
    const id = req.params.id
   res.render('artists', {albums: albums, artists: artists, id: id})
})

app.get('/songs', function (req, res) {
  res.render('songs', {albums: albums, artists: artists, songs:songs})
})

app.get('/songs/:id', function (req, res) {
  res.render('songs')
})

app.get('*', function (req, res) {
  res.send("You're lost homie!")
})

app.listen(3000, function () {
  console.log('Okayplayer listening on port 3000!')
})
