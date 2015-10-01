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
      for (i = thermostat.temperature; i > thermostat.minTemp; i--) {
        thermostat.downTemp();
      }
      expect(function(){thermostat.downTemp()}).toThrow("Minimum temperature is reached")
    });


    it('when power saving mode is on, maximum temperature is 25', function() {
      thermostat.powerSaving(true);
      for (i = thermostat.temperature; i < thermostat.maxTemp ; i++) {
        thermostat.upTemp();
      }
      expect(function(){thermostat.upTemp()}).toThrow('Maximum temperature reached')
    });

    it('when power saving mode is off, maximum temperature is 32', function() {
      thermostat.powerSaving(false);
      for (i = thermostat.temperature; i < thermostat.maxTemp; i++) {
        thermostat.upTemp();
      }
      expect(function(){thermostat.upTemp()}).toThrow('Maximum temperature reached')
    });
    it('power saving mode is on by default', function() {
      expect(thermostat.maxTemp).toEqual(25);
    });
  });
  describe('reset temperature', function() {
    it('Resets the temperature to 20 when button pressed', function() {
      thermostat.upTemp();
      thermostat.resetTemp();
      expect(thermostat.temperature).toEqual(20);
    });
  });
  describe('it gives value based on temperature', function() {
    it('Returns green if temperature is under 18', function() {
      for (i = thermostat.temperature; i > 17; i--) {
        thermostat.downTemp();
      }
      expect(thermostat.efficency()).toEqual('#9ACD32');
    });

    it('Returns yellow if temperature is under 25', function() {
      for (i = thermostat.temperature; i < 24; i++) {
        thermostat.upTemp();
      }
      expect(thermostat.efficency()).toEqual('#FFD700');
    });

    it('Returns red if temperature is over 25', function() {
      for (i = thermostat.temperature; i < 25; i++) {
        thermostat.upTemp();
      }
      expect(thermostat.efficency()).toEqual('#FF4500');
    });
  });
});
