angular.module("sproFinder").controller("nearmeCtrl", function($scope) {
  new Promise(function(resolve, reject){
    navigator.geolocation.getCurrentPosition(function(position) {
      pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      resolve(pos)
    })
  }).then(function(response){
    initMap(response)
  })
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

// })


/*DOOOOOOO NOT TOUCHHHHHHH */


// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
var infowindow;
var pos;

  function initMap(geolocation) {
    // var devmtn = {lat: 32.77777, lng: -96.8};
    var infoWindow;

    map = new google.maps.Map(document.getElementById('map'), {
      center: geolocation,
      zoom: 16
    });
    // map.setCenter(geolocation);
    infoWindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    // service.nearbySearch({
    //   location: geolocation,
    //   radius: 500,
    //   keyword: 'beer'
    // }, callback);

    infoWindow.setPosition(geolocation);
    infoWindow.setContent('Current location');
    infoWindow.open(map);
    // map.setCenter(geolocation);
        infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch({
        location: geolocation,
        // set to po^s
        radius: 600,
        type: ['cafe']
      }, callback);
    }

    function callback(results, status) {
      console.log(results);
      $scope.$apply($scope.places = results)

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
        infowindow.setContent("<strong>" + place.name + "</strong>" + "<br>"  + "Address: " + place.vicinity + "<br>" + "Rating: " + place.rating);
        console.log(place)

        infowindow.open(map, this);
      });
    }


})
