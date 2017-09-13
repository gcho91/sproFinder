angular.module("sproFinder").controller("nearmeCtrl", function($scope) {



  var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: new google.maps.LatLng(32.7777, -96)
      });

      (function mapMaker(response) {
        let center = {
          lat: 32,
          lng: -96
        }
          /*this places marker on map*/
       var marker = new google.maps.Marker({
          position: center,
          map: map,
          label: 'HEREEEE'
        });
      })();

      navigator.geolocation.getCurrentPosition(function(res){
    console.log(res);
  })



})
