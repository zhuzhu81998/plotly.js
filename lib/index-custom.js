'use strict';

var Plotly = require('./core');

Plotly.register([
    // traces
    require('./histogram2dcontour'),
    require('./scattergl'),
    require('./indicator'),

    // components
    require('./calendars'),
]);

module.exports = Plotly;
