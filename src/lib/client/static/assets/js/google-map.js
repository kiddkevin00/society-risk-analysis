var google;

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed-in you want the map to start at (always required)
    zoom: 15,

    // The latitude and longitude to center the map (always required)
    center: new google.maps.LatLng(24.1560539, 120.6803088),

    // How you would like to style the map.
    scrollwheel: false,
    styles: [{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"simplified"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"hue":"#f49935"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"hue":"#fad959"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"simplified"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"hue":"#a1cdfc"},{"saturation":30},{"lightness":49}]}]
  };

  // Get the HTML DOM element that will contain your map
  var mapElement = document.getElementById('map');

  if (!mapElement) {
    return;
  }

  // Create a Google Map using the element and the options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  var addresses = ['China Medical University Library', 'Japan', 'San Jose', 'Brooklyn', 'india', 'Egypt'];

  for (var x = 0; x < addresses.length; x += 1) {
    $.getJSON(`http://maps.googleapis.com/maps/api/geocode/json?address=${addresses[x]}`, null, function (data) {
      if (data.status !== 'OK') {
        return;
      }

      var p = data.results[0].geometry.location;
      var latlng = new google.maps.LatLng(p.lat, p.lng);

      var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        //icon: 'images/location-pin.png',
      });

      // To add the marker to the map, call `setMap()`
      marker.setMap(map);
    });
  }
}

google.maps.event.addDomListener(window, 'load', init);