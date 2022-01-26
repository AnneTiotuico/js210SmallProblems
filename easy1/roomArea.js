const rlSync = require('readline-sync');

let length = parseInt(rlSync.question('Enter the length of the room in meters:\n'), 10);
let width = parseInt(rlSync.question('Enter the length of the room in meters:\n'), 10);

const sqMeterToFeet = 10.7639;

let areaMeters = length * width;
let areaFeet = (length * width) * sqMeterToFeet;

console.log(`The area of the room is ${areaMeters.toFixed(2)} square meters (${areaFeet.toFixed(2)}).`);