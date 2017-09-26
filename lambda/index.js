'use strict';

const contentful = require('./contentful')
const slack = require('./slack')

exports.handler = (event) => {
  contentful.getAll().then(function (data) {
    const {channel} = data.configuration[event.serialNumber]
    const randomMessageIdx = Math.floor(Math.random() * data.message.length)
    const {message} = data.message[randomMessageIdx]

    return slack.send(channel, message)
  })
  .then(function(res) {
    console.log('Message sent: ', res)
  })
  .catch(function (error) {
    console.error(error);
  })
}
