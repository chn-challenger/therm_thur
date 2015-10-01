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
  console.log(currentPosition);
}
