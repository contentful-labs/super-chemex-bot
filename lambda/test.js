'use strict';

const handler = require('./index').handler

const event = {
    serialNumber: process.env.CHEMEX_BUTTON_SERIAL,
    batteryVoltage: '1577mV',
    clickType: 'SINGLE'
}

handler(event)
