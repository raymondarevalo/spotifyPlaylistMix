var express = require('express');
var app = express();
var spotifyWebAPI = require('spotify-web-api-node');

var spotifyApi = new spotifyWebAPI({
    clientId : /*SECRET */,
    clientSecret : /*SECRET*/
});


app.get('/', function(req, res) {
    res.send(getElvisAlbums());
    //res.send("HELLO");
});

app.listen(3000);


// Get Elvis' albums 
function getElvisAlbums() {
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE')
   .then(function(data) {
       console.log('Artist albums', data.body);
         }, function(err) {
             console.error(err);
               });
}

