const InfiniteFlight = require('../InfiniteFlight');

InfiniteFlight.init(function() {
    InfiniteFlight.onMessage(function(msg) {
        console.log(msg);
    });
    console.log(InfiniteFlight.sendCmd('Commands.FlapsFullDown', []));
    console.log(InfiniteFlight.sendCmd('Commands.ParkingBrakes', []));
}, function() {
    throw new Error('Error Connecting to Infinite Flight');
});