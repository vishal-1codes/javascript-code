2-airplane.js

module.exports = {
  myAirplane: "CloudJet", 
  displayAirplane: function() {
    return this.myAirplane;
  }
};

2-mission_controle
const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());
