'use strict';

const WebClient = require('@slack/client').WebClient
const token = process.env.SLACK_API_TOKEN
const web = new WebClient(token)
const contentful = require('./contentful')
let contentfulConfig = contentful.getConfig()

function sendSlackMessage(event) {
  contentfulConfig.then(function (config) {
    const channel = config.configuration[event.serialNumber].channel
    const messageIdx = Math.floor(Math.random() * config.message.length)
    const message = config.message[messageIdx].message

    web.chat.postMessage(channel, message, function(err, res) {
      if (err) {
        console.log('Error:', err)
      } else {
        console.log('Message sent: ', res)
      }
    })
  })
}

module.exports = sendSlackMessage
