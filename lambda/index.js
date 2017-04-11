'use strict';

const slack = require('./slack')

exports.handler = (event, context, callback) => {
    slack(event)
}
