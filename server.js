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
  const id = parseInt(req.params.id);

  const albumDisplay = albums.filter(function(album) {
    return id === album.id
  })[0];
  albumDisplay.artist = artists.filter(function(artist) {
    return albumDisplay.artist_id === artist.id;
  })[0];
  albumDisplay.song = songs.filter(function(song) {
    return id === song.album_id
  })
  res.render('album-view', {albumDisplay})
})

app.get('/artists', function (req, res) {
  res.render('index', {artists: artists})
})

app.get('/artists/:id', function (req, res) {
    const id = req.params.id
   res.render('artists', {albums: albums, artists: artists, id: id, songs:songs})
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
