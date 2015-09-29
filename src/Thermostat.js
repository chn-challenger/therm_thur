function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
};

Thermostat.prototype.upTemp = function() {
  this.temperature += 1;
};

Thermostat.prototype.downTemp = function() {
  if (this.temperature < 10) {
    throw ('Minimum temperature is 10 C');
  };
  this.temperature -= 1;
};
