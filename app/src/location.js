var currentPosition;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    $('#demo').text('Geolocation is not supported by this browser.');
  }
}

function showPosition(position) {
  currentPosition = position;
  // console.log(currentPosition);
}

console.log('before');
getLocation();
console.log(currentPosition);
console.log('after');

var currentLat = currentPosition.coords.latitude;
var currentLong = currentPosition.coords.longitude;

console.log(currentLat);
console.log(currentLong);

function initMap() {
  var myLatLng = {lat: currentLat, lng: currentLong};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
};
