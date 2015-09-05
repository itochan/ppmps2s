'use strict';

console.log('\'Allo \'Allo! Content script');

var song = {};
var timer = setInterval(function() {
  var songNow = {};

  songNow.title = document.getElementById('player-song-title').innerText;
  songNow.artist = document.getElementById('player-artist').innerText;
  songNow.album = document.getElementsByClassName('player-album')[0].innerText;

  if (JSON.stringify(song) != JSON.stringify(songNow)) {
    song.title = songNow.title;
    song.artist = songNow.artist;
    song.album = songNow.album;

    notify(song);
  }
}, 1000);

function notify(music) {
  // alert('🎵  ' + trackToString(track));
  console.log('🎵  ' + trackToString(music));
  // postToSlack(messageForSlack(track, music), music, track);
}

// function messageForSlack(track, music) {
//   function link(text, url) {
//     return '<' + url + '|' + text + '>'
//   }
//
//   var trackStr = track.name
//
//   var url = music && music.trackViewUrl
//   var message = url ? link(trackStr, url) : trackStr
//
//   return '🎵  ' + message
// }

function trackToString(music) {
  return music.album + ' - ' + music.title;
}
