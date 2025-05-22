const flights = require('./data/flights');

// const getOneFlight = function (oneFlight) {
//   for (let x in flights) {
//     if (flights[x].flightNumber === oneFlight.toString()) {
//       return flights[x];
//     }
//   }

//   return 'flight not found';
// };

const getFlights = function (oneFlight) {
  if (oneFlight) {
    return getOneFlight(oneFlight);
  }

  return flights;
};

module.exports = { getFlights };
