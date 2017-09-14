angular.module("sproFinder").controller("searchCtrl", function($scope, searchSrv){

// console.log("hello")
//     var client_secret = 'client_secret=xExoQBd9GdBfY32NmpBDB4U7uQfUgnBACihKqk6CXBNbdOEynYvWUeelUPLfQzIp';
//     var client_id = 'client_id=2pbGuDJrgCyIj-4m_K0Obw';
//     var access_token = 'Bearer l8OuFxmqEpb04RASl9A0aIDdi3Yd68ONIolPl39iLOvxAHGmlDEjKTNsxEry_QOnMqQnud1jwKc8cfwgRZBSXind9SmzsZO4h-5Cm68gf7CcO0RQBNcB1Vp3eZK5WXYx';
//
//     this.getSomething = function(zip, term) {
//
//       return $http.post('http://dogcompanydtx.com/api/proxyServer', {
//         base_url: 'https://api.yelp.com/v3/businesses/search?',
//         query_string:
//           client_secret + '&' + client_id + '&location=' + zip + '&term=' + term,
//         access_token: access_token
//       });
//     };
//
//
//     this.getSomething().then(function(response){
//     console.log(response);


  //  var results = response.data.businesses;
   //
  //  for(var i = 0; i < results.length; i++){
   //
  //     var obj = {
  //        Name: results[i].name,
  //        Image: results[i].image_url,
  //        Phone: results[i].display_phone,
  //        Rating: results[i].rating,
  //        Locations: results[i].location.address1
  //      }
  //      console.log(obj)
  $scope.getSomething=function(searchZip, searchTerm) {

    searchSrv.getSomething(searchZip, searchTerm).then(function(response){
      console.log(response.data.businesses)
      console.log(response)
      console.log(response.data.businesses[0])
      console.log(response.data.businesses[0].rating)
      // console.log(responsse.data.businesses[0].name)
      // console.log(response.data.businesses[1])
      // console.log(response.data.businesses[2])
      // $scope.name = response.data.businesses[0].name;
      // $scope.phone = response.data.businesses[0].display_phone;
      // $scope.rating = response.data.businesses[0].rating;
      // $scope.photo = response.data.businesses[0].image_url;

      $scope.cafes = response.data.businesses;
      console.log(response.data.businesses[0].image_url);
    

      // $scope.zip =
    })
  }


})
