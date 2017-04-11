'use strict';

const WebClient = require('@slack/client').WebClient
const token = process.env.SLACK_API_TOKEN
const web = new WebClient(token)
const contentful = require('./contentful')
const MESSAGE = 'here is a fresh chemex'

const contentfulConfig = contentful.getConfig()

function sendSlackMessage(event) {
  contentfulConfig.then(function (config) {
    web.chat.postMessage('slack-tests', MESSAGE, function(err, res) {
      if (err) {
        console.log('Error:', err)
      } else {
        console.log('Message sent: ', res)
      }
    })
  })
}

module.exports = sendSlackMessage
