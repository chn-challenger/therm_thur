describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('starts at 20 degrees', function() {
      expect(thermostat.temperature)
    });
  // it('does not start at 10 degrees', function() {
  //   expect(thermostat.temperature()).not.toEqual(10);
  // });

  // it('increases the temp with the up button')
  // });

  // it('decreases the temp with the down button')
  // });

  // it('the minimum temperature is 10 degrees')
  // });

  // it('when power saving mode is on, the maximum temperature is 25 degrees')
  // });

  // it('when power saving mode is off, the maximum temperature is 32 degrees')
  // });

  // it('power saving mode is on by default')
  // });

  // it('you can reset the temperature to 20 by hitting the reset button')
  // });

  // it('colours the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red')
  // });
});
