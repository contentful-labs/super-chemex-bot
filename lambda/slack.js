'use strict';

const WebClient = require('@slack/client').WebClient

const token = process.env.SLACK_API_TOKEN
const web = new WebClient(token)

function send(channel, message) {
  return web.chat.postMessage(channel, message)
}

module.exports = {
  send
}
