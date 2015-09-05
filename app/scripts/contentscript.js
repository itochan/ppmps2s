'use strict';

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
  console.log('🎵  ' + trackToString(music));

  chrome.storage.sync.get({
    webhookUrl: ''
  }, function(items) {
    var webhookUrl = items.webhookUrl;
    var username = 'Playing ' + music.artist;

    if (webhookUrl == '') return;

    postToSlack(webhookUrl, username, messageForSlack(music));
  });
}

function trackToString(music) {
  return music.album + ' - ' + music.title;
}

function messageForSlack(music) {
  var album = music.album;
  var title = music.title;
  var message = album + ' - ' + title;

  return '🎵  ' + message;
}

function postToSlack(webhookUrl, username, message) {
  return fetch(webhookUrl, {
    method: 'post',
    body: JSON.stringify({
      text: message,
      username: username
    })
  });
}
