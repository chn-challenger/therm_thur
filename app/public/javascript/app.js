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

  // console.log(urlCity);

  var urlBeg = 'http://api.openweathermap.org/data/2.5/weather?q={';
  var pathArray = window.location.search;
  var urlCity = pathArray.replace('?city=', '').replace('&Submit=Submit', '');
  var urlEnd = '}';
  var urlFull = urlBeg + urlCity + urlEnd;
  var weathertemp;
  var weathername;

  $.ajax(urlFull, {
    success: function(data) {
      // console.log(data);
      weathertemp = data.main.temp;
      weathername = data.name;
      console.log(weathertemp);
      console.log(weathername);
      $('#weather').html(data.main.temp - 273.15 + data.name);
    }
  });
});
