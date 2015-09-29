describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('does not start at 10 degrees', function() {
    expect(thermostat.temperature()).not.toEqual(15);
  });

  it('increases the temp with the up button')

  });


decreases the temp with the down button
The minimum temperature is 10 degrees
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
Power saving mode is on by default
You can reset the temperature to 20 by hitting the reset button
The thermostat should colour the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red




)};