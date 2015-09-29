function Thermostat() {
  this.temperature = 20;
  this.minTemp = 10;
  this.maxTemp = 25;
};

Thermostat.prototype.upTemp = function() {
  if (this.temperature > this.maxTemp) {
    throw ('Exceeded maximum temperature');
  }
  this.temperature += 1;
};

Thermostat.prototype.downTemp = function() {
  if (this.temperature < 10) {
    throw ('Minimum temperature is 10 C');
  };
  this.temperature -= 1;
};

Thermostat.prototype.powerSaving = function(boolean) {
  if (boolean) {
    this.maxTemp = 25;
  } else {
    this.maxTemp = 32;
  }
};
