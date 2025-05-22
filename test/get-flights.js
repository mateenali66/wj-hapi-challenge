const tap = require('tap');
const { getFlights } = require('../get-flights');

tap.ok(getFlights(2));
tap.match(getFlights(12), 'flight not found');

tap.ok(getFlights());
