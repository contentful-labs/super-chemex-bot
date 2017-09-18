'use strict';

const WebClient = require('@slack/client').WebClient

const token = process.env.SLACK_API_TOKEN
const web = new WebClient(token)

function send(channel, message) {
  web.chat.postMessage(channel, message, function(err, res) {
    if (err) {
      console.log('Error:', err)
    } else {
      console.log('Message sent: ', res)
    }
  })
}

module.exports = {
  send
}
