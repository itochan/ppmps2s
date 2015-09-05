'use strict';

function saveOptions() {
  var webhookUrl = document.getElementById('webhookUrl').value;
  chrome.storage.sync.set({
    webhookUrl: webhookUrl
  }, function() {
    // Update status to let user know options were saved.
    // var status = document.getElementById('status');
    // status.textContent = 'Options saved.';
    // setTimeout(function() {
    //   status.textContent = '';
    // }, 750);
    window.close();
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restoreOptions() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    webhookUrl: ''
  }, function(items) {
    document.getElementById('webhookUrl').value = items.webhookUrl;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
