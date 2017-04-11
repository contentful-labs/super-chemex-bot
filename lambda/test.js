'use strict';

const slack = require('./slack')

const event = {
    serialNumber: 'G030MD0293769WPT',
    batteryVoltage: '1577mV',
    clickType: 'SINGLE'
}

slack(event)