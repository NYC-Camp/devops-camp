
var map;

function initialize() {

  'use strict';

  var DevOpsCampLatlng = new google.maps.LatLng(40.75011, -73.96874);

  var mapOptions = {
    zoom: 16,
    center: DevOpsCampLatlng,
    mapMaker: true
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
    position: DevOpsCampLatlng,
    title: 'The United Nations'
  });

  marker.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);
