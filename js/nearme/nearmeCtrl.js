angular.module("sproFinder").controller("nearmeCtrl", function($scope) {
//
//
//
//   var map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 5,
//         center: new google.maps.LatLng(32.7777, -96)
//       });
//
//       (function mapMaker(response) {
//         let center = {
//           lat: 32,
//           lng: -96
//         }
//
//           /*this places marker on map*/
//        var marker = new google.maps.Marker({
//           position: center,
//           map: map,
//           label: 'HEREEEE'
//         });
//       })();
//
//       navigator.geolocation.getCurrentPosition(function(res){
//     console.log(res);
//   })
//
//
//
// })


/*DOOOOOOO NOT TOUCHHHHHHH */


// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
var infowindow;

function initMap() {
  console.log('it works');
  var devmtn = {lat: 32.77777, lng: -96.8};

  //initialize map to geolocation//


  map = new google.maps.Map(document.getElementById('map'), {
    center: devmtn,
    zoom: 16
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: devmtn,
    radius: 600,
    type: ['cafe']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name + "<br>" + "Address: " + place.vicinity);
    console.log(place)

    infowindow.open(map, this);
  });
}
initMap();


})
