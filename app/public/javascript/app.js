var thermostat = new Thermostat;

var showTemp = function() {
  var colourefficent = thermostat.efficency();
  $('#temp').text(thermostat.temperature)
  .css({
    color: colourefficent,
  });
};

$(document).ready(function() {
  showTemp();

  $('#tempUp').click(function() {
    thermostat.upTemp();
    showTemp();
  });

  $('#tempDown').click(function() {
    thermostat.downTemp();
    showTemp();
  });

  $('#myCheckbox').change(function() {
    if (thermostat.maxTemp === 25) {
      thermostat.powerSaving(false);
    } else {
      thermostat.powerSaving(true);
      if (thermostat.temperature > 25) {
        thermostat.temperature = 25;
        showTemp();
      }
    }
  });

  $('#reset').click(function() {
    thermostat.resetTemp();
    showTemp();
  });

  var urlCity = window.location.search.replace('?city=', '').replace('&Submit=Submit', '') || 'london';
  var weathertemp;
  var weathername;

  $.ajax('http://api.openweathermap.org/data/2.5/weather?q=' + urlCity, {
    success: function(data) {
      // console.log(data);
      weathertemp = data.main.temp;
      weathername = data.name;
      console.log(weathertemp);
      console.log(weathername);
      $('#weather').html(weathertemp - 273.15 + weathername);
    }
  });
});
