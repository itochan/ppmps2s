'use strict';

function saveOptions() {
  var webhookUrl = document.getElementById('webhookUrl').value;
  chrome.storage.sync.set({
    webhookUrl: webhookUrl
  }, function() {
    window.close();
  });
}

function restoreOptions() {
  chrome.storage.sync.get({
    webhookUrl: ''
  }, function(items) {
    document.getElementById('webhookUrl').value = items.webhookUrl;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
