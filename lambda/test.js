'use strict';

const handler = require('./index').handler

const event = {
    serialNumber: 'G030MD0293769WPT',
    batteryVoltage: '1577mV',
    clickType: 'SINGLE'
}

handler(event)
