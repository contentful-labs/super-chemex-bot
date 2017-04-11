const contentful = require('contentful')
const token = process.env.CONTENTFUL_ACCESS_TOKEN

const client = contentful.createClient({
  space: 'uh6yazckojzf',
  accessToken: token
})

function getConfig () {
  return client.getEntries({limit: 1000}).then(function (entries) {
    return entries.items.reduce(function (acc, entry) {
      acc[entry.sys.contentType.sys.id].push(entry)
      return acc
    }, {message: [], configuration: []})
  }).then(function (config) {
    return {
      message: config.message.map(entry => {
        return {
          message: entry.fields.message
        }
      }),
      configuration: config.configuration.reduce((acc, entry) => {
        acc[entry.fields.deviceSerialNumber] = {
          channel: entry.fields.slackChannel
        }
        return acc
      }, {})
    }
  })
}

module.exports = {
  getConfig: getConfig
}
