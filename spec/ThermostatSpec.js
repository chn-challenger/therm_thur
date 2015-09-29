describe('Thermostat', function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('temperature', function() {
    it('starts at 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  it('does not start at 10 degrees', function() {
    expect(thermostat.temperature).not.toEqual(10);
  });

  describe('adjust the temperature', function() {
    it('increases the temp with the up button', function() {
      thermostat.upTemp();
      expect(thermostat.temperature).toEqual(21);
    });

    it('decreases the temp with the down button', function() {
      thermostat.downTemp();
      expect(thermostat.temperature).toEqual(19);
    });

    it('the minimum temperature is 10 degrees', function() {
      for (i = thermostat.temperature; i >= thermostat.minTemp; i--) {
        thermostat.downTemp();
      }
      expect(function(){thermostat.downTemp()}).toThrow("Minimum temperature is 10 C")
    });
  });

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
